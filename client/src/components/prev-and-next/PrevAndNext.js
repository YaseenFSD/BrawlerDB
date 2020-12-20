import React from "react"
import { useHistory } from "react-router-dom"

const PrevAndNext = ({ page }) => {
    const history = useHistory()

    const nextPage = () => {
            history.replace(`${Number(page) + 1}`)
    }

    const prevPage = () => {
            history.replace(`${Number(page) - 1}`)
    }
    return (<div className="nav-page-buttons-container">
        <button disabled={page === "1"} className={`prev-page nav-page-button`} onClick={prevPage}>Previous</button>
        <button className={`next-page nav-page-button`} onClick={nextPage}>Next</button>
    </div>)
}

export default PrevAndNext