import { useState, useRef } from "react"
import { getRanks } from "../../api"
import { usePaginatedQuery } from "react-query"
import PrevAndNext from "../../components/prev-and-next/PrevAndNext"
import { LeaderboardTable } from "../../components/leaderboad-table"
import { LeaderBoardFilter } from "../../components"
import { useHistory} from "react-router-dom"
import "./LeaderboardRanks.css";



export const LeaderboardRanks = ({ match: { params }, location: { search: urlQuery } }) => {
    const [search, setSearch] = useState("")
    const searchInput = useRef(null)
    const searchName = urlQuery.replace("?name=", "")
    const { brackets, region, page } = params
    const { isLoading, isError, data, error, isFetching } = usePaginatedQuery(["ranks", brackets, region, page, searchName], getRanks)
    const history = useHistory()
    const handleSearchPlayer = (e) => {
        e.preventDefault()
        history.replace(`/1v1/${region}/1?name=${search.replace(" ", "+")}`)
        setSearch("")
        searchInput.current.value = ""
        // console.log(search, searchInput.current.value)
    }

    const resetSearch = (e) => {
        history.replace(`/1v1/${region}/1`)
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
                <PrevAndNext page={page} searchName={searchName}/>
                {isFetching ? <div> Fetching...</div> : <div style={{ height: "1.2em" }}></div>}
            </div>
            {brackets !== "2v2" ? <form onSubmit={handleSearchPlayer}>
                <input ref={searchInput} onChange={(e) => setSearch(e.target.value)} placeholder="Search player" className="search-bar"></input>
                {urlQuery ? <button onClick={resetSearch}>Back</button> : null}
            </form> : <span className="search-bar">Searching is currently unavailable for 2v2</span>
            }
        </div>

        <LeaderBoardFilter region={region} brackets={brackets} page={page} searchName={searchName} />

        <LeaderboardTable brackets={brackets} players={data.data} page={page} />


        <div className="nav-page-bottom">
            <div className="nav-page-buttons-and-num">

                <PrevAndNext page={page} searchName={searchName} />
                <div className="page-num"> Page:{page} </div>
            </div>

        </div>


    </div>)

    // //Todo use a loading component where necessary

}