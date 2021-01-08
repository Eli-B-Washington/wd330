const links = [
    {
      label: "Week1 notes",
      url: "week1/index.html"
    }
  ]

  var i = 0;
  var length = links.length;

  for (; i < length; ){
    document.getElementById("list").innerHTML += links[i] + "<br>";
    i++;
  }
  