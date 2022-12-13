import { useEffect, useState } from "react";
export default function HookCounterTwo() {
  const [items, setItems] = useState([])
  const [count,setCount] = useState(0);
  function addItem() {
    setItems([...items, {
      id: items.length,
      value: Math.floor(Math.random() * 10) + 1
    }])

  }
  useEffect(()=>{
    const interval = setInterval(()=>{
      setCount(count=>count+1);
    },1000)
    return ()=>{
      clearInterval(interval);
    }
  },[])
  return (
    <div className="flex flex-col w-1/3 justify-center content-center mx-auto ">
      <h3 className="text-2xl mx-auto">useState Array</h3>
      <p>{count}</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full my-1" onClick={addItem}>add</button>
      <ul className="list-disc mx-auto">
        {items.map(item => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
}