//////////////////////////////////////////////////////////
// ============ Data Collections - Objects ============ //
//////////////////////////////////////////////////////////

///////////////////
// Object Syntax //
///////////////////

const vehicle = {
    color: "blue",
    hp: 4000,
    year: 1989,
    "active registration": true
  }
  
  // Accessing properties of an object
  
  console.log( vehicle["color"] ) // square bracket notation
  console.log( vehicle.color ) // dot notation
  
  /*
    A property name that has a space or a hyphen, that starts with a number, 
    or that is held inside a variable can only be accessed using the bracket notation.
  */
  
  console.log( vehicle["active registration"] )
  // console.log( vehicle.active registration ) // Will give you a SyntaxError
  
  console.log("-------------")
  
  
  /////////////////
  // Unique Keys //
  /////////////////
  
  // An object can not have more than one of the same key
  
  const borough = {
    name: "Brooklyn",
    name: "The Bronx" // This line will overrite the line above
  }
  
  console.log(borough); // { name: "The Bronx" }
  console.log("-------------")
  
  
  ///////////////////////////////////////////
  // Changing Object Properties and Values //
  ///////////////////////////////////////////
  
  const person = {
    name: 'bryan',
    isLearner: false
  }
  
  person.name = 'jordan'; // changing an existing property value
  person.class = 31; // adding a new key:value pair
  delete person.isLearner; // removing an existing property
  console.log(person)
  console.log("-------------")
  
  
  ////////////////////////////////////////////////////////
  // Evaluating variables using Square Bracket Notation //
  ////////////////////////////////////////////////////////
  
  const person2 = {
    name: 'bryan'
  }
  
  const donkeyKong = 'name';
  
  console.log(person2['name']) // bryan
  console.log(person2.name) // bryan
  console.log(person2[donkeyKong]) // bryan
  
  console.log("-------------")
  
  
  ///////////////////////////////
  // Iterating through Objects //
  ///////////////////////////////
  
  for (const key in vehicle) {
    console.log(key, vehicle[key])
  }
  console.log("-------------")
  
  
  ///////////////////////////////////////////////
  // Accessing values inside of nested objects //
  ///////////////////////////////////////////////
  
  const vehicle2 = {
    color: "blue",
    year: 1989,
    make: "Audi",
    engine: {
      cylinders: 6,
      hp: 4000,
      size: 3.2
    }
  }
  
  console.log(vehicle2['engine']['size']); // Using square bracket notation
  console.log(vehicle2.engine.size); // Using dot notation
  console.log("-------------")
  
  
  ////////////////////////////////////////////////////////////
  // Comparing Data Collections / Comparing Reference Types //
  ////////////////////////////////////////////////////////////
  
  /*
    In JavaScript, Objects and Arrays are considered 'Reference Types', so by comparing two
    Objects or Arrays, you aren't comparing what's inside of them, you're comparing their location
    in memory
  */
  
  const car1 = {
    color: "blue",
    year: 1989,
    make: "Audi",
    engine: {
      cylinders: 6,
      hp: 4000,
      size: 3.2
    }
  }
  
  const car2 = {
    color: "blue",
    year: 1989,
    make: "Audi",
    engine: {
      cylinders: 6,
      hp: 4000,
      size: 3.2
    }
  }
  
  console.log(car1 == car2); // false
  console.log("-------------")