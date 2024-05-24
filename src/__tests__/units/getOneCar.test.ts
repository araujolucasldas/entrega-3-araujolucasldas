import { prisma } from "../../database/prisma"
import { CarServices } from "../../services/car.services"
import { carCreateBodyMock } from "../__mocks__/car.mocks"
import { carDefaultExpects } from "../utils/carDefaultExpect"

describe("Unit test: get one car", ()=>{
    beforeEach(async()=>{
        await prisma.car.deleteMany()
    })

    test("getting one car works correctly", async ()=>{
        const car = await prisma.car.create({data: carCreateBodyMock})

        const carServices = new CarServices()

        const data = await carServices.findOne(car.id)

        expect(data.id).toStrictEqual(car.id)
    })
})