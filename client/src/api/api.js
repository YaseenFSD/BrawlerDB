import axios from "axios"


// const axiosInstance = axios.create({
//     baseURL: `http://localhost:5000`
// })

export const getRanks = async (key, brackets, region, page) => {
    const ranks = await axios.get(`/api/rankings/${brackets}/${region}/${page}`)
    return ranks
}