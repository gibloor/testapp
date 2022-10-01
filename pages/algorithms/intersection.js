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

export default intersection