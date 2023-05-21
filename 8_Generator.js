//Generator Function
// in side prototype we have
//--> Next() --> next allows to execute inside function
//--> throw()
//--> return()
// any generator will have value and done property done 
//will not be set to true when all code in generator got completed
// Usecase we can create infinite loop
function* sampleGenerator(){
    yield 1;
    yield 2;
    yield 3;
}
const genobj = sampleGenerator();
const obj = genobj.next();
 console.log(obj);
//Output: { value: 1, done: false }


 // gen function we cna write infinite times with generators
 function* genID(){
    let id = 0;
    while(true){
        yield id;
        id++
    }
 }
 const a = genID();
 console.log(a.next());
 console.log(a.next());
 console.log(a.next());
 console.log(a.next());