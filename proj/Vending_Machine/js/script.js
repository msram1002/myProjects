function addPenny(){
		var pennyValue = document.getElementById("Update").value;
		pennyValue= Number(pennyValue);
        document.getElementById("Update").value = Number(0.01 + pennyValue).toFixed(2);
        if(document.getElementById("Update").value >= 0.50 && document.getElementById("Update").value < 0.65){
        	document.getElementById("choco").disabled= false;
        	alert("You can now Purchase Chocolate");
        } else if (document.getElementById("Update").value >= 0.65 && document.getElementById("Update").value < 0.99){
        	document.getElementById('choco').disabled = false;
        	document.getElementById('chips').disabled = false;
        	alert("You can now Purchase Chocolate or Chips");
        } else if (document.getElementById("Update").value >= 1.00){
        	document.getElementById('choco').disabled = false;
        	document.getElementById('chips').disabled = false;
        	document.getElementById('coke').disabled = false;
        	alert("You can now Purchase Chocolate or Chips or Coke");
        }
}
function addNickel(){
		var NickelValue = document.getElementById("Update").value;
		NickelValue = Number(NickelValue);
        document.getElementById("Update").value = Number(0.05 + NickelValue).toFixed(2);
        if(document.getElementById("Update").value >= 0.50 && document.getElementById("Update").value < 0.65){
        	document.getElementById("choco").disabled= false;
        	alert("You can now Purchase Chocolate");
        } else if (document.getElementById("Update").value >= 0.65 && document.getElementById("Update").value < 0.99){
        	document.getElementById('choco').disabled = false;
        	document.getElementById('chips').disabled = false;
        	alert("You can now Purchase Chocolate or Chips");
        } else if (document.getElementById("Update").value >= 1.00){
        	document.getElementById('choco').disabled = false;
        	document.getElementById('chips').disabled = false;
        	document.getElementById('coke').disabled = false;
        	alert("You can now Purchase Chocolate or Chips or Coke");
        }
}
function addDime(){
		var dimeValue = document.getElementById("Update").value;
		dimeValue = Number(dimeValue);
        document.getElementById("Update").value = Number(0.10 + dimeValue).toFixed(2);
        if(document.getElementById("Update").value >= 0.50 && document.getElementById("Update").value < 0.65){
        	document.getElementById("choco").disabled= false;
        	alert("You can now Purchase Chocolate");
        } else if (document.getElementById("Update").value >= 0.65 && document.getElementById("Update").value < 0.99){
        	document.getElementById('choco').disabled = false;
        	document.getElementById('chips').disabled = false;
        	alert("You can now Purchase Chocolate or Chips");
        } else if (document.getElementById("Update").value >= 1.00){
        	document.getElementById('choco').disabled = false;
        	document.getElementById('chips').disabled = false;
        	document.getElementById('coke').disabled = false;
        	alert("You can now Purchase Chocolate or Chips or Coke");
        }
}
function addQuarter(){
		var quaValue = document.getElementById("Update").value;
		quaValue = Number(quaValue);
        document.getElementById("Update").value = Number(0.25 + quaValue).toFixed(2);
        if(document.getElementById("Update").value >= 0.50 && document.getElementById("Update").value < 0.65){
        	document.getElementById("choco").disabled= false;
        	alert("You can now Purchase Chocolate");
        } else if (document.getElementById("Update").value >= 0.65 && document.getElementById("Update").value < 0.99){
        	document.getElementById('choco').disabled = false;
        	document.getElementById('chips').disabled = false;
        	alert("You can now Purchase Chocolate or Chips");
        } else if (document.getElementById("Update").value >= 1.00){
        	document.getElementById('choco').disabled = false;
        	document.getElementById('chips').disabled = false;
        	document.getElementById('coke').disabled = false;
        	alert("You can now Purchase Chocolate or Chips or Coke");
        }
}

function purChoco(){
	var currentVal = document.getElementById("Update").value;
	//currentVal = Number(currentVal);
	alert("Thank you for purchasing CHOCOLATE!!!. Have a Great Day !!!")
	document.getElementById("Update").value = Number(currentVal - 0.50).toFixed(2);

	if(document.getElementById("Update").value > 0.00 && document.getElementById("Update").value < 0.50  ){
		document.getElementById("choco").disabled= true;
		document.getElementById("chips").disabled= true;
		document.getElementById("coke").disabled= true;
		var response = confirm("You balance is less than $0.50, Do you want to further insert coins [OK] or get the change [Cancel]?");
		if(response == true){
			alert("Please select the denomination for inserting the coins")
		}else if (response == false){
			document.getElementById("changeOut").value = Number(document.getElementById("Update").value).toFixed(2);
			document.getElementById("Update").value = Number(0.00).toFixed(2);
			alert("Please collect the change: $" + document.getElementById("changeOut").value);
		}
	}else if(document.getElementById("Update").value == 0.00){
		alert("Your balance is $0.00. Please select the denomination to continue purchasing");
		document.getElementById("choco").disabled= true;
		document.getElementById("chips").disabled= true;
		document.getElementById("coke").disabled= true;
	}
}

function purChips(){
	var currentVal = document.getElementById("Update").value;
	//currentVal = Number(currentVal);
	alert("Thank you for purchasing CHIPS. Have a Great Day !!!")
	document.getElementById("Update").value = Number(currentVal - 0.75).toFixed(2);

	if(document.getElementById("Update").value > 0.00 && document.getElementById("Update").value < 0.75){
		document.getElementById("chips").disabled= true;
		if(document.getElementById("Update").value >= 0.50)
			//document.getElementById("choco").disabled= true;
			//document.getElementById("coke").disabled= true;
			var response = confirm("You balance is less than $0.75, but greater than 0.50\n Do you want to purchase CHOCOLATE [OK] or get the change [Cancel]?");
			if(response == true){
				purChoco();
				//alert("Please select the denomination for inserting the coins")
				}	else if (response == false){
			document.getElementById("changeOut").value = Number(document.getElementById("Update").value).toFixed(2);
			document.getElementById("Update").value = Number(0.00).toFixed(2);
			alert("Please collect the change: $" + document.getElementById("changeOut").value);
		}
	}else if(document.getElementById("Update").value == 0.00){
		alert("Your balance is $0.00. Continue inserting coins");
		document.getElementById("choco").disabled= true;
		document.getElementById("chips").disabled= true;
		document.getElementById("coke").disabled= true;
	}
}

function purCoke()
{
	var currentVal = document.getElementById("Update").value;
	//currentVal = Number(currentVal);
	alert("Thank you for purchasing COKE. Have a Great Day !!!")
	document.getElementById("Update").value = Number(currentVal - 1.00).toFixed(2);
	if(document.getElementById("Update").value > 0.00 && document.getElementById("Update").value < 1.00)
	{
		document.getElementById("coke").disabled= true;
		if(document.getElementById("Update").value > 0.50 && document.getElementById("Update").value <= 0.75 )
		{
			var response = confirm("You balance is less than $1.00, but greater than 0.75\n Do you want to purchase CHIPS [OK]?");
			if(response == true)
				{
					purChips();
					//alert("Please select the denomination for inserting the coins")
				} 	
				else if (response == false)
					{
						var response2 = confirm("How about a CHOCOLATE?[OK] or Get you balance back?");
						if(response2 == true)
							{
								purChoco();
							} 
								else if (response2 == false)
								{
									document.getElementById("changeOut").value = Number(document.getElementById("Update").value).toFixed(2);
									document.getElementById("Update").value = Number(0.00).toFixed(2);
									alert("Please collect the change: $" + document.getElementById("changeOut").value);
								}	
					}
		}
		else if(document.getElementById("Update").value == 0.50)
			{
				document.getElementById("choco").disabled= true;
				document.getElementById("chips").disabled= true;
				var response3 = confirm("For 0.50, you can still get a CHOCOLATE, Do you want to purchase[OK] or get the balance back?[CANCEL]");
				if(response3 == true)
				{
					purChoco();
				}
				else if (response3 == false)
				{
					document.getElementById("changeOut").value = Number(document.getElementById("Update").value).toFixed(2);
					document.getElementById("Update").value = Number(0.00).toFixed(2);
					alert("Please collect the change: $" + document.getElementById("changeOut").value);		
				}
			}
		else if	(document.getElementById("Update").value < 0.50)
			{
				document.getElementById("choco").disabled= true;
				document.getElementById("chips").disabled= true;
				alert("You only have: $" + document.getElementById("Update").value + " No further purchase allowed!");
				document.getElementById("changeOut").value = Number(document.getElementById("Update").value).toFixed(2);
				document.getElementById("Update").value = Number(0.00).toFixed(2);
				alert("Please collect the change: $" + document.getElementById("changeOut").value);
			}
	}	
	else if(document.getElementById("Update").value == 0.00)
	{
		alert("Your balance is $0.00. Insert more coins dude!");
		document.getElementById("choco").disabled= true;
		document.getElementById("chips").disabled= true;
		document.getElementById("coke").disabled= true;
	}
}
