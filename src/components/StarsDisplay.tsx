import React from 'react';
import { utils } from '../utils/utils';

interface Props {
    count: number
}

const StarsDisplay = (props: Props) => {
    return (
        <>
            {utils.range(1, props.count).map(starId =>
                <div key={starId} className="star" />
            )}    
        </>
    )
};

export default StarsDisplay;