
import {useState, Fragment} from "react"

function NumberList() {
	let [count, setCount] = useState(0);

	let addCount = () => {
		setCount(count + 1);
	}

	return (
		<Fragment>
			<div>{count}</div>
			<button onClick={addCount}>点击</button>
		</Fragment>
	)
}

export default NumberList