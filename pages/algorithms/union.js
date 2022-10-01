const union = (arrayOne, arraySecond) => {

  const array = [...arrayOne, ...arraySecond];

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

export default union;