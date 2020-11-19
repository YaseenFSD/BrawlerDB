import { getRanks } from "../../api"
import { usePaginatedQuery, useQuery } from "react-query"
import { useEffect, useState } from "react"
import { cleanString } from "../../helpers"
import "./LeaderboardRanks.css";
import PrevAndNext from "./PrevAndNext"



export const LeaderboardRanks = () => {
    const [page, setPage] = useState(1)
    const [brackets, setBrackets] = useState("1v1")
    const [region, setRegion] = useState("all")
    const [players, setPlayers] = useState([])
    const { isLoading, isError, data, error, isFetching } = usePaginatedQuery(["ranks", brackets, region, page], getRanks)
    // Todo make an onSuccess instead of useEffect
    useEffect(() => {
        if (data) {
            setPlayers(data.data)
        }
    }, [data])

    if (isError) {
        return <span>Error: {error.message}</span>
    }
    if (isLoading) {
        return <div>Loading...</div>
    }

    const nextPage = () => {
        setPage((page) => {
            return page + 1
        })
    }

    const prevPage = () => {
        setPage((page) => {
            return page - 1
        })
    }

    //Todo use a loading component where necessary
    return (<div>
        <div className="nav-page">
            <div className="nav-page-buttons-and-num">
                <div className="page-num"> Page:{page} </div>
                <PrevAndNext nextPage={nextPage} prevPage={prevPage} page={page} />
                {isFetching ? <div style={{ position: "absolute" }}> Fetching...</div> : null}
            </div>

        </div>


        <table>

            <tbody>
                {/* <li>rank: 1 player: DekonTheCreator Current Elo: 4000 </li> */}
                {/* //Todo make a player component */}
                <tr>
                    <th>Rank
                </th>
                    <th>
                        Name
                </th>
                    <th>
                        Rating
                </th>
                {/* </tr>
                {page === 1 ? <>
                    <td>1</td>
                    <td>DekonTheCreator</td>
                    <td>4000</td> </> : null}
                <tr> */}



                </tr>
                {/* //Todo: Have the id be passed into a onClick function on the playername  */}
                {players.map((player) => {
                    // console.log(typeof player.rank)
                    return <tr key={player.brawlhalla_id}>
                        <td>{player.rank}</td>
                        <td>{cleanString(player.name)}</td> 
                        <td>{player.rating}</td>
                    </tr>
                })}
            </tbody>
        </table>


        <div className="nav-page-bottom">
            <div className="nav-page-buttons-and-num">

                <PrevAndNext nextPage={nextPage} prevPage={prevPage} page={page} />
                <div className="page-num"> Page:{page} </div>
            </div>

        </div>


    </div>)
}