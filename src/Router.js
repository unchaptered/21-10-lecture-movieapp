import React from "react";

import { HashRouter, Route } from "react-router-dom";

import About from "./routes/About";
import Home from "./routes/Home";

function Router(){
    return (
        <HashRouter>
            <Route path="/" exact={true} component={Home} />
            <Route path="/about" component={About} />
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