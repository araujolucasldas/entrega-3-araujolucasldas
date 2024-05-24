import { prisma } from "../database/prisma";
import { TCar, TCarCreate, TCarUpdate } from "../schemas/car.schema";

export class CarServices{
    async create(body: TCarCreate): Promise<TCar>{
        const data = await prisma.car.create({data: body})

        return data
    }

    async findMany(): Promise<TCar[]>{
        const data = await prisma.car.findMany()

        return data
    }

    async findOne(id: string): Promise<TCar>{
        const data = await prisma.car.findFirst({where: {id}})

        return data as TCar
    }

    async update(id: string, body: TCarUpdate){
        const data = await prisma.car.update({where: {id}, data: body})

        return data
    }

    async delete(id: string){
        await prisma.car.delete({where: {id}})
    }
}