import { test } from "./helpers"
import express from "express"
import axios from "axios"
import cors from "cors"
import path from "path"

const port = process.env.PORT || 3000
const app = express()
app.use(express.json())
app.use(cors())

const axiosInstance = axios.create({
    baseURL: "https://api.brawlhalla.com/"
})

app.get("/api/rankings/:brackets/:region/:page", async (req, res) => {
    try {
        const data = await axios.get(`https://api.brawlhalla.com/rankings/${req.params.brackets}/${req.params.region}/${req.params.page}?api_key=${process.env.API_KEY}`)
        res.send(data.data)
    } catch (error) {
        res.send(error)
    }
})

if (process.env.NODE_ENV === "production") {
    app.use(express.static('client/build'))
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
    })
}


app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

process.on("unhandledRejection", (reason, promise) => {
    console.log("Unhandled Rejection at: ", reason, "Promise: ", promise)
})

console.log(test)