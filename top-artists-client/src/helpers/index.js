/* 
	Helpers
**/



export const convertStringToTag = (string) => {

	if(string && typeof string !== 'undefined') {
		var clean = string.replace(/ /g,"+")
			clean = clean.toLowerCase();
			return clean;
	}
	
}