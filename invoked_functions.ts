var names : string [] = ['Jordan', 'Paul', 'Adam'];
var counter : number = 0;

(function() {
	for(let name in names) {
		counter++;
	}
})();

console.log(counter);