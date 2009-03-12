
function populateCity()
{
	var selectedState = dijit.byId("state_id").getValue();
	var url_destination = "getCities.php?state=" + selectedState;
	var cityStore = new dojo.data.ItemFileReadStore({url: url_destination});
	
	var city = dijit.byId("city_id");
	city.setDisplayedValue("");
	city.store = cityStore;

	return;
}


