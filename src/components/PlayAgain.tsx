import React from 'react';

interface Props {
    onClick: () => void
}
const PlayAgain = ( props: Props) => {

    return (
        <div className='game-done'>
            <button onClick={props.onClick}>Play Again</button>
        </div>
    )
}

export default PlayAgain;