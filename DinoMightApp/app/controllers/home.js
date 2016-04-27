function nextPage() {
	var Var_ProductListWindow = Alloy.createController('ProductList').getView();
    // For Alloy projects, you can pass context
    // to the controller in the Alloy.createController method.
    // var win2 = Alloy.createController('win2', {foobar: 42}).getView();
    Var_ProductListWindow.open();
}

function infoPage() {
	var Var_InfoPageWindow = Alloy.createController('Info').getView();
	Var_InfoPageWindow.open();
}
function videoPage() {
	var Var_VideoPageWindow = Alloy.createController('Video').getView();
	Var_VideoPageWindow.open();
}
function exercisePage() {
	var Var_ExercisePageWindow = Alloy.createController('Exercise').getView();
	Var_ExercisePageWindow.open();
}
function statisticsPage() {
	var Var_StatisticsPageWindow = Alloy.createController('Statistics').getView();
	Var_StatisticsPageWindow.open();
}