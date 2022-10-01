import { useEffect, useState } from 'react';

import ArraySet from './arraySet';
import union from './algorithms/union';
import intersection from './algorithms/intersection';
import difference from './algorithms/difference';

import style from './index.module.css';

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

  const saveState = () => {
    localStorage.setItem('state', JSON.stringify({firstArray, secondArray, algorithm}));
  }

  useEffect(() => {
    const oldState = localStorage.getItem('state');
    console.log(oldState)
  }, [])

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
          <div className={style.switchers}>
            <form>
              {switchers.map(switcher => (
                <label key={switcher} htmlFor={switcher} className={style.switcher}>
                  {switcher}
                  <input id={switcher} name='switcher' type='radio' value={switcher} onChange={() => setAlgorithm(switcher)} />
                </label>
              ))}
            </form>
          </div>
          <button onClick={() => {saveState()}}>save state</button>
        </div>
      </div>
    </div>
  )
}