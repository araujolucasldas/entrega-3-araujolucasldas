import { prisma } from "../../database/prisma"
import { carCreateBodyMock, carUpdateBodyMock } from "../__mocks__/car.mocks"
import { request } from "../utils/request"

describe("integration test: update car",()=>{
    test("should update car correctly", async ()=>{
        const car = await prisma.car.create({data: carCreateBodyMock})

        const data = await request
        .patch(`/cars/${car.id}`)
        .send(carUpdateBodyMock)
        .expect(200)
        .then((response => response.body))

        const newCar = {...car, ...carUpdateBodyMock} 

        expect(data).toStrictEqual(newCar)
    })

    test("should throw error when car is invalid", async ()=>{
        const data = await request
        .patch("/cars/6eb1d28c-2112-4549-b084-e8cbaffd1530")
        .send(carUpdateBodyMock)
        .expect(404)
        .then((response) => response.body)
  
        expect(data.message).toBe("Car not found.")
     })
})