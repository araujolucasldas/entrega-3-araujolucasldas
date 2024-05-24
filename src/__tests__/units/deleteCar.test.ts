import { prisma } from "../../database/prisma"
import { CarServices } from "../../services/car.services"
import { carCreateBodyMock } from "../__mocks__/car.mocks"

describe("Unit test: delete car", () =>{
    beforeEach(async()=>{
        await prisma.car.deleteMany()
    })

    test("delete car works correctly", async()=>{
        const car = await prisma.car.create({data: carCreateBodyMock})

        const carServices = new CarServices()

        await carServices.delete(car.id)
    })
})