$(document).ready(function(){

var rates = {};

function getRates() {
	    $.ajax({
	        url: 'http://data.fixer.io/api/latest?access_key=3976fa196d96a58384bb83d10d2a28f6',
	        dataType: 'jsonp',
	        success: function(json) {
	            rates.GBP = json.rates.GBP;
	            rates.USD = json.rates.USD;
	            
	        },
	    	fail: function(xhr, statusText, body) {
	      	console.log(body);
	    	}
	    });	
	};

	document.getElementById("button").addEventListener("click", function(){
		var from = $("#base").val();
	    var to = $("#to").val();
	    var amount = $("#amount").val();

	    if (from == to){
	    	document.getElementById("result").value = amount;
	    } else if (from == "EUR" && to == "USD") {
	    	document.getElementById("result").value = (amount * rates.USD).toFixed(3);
	    } else if (from == "EUR" && to == "GBP"){
	    	document.getElementById("result").value = (amount * rates.GBP).toFixed(3);
	    } else if (from == "GBP" && to == "EUR"){
	    	document.getElementById("result").value = (amount / rates.GBP).toFixed(3);
	    } else if (from == "USD" && to == "EUR"){
	    	document.getElementById("result").value = (amount / rates.USD).toFixed(3);
    	} else if (from == "GBP" && to == "USD"){
	    	document.getElementById("result").value = (amount / rates.GBP * rates.USD).toFixed(3);
	    } else if (from == "USD" && to == "GBP"){
	    	document.getElementById("result").value = (amount / rates.USD * rates.GBP).toFixed(3);
	    }


	});	

	getRates();

});

