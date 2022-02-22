const sumNumber = (...listNumbers: number[]): number => listNumbers.reduce((p, c) => p + c, 0)

export default sumNumber
