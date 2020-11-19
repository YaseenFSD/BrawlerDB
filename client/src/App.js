import { useEffect } from "react"
import { ReactQueryDevtools } from "react-query-devtools"
import { LeaderboardRanks } from "./components"
import './App.css';
import axios from "axios";


function App() {
  return (<>
    {/* <h1 style={{textAlign: "center"}}>This website is currently in production</h1> */}
    <div className="App">
      <LeaderboardRanks />
    </div>
    {/* <ReactQueryDevtools /> */}
  </>
  );
}

export default App;
