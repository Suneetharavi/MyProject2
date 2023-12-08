import { createContext, useState } from "react";
import contextimages from '../models/contextimages';
import React, { Component }  from 'react';


export const ImagesContext = createContext();

function AppContextProvider(props){

    const [picture, setPicture] = useState(contextimages)

    return(

        <ImagesContext.Provider value = {{
            picture,
            setPicture,
        }}>

       {props.children}

       </ImagesContext.Provider>
    );
}

export default AppContextProvider;