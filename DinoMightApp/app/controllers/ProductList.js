function LoadPage1() {
	var Var_Index = Alloy.createController('home').getView();
    Var_Index.open();
}

function doClick(e) {
    alert("You clicked!");
}