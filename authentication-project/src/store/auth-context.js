import React, { useState, useEffect, useCallback } from "react";

let logoutTimer;

const AuthContext = React.createContext({
   token: '',
   isLoggedIn: false,
   login: (token) => {},
   logout: () => {}
});

const calculateRemainingTime = (expirationTime) => {
    const currenTime = new Date().getTime();
    const expirationTimeInMilis = new Date(expirationTime).getTime();

    const remaining = expirationTimeInMilis - currenTime;

    return remaining;
}

const retrieveStoredToken = () => {
    const storedToken = localStorage.getItem('token');
    const storedExpirationTime = localStorage.getItem('expirationTime');

    const remainingTime = calculateRemainingTime(storedExpirationTime);
    
    if(remainingTime <= 60000) {
        localStorage.removeItem('token');
        localStorage.removeItem('expirationTime');
        return null;
    }

    return {
        token: storedToken,
        duration: remainingTime
    }
};

export const AuthContextProvider = (props) => {
    const tokenData = retrieveStoredToken();
    let initialToken;
    if(tokenData) {
        initialToken = tokenData.token;
    }

    const [token, setToken] = useState(initialToken);

    const userIsLoggedIn = !!token;

    const logoutHandler = useCallback(() => {
        setToken(null);
        localStorage.removeItem('token');
        localStorage.removeItem('expirationTime');
        
        if(logoutTimer) {
            clearTimeout(logoutTimer);
        }
    },[]);

    const loginHandler = (token, expirationTime) => {
        setToken(token);
        localStorage.setItem('token', token);
        localStorage.setItem('expirationTime', expirationTime);
        
        const remainingTime = calculateRemainingTime(expirationTime);

        logoutTimer = setTimeout(loginHandler, remainingTime);
    };

    useEffect(() => {
        if(tokenData){
         logoutTimer = setTimeout(loginHandler, tokenData.duration);

        }
    }, [tokenData, loginHandler]);

    //the actual context is here
    const contextValue = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler
    };

    return <AuthContext.Provider value={contextValue}>
        {props.children}
    </AuthContext.Provider>
};

export default AuthContext;