import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import SignIn from '../component/SignIn'
import Dashboard from '../component/Dashboard'
import FormDetail from '../component/FormDetail'
import PrivateRouter from './PrivateRouter'
import FormById from '../component/FormById'

function AppRouter() {
    return (
        <BrowserRouter>
        <div>
            <Switch>
                <Route path='/' component={SignIn} exact ={true}></Route>
                <Route path='/dashboard' component = {Dashboard} exact ={true} />
                <Route path='/form' component = {FormDetail} exact ={true}></Route> 
                <Route path='/form/:id' component = {FormById} exact ={true}></Route> 
            </Switch>
        </div>
            
        </BrowserRouter>
    )
}

export default AppRouter
