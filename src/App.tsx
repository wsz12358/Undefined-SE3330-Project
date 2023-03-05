import React from 'react';
import './App.css';
import BottomBar from "./components/BottomBar";
import Home from "./pages/Home";
import Stats from "./pages/Stats/Stats";
import Discover from "./pages/Discover";
import Mine from "./pages/Mine";

const {Route, Switch, MemoryRouter} = require('react-router-dom');

function App() {
    return (<MemoryRouter initialEntries={['/home']}>
        <div className="app">
            <div className="appBody">
                <Switch>
                    <Route path='/stats' component={Stats}>
                    </Route>
                    <Route path='/home' component={Home}>
                    </Route>
                    <Route path='/discover' component={Discover}>
                    </Route>
                    <Route path='/mine' component={Mine}>
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
