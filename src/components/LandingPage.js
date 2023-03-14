import "./landingPage.css";
import { useState } from "react";

const LandingPage = () => {
    const [count, setCount] = useState(0);
    return <section>
    <header>
        <img src="/logo192.png" alt="logo" />
        <h1>Counter App</h1>
        <div></div>
    </header>
    <section>
        <div>{count}</div>
        <div>
            <button onClick={()=>{setCount(count+1)}}>+</button>
            <button onClick={()=>{setCount(0)}}>Reset</button>
            <button onClick={()=>{count ? setCount(count-1) : setCount(0)}}>-</button>
        </div>
    </section>
    </section>
}

export default LandingPage;