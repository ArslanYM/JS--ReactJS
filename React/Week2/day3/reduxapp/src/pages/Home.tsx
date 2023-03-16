import React from 'react'
import {useDispatch , useSelector} from 'react-redux'

export const Home = () => {
    const {username} = useSelector((state:any)=>state.user.value.username)
    return (
        <div>
         <h1> this is Home {username} </h1>
        </div>
    )
}