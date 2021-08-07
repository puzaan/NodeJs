import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AppBars from './appBar'

const Dashboard = ({history}) => {
    const dispatch = useDispatch()
    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo} = userLogin

    useEffect(() => {
        if(!userInfo){
            history.push('/')
        }
        
    })
    return (
        <div>
           <AppBars />
           <h1> Dashboard panal</h1>
        </div>
    )
}

export default Dashboard









