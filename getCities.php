<?php
     header('Content-type: text/plain');
     if ($_GET['state']=="illinois") {
     	print '{identifier:"name",
		items: [
			{name:"Champaign", label:"Champaign"},
			{name:"Chicago", label:"Chicago"},
			{name:"Naperville", label:"Naperville"},
			{name:"Wheaton", label:"Wheaton"}
			]}';
     } else {
     	print  "{identifier:'name', items: [{name:'Anytown', label:'Anytown'}] }";
     }
?>

