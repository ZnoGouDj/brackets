module.exports = function check(str, bracketsConfig) {
  let arr = str.split('');
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      if (arr[i] == bracketsConfig[j][0] &&
        arr[i + 1] == bracketsConfig[j][1]) {
        arr.splice(i, 2);
        i = 0;
      }
    }
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      if (arr[i] == bracketsConfig[j][0] &&
        arr[i + 1] == bracketsConfig[j][1]) {
        arr.splice(i, 2);
        i = 0;
      }
    }
  }
  return arr.length == 0;
}

/*
to split string by ('');
to check using cycle, 
IF arr[i] === bracketsConfig[first elem in 1 subarray] AND
IF arr[i+1] === bracketsConfig[second elem in 1 subarray]
OR
IF arr[i] === bracketsConfig[first elem in 2 subarray] AND
IF arr[i+1] === bracketsConfig[second elem in 2 subarray]
and so on
then arr.splice(i, 2)

IF arr.length !== 0, return false
*/

/*
check('()', [['(', ')']]) - true
check('((()))()', [['(', ')']]) - true
check('())(', [['(', ')']]) - false
check('([{}])', [['(', ')'], ['[', ']'], ['{', '}']]) - true
*/