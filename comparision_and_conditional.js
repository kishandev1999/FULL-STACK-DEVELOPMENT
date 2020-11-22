var account_balance = 300;
var nike_shoes = 250;
if(nike_shoes <= account_balance){
	// 
	account_balance -= nike_shoes;
	console.log("You can buy your shoes bro!");
	console.log("Your balance left" + account_balance);
}
else{
	console.log("fuck! dude you need more money");
}

//exercise 2: You have 50 rs coupon

var myaccount_bal = 950;
var add_shoes = 1000;
var coupon = 50;
if (add_shoes <= myaccount_bal){
	myaccount_bal -= add_shoes;
	console.log("dude you own the shoes");
	console.log("grrererrrr your balanceleft is" + myaccount_bal);
}
else if (add_shoes <= myaccount_bal +coupon)
{
	myaccount_bal -= (add_shoes-coupon);
	console.log("anyway you are buying");
	console.log("ufff ur ballance" + myaccount_bal);
}
else{
	console.log("Buhaha u cant buy man!");
}
//logical operators

if(1==1 && 2==2)
{
	console.log("Hi ra");
}
else{
	console.log("bye ra");
}
// case 2:
if("joe" == "joe" && "Dev" == "Dev" || "sam" == "sem"){
	console.log("all matched");
}
else{
	console.log("not matched");
}
// most beautiful cat code:
var cat1 = 11;
var cat2 = 11;
var cat3 = 10;
if (cat1>cat2 && cat1>cat2){
	console.log("cat1 is beautiful");
}
else if(cat1==cat2 || cat1 == cat3)
{
	console.log("cat1 and cat2 are equal");
}
else if(cat2>=cat1 && cat2>=cat3){
	console.log("cat2 is beautiful");
}
else
{
	console.log("cat3 is beautiful");
}









