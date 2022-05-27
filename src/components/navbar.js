
import { Link, BrowserRouter as Router } from "react-router-dom"

export default function navbar() {
    return (
        <Router>
            <div><Link to="/">用户面</Link></div>
            <div><Link to="/clock">时钟页</Link></div>
        </Router>
    )
}