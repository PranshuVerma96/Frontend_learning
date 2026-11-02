const myArr = []
// %DebugPrint(myArr)


// continious, Holey
// SMI (small integer)
// packed Element
// Double (float , sting, function)

const ArrTwo = [1,2,3,4,5]
// Packed_smi element

ArrTwo.push(4.5)
// packed _double _elements

ArrTwo.push('9')
// packed _elements

ArrTwo[10] = 11
// Holey_elements
console.log(ArrTwo);
console.log(ArrTwo.length);
console.log(ArrTwo[9]);

// bound Check
// hasOwnProperty(arrTwo, 9)
// hasOwnProperty(arrTwo.prototype, 10)
// hasOwnProperty(Object.prototype, 10)

// holes are very expensive in js 

const arrThree = [1,2,3,4,5]
console.log(arrThree[8]);
console.log(arrThree[2]);

//SMI > double > Packed

// H_smi > H_>double > H_packed

const arrFour =  new Array(3)
// just 3 holes . HOLEY_ SMI_Elements
arrFour[0] = '1' // hoely elements

arrFour[1] = '2' // hoely elements
arrFour[2] = '3' // hoely elements

const arrFive =  []

arrFive.push('1') // packed_elements
arrFive.push('3') // packed_elements

const arrSix = [1,2,3,4,5]
arrSix.push(NaN)

// for , for-of. forEach





