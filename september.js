// 09-26 practice
//The Hashtag Generator
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


// codewars solution

function generateHashtag(str) {
    return str.length > 140 || str === '' ? false :
        '#' + str.split(' ').map(capitalize).join('');
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// console.log(generateHashtag('Hello World'))
// console.log(generateHashtag(""))
// console.log(generateHashtag("Do We have A Hashtag"))
// console.log(generateHashtag("Codewars"))
// console.log(generateHashtag("Codewars is nice"))
// console.log(generateHashtag("code"))
// console.log(generateHashtag("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat"))


//   Test.assertEquals(seven(times(five())), 35);
//   Test.assertEquals(four(plus(nine())), 13);
//   Test.assertEquals(eight(minus(three())), 5);
//   Test.assertEquals(six(dividedBy(two())), 3);
  

//Calculating with Functions
// my super long code.....
function zero(arr) {
    if (arr == undefined) {
        return 0
    } else if (arr[0] == 'multiply') {
        return 0 * arr[1]
    } else if (arr[0] == 'add') {
        return 0 + arr[1]
    } else if (arr[0] == 'minus') {
        return 0 - arr[1]
    } else if (arr[0] == 'divide') {
        return parseInt(0 / arr[1])
    }
}
function one(arr) {
    if (arr == undefined) {
        return 1
    } else if (arr[0] == 'multiply') {
        return 1 * arr[1]
    } else if (arr[0] == 'add') {
        return 1 + arr[1]
    } else if (arr[0] == 'minus') {
        return 1 - arr[1]
    } else if (arr[0] == 'divide') {
        return parseInt(1 / arr[1])
    }
}
function two(arr) {
    if (arr == undefined) {
        return 2
    } else if (arr[0] == 'multiply') {
        return 2 * arr[1]
    } else if (arr[0] == 'add') {
        return 2 + arr[1]
    } else if (arr[0] == 'minus') {
        return 2 - arr[1]
    } else if (arr[0] == 'divide') {
        return parseInt(2 / arr[1])
    }
}
function three(arr) {
    if (arr == undefined) {
        return 3
    } else if (arr[0] == 'multiply') {
        return 3 * arr[1]
    } else if (arr[0] == 'add') {
        return 3 + arr[1]
    } else if (arr[0] == 'minus') {
        return 3 - arr[1]
    } else if (arr[0] == 'divide') {
        return parseInt(3 / arr[1])
    }
}
function four(arr) {
    if (arr == undefined) {
        return 4
    } else if (arr[0] == 'multiply') {
        return 4 * arr[1]
    } else if (arr[0] == 'add') {
        return 4 + arr[1]
    } else if (arr[0] == 'minus') {
        return 4 - arr[1]
    } else if (arr[0] == 'divide') {
        return parseInt(4 / arr[1])
    }
}
function five(arr) {
    if (arr == undefined) {
        return 5
    } else if (arr[0] == 'multiply') {
        return 5 * arr[1]
    } else if (arr[0] == 'add') {
        return 5 + arr[1]
    } else if (arr[0] == 'minus') {
        return 5 - arr[1]
    } else if (arr[0] == 'divide') {
        return parseInt(5 / arr[1])
    }
}
function six(arr) {
    if (arr == undefined) {
        return 6
    } else if (arr[0] == 'multiply') {
        return 6 * arr[1]
    } else if (arr[0] == 'add') {
        return 6 + arr[1]
    } else if (arr[0] == 'minus') {
        return 6 - arr[1]
    } else if (arr[0] == 'divide') {
        return parseInt(6 / arr[1])
    }
}

function seven(arr) {
    if (arr == undefined) {
        return 7
    } else if (arr[0] == 'multiply') {
        return 7 * arr[1]
    } else if (arr[0] == 'add') {
        return 7 + arr[1]
    } else if (arr[0] == 'minus') {
        return 7 - arr[1]
    } else if (arr[0] == 'divide') {
        return parseInt(7 / arr[1])
    }
}
function eight(arr) {
    if (arr == undefined) {
        return 8
    } else if (arr[0] == 'multiply') {
        return 8 * arr[1]
    } else if (arr[0] == 'add') {
        return 8 + arr[1]
    } else if (arr[0] == 'minus') {
        return 8 - arr[1]
    } else if (arr[0] == 'divide') {
        return parseInt(8 / arr[1])
    }
}

function nine(arr) {
    if (arr == undefined) {
        return 9
    } else if (arr[0] == 'multiply') {
        return 9 * arr[1]
    } else if (arr[0] == 'add') {
        return 9 + arr[1]
    } else if (arr[0] == 'minus') {
        return 9 - arr[1]
    } else if (arr[0] == 'divide') {
        return parseInt(9 / arr[1])
    }
}


function plus(num) {
    return ['add', num]
}
function minus(num) {
    return ['minus', num]
}
function times(num) {
    return ['multiply', num]
}
function dividedBy(num) {
    return ['divide', num]
}

// THE SMARTER CODE FROM CODE WARS
// var n = function(digit) {
//     return function(op) {
//       return op ? op(digit) : digit;
//     }
//   };
//   var zero = n(0);
//   var one = n(1);
//   var two = n(2);
//   var three = n(3);
//   var four = n(4);
//   var five = n(5);
//   var six = n(6);
//   var seven = n(7);
//   var eight = n(8);
//   var nine = n(9);
  
//   function plus(r) { return function(l) { return l + r; }; }
//   function minus(r) { return function(l) { return l - r; }; }
//   function times(r) { return function(l) { return l * r; }; }
//   function dividedBy(r) { return function(l) { return l / r; }; }

// console.log(seven(times(five())))
// console.log(four(plus(nine())))
// console.log(five(times(seven())))
// console.log(eight(minus(three())))
// console.log(six(dividedBy(two())))