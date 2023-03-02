import React from 'react';
import './App.css';
import BottomBar from "./components/BottomBar";
import Home from "./pages/Home";
import Stats from "./pages/Stats";
import Discover from "./pages/Discover";
import Mine from "./pages/Mine";

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
                <BottomBar />
            </div>
        </div>
    </MemoryRouter>)
}

export default App;
