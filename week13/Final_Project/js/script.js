
function goFunction(){
var obj, dbParam, xmlhttp, myObj, x, txt = "";

var year = document.getElementById("year").value.toString();
console.log(year);
var pitching = document.getElementById("pitching").value.toString();
console.log(pitching);




var queryString = "?results='5'&sports_code='mlb'&sort_column=" + pitching +"&season=" + year + "&game_type='R'";
var url = "https://mlb-data.p.rapidapi.com/json/named.leader_pitching_repeater.bam"

fetch(url + queryString,{
"method": "GET",
"headers": {
"x-rapidapi-key": "c1eed3bc67msh45ea31acdbf685dp1b3b6bjsn638c0b567e02",
"x-rapidapi-host": "mlb-data.p.rapidapi.com"
}
})
.then(response => response.json())
.then(data => {
console.log('Success:', data);
var myObj = (data.leader_pitching_repeater.leader_pitching_mux.queryResults.row);

i = 0;
for (x = 0; x < 5; x++) {


i++;
txt += "<table>"
txt += "<th>" + "Name" + "</th>";
txt += "<th>" + pitching + "</th>";
var answer = myObj[x][pitching];

txt += "<tr><td>" + myObj[x].name_display_first_last + "</td>";
txt += "<td>" + answer + "</td></tr>";

txt += "</table>";


document.getElementById("result" + i.toString()).innerHTML = txt;
txt = "";
}
})
.catch(err => {
console.error(err);
});
}


function goFunction2(){

var obj, dbParam, xmlhttp, myObj, x, txt = "";

var year = document.getElementById("year").value.toString();
console.log(year);
var hitting = (document.getElementById("hitting").value).toString();
console.log(hitting);


var queryString2 = "?game_type='R'&sort_column=" + hitting + "&results='5'&season=" + year +"&sports_code='mlb'"
var url2 = "https://mlb-data.p.rapidapi.com/json/named.leader_hitting_repeater.bam"
console.log(queryString2 + url2);

fetch(url2 + queryString2,{
"method": "GET",
"headers": {
"x-rapidapi-key": "c1eed3bc67msh45ea31acdbf685dp1b3b6bjsn638c0b567e02",
"x-rapidapi-host": "mlb-data.p.rapidapi.com"
}
})
.then(response => response.json())
.then(data => {
console.log('Success:', data);
var myObj = (data.leader_hitting_repeater.leader_hitting_mux.queryResults.row);


i = 6;
for (x = 0; x < 5; x++) {



txt += "<table>"
txt += "<th>" + "Name" + "</th>";
txt += "<th>" + hitting + "</th>";
var answer = myObj[x][hitting];

txt += "<tr><td>" + myObj[x].name_display_first_last + "</td>";
txt += "<td>" + answer + "</td></tr>";

txt += "</table>";  


document.getElementById("result" + i.toString()).innerHTML = txt;
txt = "";
i++;
}
})
.catch(err => {
console.error(err);
});
}

function toggleNav(id) {
var updateElement1 = document.getElementById(id);
//toggle adds a class if it's not there or removes it if it is.
updateElement1.classList.toggle("open");
}
