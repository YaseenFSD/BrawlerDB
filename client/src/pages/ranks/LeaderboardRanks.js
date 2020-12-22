import { useState } from "react"
import { getRanks } from "../../api"
import { usePaginatedQuery } from "react-query"
import PrevAndNext from "../../components/prev-and-next/PrevAndNext"
import { LeaderboardTable } from "../../components/leaderboad-table"
import { LeaderBoardFilter } from "../../components"
import "./LeaderboardRanks.css";



export const LeaderboardRanks = ({ match: { params } }) => {
    const [search, setSearch] = useState("")
    const { brackets, region, page } = params
    const { isLoading, isError, data, error, isFetching } = usePaginatedQuery(["ranks", brackets, region, page], getRanks)

    const handleSearchPlayer = (e) => {
        e.preventDefault()
        // Todo use api call here to search player
    }

    if (isError) {
        return <div className="error-message">Error: {error.message}</div>
    }
    if (isLoading) {
        return <div className="loading-message">Loading...</div>
    }

    return (<div className="LeaderboardRanks">
        <div className="nav-page">
            <div className="nav-page-buttons-and-num">
                <div className="page-num"> Page:{page} </div>
                <PrevAndNext page={page} />
                {isFetching ? <div> Fetching...</div> : <div style={{ height: "1.2em" }}></div>}
            </div>
            <form onSubmit={handleSearchPlayer}>
                <input onChange={(e) => setSearch(e.target.value)} placeholder="Search player" className="search-bar"></input>
            </form>
        </div>

        <LeaderBoardFilter region={region} brackets={brackets} page={page} />

        <LeaderboardTable brackets={brackets} players={data.data} page={page} />


        <div className="nav-page-bottom">
            <div className="nav-page-buttons-and-num">

                <PrevAndNext page={page} />
                <div className="page-num"> Page:{page} </div>
            </div>

        </div>


    </div>)

    // //Todo use a loading component where necessary

}