// import { ReactQueryDevtools } from "react-query-devtools"
// import { LeaderboardRanks } from "./pages"
import './App.css';
import { Routes } from "./Routes"

function App() {
  return (<>
    {/* <h1 style={{textAlign: "center"}}>This website is currently in production</h1> */}

    <div className="App">
      <Routes/>
      {/* <LeaderboardRanks /> */}
    </div>
    {/* <ReactQueryDevtools /> */}
  </>
  );
}

export default App;
