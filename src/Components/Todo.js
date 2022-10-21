import React, { useState } from 'react'

function Todo() {
    const [inputData, setinputData] = useState('');
    const [items, setItems] = useState([]);

    const addItem = () => {
        if(!inputData) {

        } else{
        setItems([...items,inputData])
        setinputData("")
    }
    }
    const deleteItem = (id) =>{
        console.log(id);
        const updateItems = items.filter((elem,ind) =>{
            return ind !== id
        })
        setItems(updateItems)
    }

    const removeAll = () => {
        setItems([]);
    }

  return (
    <>
        <div className='main-div'>
            <h1>Whta's your plan today</h1>
            <div className='additems'>
                <input type='text' placeholder='Write your plan!' value={inputData} onChange={(e)=> setinputData(e.target.value)} />
                <button onClick={addItem}><span>add todo</span></button>
            </div>
            <div className='showItem'>
            {
                items.map((elem,ind) => {
                    return (
                        <div className='eachItem' key={ind}>
                        <li>{elem}</li> <button onClick={()=>deleteItem(ind)}>delete</button>
                    
                        </div>
                        )
                })
            }
            <div className='btn'>
                <button className='btn' onClick={removeAll}><spna>Check Lists</spna></button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Todo