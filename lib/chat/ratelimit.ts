import { Ratelimit } from '@upstash/ratelimit'
import { kv } from '@vercel/kv'
import { redirect } from 'next/navigation'
import { headers } from 'next/headers'
import { Redis } from "@upstash/redis"

const rediss = new Redis({
  url: 'https://sincere-monarch-34096.upstash.io',
  token: 'AYUwAAIjcDEwZjM2YWRlMzljN2Q0ZDBlODUwOTQ3NGU0OTgwODU2MHAxMA',
})

const geminiRatelimit = new Ratelimit({
  redis: rediss.fromEnv(),
  limiter: Ratelimit.slidingWindow(60, '1 m'),
  analytics: true,
  prefix: 'gemini_ratelimit'
})

function getIP() {
  return headers().get('x-real-ip') ?? 'unknown'
}

export async function rateLimit() {
  const limit = await geminiRatelimit.limit(getIP())
  if (!limit.success) {
    redirect('/waiting-room')
  }
}
