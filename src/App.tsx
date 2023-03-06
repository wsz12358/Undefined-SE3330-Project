import React from 'react';
import './App.css';
import BottomBar from "./components/BottomBar";
import Home from "./pages/Home";
import Stats from "./pages/Stats/Stats";
import Discover from "./pages/Discover/Discover";
import Mine from "./pages/Mine";
import Details from "./pages/Stats/Details";
import {useLocation, Route, Switch} from 'react-router-dom'

function App() {
    const location = useLocation();
    console.log(location.pathname)

    return (
        <div className="app">
            <div className="appBody">
                <Switch>
                    <Route exact path='/stats/details' component={Details}/>

                    <Route path='/stats' component={Stats}/>

                    <Route path='/home' component={Home}/>

                    <Route path='/discover' component={Discover}/>

                    <Route path='/mine' component={Mine}/>

                </Switch>
            </div>
            {!(location.pathname === '/stats/details') &&
            <div className="appBottom">
                <BottomBar/>
            </div>}
        </div>
    )
}

export default App;
