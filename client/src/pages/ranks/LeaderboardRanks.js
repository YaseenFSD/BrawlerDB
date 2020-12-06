import { getRanks } from "../../api"
import { usePaginatedQuery } from "react-query"
import { useState } from "react"
import PrevAndNext from "../../components/prev-and-next/PrevAndNext"
import { LeaderboardTable } from "../../components/leaderboad-table"
import { LeaderBoardFilter } from "../../components"
import "./LeaderboardRanks.css";



export const LeaderboardRanks = () => {
    const [page, setPage] = useState(1)
    const [brackets, setBrackets] = useState("1v1")
    const [region, setRegion] = useState("all")
    const { isLoading, isError, data, error, isFetching } = usePaginatedQuery(["ranks", brackets, region, page], getRanks)

    if (isError) {
        return <div className="error-message">Error: {error.message}</div>
    }
    if (isLoading) {
        return <div className="loading-message">Loading...</div>
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
    return (<div className="LeaderboardRanks">
        <div className="nav-page">
            <div className="nav-page-buttons-and-num">
                <div className="page-num"> Page:{page} </div>
                <PrevAndNext nextPage={nextPage} prevPage={prevPage} page={page} />
                {isFetching ? <div> Fetching...</div> : <div style={{height: "1.2em"}}></div>}
            </div>
        </div>
        <LeaderBoardFilter region={region} setRegion={setRegion} brackets={brackets} setBrackets={setBrackets}/>

        <LeaderboardTable brackets={brackets} players={data.data} />


        <div className="nav-page-bottom">
            <div className="nav-page-buttons-and-num">

                <PrevAndNext nextPage={nextPage} prevPage={prevPage} page={page} />
                <div className="page-num"> Page:{page} </div>
            </div>

        </div>


    </div>)
}