import React from 'react';
import './App.css';
import BottomBar from "./components/BottomBar";
import Home from "./pages/Home";
import Stats from "./pages/Stats/Stats";
import Discover from "./pages/Discover";
import Mine from "./pages/Mine";
import Details from "./pages/Stats/Details";

const {Route, Switch, MemoryRouter} = require('react-router-dom');

function App() {
    return (<MemoryRouter initialEntries={['/home']}>
        <div className="app">
            <div className="appBody">
                <Switch>
                    <Route exact path='/stats/details' component={Details} />

                    <Route path='/stats' component={Stats} />

                    <Route path='/home' component={Home} />

                    <Route path='/discover' component={Discover} />

                    <Route path='/mine' component={Mine} />

                </Switch>
            </div>
            <div className="appBottom">
                <BottomBar />
            </div>
        </div>
    </MemoryRouter>)
}

export default App;
