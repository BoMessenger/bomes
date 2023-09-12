import React, {createContext} from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import {getDatabase} from "firebase/database";


const firebaseConfig = {
    apiKey: "AIzaSyC_0Mwc1D_iMA6fpvtG8bjcTdGcfnfdpIg",
    authDomain: "bomes-fca0a.firebaseapp.com",
    databaseURL: "https://bomes-fca0a-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "bomes-fca0a",
    storageBucket: "bomes-fca0a.appspot.com",
    messagingSenderId: "1047127596102",
    appId: "1:1047127596102:web:44e24f7e847885ccc8fe47",
    measurementId: "G-8NFGCVM37Y"
};
const app = initializeApp(firebaseConfig);

export const Context = createContext(null)

const auth = getAuth()
const database = getDatabase()

ReactDOM.render(
    <Context.Provider value={{
        auth,
        database
    }}>
        <App/>
    </Context.Provider>,
    document.getElementById('root')
)