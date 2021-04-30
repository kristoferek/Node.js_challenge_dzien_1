const sum = process.argv
  .slice(2)
  .reduce((sum, string) => {
    const possibleNumber = Number(string)
    return isNaN(possibleNumber) ? sum : sum + Number(string)
  }, 0)

console.log(sum)
