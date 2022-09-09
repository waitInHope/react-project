import React, { useImperativeHandle, useCallback } from "react";

const ChildComponent = React.forwardRef((props, ref) => {
    const {initNum} = props;
    const [num, setNum] = React.useState(initNum);

    const add = useCallback(() => {
        setNum(num + 1);
    }, [num]);

    const sub = useCallback(() => {
        setNum(num - 1);
    }, [num]);

    useImperativeHandle(ref, () => {
        return {
            add,
            sub
        }
    }, [add, sub]) 

    return (
        <div>
            <span>子组件{num}</span>
            <button onClick={() => add()}>增加</button>
            <button onClick={() => sub()}>减少</button>
        </div>
    )
})

const ParentComponent = () => {
    let nodeRef = null;
    return (
        <div>
            <ChildComponent
                initNum={1}
                ref={node => nodeRef = node}
            ></ChildComponent>
            <span>父组件</span>
            <button onClick={() => nodeRef.add()}>+1</button>
            <button onClick={() => nodeRef.sub()}>-1</button>
        </div>
    )
}

export default ParentComponent;