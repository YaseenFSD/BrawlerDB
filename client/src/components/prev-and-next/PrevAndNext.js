import React from "react"


const PrevAndNext = ({ prevPage, nextPage, page }) => {
    return (<div className="nav-page-buttons-container">
        <button disabled={page === 1} className={`prev-page nav-page-button`} onClick={prevPage}>Previous</button>
        <button className={`next-page nav-page-button`} onClick={nextPage}>Next</button>
    </div>)
}

export default PrevAndNext