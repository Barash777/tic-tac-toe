import React, {useState} from 'react';
import css from './Square.module.css'

export type SquarePropsType = {
    cross: boolean
    toggleCross: (cross: boolean) => void
}

const Square = ({cross, toggleCross}: SquarePropsType) => {

    const [finalClass, setFinalClass] = useState<string>(css.square)

    const onDoubleClickHandler = (/*e: React.MouseEvent<HTMLDivElement>*/) => {
        // const style = (e.target as HTMLInputElement).style
        // const color = style.backgroundColor
        // color === '' ? style.backgroundColor = 'green' : style.backgroundColor = ''

        if (finalClass === css.square) {
            cross ? setFinalClass(`${css.square} ${css.cross}`) : setFinalClass(`${css.square} ${css.circle}`)
            toggleCross(!cross)
        }
    }

    return (
        <div className={finalClass} onDoubleClick={onDoubleClickHandler}></div>
    );
};

export default Square;