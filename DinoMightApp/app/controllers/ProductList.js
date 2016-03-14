function LoadPage1() {
	var Var_Index = Alloy.createController('index').getView();
    Var_Index.open();
}

function doClick(e) {
    alert("You clicked!");
}