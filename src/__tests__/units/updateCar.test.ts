import { prisma } from "../../database/prisma"
import { CarServices } from "../../services/car.services"
import { carCreateBodyMock, carUpdateBodyMock } from "../__mocks__/car.mocks"

describe("Unit test: update car", () =>{
    beforeEach(async()=>{
        await prisma.car.deleteMany()
    })

    test("update car works correctly", async()=>{
        const car = await prisma.car.create({data: carCreateBodyMock})

        const carServices = new CarServices()

        const data = await carServices.update(car.id, carUpdateBodyMock)

        const newCarExpect = {...car, ...carUpdateBodyMock}

        expect(data).toStrictEqual(newCarExpect)
    })
})