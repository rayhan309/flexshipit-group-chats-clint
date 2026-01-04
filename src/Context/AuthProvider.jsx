import React from 'react';
import { AuthContext } from './AuthContext';

const AuthProvider = ({ children }) => {
    // console.log(children)
    // console.log("rayhan")

    const userInfo = {
        name: "rayhan"
    }

    return <AuthContext value={userInfo}>{ children }</AuthContext>;
};

export default AuthProvider;