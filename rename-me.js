//alert("JavaScript works!");

//Brandee Ogunjobi
//SDI Term 1408
// Project 4



//Does a string follow a 123-456-7890 pattern like a phone number?

var numberPattern = function (pattern) {
		var re = "/^\(?(\d{3})\)?[-]?(\d{3})[-]?(\d{4}$/",
					test;
					
			test = regExp.test(pattern)
		
		if (test) {
			return(pattern + " Patter is a phone number. ");
		}
		else {
			return(pattern + " Pattern is not a valid number. ");
			}
			
};
		
		
		

	