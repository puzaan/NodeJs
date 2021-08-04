import React from 'react'
import {connect, useSelector} from 'react-redux'
import {Redirect, Route} from 'react-router-dom'



export const PrivateRouter = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => (
    <Route {...rest} component ={(props) => {
        isAuthenticated ? (
            <Component {...props} />
        ): (
            <Redirect to ='/' />

        )
    }}/>
    
)


   const user =  localStorage.getItem('userInfo')
        

    const mapStatetoProps = (state) => ({
        isAuthenticated: !!state.user
    });






export default connect(mapStatetoProps)(PrivateRouter)
