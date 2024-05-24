export interface ICar{
    id: string
    name: string
    description?: string | null
    brand: string
    year: number
    km: number
}

export type TCreateCarBody = Omit<ICar, "id">

export type TUpdateCarBody = Partial<TCreateCarBody>