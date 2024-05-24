import { Router } from "express";
import { CarControllers } from "../controllers/car.controllers";
import { ValidateBody } from "../middlewares/validateBody.middleware";
import { carCreateBodySchema, carUpdateBodySchema } from "../schemas/car.schema";
import { IsCarIdValid } from "../middlewares/isCarIdValid.middleware";

export const carRouter = Router()

const carControllers = new CarControllers()

carRouter.post("/", ValidateBody.execute(carCreateBodySchema), carControllers.create)

carRouter.get("/", carControllers.findMany)

carRouter.get("/:id", IsCarIdValid.execute, carControllers.findOne)

carRouter.patch("/:id", ValidateBody.execute(carUpdateBodySchema), IsCarIdValid.execute, carControllers.update)

carRouter.delete("/:id", IsCarIdValid.execute, carControllers.delete)
