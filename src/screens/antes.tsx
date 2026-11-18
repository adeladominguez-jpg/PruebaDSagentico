import {
  IconAlertTriangle,
  IconMessageChatbot,
  IconPlus,
  IconSend,
} from '@tabler/icons-react'
import { useEffect, useRef, useState } from 'react'
import { Badge } from '../components/Badge'
import { Button } from '../components/Button'
import { Card } from '../components/Card'
import { Input } from '../components/Input'

// Pantalla del asistente de Faro: la persona cuenta cómo se siente y el
// asistente le responde. Las respuestas son de ejemplo: todavía no hay un
// agente de IA conectado.

type Message = {
  id: string
  author: 'persona' | 'asistente'
  text: string
  time: string
}

// Conversación con la que se abre la pantalla, para ver el historial.
const exampleHistory: Message[] = [
  {
    id: 'ejemplo-1',
    author: 'persona',
    text: 'Esta semana he dormido fatal y me noto sin energía.',
    time: '09:12',
  },
  {
    id: 'ejemplo-2',
    author: 'asistente',
    text: 'Siento que estés pasando una semana así; dormir mal se nota en todo. ¿Ha pasado algo estos días que te quite el sueño?',
    time: '09:12',
  },
  {
    id: 'ejemplo-3',
    author: 'persona',
    text: 'Tengo mucho trabajo y me cuesta desconectar por la noche.',
    time: '09:13',
  },
  {
    id: 'ejemplo-4',
    author: 'asistente',
    text: 'Es muy habitual. A muchas personas les ayuda dejar el móvil un rato antes de dormir, acostarse siempre a la misma hora y apuntar lo pendiente para sacarlo de la cabeza. Si dura más de unas semanas, coméntalo en tu próxima revisión de medicina general.',
    time: '09:13',
  },
]

// Ideas para empezar cuando la conversación está vacía.
const suggestions = [
  'Hoy me noto sin energía',
  'Me agobian las citas médicas',
  'Quiero hablar de cómo duermo',
  'Me duele la cabeza a menudo',
]

// Respuestas de ejemplo, por turnos.
const exampleReplies = [
  'Gracias por contármelo. ¿Desde cuándo te sientes así?',
  'Entiendo. ¿Hay algo que te haya ayudado otras veces?',
  'Tiene sentido que te afecte. Si quieres, podemos apuntarlo para que lo comentes en tu próxima cita.',
  'Gracias por compartirlo. Si en algún momento te encuentras mal de verdad, lo mejor es hablarlo con tu médico.',
]

function currentTime() {
  return new Date().toLocaleTimeString('es-ES', {
    hour: '2-digit',
    minute: '2-digit',
  })
}

export default function Asistente() {
  const [messages, setMessages] = useState<Message[]>(exampleHistory)
  const [draft, setDraft] = useState('')
  const [isReplying, setIsReplying] = useState(false)
  const replyTimer = useRef<number | undefined>(undefined)
  const listRef = useRef<HTMLDivElement>(null)

  const isEmpty = messages.length === 0

  // Baja hasta el último mensaje cada vez que llega uno nuevo.
  useEffect(() => {
    const list = listRef.current
    if (list) list.scrollTop = list.scrollHeight
  }, [messages, isReplying])

  // Si se sale de la pantalla con una respuesta pendiente, se cancela.
  useEffect(() => {
    return () => window.clearTimeout(replyTimer.current)
  }, [])

  function send(text: string) {
    const clean = text.trim()
    if (!clean || isReplying) return

    const repliesSoFar = messages.filter((m) => m.author === 'asistente').length
    const reply = exampleReplies[repliesSoFar % exampleReplies.length]

    setMessages((prev) => [
      ...prev,
      { id: crypto.randomUUID(), author: 'persona', text: clean, time: currentTime() },
    ])
    setDraft('')
    setIsReplying(true)

    replyTimer.current = window.setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { id: crypto.randomUUID(), author: 'asistente', text: reply, time: currentTime() },
      ])
      setIsReplying(false)
    }, 1200)
  }

  function startNewConversation() {
    window.clearTimeout(replyTimer.current)
    setIsReplying(false)
    setMessages([])
    setDraft('')
  }

  return (
    <main className="mx-auto flex h-full max-w-3xl flex-col">
      {/* Cabecera */}
      <header className="flex shrink-0 items-center justify-between gap-3 border-b border-slate-200 px-4 py-3">
        <div className="flex min-w-0 items-center gap-3">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-700">
            <IconMessageChatbot size={22} aria-hidden="true" />
          </span>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <h1 className="text-base font-semibold text-slate-900">Asistente</h1>
              <span className="hidden sm:block">
                <Badge variant="info" size="sm">
                  Respuestas de ejemplo
                </Badge>
              </span>
            </div>
            <p className="truncate text-sm text-slate-600">
              Cuéntame cómo te sientes
            </p>
          </div>
        </div>
        <Button
          variant="ghost"
          size="sm"
          icon={IconPlus}
          onClick={startNewConversation}
          disabled={isEmpty}
        >
          Nueva conversación
        </Button>
      </header>

      {/* Historial o estado vacío */}
      <div ref={listRef} className="flex-1 overflow-y-auto px-4 py-6">
        {isEmpty ? (
          <EmptyState onPick={send} />
        ) : (
          <div
            role="log"
            aria-label="Conversación con el asistente"
            className="flex flex-col gap-4"
          >
            {messages.map((message) => (
              <MessageBubble key={message.id} message={message} />
            ))}
            {isReplying && <TypingIndicator />}
          </div>
        )}
      </div>

      {/* Campo para escribir */}
      <div className="shrink-0 border-t border-slate-200 px-4 pt-3 pb-4">
        <form
          onSubmit={(event) => {
            event.preventDefault()
            send(draft)
          }}
          className="flex items-end gap-2"
        >
          <Input
            label="Escribe tu mensaje"
            placeholder="Por ejemplo: hoy me duele la cabeza"
            value={draft}
            onChange={(event) => setDraft(event.target.value)}
            autoComplete="off"
            className="flex-1"
          />
          <Button
            type="submit"
            icon={IconSend}
            disabled={!draft.trim() || isReplying}
          >
            Enviar
          </Button>
        </form>
        <p className="mt-2 flex items-center gap-1.5 text-xs text-slate-600">
          <IconAlertTriangle size={14} aria-hidden="true" className="shrink-0" />
          El asistente no sustituye a tu médico. Si es una urgencia, llama al 112.
        </p>
      </div>
    </main>
  )
}

function EmptyState({ onPick }: { onPick: (text: string) => void }) {
  return (
    <div className="flex min-h-full items-center justify-center">
      <Card
        className="w-full max-w-md"
        icon={IconMessageChatbot}
        title="¿Cómo te sientes hoy?"
        description="Escríbeme lo que quieras o empieza con una de estas ideas."
      >
        <div className="flex flex-wrap gap-2">
          {suggestions.map((suggestion) => (
            <Button
              key={suggestion}
              variant="secondary"
              size="sm"
              onClick={() => onPick(suggestion)}
            >
              {suggestion}
            </Button>
          ))}
        </div>
      </Card>
    </div>
  )
}

function AssistantAvatar() {
  return (
    <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-700">
      <IconMessageChatbot size={18} aria-hidden="true" />
    </span>
  )
}

function MessageBubble({ message }: { message: Message }) {
  const isPerson = message.author === 'persona'

  return (
    <div className={isPerson ? 'flex justify-end' : 'flex items-end gap-2'}>
      {!isPerson && <AssistantAvatar />}
      <div
        className={`max-w-[85%] rounded-2xl px-4 py-2.5 ${
          isPerson
            ? 'rounded-br-sm bg-teal-700 text-white'
            : 'rounded-bl-sm bg-slate-100 text-slate-900'
        }`}
      >
        <p className="text-sm whitespace-pre-wrap">
          <span className="sr-only">{isPerson ? 'Tú: ' : 'Asistente: '}</span>
          {message.text}
        </p>
        <p
          className={`mt-1 text-xs ${isPerson ? 'text-teal-100' : 'text-slate-600'}`}
        >
          <time>{message.time}</time>
        </p>
      </div>
    </div>
  )
}

function TypingIndicator() {
  return (
    <div className="flex items-end gap-2">
      <AssistantAvatar />
      <div className="rounded-2xl rounded-bl-sm bg-slate-100 px-4 py-3.5">
        <span className="sr-only">El asistente está escribiendo…</span>
        <span aria-hidden="true" className="flex gap-1">
          <span className="size-2 rounded-full bg-slate-400 motion-safe:animate-pulse" />
          <span className="size-2 rounded-full bg-slate-400 motion-safe:animate-pulse [animation-delay:150ms]" />
          <span className="size-2 rounded-full bg-slate-400 motion-safe:animate-pulse [animation-delay:300ms]" />
        </span>
      </div>
    </div>
  )
}
