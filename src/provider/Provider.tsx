"use client"
import React from "react";
import {Store} from  "../lib/store";
import { Provider } from "react-redux";
 const ReduxProvider = ({children}:{children:React.ReactNode} ) => {
    return (
        <div>
            <Provider store={Store}>{children}</Provider>
        </div>
        
    )
 }
 export default ReduxProvider;