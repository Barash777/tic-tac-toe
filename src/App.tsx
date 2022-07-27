import React from 'react';
import './App.css';
import Board from './components/Board/Board';

function App() {

    // const minRows = 2, minColumns = 2, minWinStreak = 2;
    let rows = 3, columns = 3, winStreak = 3;

    return (
        <div className="App">
            <Board rows={rows} columns={columns} winStreak={winStreak}/>
        </div>
    );
}

export default App;
