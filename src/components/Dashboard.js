import React, { useContext } from "react";
import { Redirect } from 'react-router-dom'
import { AuthContext } from "./Auth";
import firebaseConfig from "../config";

const Dashboard = () => {
    const { currentUser } = useContext(AuthContext);

    if (!currentUser) {
        return <Redirect to="/login" />

    }
    return (
        <div>
            <h1> Welcome </h1>

            <button onClick= {()=> firebaseConfig.auth().signOut()} className = "btn btn-danger">Sign Out</button>
        </div>

    )

}

export default Dashboard