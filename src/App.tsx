import React from 'react';
import './App.css';
import BottomBar from "./BottomBar";
import Home from "./Home";
import Stats from "./Stats";
import Discover from "./Discover";
import Mine from "./Mine";

const {Route, Switch, MemoryRouter} = require('react-router-dom');

function App() {
    return (<MemoryRouter initialEntries={['/home']}>
        <div className="app">
            <div className="appBody">
                <Switch>
                    <Route exact path='/home'>
                        <Home/>
                    </Route>
                    <Route exact path='/stats'>
                        <Stats/>
                    </Route>
                    <Route exact path='/discover'>
                        <Discover/>
                    </Route>
                    <Route exact path='/mine'>
                        <Mine/>
                    </Route>
                </Switch>
            </div>
            <div className="appBottom">
                <BottomBar/>
            </div>
        </div>
    </MemoryRouter>)
}

export default App;
