function nextPage() {
	var Var_ProductListWindow = Alloy.createController('ProductList').getView();
    // For Alloy projects, you can pass context
    // to the controller in the Alloy.createController method.
    // var win2 = Alloy.createController('win2', {foobar: 42}).getView();
    Var_ProductListWindow.open();
}
