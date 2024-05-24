import { ICar, TCreateCarBody } from "../../interfaces/car.interfaces"

export const carDefaultExpects = (data: ICar, expectData: TCreateCarBody)=>{
    expect(data.name).toBe(expectData.name)
    expect(data.description).toBe(expectData.description)
    expect(data.year).toBe(expectData.year)
    expect(data.km).toBe(expectData.km)
}