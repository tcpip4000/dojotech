
function processForm ()
{
	var custForm = dijit.byId("my_form_id");	
	var firstInvalidWidget = null;
	//debugger;
	dojo.every(custForm.getDescendants(), 
			function(widget){
				firstInvalidWidget = widget;
				return !widget.isValid || widget.isValid();
				//return !widget.isValid || widget.isValid();
			});

	if (firstInvalidWidget != null) {
		firstInvalidWidget.focus();
	} else {
		custForm.submit();
	}
}

