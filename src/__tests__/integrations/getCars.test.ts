import { prisma } from "../../database/prisma"
import { carCreateBodyListMock } from "../__mocks__/car.mocks"
import { carDefaultExpects } from "../utils/carDefaultExpect"
import { request } from "../utils/request"

describe("integration test: get many cars",()=>{
    test("should get many cars correctly", async ()=>{
     await prisma.car.createMany({data: carCreateBodyListMock})

     const data =  await request
     .get("/cars")
     .expect(200)
     .then(response => response.body)
     
     expect(data).toHaveLength(2)
     expect(data[0].id).toBeDefined
     carDefaultExpects(data[0], carCreateBodyListMock[0])

     expect(data[1].id).toBeDefined
     carDefaultExpects(data[1], carCreateBodyListMock[1])
 })
})