import { z } from 'zod'

export const messageValidator = z.object({
  id: z.string(),
  senderId: z.string(),
  name: z.string() || z.undefined() || z.null(),
  image: z.string() || z.undefined() || z.null(),
  text: z.string(),
  timestamp: z.number(),
})

export const messageArrayValidator = z.array(messageValidator)

export type MessageWithUser = z.infer<typeof messageValidator>