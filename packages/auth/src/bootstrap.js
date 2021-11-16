import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createMemoryHistory , createBrowserHistory } from "history";
// import { module } from "../config/webpack.common";
// Mount function to startup the app



const mount = (el, { onNavigate, defaultHistory, initialPath, onSignIn })=>{
    const history = defaultHistory || createMemoryHistory({
        initialEntries: [initialPath]
    });
    if(onNavigate){
        history.listen(onNavigate);
    }
    ReactDOM.render(<App onSignIn={onSignIn} history={history} /> , el);
    return {
        onParentNavigate({ pathname : nextPathName}){
            const { pathname } = history.location;
            if(pathname !== nextPathName){
                history.push(nextPathName);
            }
        }
    }
}

// If we are in development and isolation,
// call mount immediately
if(process.env.NODE_ENV === "development"){
    const devRoot = document.querySelector("#auth_dev_root")
    if(devRoot){
        mount(devRoot ,  { defaultHistory:createBrowserHistory() })
    }
}



// We are running through container
// so export the mount funtion

export { mount };