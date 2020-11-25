import { cleanString } from "../../helpers"

export const LeaderboardTable = ({players}) => {
    return (<table>

        <tbody >
            {/* //Todo make a player component */}
            <tr>
                <th>Rank
            </th>
                <th>
                    Name
            </th>
                <th>
                    Rating
            </th>
            </tr>
            {/* //Todo: Have the id be passed into a onClick function on the playername  */}
            {players.map((player) => {
                return <tr key={player.brawlhalla_id}>
                    <td>{player.rank}</td>
                    <td>{cleanString(player.name)}</td>
                    <td>{player.rating}</td>
                </tr>
            })}
        </tbody>
    </table>)
}