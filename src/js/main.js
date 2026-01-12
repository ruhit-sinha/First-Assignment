// function hello_world ()
// {
//     return 98;
// };
// console.log( hello_world() );

// const ruhit = [1,2,3,4,5];

// for ( let i = 10; i >= ruhit.length; i-- )
// {

// }
// console.log( i );

// const Ruhit = [1,2,3,4,5];
// let i; // Bahar declare kiya

// for ( i = 10; i >= Ruhit.length; i-- ) {
//     // loop chalega
// }

// console.log( i ); // Ab ye kaam karega (Output: 4)

let result = ""; // Yahan hum stars jama karenge

// Loop 1: Bahar wala (Rows / Lines)
// Yeh 3 baar chalega -> Matlab 3 Lines banengi
for (let x = 1; x <= 3; x++) {

    // Loop 2: Andar wala (Columns / Stars)
    // Yeh har line ke liye 5 baar chalega -> Matlab 5 Stars banenge
    for (let j = 1; j <= 5; j++) {
        result = result + "* "; 
    }

    // Jab 5 stars ban jayein, tabhi "Enter" maaro (New Line)
    result = result + "\n"; 
}

console.log( result );

let name = 'Ruhi';
name += 't';
console.log( name );