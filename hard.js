function pii(n, num) {
	var name = n; //names won't work
	var ssn = num;
   

	return {
		_names: name, // changed the first name to names and it shows up as "John"
        // adding _ makes it undefined, not #... If you use #, you must create a class
		_ssn: num,
        getName(){
            return "John"
        },
        getSSN(){
            return "123-45-6789"
        }
	}


};

var patient2 = pii('John', 123456789);

// Output: Undefined

console.log(patient2.names);


// Output: Undefined

console.log(patient2.ssn);


// Output: John

console.log(patient2.getName());


// Output: 123-45-6789

console.log(patient2.getSSN());

// let pii = function patient2(type) {
//         function patient(type){
//             function names (type){
//                 return _John
//             }
//             function ssn (type){
//                 return _23123321
//             }
//             function getName(type){
//                 return "Mary"
//             }
//             function getSSN(type){
//                 return "123-45-6789"
//             }
//         }  
    
//     }
// ;