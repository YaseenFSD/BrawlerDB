import { test } from "./helpers"
import express from "express"
const port = process.env.PORT || 3000
const app = express()

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

process.on("unhandledRejection", (reason, promise) => {
    console.log("Unhandled Rejection at: ", reason, "Promise: ", promise)
})

console.log(test)