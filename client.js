const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

//loop through employee array
//create a function to loop through the employee array and 


//   for (let i = 0; i < employees.length; i++) {
//     console.log( employees[i] );
//     adjustingObjects( employees[i] )
//   };

// // funtion to create a new object 
//  function adjustingObjects( object ){
//    const newList = {
//      name: object.name,
//      bonusPercentage: calBonus,
//      }
//      return newList
//    }
// //  }

// function to calculate bonus
let bonus = 0;
function calBonus( array ){
  for ( [i] of array ){
    let rating = array.reviewRating;
  if ( rating === 3 ){
    bonus = array.annualSalary * 0.040;
    console.log( 'Review of 3' );
  }else if( rating === 4 ){
    bonus = array.annualSalary * .060;
    console.log( 'Review of 4' );
  }else if( rating === 5 ){
    bonus = array.annualSalary * 0.10;
    console.log( 'Review of 5' );
  }else( console.log( 'No bonus' ));
}
  return bonus
}

// loop(  employees );

// function loop ( array ) {
//   for ( i=0; i<array.length; i++ ){
//   // if ( i.reviewRating = 3 )
// console.log ( [i] );
//   if ( i=== 3 ) {
//     console.log ( [i],'we found aticus!' );
    
//   }
// }
// }

// console.log ( employees[0].reviewRating );

  // function newEmployee(){
  //   if (employees[i].reviewRating === 5) {
  //   }return employees[i]
  //   //  else if () {
      
  //   // }
  // }
  
  // console.log( newEmployee );
  

// newEmployee( name.malayal )
// newEmployee( name.Robert )
// newEmployee(  name. )
// newEmployee(  )

// Let exampleEmployee = newEmployee;
