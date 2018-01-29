//Boolean
let paidAccount : boolean = false;

//Number
let age : number = 33;
let taxRate : number = 7.5;

//String
var fullName : string = "Paul Gibbs";

//Array
var ages : number[] = [33, 28, 11];

//Tuple
let player : [number, string, number, number];
player = [3, 'Corerra', 333, 33];

//Enum
enum ApprovalStatus {Approved, Pending, Rejected};
let job : ApprovalStatus = ApprovalStatus.Pending;

//Any
var apiData : any[] = [123, 'Paul', false];

//Void
function printOut(msg: string) : void {
	console.log(msg);
}