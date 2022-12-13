import { useEffect, useState } from "react";

function HookCounter() {
  const initCount = 0;
  const [count, setCount] = useState(initCount);
  const [name,setName] = useState('');
  function incrementCount() {
      setCount((count) => count + 1);
  }
  function decrementCount() {
    setCount((count) => count - 1);
  }
  function resetCount() {
    setCount(initCount);
  }
  useEffect(()=>{
    console.log("update")
    document.title = `you clicked ${count} title`;
    return () =>{
      console.log("clean function like ngOnDestroy")
    }
  },[count])
  return (
    <div className="flex flex-col w-1/3 justify-center content-center mx-auto mt-1">
      <input className="border-solid border-2 border-sky-500" type="text" value={name} onChange={e=>setName(e.target.value)}></input>
      <h3 className="text-2xl mx-auto">useState = {count}</h3>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full my-1"
        onClick={() => incrementCount()}
      >increment</button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full my-1"
        onClick={() => decrementCount()}
      >decrement</button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full my-1"
        onClick={() => resetCount()}
      >reset</button>
    </div>
  );
}

export default HookCounter;
