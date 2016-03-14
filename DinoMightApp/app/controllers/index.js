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
	
function CheckLogin()
{
	var UsernameText = $.username.value;
	var PasswordText = $.password.value;
	var correctPassword = "Florin";
	var correctUsername = "Florin";
		
	
	if (
		(
		 UsernameText.toLowerCase() == correctUsername.toLowerCase() 
		 && PasswordText == correctPassword
		 ) 
		|| 
		(
		newUser != "" 
		&& UsernameText.toLowerCase() == newUser.toLowerCase() 
		&& PasswordText.toLowerCase() == newPassword.toLowerCase()
	    )
		
	)
	{ LoadPage2();
		}
	else{
		$.label.text="login failed, please try again";
		$.label.color="red";
	}
	}
function LoadPage2(){
	var Var_ProductListWindow = Alloy.createController('home').getView();
	Var_ProductListWindow.open();
	// $ProductList.open();
}
function gohome(){
	LoadPage2();
}

$.index.open();