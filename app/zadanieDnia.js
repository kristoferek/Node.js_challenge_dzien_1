process.argv
  .slice(2)
  .forEach((string) => {
    const possibleNumber = Number(string)
    if (!isNaN(possibleNumber))
      setTimeout(() => console.log(possibleNumber),
      possibleNumber * 1000)
  })
