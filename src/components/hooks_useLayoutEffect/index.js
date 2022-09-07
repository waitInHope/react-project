import React from "react";

const Hooks = function() {

    const [number, setNumber] = React.useState(0);
    const createArr = function(name, number = 20000) {
        return new Array(number).fill(name).map((item, index) => `${item}-${index}`);
    }
    const [content, setContent] = React.useState(createArr('tab1'));

    // 在页面渲染后执行
    React.useEffect(() => {
        console.log('useEffect', number);
        setContent(createArr(`useEffectTab${number}`));
    }, [number, setContent]);

    // 在页面渲染前执行
    React.useLayoutEffect(() => {
        console.log('useLayoutEffect', number);
        setContent(createArr(`useLayoutEffectTab${number}`));
    }, [number, setContent]);

    return (
        <div>
            {number}
            <button onClick={() => setNumber(number + 1)}>按钮+1</button>
            <div>
                {content}
            </div>
        </div>
    )
}

export default Hooks;