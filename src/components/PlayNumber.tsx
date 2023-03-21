import React from 'react';

interface Props {
    number: number
    status: string
    onClick: (number: number, status: string) => void
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
        onClick={() => props.onClick(props.number, props.status)}
    >
        {props.number}
    </button>
);

export default PlayNumber;