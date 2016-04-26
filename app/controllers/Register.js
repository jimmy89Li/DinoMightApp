function NewRegister() {
	
}
function goBack(e) {
	var backButton = Ti.UI.currentWindow;
	backButton.addEventListener('android:back', function (e) {
	    Ti.UI.fireEvent('backButton_back_event');
	});
}
