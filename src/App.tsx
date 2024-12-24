import { useState } from 'react'
import './App.css'
import MainList from './MainList.tsx'

function App() {
  const [items, setItems] = useState(Array);
  const [newValue, setNewValue] = useState("");
  const [newValueIndex, setNewValueIndex] = useState(0)

  function handleSubmit(action: any) {
      if (newValue !== "") {
      action.preventDefault();
      setItems([...items, {name: newValue, index: newValueIndex}]);
      setNewValue("")
      setNewValueIndex(newValueIndex + 1)
    } else {
      alert("Please fill out the form")
      action.preventDefault();
    }
  }

  function handleInputChange(e:any) {
    setNewValue(e.target.value)
  }

  function deleteItem(index:number) {
    setItems(items.filter((item:any)=>(item.index!==index)))
  }

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)} id="addItemForm">
        <input type="text" value={newValue} onChange={(handleInputChange)}></input>
        <button type="submit" id="addBtn">Add Item</button>
      </form>
      <div id="mainlist">
        <MainList items={items} removeScript={deleteItem}></MainList>
      </div>
    </>
  )
}

export default App
