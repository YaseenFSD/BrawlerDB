// import { ReactQueryDevtools } from "react-query-devtools"
// import { LeaderboardRanks } from "./pages"
import './App.css';
import twitter from "./twitter.png"
import { Routes } from "./Routes"

function App() {
  return (<>
    {/* <h1 style={{textAlign: "center"}}>This website is currently in production</h1> */}

    <div className="App">
      <Routes />
      {/* <LeaderboardRanks /> */}
      <hr />
      <footer>
        <span>
          BrawlerDB is created and owned by <a href="https://www.Twitter.com/Tuuhwix"><img className="twitter-icon" style={{width:"15px", height:"15px"}} src={twitter}/>@Tuuhwix</a> using Brawlhalla's API
          </span>
        <br/>
        Feel free to message me.
        <br/>
        BrawlerDB isn't endorsed by Blue Mammoth Games and doesn't reflect the views or opinions of Blue Mammoth Games or anyone officially involved in producing or managing Brawlhalla.
        <br/>
        Brawlhalla and Blue Mammoth Games are trademarks or registered trademarks of Blue Mammoth Games.

    </footer>
    </div>
    {/* <ReactQueryDevtools /> */}
  </>);
}

export default App;
