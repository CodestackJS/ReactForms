import { useRef, useState } from "react";


const UseStateVsUseRef = () => {

//useState
const [count, setCount] = useState(0);

//useRef
const countRef = useRef(0);

//Create a helper function to handle our Increment
const handleIncrement = () => {
    // below will be for useState
    setCount (prevCount => prevCount + 1)
    console.log('from useState', count);

    //below will be for countRef
    countRef.current++;
    console.log(countRef.current);
}



  return (
    <>
    <h1 className="text-center">useState Vs UseRef</h1>

    {/* below will be for useState */}
    <button onClick={handleIncrement} className="btn btn-primary">Increment</button>
    <div>
        <span>Counter from UseState: {count}</span>
    </div>

    {/* below will be for countRef */}
    <div>
        <span>Counter from Ref: {countRef.current}</span>
    </div>

    
    
    
    </>
  )
}

export default UseStateVsUseRef