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
    baseURL: "https://api.brawlhalla.com"
})

app.get("/api/rankings/:brackets/:region/:page?", async (req, res) => {
    try {
        // console.log(req.query)
        let data
        if (req.query.name){
            data = await axiosInstance.get(`/rankings/${req.params.brackets}/${req.params.region}/${req.params.page}?name=${req.query.name}&api_key=${process.env.API_KEY}`)
        } else {
            data = await axiosInstance.get(`/rankings/${req.params.brackets}/${req.params.region}/${req.params.page}?api_key=${process.env.API_KEY}`)
        }
        if (req.params.brackets === "2v2") {
            // * This is just incase a player has a "+" in their name, The only way
            // * to get the name if that is the case is to fetch using the ID provided in the api
            // * response
            for(let i=0; i<data.data.length; i++){
                let teamData = data.data[i]
                let playerOne
                let playerTwo
                let team = teamData.teamname.split("+")
                if (team.length !== 2) {
                    const playerOneData = await axiosInstance.get(`/player/${teamData.brawlhalla_id_one}/ranked?api_key=${process.env.API_KEY}`)
                    const playerTwoData = await axiosInstance.get(`/player/${teamData.brawlhalla_id_two}/ranked?api_key=${process.env.API_KEY}`)
                    playerOne = playerOneData.data.name
                    playerTwo = playerTwoData.data.name
                }
                 else {
                    [playerOne, playerTwo] = team
                }
                teamData.player_one = playerOne
                teamData.player_two = playerTwo
            }
            res.send(data.data)
        }else {
            res.send(data.data)
        }
        
    } catch (error) {
        res.send(error)
    }
})

// app.get("/api/rankings/1v1/:region/:page?", async (req, res) => {
//     console.log(req.query)
//     const data = await axiosInstance.get(`/rankings/1v1/${req.params.region}/${req.params.page}?name=${req.query.name}&api_key=${process.env.API_KEY}`)
//     console.log(data)
//     res.send(data)
// })

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