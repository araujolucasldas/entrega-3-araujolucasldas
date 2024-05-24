import { prisma } from "../../database/prisma"
import { CarServices } from "../../services/car.services"
import { carCreateBodyListMock } from "../__mocks__/car.mocks"
import { carDefaultExpects } from "../utils/carDefaultExpect"

describe("Unit test: get cars", ()=>{
    beforeEach(async()=>{
        await prisma.car.deleteMany()
    })

    test("getting cars works correctly", async ()=>{
        await prisma.car.createMany({data: carCreateBodyListMock})

        const carServices = new CarServices()

        const data = await carServices.findMany()

        expect(data).toHaveLength(carCreateBodyListMock.length)
        carDefaultExpects(data[0], carCreateBodyListMock[0])
        carDefaultExpects(data[1], carCreateBodyListMock[1])
    })
})