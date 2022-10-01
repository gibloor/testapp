import { useEffect, useState } from 'react';

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

const union2 = (arrayOne, arraySecond) => {
  return bigSet([...arrayOne, ...arraySecond])
}

const union3 = (arrayOne, arraySecond, arrayThree) => {
  const arrays = union2(arrayOne, arraySecond)

  return union2(arrays, arrayThree)
}

export default function Home() {

  const [massives, setMassives] = useState([]);

  const [firstArray, setFirstArray] = useState([1, -2, 5, 10]);
  const [secondArray, setSecondArray] = useState([1, 10, -7, 10, 5])
 
  useEffect(() => {
    setMassives(union2(firstArray, secondArray));
  }, [])

  return (
    <div className={style.container}>
      <div className={style.box}>
        <div className={style.block}>
          <h3>
            setA
          </h3>
          <div className={style.array}>
            {firstArray.map((number, index) => (
              <div key={index} className={style.number}>
                {number}
              </div>
            ))}
          </div>

        </div>
        <div className={style.block}>
          <h3>
            SetB
          </h3>
          <div className={style.array}> 
            {secondArray.map((number, index) => (
              <div key={index} className={style.number}>
                {number}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={style.box}>
        <div className={style.block}>
          <h3>
            Union
          </h3>
          <div className={style.array}>
            {massives.map(number => {
              return <div key={number} className={style.number}>
                {number}
              </div>
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
