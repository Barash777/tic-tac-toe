import React from 'react';
import './App.css';
import Board from './components/Board/Board';

function App() {

    // console.log('App')

    return (
        <div className="App">
            <Board rows={3} columns={6} winStreak={3}/>
        </div>
    );
}

export default App;
