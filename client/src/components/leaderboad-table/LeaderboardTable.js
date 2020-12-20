import { cleanString } from "../../helpers"
import { getPlayerName } from "../../api"

export const LeaderboardTable = ({ players, brackets }) => {


    const splitTeamNames = (teamname, playerOneId, playerTwoId) => {
        let players = teamname.split("+")
        // * This is just in case one of the players has a '+' symbol in their name
        if (players.length === 2) {
            return players
        } else {
            const playerOne = getPlayerName(playerOneId)
            const playerTwo = getPlayerName(playerTwoId)
            return [playerOne, playerTwo]
        }
    }

    if (players.length === 0) {
        return <div className="no-players-message">
            There are no players on this page

        </div>
    }

    if (brackets === "2v2") {
        // { console.log(players) }
        return (<table>
            <tbody>


                <tr>
                    <th>Rank</th> <th>Region</th> <th>Player 1</th> <th>Player 2</th> <th>Rating</th> <th>Tier</th> <th>Wins</th> <th>Losses</th>
                </tr>
                {players.map((team) => {
                    const [playerOne, playerTwo] = splitTeamNames(team.teamname, team.brawlhalla_id_one, team.brawlhalla_id_two)
                    return <tr key={team.brawlhalla_id_one + team.brawlhalla_id_two}>
                        <td>{team.rank}</td>
                        <td>{team.region}</td>
                        <td>{cleanString(playerOne)}</td>
                        <td>{cleanString(playerTwo)}</td>
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