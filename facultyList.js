function facultyList() {
  for(i = 0;i<10;i++){
    var textVal = "okok",
    listNode = document.getElementById('facultyList'),
    liNode = document.createElement("LI"),
    textNode = document.createTextNode(textVal);

    liNode.appendChild(textNode);
    listNode.appendChild(liNode);
  }



}
