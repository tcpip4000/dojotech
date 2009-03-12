
function userNameOnChange() 
{
	//var userName = document.getElementById('username_id').value;
	var userName = dijit.byId('username_id').getValue();
	//debugger;
	//alert(userName);
	if (userName == "") {
		console.log("username is empty");
		return;
	}
	
	dojo.xhrGet({
		url: "validateUserName.php?userName=" + userName,
		//handleAs: "json",
		handle: userNameValidationHandler
	});
}

function userNameValidationHandler(response) 
{
	dijit.byId("username_id").displayMessage(); // Clear previous messages

	alert(response);
	//if (!response.valid) {
	//	var errorMessage = "user name already taken";
	//	dijit.byId("username_id").displayMessage(errorMessage);
	//}
}

