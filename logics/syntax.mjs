// syntax of propositional logic
// operator symbols: ~, &, |, >, =
// truth symbols: T, F
// compulsory brackets around each expression

export const plParse = (sentence, vars) => recursiveParse(sentence.split(''), vars)

const unaryOperators = ['~']
const binaryOperators = ['&', '|', '>', '=']
const operators = [...unaryOperators, ...binaryOperators]

const recursiveParse = (sentence, vars) =>
  levels(sentence)[sentence.length - 1] === 0 &&
    sentence[0] === '(' &&
    sentence[sentence.length - 1] === ')'
    ? levels(sentence).some(level => level > 1)
      ? operatorIndex(sentence) > -1
        ? [
          sentence.slice(operatorIndex(sentence), operatorIndex(sentence) + 1)[0],
          ...!unaryOperators.includes(sentence[operatorIndex(sentence)])
            ? [recursiveParse(sentence.slice(1, operatorIndex(sentence)), vars)]
            : [],
          recursiveParse(sentence.slice(operatorIndex(sentence) + 1, -1))
        ]
        : recursiveParse(sentence.slice(1, -1))
      : operators.some(operator => sentence.includes(operator))
        ? 'ERROR'
        : sentence.length === 3 && sentence[1] === 'T'
          ? true
          : sentence.length === 3 && sentence[1] === 'F'
            ? false
            : typeof vars === 'undefined' ||
              vars.includes(sentence.slice(1, -1).join(''))
              ? sentence.slice(1, -1).join('')
              : 'UNDEFINED'
    : 'ERROR'

const levels = sentence =>
  sentence.map(char =>
    char === '('
      ? 1
      : char === ')'
        ? -1
        : 0)
    .reduce((prev, derivation) => [
      ...prev,
      prev[prev.length - 1] + derivation
    ], [0]).slice(1)

const operatorIndex = sentence =>
  sentence.findIndex((char, i) => levels(sentence)[i] === 1 && operators.includes(char))
