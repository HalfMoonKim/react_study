import {Fragment} from "react";
import './App.css'

function App() {
    const name = '리액트';
    return (
        <>
            <div
                className='react' // 이렇게는 쓸 수 있대
            >
                {name}
            </div>
            {/* 뭐야 잘 나오네? */}
            <input />
        </>
    )
}

export default App;
