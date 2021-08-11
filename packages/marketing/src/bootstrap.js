import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import { module } from "../config/webpack.common";
// Mount function to startup the app
const mount = (el)=>{
    ReactDOM.render(<App /> , el);
}

// If we are in development and isolation,
// call mount immediately
if(process.env.NODE_ENV === "development"){
    const devRoot = document.querySelector("#marketing_dev_root")
    if(devRoot){
        mount(devRoot)
    }
}



// We are running through container
// so export the mount funtion

export { mount };