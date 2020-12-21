import { cleanString } from "../../helpers"

export const LeaderboardTable = ({ players, brackets}) => {

    if (brackets === "2v2") {
        if (!players[0].player_one) {
            return <div className="loading-message">Loading...</div>
        }
        return (<table>
            {console.log(players)}
            <tbody>


                <tr>
                    <th>Rank</th><th>Region</th><th>Player 1</th><th>Player 2</th><th>Rating</th><th>Tier</th><th>Wins</th><th>Losses</th>
                </tr>
                {players.map((team) => {
                    return <tr key={team.brawlhalla_id_one + team.brawlhalla_id_two}>
                        <td>{team.rank}</td>
                        <td>{team.region}</td>
                        <td>{cleanString(team.player_one)}</td>
                        <td>{cleanString(team.player_two)}</td>
                        <td>{team.rating}</td>
                        <td>{team.tier}</td>
                        <td>{team.wins}</td>
                        <td>{team.games - team.wins}</td>

                    </tr>
                })}
            </tbody>
        </table>
        )
    }
    return (<table>
        <tbody >
            {/* //Todo make a player component */}
            <tr>
                <th>Rank</th><th>Region</th><th>Name</th><th>Rating</th><th>Tier</th><th>W-L</th><th>Win %</th>
            </tr>
            {/* //Todo: Have the id be passed into a onClick function on the playername  */}
            {players.map((player) => {
                return <tr key={player.brawlhalla_id} playerid={player.brawlhalla_id}>
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