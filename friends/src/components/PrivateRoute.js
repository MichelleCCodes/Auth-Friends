import React from 'react';
import { Route, Redirect } from 'react-router-dom';

/*
1. Replaces the Route component and passes in the same props.
2. Check to see if we are logged in, and if so, render component
3. If the user is not logged in, we redirect to login
Note: the component has to be rendered after this patterm: <Route component={Login}/>
*/

const PrivateRoute = ({component: Component, ...rest}) =>  {
    return(<Route {...rest} render={
        (props) => {
            if (localStorage.getItem("token")) {
                return <Component {...props}/>;
            } else {
                return(<Redirect to='/login'/>);
            }
        }
    }/>);
};

export default PrivateRoute;