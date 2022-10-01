import { useState } from 'react';

export default function ArraySet(props) {

  const [newNumber, setNewNumber] = useState(0)

  const { array, style, addToArray, deleteInArray } = props;

  const handleChange = (e) => {
    setNewNumber(e.target.value)
  }

  const submitNumber = (e) => {
    e.preventDefault()
    addToArray(newNumber)
  }

  return (
    <div className={style.block}>
      <h3>
        Array
      </h3>
      <div className={style.array}>
        {array.map((number, index) => (
          <div key={index} className={style.number} onClick={() => deleteInArray(index)}>
            {number}
          </div>
        ))}
      </div>
      <form onSubmit={(e) => submitNumber(e)}>
        <input onChange={(e) => handleChange(e)} type='number'/>
      </form>
    </div>
  )  
}