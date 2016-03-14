function doClick(e) {
    alert("You clicked!");
}

var newUser = "";
var newPassword = "";

function SetLogin() {
	var newUser = $.username.value;
	var newPassword = $.password.value;
}

function CheckLogin() {
	var UsernameText = $.userName.value;
	var PasswordText = $.password.value;
	var correctPassword = "pass";
	var correctUsername = "user";
	
	var newUsername;
	var newPassword;
	
	if(
		(UsernameText == correctUsername && PasswordText == correctPassword)
		||
		(newUser != "" && UsernameText == newUser && newPassword != "" && PasswordText == newPassword)
	)
		{
			LoadPage2();
		}
	else {
		alert("Incorrect login!");
	}
}

function LoadPage2() {
	var Var_ProductListWindow = Alloy.createController('dinomight').getView();
    // For Alloy projects, you can pass context
    // to the controller in the Alloy.createController method.
    // var win2 = Alloy.createController('win2', {foobar: 42}).getView();
    Var_ProductListWindow.open();
}

$.index.open();


