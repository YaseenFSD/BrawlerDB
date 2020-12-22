import axios from "axios"


// const axiosInstance = axios.create({
//     baseURL: `http://localhost:5000`
// })

export const getRanks = async (key, brackets, region, page, name) => {
    let ranks
    if (name) {
        ranks = await axios.get(`/api/rankings/${brackets}/${region}/${page}?name=${name}`)
    } else {
        ranks = await axios.get(`/api/rankings/${brackets}/${region}/${page}`)
    }
    return ranks
}