import "./LeaderBoardFilter.css"
import {useHistory} from "react-router-dom"

export const LeaderBoardFilter = ({region, brackets, page}) => {
    const history = useHistory()
    
    const setRegion = (newRegion) => {
        history.replace(`/${brackets}/${newRegion}/${page}`)
    }


    return (<div className="LeaderBoardFilter">
        <div className="region-filter">
        <span onClick={() => setRegion("all")} className={`region filter-button ${region === "all" ? "current-filter" : ""}`}>All</span>
        <span onClick={() => setRegion("us-e")} className={`region filter-button ${region === "us-e" ? "current-filter" : ""}`}>US-E</span>
        <span onClick={() => setRegion("us-w")} className={`region filter-button ${region === "us-w" ? "current-filter" : ""}`}>US-W</span>
        <span onClick={() => setRegion("eu")} className={`region filter-button ${region === "eu" ? "current-filter" : ""}`}>EU</span>
        <span onClick={() => setRegion("brz")} className={`region filter-button ${region === "brz" ? "current-filter" : ""}`}>BRZ</span>
        <span onClick={() => setRegion("sea")} className={`region filter-button ${region === "sea" ? "current-filter" : ""}`}>SEA</span>
        <span onClick={() => setRegion("aus")} className={`region filter-button ${region === "aus" ? "current-filter" : ""}`}>AUS</span>

        </div>
        <div className="bracket-filter">
            {/* <span onClick={() => setBrackets("1v1")} className={`bracket filter-button ${brackets === "1v1" ? "current-filter": ""}`}>1v1</span> */}
            {/* //Todo for the 2v2 leaderboard: fetch for the specific names from the ID's if more than 1 plus is in the team name. If there is only one, then split the teamname */}
            {/* <span onClick={() => setBrackets("2v2")} className={`bracket filter-button ${brackets === "2v2" ? "current-filter": ""}`}>2v2</span> */}

        </div>
    </div>)
}