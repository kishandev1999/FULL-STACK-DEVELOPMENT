function area(len,wid){
	area =len*wid;
	return area
}
area(10,15);
console.log(area)

//Example 2
function area2(len1,wid2){
	return len1*wid2;
}
var rectang=[];
rectang.push(area2(1,2));
rectang.push(area2(1,2));
rectang.push(area2(1,2));
console.log(rectang);
//Bank balance checking code:
var myAccountBalance = 5000;
function bal_check(priceOfSale){
	if (priceOfSale <= myAccountBalance){
		console.log("you can buy the shit man");
		myAccountBalance -= priceOfSale;
		console.log(myAccountBalance);
	}
	else{
		console.log("you can't buy..so say bye");
	}
	return priceOfSale;
}
bal_check(700);
console.log(myAccountBalance);

// Apply for credit card:
var balanceInAccount = 5000;
var transaction = function(itemAmount){
	if(itemAmount < balanceInAccount){
		console.log("you purchased this");
		console.log(balanceInAccount -= itemAmount)
	} else{
		console.log("insufficient balance");
	}}
	var ownerDetails = function(firstName,lastName){
		console.log("Hi,Welcome" + firstName +lastName);
}
var applyForCreditCard = function(Apply){
	if (Apply=="yes"){
		console.log("You applied sucessfully");
	}else{
		console.log("sorry you rejected your card");
	}
} 
var cardInfo=[];
cardInfo.push(transaction(10));
cardInfo.push(ownerDetails("Kishan","Dev"));
cardInfo.push(applyForCreditCard("yes"));
console.log(cardInfo);
