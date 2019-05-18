// ARRAY FOR HEADER.
    var arrHead = new Array();
/*    arrHead = ['', '9.00 AM - 10.00AM', '10.00 AM - 11.00AM', '11.00 AM - 12.00PM',
    '12.00 PM - 1.00PM','1.30 PM - 2.30PM','2.30PM - 3.30PM','2.30PM - 3.30PM'];      // SIMPLY ADD OR REMOVE VALUES IN THE ARRAY FOR TABLE HEADERS.
*/

arrHead = ['Day','9.00 AM - 10.00AM', '10.00 AM - 11.00AM', '11.00 AM - 12.00PM',
    '12.00 PM - 1.00PM','1.30 PM - 2.30PM','2.30PM - 3.30PM','2.30PM - 3.30PM'];

    var arrWeek = new Array();
     arrWeek = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];

var count = 0;


    // FIRST CREATE A TABLE STRUCTURE BY ADDING A FEW HEADERS AND
    // ADD THE TABLE TO YOUR WEB PAGE.
    function createTable(numSlots) {
        var empTable = document.createElement('table');
        empTable.setAttribute('id', 'empTable'); // SET THE TABLE ID.
        empTable.style.align = "center";
      //  empTable.style.border = "4px solid black";

        var tr = empTable.insertRow(-1);

        for (var h = 0; h < numSlots; h++) {
            var th = document.createElement('th');          // TABLE HEADER.
            th.innerHTML = arrHead[h];
            tr.appendChild(th);

        }

        var div = document.getElementById('cont');
        div.appendChild(empTable);    // ADD THE TABLE TO YOUR WEB PAGE.
    }

    // ADD A NEW ROW TO THE TABLE.s
    function addRow() {

      var numSlots = document.getElementById('numSlots').value;
      //alert(numSlots);
      createTable(numSlots);
      var numDays = document.getElementById('numDays').value;

        var empTab = document.getElementById('empTable');

        var rowCnt = empTab.rows.length;        // GET TABLE ROW COUNT.
        var tr = empTab.insertRow(rowCnt);      // TABLE ROW.

        for(var r = 0;r<numDays;r++){

          tr = empTab.insertRow(-rowCnt);
        //  tr.setAttribute('class','item');

          for (var c = 0; c < numSlots; c++) {
              var td = document.createElement('td');          // TABLE DEFINITION.
              td = tr.insertCell(c);
              var daycount = c;

              if (c == 0) {           // FIRST COLUMN.
                var arrWeek = new Array();
                arrWeek = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];

                for(j=0;j<numSlots;j++){

                  if(j == 0){
                    var ele = document.createElement('input');
                        ele.setAttribute('type', 'text',);
                        ele.setAttribute('value', arrWeek[count]);
                        td.appendChild(ele);
                        count++;
                  }
                }
              }else {


                  // CREATE AND ADD TEXTBOX IN EACH CELL.
                  var ele = document.createElement('select');
                //  ele.setAttribute('type','text');
                ele.setAttribute('type', 'option');
                ele.options[ele.options.length] = new Option('Text 1', 'Value1');
                td.appendChild(ele);
              

                }
              }

        }

    }

    // DELETE TABLE ROW.
    function removeRow(oButton) {
        var empTab = document.getElementById('empTable');
        empTab.deleteRow(oButton.parentNode.parentNode.rowIndex);       // BUTTON -> TD -> TR.
    }

    // EXTRACT AND SUBMIT TABLE DATA.
    function sumbit() {
        var myTab = document.getElementById('empTable');
        var values = new Array();

        // LOOP THROUGH EACH ROW OF THE TABLE.
        for (row = 1; row < myTab.rows.length - 1; row++) {
            for (c = 0; c < myTab.rows[row].cells.length; c++) {   // EACH CELL IN A ROW.

                var element = myTab.rows.item(row).cells[c];
                if (element.childNodes[0].getAttribute('type') == 'text') {
                    values.push("'" + element.childNodes[0].value + "'");
                }
            }
        }
        console.log(values);
    }









































































































































//alert("Linked");
/*
function create() {
//alert("create function invoked");

var slots = document.getElementById('numSlots').value;
var numDays = document.getElementById('numDays').value;

    var timetable = document.getElementById('timetable');
    var row = timetable.insertRow();
    var cell = row.innerHTML("2");
}
*/
