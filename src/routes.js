import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from './paginas/login'
import Dash from './paginas/dash'
import CriarLocal from './paginas/novo';

export default function NewRoutes(){
    return(
        <BrowserRouter>
            <Switch>

                <Route exact path="/"  component={Login}></Route>
                <Route exact path="/Dash"  component={Dash}></Route>
                <Route exact path="/Criar"  component={CriarLocal}></Route>

            </Switch>
            

        </BrowserRouter> 
    )
}