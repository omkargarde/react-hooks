import { useState } from "react"

function HookCounter() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <button onClick={() => setCount(count + 1)}> click {count}</button>
        </div>
    )
}

export default HookCounter