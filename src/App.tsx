import React from 'react';
import logo from './logo.svg';
import './App.css';
import { getSimbriefData } from "./utils/SimbriefApi";

// eslint-disable-next-line no-unused-vars
import store, { useAppDispatch } from './redux/store';

function App(): JSX.Element {
    const dispatch = useAppDispatch();

    const clicky = () => {
        getSimbriefData("SentientFalcon").then(data => {
            dispatch({ type: 'simbrief/setSimbriefData', payload: data });
        });
        console.log("dispatch");
    };

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                </p>
                <p
                    className="App-link"
                    onClick={() => clicky()}
                >
                    Learn React
                </p>
            </header>
        </div>
    );
}

export default App;
