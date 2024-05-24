import { z } from "zod";

export const carSchema = z.object({
    id: z.string().min(1),
    name: z.string().min(1),
    description: z.string().nullable(),
    brand: z.string().min(1),
    year: z.number(),
    km: z.number()
})

export const carCreateBodySchema = carSchema.omit({id: true})

export const carUpdateBodySchema = carCreateBodySchema.partial()

export type TCar = z.infer<typeof carSchema>

export type TCarCreate = z.infer<typeof carCreateBodySchema>

export type TCarUpdate = z.infer<typeof carUpdateBodySchema>

