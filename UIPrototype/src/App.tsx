import React from 'react';
import './App.css';
import BottomBar from "./components/BottomBar";
import Home from "./pages/Home/Home";
import Stats from "./pages/Stats/Stats";
import Discover from "./pages/Discover/Discover";
import Mine from "./pages/Mine/Mine";
import Details from "./pages/Stats/Details";
import Record from "./pages/Home/Record";
import {useLocation, Route, Switch} from 'react-router-dom'

function App() {
    const location = useLocation();

    return (
        <div className="app">
            <div className="app_body">
                <Switch>
                    <Route exact path='/home/record' component={Record} />

                    <Route exact path='/stats/details' component={Details}/>

                    <Route path='/stats' component={Stats}/>

                    <Route path='/home' component={Home}/>

                    <Route path='/discover' component={Discover}/>

                    <Route path='/mine' component={Mine}/>

                </Switch>
            </div>
            {!(location.pathname === '/stats/details') &&
                !(location.pathname === '/home/record') &&
            <div className="app_bottom">
                <BottomBar/>
            </div>}
        </div>
    )
}

export default App;
