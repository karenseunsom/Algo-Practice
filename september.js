// 09-26 practice
function generateHashtag(str) {
    let strArray = str.split('')
    let capital = [];
    strArray.forEach((char, index) => {
        if (char == ' ') {
            capital.push(index + 1)
        }
    })
    let newArray = strArray.map((char, index) => {
        if (capital.includes(index) || index == 0) {
            return char.toUpperCase()
        } else {
            return char
        }
    })
    let noSpaces = newArray.filter((char) => {
        return char !== ' '
    })

    if (noSpaces.length == 0 || noSpaces.length >= 140) {
        return false
    } else {
        noSpaces.unshift('#')
        return noSpaces.join('')
    }
}

console.log(generateHashtag('Hello World'))
console.log(generateHashtag(""))
console.log(generateHashtag("Do We have A Hashtag"))
console.log(generateHashtag("Codewars"))
console.log(generateHashtag("Codewars is nice"))
console.log(generateHashtag("code"))
console.log(generateHashtag("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat"))
