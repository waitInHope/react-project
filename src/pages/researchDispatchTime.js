import React, { useState } from "react";
import { Button } from 'antd';

const ResearchDispatchTime = React.memo(() => {
  console.log(new Date().getTime());
  const [num, setNum] = useState(0);
  const onButtonClick = () => {
    setNum(1);
    setNum(2);
    setNum(3);
  };

  return (
    <div>
      <div>{num}</div>
      <Button onClick={() => onButtonClick()}>按钮</Button>
    </div>
  )
})

export default ResearchDispatchTime;
