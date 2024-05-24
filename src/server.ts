import { app } from "./app"

const PORT = 3000 || process.env.PORT

app.listen(PORT, ()=>{
    console.log(`API successfully started at port ${PORT}`)
})