function doClick(e) {
    alert($.label.text);
}
	
	var newUser ="";
	var newPassword ="";
	
function SetLogin()
{
	newUser = $.username.value;
	newPassword = $.password.value;
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

function LoadPage2(){
	var Var_ProductListWindow = Alloy.createController('home').getView();
	Var_ProductListWindow.open();
	// $ProductList.open();
}

$.index.open();