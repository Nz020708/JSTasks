//1st task

// let A=prompt('Please enter the first value:');
// let B=prompt('Please enter the second value:');
// console.log(`Answer: ${A/B}`,`Remainder:${A%B}`);

//2nd task

//1st way
//  let A=prompt('Please enter the first value:');
//  let B=prompt('Please enter the second value:');
//   const temp=A;
//   A=B;
//   B=temp;
//   console.log(`Last value of A:${A}`,`Last value of B:${B}`);
//2nd way
// let A=prompt('Please enter the first value:');
// let B=prompt('Please enter the second value:');
// [A,B]=[B,A]
//  console.log(`Last value of A:${A}`,`Last value of B:${B}`);

//3rd task

// let A = +prompt('Please enter the first value:');
// while (A === "" || A===0 ) {
//     A = +prompt('Value can not be zero or empty.Please try again:');

// }
// let B = +prompt('Please enter the second value:');
// while ( B === "" || B===0) {
//     B = +prompt('Value can not be zero or empty.Please try again:');

// }
// let C = +prompt('Please enter the third value:');
// while ( C === "" || C===0) {
//     C = +prompt('Value can not be zero or empty.Please try again:');

// }

// let result=(C-B)/A;

// console.log(` Answer: ${result}`);

//4th task

// let A=+prompt('Please enter the first value:');
// let B=+prompt('Please enter the second value:');
// if (A>B) {
//     console.log(A+B);
// }else if (A===B) {
//     console.log(A*B);
// }
// else{
//     console.log(A-B);
// }

//5th

// let A=+prompt('Please enter a:');
// let B=+prompt('Please enter b:');
// let C=+prompt('Please enter c:');

// let root1;
// let root2;

// const discriminant=B*B-4*A*C;
// if (discriminant>0) {
//     root1=(-B+Math.sqrt(discriminant))/2*A;
//     root2=(-B-Math.sqrt(discriminant))/2*A;
//     console.log(`The roots of quadratic equation are: ${root1} and ${root2}`);
// }
// else if (discriminant==0) {
//     root1=root2=-B/2*A;
//     console.log(`The roots of quadratic equation are: ${root1} and ${root2}`);
    
// }
// else{
//     let realPart=(-B/2*A).toFixed();
//     let imaginaryPart=(Math.sqrt(-discriminant)/2*A) ;
//     console.log(`The roots of quadratic equation are: (${realPart} + ${imaginaryPart}i) and (${realPart} - ${imaginaryPart}i)`);
// }


//6th
let A=prompt('Please enter the number:');
if (A.length!==2) {
    alert('You must enter two-digit number!')
}
else{
if (A.startsWith('2')) {
    console.log('twenty');
}
if (A.startsWith('3')) {
    console.log('thirty');
}
if (A.startsWith('4')) {
    console.log('fourty');
}
if (A.startsWith('5')) {
    console.log('fifty');
}
if (A.startsWith('6')) {
    console.log('sixty');
}
if (A.startsWith('7')) {
    console.log('seventy');
}
if (A.startsWith('8')) {
    console.log('eightty');
}
if (A.startsWith('9')) {
    console.log('ninety');
}
if (A==10) {
    console.log('ten');
}

if (A==11) {
    console.log("eleven");
}
if (A==12) {
    console.log("twelve");
}
if (A==13) {
    console.log("thirteen");
}
if (A==14) {
    console.log("fourteen");
}
if (A==15) {
    console.log("fifteen");
}
if (A==16) {
    console.log("sixteen");
}
if (A==17) {
    console.log("seventeen");
}
if (A==18) {
    console.log("eightteen");
}
if (A==19) {
    console.log("nineteen");
}

if (A.endsWith('1',2)==true && !A.startsWith('1')) {
    console.log('one');
}
if (A.endsWith('2',2)==true && !A.startsWith('1')) {
    console.log('two');
}
if (A.endsWith('3',2)==true && !A.startsWith('1')) {
    console.log('three');
}
if (A.endsWith('4',2)==true && !A.startsWith('1')) {
    console.log('four');
}
if (A.endsWith('5',2)==true && !A.startsWith('1')) {
    console.log('five');
}
if (A.endsWith('6',2)==true && !A.startsWith('1')) {
    console.log('six');
}
if (A.endsWith('7',2)==true && !A.startsWith('1')) {
    console.log('seven');
}
if (A.endsWith('8',2)==true && !A.startsWith('1')) {
    console.log('eight');
}
if (A.endsWith('9',2)==true && !A.startsWith('1')) {
    console.log('nine');
}
}


//7th task

// let x=+prompt('Please enter x:');
// let y=+prompt('Please enter y:');
// let r=+prompt('Please enter radius of circle:');
// let xCircCenter=0;
// let yCircCenter=0;
// // r=Math.sqrt(x*x+y*y);
// let d=Math.sqrt(Math.pow(xCircCenter-x,2)+Math.pow(yCircCenter+y,2)) //distance
// if (d>r) {
//     console.log(`The point (${x},${y}) is outside of circle.`);
// }
// else if (d==r) {
//     console.log(`The point (${x},${y}) is on the circle.`);
// }
// else {
//     console.log(`The point (${x},${y}) is inside of circle.`);
// }
