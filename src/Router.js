import React from "react";

import { HashRouter, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Header from "./components/Header";

import Home from "./routes/Home";
import About from "./routes/About";
import DetailedMovie from "./routes/DetailedMovie";

function Router(){
    return (
        <HashRouter>
            <nav id="navLeft">
                <div id="headerParent">
                    <Header />
                </div>
                <div id="navParent">
                    <Nav />
                </div>
            </nav>
            <main id="mainParent">
                <Route path="/" exact={true} component={Home} />
                <Route path="/about" component={About} />
                <Route path="/movie/:id" component={DetailedMovie}/>
            </main>
        </HashRouter>
    );
};

export default Router;


/*  import as 사용하기!
import { About as Potato } from "./routers/About";
function Router(){
    return(
        <HashRouter>
            <Route path="/about" component={Potato} />
        </HashRouter>
    )
}
*/