import React from 'react'
import './App.css'
import {BaseLayout} from "./layouts";
import {Home} from "./pages/home";
import {Route, Switch, useHistory, Redirect} from "react-router-dom";
import {MovieDetails} from "./pages/movie-details";

function App() {
    const history = useHistory();

    return (
        <div>
            <BaseLayout>
                <Switch>
                    <Route path="/" exact>
                        <Home/>
                    </Route>


                    <Route path="/movie/:id">
                        <MovieDetails/>
                    </Route>

                    {/*<Redirect to="/"/>*/}


                    <Route>
                        <h1>PAGE NOT FOUND
                            <button onClick={() => history.push('/')}>
                                go home
                            </button>
                        </h1>
                    </Route>
                </Switch>
            </BaseLayout>
        </div>
    );
}

export default App;
