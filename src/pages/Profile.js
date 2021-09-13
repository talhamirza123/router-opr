import React, { useEffect } from 'react'

import { useHistory } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const Profile = ({ login }) => {
    
    const history = useHistory();
    
    useEffect (() => 
               {
                   
                   if(!login)
                   {
                       history.push("/About");
                   }
                   
               },
               [login, history]
    )
    
    return (
        <>
       <h1>Profile Page</h1>
       
       <ul>
       <li>
       <Link to="/viewProfile">View Profile</Link>
       </li>
       
       <li>
       <Link to ="/editProfile">Edit Profile</Link>
       </li>
       
       </ul>
       <Switch>
       <Route path="/viewProfile" />
       <Route path="/editProfile" />
       
       </Switch>

       </>
    )
}
