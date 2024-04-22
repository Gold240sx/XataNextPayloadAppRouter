import { Redis } from "@upstash/redis"
import { Ratelimit } from "@upstash/ratelimit"

export const redis = new Redis({
	url: `${process.env.NEXT_UPSTASH_REDIS_URL}`,
	token: `${process.env.NEXT_UPSTASH_REDIS_TOKEN}`,
})

export const rateLimiter = new Ratelimit({
	redis,
	limiter: Ratelimit.slidingWindow(4, "30 s"),
	prefix: "@upstash/ratelimit",
	analytics: true,
})
