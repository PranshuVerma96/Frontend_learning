// const myArr = [];
// %DebugPrint(myArr)

// continious , Holey array 

// SMI (small integer)
//Packed element
// Double (float, sting , function)

const arrTwo = [1,2,3,4,5] // PACKED SMI ELEMENT

arrTwo.push(6.0)
// PACKED DOUBLE ELEMENTS

arrTwo.push('8') // PACKED ELEMENT

arrTwo[10] = 11 //HOLEY ELEMENTS

console.log(arrTwo);
console.log(arrTwo.length);
console.log(arrTwo[9]);

// bound check 
// hasOwnPropety(arrTwo , 9)
// hasOwnProprty(arrTwo.prototype , 10)
// hasOwnProprty(Object.prototype , 10) holes are very expensive in javaScript


const arrThree = [1,2,3,4,5]
console.log(arrThree[3]);

// SMI > Double > Packed 
// H_Smi > H_Double > H_Packed

const arrFour =  new Array(3)
//just 3 holes. holey_smi_Elements

arrFour[0] = '1' // HOLEY ELEMNTS 
arrFour[1] = '2' 
arrFour[2] = '3' 


const arrFive = [] 
arrFive.push('1') // Packed elements


const arrSix =  [1 , 2 , 3 , 4 , 5]
arrSix.push(Infinity) // NaN

//modern optimization in js 

// for , forof, forEach


