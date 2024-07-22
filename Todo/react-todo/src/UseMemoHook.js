import { useMemo, useState } from "react";


const UsememoHook = () => {

    const intialItems = new Array(29_99_999).fill(0).map((_, i) => {
        return {
            id : i,
            isSelected : i === 29_99_998,
        }
    });

    const [count, setCount] = useState(0);
    const [ items ] = useState(intialItems);



    // const selectedItem = items.find((item) => item.isSelected);

    const selectedItem = useMemo(()=> {
       return items.find((item) => item.isSelected)
    }, [items])

    console.log(selectedItem)

    return(
        <div>
            <h1>Use Memo Example</h1>
            <p>count : {count}</p>
            <h1>selectedItem : {selectedItem?.id}</h1>
            <button onClick={() => setCount(count+1)}>Increment</button>
        </div>
    )
}

export default UsememoHook;
