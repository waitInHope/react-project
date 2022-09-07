import React from "react"

const Hook1 = function() {

    const [number, dispatchNumber] = React.useReducer((state, action) => {
        const {name, payload} = action;
        switch(name) {
            case 'add': {
                return state + 1;
            }
            case 'sub': {
                return state - 1;
            }
            case 'reset': {
                return payload;
            }
            default: {
                return state;
            }
        }
    }, 0);

    return (
        <div>
            <div>{number}</div>
            <button onClick={() => dispatchNumber({name: 'add'})}>点击+1</button>
            <button onClick={() => dispatchNumber({name: 'sub'})}>点击-1</button>
            <button onClick={() => dispatchNumber({name: 'reset', payload: 0})}>重置</button>
        </div>
    )
}

export default Hook1;