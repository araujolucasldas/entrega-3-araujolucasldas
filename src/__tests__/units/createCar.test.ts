import { prisma } from "../../database/prisma"
import { CarServices } from "../../services/car.services"
import { carCreateBodyMock } from "../__mocks__/car.mocks"
import { carDefaultExpects } from "../utils/carDefaultExpect"

describe("unit test: create car", ()=>{
    beforeEach(async ()=>{
        await prisma.car.deleteMany()
    })

    test("create car works correctly", async ()=>{
        const carServices = new CarServices()

        const data = await carServices.create(carCreateBodyMock)

        expect(data.id).toBeDefined()
        carDefaultExpects(data, carCreateBodyMock)
    })
})