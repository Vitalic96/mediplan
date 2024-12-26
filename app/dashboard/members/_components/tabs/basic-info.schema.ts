import { z } from 'zod'

export const basicInfoSchema = z.object({
  username: z.string().min(2, 'Username must be at least 2 characters.'),
  email: z
    .string({ required_error: 'Email is required' })
    .min(1, 'Email is required')
    .email('Invalid email'),
  memberTitle: z.string().min(2, 'Username must be at least 2 characters.'),
  number: z.string().min(2, 'Username must be at least 2 characters.'),
  gender: z.string().min(2, 'Username must be at least 2 characters.'),
  ageGroup: z.string().min(2, 'Username must be at least 2 characters.'),
})
