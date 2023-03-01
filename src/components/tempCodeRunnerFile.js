let testArr = [1,2,3];
let copyTestArr = testArr;
copyTestArr.splice(1,1)
copyTestArr.push("wut")
console.log(testArr)
console.log(copyTestArr)
testArr = [...testArr]
console.log(testArr)