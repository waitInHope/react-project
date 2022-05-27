
import { useState } from "react";

export default function User() {
    // state 组件内部状态定义
    const [count, setCount] = useState(0);

    // action 当触发某个事件时，更新状态
    let addCountHandle = () => {
        setCount(count + 1);
    }

    // view UI定义
    return (
        <div>
            <span>user</span>
            <div>{count}</div>
            <button onClick={addCountHandle}>increase</button>
        </div>
    )
}