const isEven = (number) => number % 2 === 0 ? true : false

const sumEvensFromArray = (numberArray) => {
  // verifica se o numero é impar, se sim o coloca em um array sevundário com os resultados filtrados
  const evenNumbers = numberArray.filter((number) => isEven(number))

  //soma os valores filtrados
  return evenNumbers.reduce((accumulator, currentValue) => accumulator + currentValue)
}

// o resultado é 140 (2+132+6)
console.log(sumEvensFromArray([2,5,27,132,19,6]))
