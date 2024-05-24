import { prisma } from "../../database/prisma"
import { carCreateBodyMock } from "../__mocks__/car.mocks"
import { request } from "../utils/request"

describe("integration test: get one car",()=>{
    test("should get one car correctly", async ()=>{
     const car = await prisma.car.create({data: carCreateBodyMock})

     const data =  await request
     .get(`/cars/${car.id}`)
     .expect(200)
     .then(response => response.body)
     
     expect(data.id).toStrictEqual(car.id)
    })

    test("should throw error when car is invalid", async ()=>{
        const data = await request
        .get("/cars/6eb1d28c-2112-4549-b084-e8cbaffd1530")
        .expect(404)
        .then((response) => response.body)
  
        expect(data.message).toBe("Car not found.")
     })
})