
import React, { useState, useEffect } from "react"

function NumberList(props) {
  const listItem = props.numbers.map((num) => {
    return <li key={num}>{num}</li>
  })
  return <ul>{listItem}</ul>
}

export default class MyClock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      inputVal: ""
    }
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.tick();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  inputChangeHandler = (e) => {
    this.setState({inputVal: e.target.value})
  }

  render() {
    const numbers = [2,4,6,8];
    return (
      <div>
        <div>我的时钟</div>
        <div>{this.state.date.toLocaleTimeString()}</div>
        <NumberList numbers={numbers}></NumberList>
        <input value={this.state.inputVal} onChange={this.inputChangeHandler} />
        <ExampleHook></ExampleHook>
      </div>
    )
  }
}

function ExampleHook() {
  let [count, setCount] = useState(0);
  useEffect(() => {
    console.log("dom更新之后触发", count);
    return () => {
      console.log("销毁的时候调用")
    }
  },[count])
  return (
    <div>
      <div>{count}</div>
      <button onClick={() => {setCount(count + 1)}}>按钮</button>
      <button onClick={() => {setCount(0)}}>重置次数</button>
    </div>
  )
}