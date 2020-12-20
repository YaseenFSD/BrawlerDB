import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom"
import {LeaderboardRanks} from "../pages/ranks"

export const Routes = () => {
    
    return (<BrowserRouter>
        <Switch>

            <Route path="/:brackets/:region/:page" render={(props) => <LeaderboardRanks {...props} />} />
            {/* <Route path="*">
            <Redirect to="/1v1/all/1"/>
        </Route> */}

        <Route path="*">
            <Redirect to="/1v1/all/1" />
        </Route>
        </Switch>

    </BrowserRouter>)
}