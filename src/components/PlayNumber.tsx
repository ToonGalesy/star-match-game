import React from 'react';

interface Props {
    number: number
    status: string
}

const colors: any = {
    available: 'lightgray',
    used: 'lightgreen',
    wrong: 'lightcoral',
    candidate: 'deepskyblue',
  };

const PlayNumber = (props: Props) => (

    <button 
        className="number"
        style={{backgroundColor: colors[props.status] }} 
        onClick={() => console.log('Num', props.number)}
    >
        {props.number}
    </button>
);

export default PlayNumber;