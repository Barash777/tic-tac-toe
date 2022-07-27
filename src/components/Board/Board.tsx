import React, {useState} from 'react';
import Square from '../Square/Square';
import css from './Board.module.css'

export type BoardPropsType = {
    rows: number
    columns: number
    winStreak: number
}

const Board = ({rows, columns, winStreak}: BoardPropsType) => {
    const [cross, setCross] = useState<boolean>(true)

    let rowsJSX = []
    let columnsJSX = []

    for (let i = 0; i < columns; i++) {
        for (let j = 0; j < rows; j++) {
            rowsJSX.push(<Square cross={cross} toggleCross={setCross} key={i + '_' + j}/>)
            // columnsJSX.push(i + '_' + j)
        }
        columnsJSX.push(rowsJSX)
        rowsJSX = []
    }

    const BoardJSX = columnsJSX.map((e, i) => {
        return <div key={i}>{e}</div>
    })

    // check who wins

    return (
        <div className={css.board}>
            {BoardJSX}
        </div>
    );
};

export default Board;