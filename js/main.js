const links = [
    {
    label: "Week1 assignments",
    url: "week1/index.html"
}
,
{
    label: "Week2 assignments",
    url: "week2/index.html"
}
,
{
  label: "Week3 assignments",
  url: "week3/index.html"
}
,
{
  label: "Week4 assignments",
  url: "week4/index.html"
}
,
{
  label: "Week5 assignments",
  url: "week5/index.html"
}
,
{
  label: "Week6 assignments",
  url: "week6/index.html"
}
,
{
  label: "Week7 assignments",
  url: "week7/index.html"
}
,
{
  label: "Week8 assignments",
  url: "week8/index.html"
}
,
{
  label: "Week9 assignments",
  url: "week9/index.html"
}
]

  for (var i = 0; i <links.length; i++) {
    // Create DOM element
    var li = document.createElement('li');
        
    // Set text of element
    li.textContent = "";

    // Append this element to its parent
    document.getElementById('list').appendChild(li);


    var a = document.createElement('a');
      var linkText = document.createTextNode(links[i].label);
      a.appendChild(linkText);
      a.title = links[i].label;
      a.href = links[i].url;


      li.appendChild(a);
  }