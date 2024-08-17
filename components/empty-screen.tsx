import { ExternalLink } from '@/components/external-link'

export function EmptyScreen() {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div  style={{backgroundColor: '#90D5FF'}} className="flex flex-col gap-2 rounded-2xl bg-zinc-50 sm:p-8 p-4 text-sm sm:text-base">
        <h1 className="text-2xl sm:text-3xl tracking-tight font-semibold max-w-fit inline-block">
          Manning's Nameless Chatbot
        </h1>
        <p className="leading-normal text-zinc-900">
          This is an AI chatbot built powerd the Google Gemini API.
        </p>
        <p className="leading-normal text-zinc-900">
          It serves as a 24/7 cutomer service agent taylor made to assist with any inquires about The Manning's School.
        </p>
        <p className="leading-normal text-zinc-900">
          Please contact XXX-XXXX to report bugs.
        </p>
      </div>
    </div>
  )
}
