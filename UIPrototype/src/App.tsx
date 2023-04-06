import React from 'react';
import './App.css';
import BottomBar from "./components/BottomBar";
import Home from "./pages/Home/Home";
import Stats from "./pages/Stats/Stats";
import Discover from "./pages/Discover/Discover";
import Mine from "./pages/Mine/Mine";
import Details from "./pages/Stats/Details";
import Record from "./pages/Home/Record";
import Mine_Friends from "./pages/Mine/Mine_Friends";
import {useLocation, Route, Switch, useHistory} from 'react-router-dom'
import {CSSTransition, TransitionGroup} from "react-transition-group";

function App() {
    const location = useLocation();
    const action = useHistory().action;
    const anim_actions = {
        PUSH: 'forward',
        POP: 'back',
        REPLACE: 'back'
    }

    return (
        <div className="app">
            <div className="app_body">
                <TransitionGroup className="router_wrapper"
                                 childFactory={e => React.cloneElement(
                                     e, {classNames: anim_actions[action]}
                                 )}>
                    <CSSTransition timeout={500} key={location.pathname}
                                   mountOnEnter unmountOnExit>
                        <Switch location={location}>
                            <Route exact path='/home/record' component={Record}/>

                            <Route exact path='/stats/details' component={Details}/>

                            <Route path='/stats' component={Stats}/>

                            <Route path='/home' component={Home}/>

                            <Route path='/discover' component={Discover}/>

                            <Route path='/mine/friends' component={Mine_Friends}/>

                            <Route path='/mine' component={Mine}/>
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
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
