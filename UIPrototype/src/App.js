import React, {useEffect, useRef, useState} from 'react';
import './css/App.css';
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
import Signup from "./pages/Mine/Signup";

function App() {
    const location = useLocation();
    const action = useHistory().action;
    const appBottom = useRef(null);
    const anim_actions = {
        PUSH: 'forward',
        POP: 'back',
        REPLACE: 'back'
    }

    const [bottomEnable, setBottomEnable] = useState(true);

    useEffect(() => {
        if (appBottom === null) return;

        if (!bottomEnable) {
            appBottom.current.classList.add("appBottom_disable");
        } else {
            appBottom.current.classList.remove("appBottom_disable");
        }
    }, [bottomEnable])

    return (
        <div className="app">
            <div className="app_body">
                <TransitionGroup className="router_wrapper"
                                 childFactory={e => React.cloneElement(
                                     e, {classNames: anim_actions[action]}
                                 )}>
                    <CSSTransition timeout={300} key={location.pathname}
                                   mountOnEnter unmountOnExit
                                   // onEnter={() => setBottomEnable(false)}
                                   // onEnter={() => {}}
                                   // onEntered={() => {}}
                                   // onEntered={() => setBottomEnable(true)}
                        >
                        <Switch location={location}>
                            <Route exact path='/home/record' component={Record}/>

                            <Route exact path='/stats/details' component={Details}/>

                            <Route path='/stats' component={Stats}/>

                            <Route path='/home' component={Home}/>

                            <Route path='/discover' component={Discover}/>

                            <Route path='/mine/signup' component={Signup}/>

                            <Route path='/mine/friends' component={Mine_Friends}/>

                            <Route path='/mine' component={Mine}/>
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
            </div>
            {!(location.pathname === '/stats/details') &&
                !(location.pathname === '/home/record') &&
                !(location.pathname === '/mine/friends') &&
                !(location.pathname === '/mine/signup') &&
                <div className="app_bottom"
                     ref={appBottom}>
                    <BottomBar/>
                </div>}
        </div>
    )
}

export default App;
