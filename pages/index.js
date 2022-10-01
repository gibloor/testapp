import { useEffect, useState } from 'react';
import ArraySet from './arraySet';

import style from './index.module.css';

const bigSet = (array) => {
  const object1 = {}

  array.map(number => {
    if (!object1[number]) {
      object1[number] = 1
    } else {
      object1[number] += 1
    }
  })

  const newArray = []

  for (let key in object1) {
    newArray.push(key)
  }

  return newArray
}

const union = (arrayOne, arraySecond) => {
  return bigSet([...arrayOne, ...arraySecond])
}

const intersection = (firstArray, secondArray) => {

  const container = {}

  firstArray.map(number => {
    container[number] = 1
  })

  secondArray.map(number => {
    if (container[number]) {
      container[number] = 2
    }
  })

  const newArray = []

  for (let key in container) {
    if (container[key] === 2) {
      newArray.push(key)
    }
  }

  return newArray
}

const difference = (firstArray, secondArray) => {
  const container = {}

  firstArray.map(number => {
    container[number] = 1
  })

  secondArray.map(number => {
    if (container[number]) {
      container[number] = 2
    } else {
      container[number] = 1
    }
  })

  const newArray = []

  for (let key in container) {
    if (container[key] === 1) {
      newArray.push(key)
    }
  }

  return newArray
}

export default function Home() {

  const [algorithm, setAlgorithm] = useState('');

  const switchers = [
    'union',
    'intersection',
    'difference'
  ]

  const [arrays, setArrays] = useState([]);

  const [firstArray, setFirstArray] = useState([1, -2, 5, 10]);
  const [secondArray, setSecondArray] = useState([1, 10, -7, 10, 5])
 
  useEffect(() => {
    let newArray = []

    switch (algorithm) {
      case 'union':
        newArray = union(firstArray, secondArray)
        break;

      case 'intersection':
        newArray = intersection(firstArray, secondArray)
        break;

      case 'difference':
        newArray = difference(firstArray, secondArray);
        break;
    }

    setArrays(newArray);
  }, [firstArray, secondArray, algorithm])

  const addToFirstArray = (number) => {
    setFirstArray([...firstArray, number])
  }

  const addToSecondArray = (number) => {
    setSecondArray([...secondArray, number])
  }

  const deleteInFirstArray = (index) => {
    let newArray = firstArray;
    newArray.splice(index, 1)
    setFirstArray([...newArray])
  }

  const deleteInSecondArray = (index) => {
    let newArray = secondArray;
    newArray.splice(index, 1)
    setSecondArray([...newArray])
  }

  return (
    <div className={style.container}>
      <div className={style.box}>
        <ArraySet array={firstArray} style={style} addToArray={addToFirstArray} deleteInArray={deleteInFirstArray} />
        <ArraySet array={secondArray} style={style} addToArray={addToSecondArray} deleteInArray={deleteInSecondArray} />
      </div>
      <div className={style.box}>
        <div className={style.block}>
          <h3>
            algorithm: {algorithm}
          </h3>
          <div className={style.array}>
            {arrays.map(number => {
              return <div key={number} className={style.number}>
                {number}
              </div>
            })}
          </div>
          <div className={style.switcher}>
            <form>
              {switchers.map(switcher => (
                <label key={switcher} htmlFor={switcher}>
                  {switcher}
                  <input id={switcher} name='switcher' type='radio' value={switcher} onChange={() => setAlgorithm(switcher)} />
                </label>
              ))}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
