import axios from "axios"


const axiosInstance = axios.create({
    baseURL: `http://localhost:${process.env.REACT_APP_BACKEND_PORT}`
})

export const getRanks = async(key, brackets, region, page) => {
    // const ranks = axiosInstance.get(`rankings/${brackets}/${region}/${page}?api_key=${process.env.REACT_APP_API_KEY}`)
    const ranks = await axiosInstance.get(`/api/rankings/${brackets}/${region}/${page}`)
   return ranks
}