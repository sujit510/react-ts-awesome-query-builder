import React, { useState } from 'react';
import './App.css';
import { RAQBWrapper } from './RAQBWrapper/RAQBWrapper';

const App: React.FC = () => {
    return (
        <div className="App">
            <h3>Welcome to React Awesome Query Builder Demo!</h3>
            <RAQBWrapper />
        </div>
    );
};

export default App;
