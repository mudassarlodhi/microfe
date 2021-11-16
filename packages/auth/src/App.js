import { StylesProvider , createGenerateClassName } from "@material-ui/core";
import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Signup from "./components/Signup";
import Signin from "./components/Signin";

const generateClassName = createGenerateClassName({
    productionPrefix: "au"
});

const App = ({ history, onSignIn })=>{
    return (
    <div>
        <StylesProvider generateClassName={generateClassName}>
           <Router history={history}>
               <Switch>
                   <Route path="/auth/signin" >
                       <Signin onSignIn={onSignIn} />
                    </Route>
                    <Route path="/auth/signup" >
                       <Signup onSignIn={onSignIn} />
                    </Route>
                   {/* <Route path="/auth/signup" component={Signup} />   */}
                </Switch>    
           </Router>
        </StylesProvider>
    </div>
    )
}


export default App;