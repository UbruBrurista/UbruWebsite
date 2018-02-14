
  	/* scroll to a div with the ID "scrollTo" by clicking a link with the class "scrollArrow" */
	$('.scrollArrow').click( function() {
    	$('html, body').animate({
          scrollTop: $('#scrollTo').offset().top
     	}, 600);
	});

	/* scroll to the top of the page */
	$('.scrollToTop')
    	$('.scrollToTop').click(function(){
         	$('html,body').animate({ scrollTop: 0 }, 600);
     });

function populateCallback(responseText) {
  console.log("callback");
  console.log(responseText);

  var brews = JSON.parse(responseText);
  console.log(brews);
  console.log(brews.length);

  var myTable = document.getElementById('brewList');

  for (i = 0; i < brews.length; i++) {
    var tr = document.createElement('TR');
    var x = tr.insertCell(0);
    x = tr.insertCell(1);
    x = tr.insertCell(2);
    x = tr.insertCell(3);
    x = tr.insertCell(4);
    x = tr.insertCell(5);

    tr.cells[0].innerHTML = brews[i]['name'];
    tr.cells[1].innerHTML = brews[i]['brew_pressure'];
    tr.cells[2].innerHTML = brews[i]['brew_temp'];
    tr.cells[3].innerHTML = brews[i]['brew_time'];
    tr.cells[4].innerHTML = brews[i]['brew_type'];
    tr.cells[5].innerHTML = '<a href="#">Edit</a>'

    myTable.appendChild(tr);
    }
}

function populateTable(){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 

      console.log(xmlHttp);

      if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
        populateCallback(xmlHttp.responseText);
    }

    console.log("populateTable");

    var theUrl = 'http://buakpsi.com/ubru/drinks/uuid/12345';
    
    xmlHttp.open("GET", theUrl, false); // true for asynchronous 
    xmlHttp.send(null);


}

function sendNewBrew(){

    console.log("sendNewBrew");
    
    var ES = document.getElementById('ES').checked;
    var AM = document.getElementById('AM').checked;
    var name = document.getElementById('drinkname').value;
    var temp = document.getElementById('temperature').value;
    var pressure = document.getElementById('pressure').value;
    var time = document.getElementById('time').value;
    var type = null;

    if(ES == true)
      type = 'ES';
    else 
      type = 'AM';

    var xmlHttp = new XMLHttpRequest();
    var theUrl = 'http://buakpsi.com/ubru/drinks/';
    
    xmlHttp.open("POST", theUrl, true); // true for asynchronous 
    xmlHttp.setRequestHeader('Content-Type', 'application/json');
    xmlHttp.send(JSON.stringify({
      uuid: "123456",
      name: name,
      temp: parseInt(temp),
      pressure: parseInt(pressure),
      time: parseInt(time),
      type: type
    }));
}


