import { getRanks } from "../../api"
import { usePaginatedQuery, useQuery } from "react-query"
import { useEffect, useRef, useState } from "react"
import { cleanString } from "../../helpers"
import "./LeaderboardRanks.css";
import PrevAndNext from "./PrevAndNext"
import { LeaderboardTable } from "../leaderboad-table"



export const LeaderboardRanks = () => {
    const [page, setPage] = useState(1)
    const [brackets, setBrackets] = useState("1v1")
    const [region, setRegion] = useState("all")
    const [players, setPlayers] = useState([])
    const { isLoading, isError, data, error, isFetching } = usePaginatedQuery(["ranks", brackets, region, page], getRanks)
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

        <LeaderboardTable players={players}/>


        <div className="nav-page-bottom">
            <div className="nav-page-buttons-and-num">

                <PrevAndNext nextPage={nextPage} prevPage={prevPage} page={page} />
                <div className="page-num"> Page:{page} </div>
            </div>

        </div>


    </div>)
}