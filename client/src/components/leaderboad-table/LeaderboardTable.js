import { cleanString } from "../../helpers"

export const LeaderboardTable = ({players, brackets}) => {
    const splitTeamNames = (teamname) => {
        // let players = teamname.split("+")
        // if (players.length === 2) {
        //     return players
        // } else {

        // }
    }
    
    if (players.length === 0) {
        return <div className="no-players-message">
            There are no players on this page

        </div>
    }
    
    if (brackets === "2v2") {
        {console.log(players)}
        return (
            <tr>
                <th>Rank</th> <th>Region</th> <th>Player One</th> <th>Player Two</th>
            </tr>
        )
    }
    return (<table>
        <tbody >
            {/* //Todo make a player component */}
            <tr>
                <th>Rank</th> <th> Region</th> <th>Name</th> <th>Rating</th> <th>Tier</th> <th>W-L</th> <th>Win %</th>
            </tr>
            {/* //Todo: Have the id be passed into a onClick function on the playername  */}
            {/* {console.log(players.length !== 0)} */}
            {players.map((player) => {
                return <tr key={player.brawlhalla_id} playerId={player.brawlhalla_id}>
                    <td>{player.rank}</td>
                    <td>{player.region}</td>
                    <td>{cleanString(player.name)}</td>
                    <td>{player.rating}</td>
                    <td>{player.tier}</td>
                    <td>{player.wins}-{player.games - player.wins}</td>
                    <td>{Math.round((player.wins / player.games) * 100)}%</td>
                </tr>
            })}
        </tbody>
    </table>)
}