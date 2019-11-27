var ss = SpreadsheetApp;
var ws = ss.getActiveSpreadsheet().getActiveSheet();
var activeCell = ws.getActiveCell().getValue();
var row = ws.getActiveCell().getRow();
var rowV = ws.getActiveCell().getRow().getValue;
var lr = ws.getLastRow();
var lc = ws.getLastColumn();
var nameNewSheet = ws.getRange(2,8).getValue();
var data = ws.getRange(1, 1, row,lc).getValues();


function generate() {

    var id = ws.getRange(row,lc).getValue();
     
    for(var i=row; i<row+30; i++) {
     ws.getRange(i, lc).setValue(id);
    
    //Retrieve last Row
    var lv= ws.getRange(i,lc).getRow();
    
    }
      
}
 

function create() {

    var data = ws.getRange(1, 1, row,lc).getValues();

    var ssNew = SpreadsheetApp.getActiveSpreadsheet();
    var nomActiveSheet = ssNew.getActiveSheet().getName();
    var sheetName = ssNew.insertSheet(nomActiveSheet+" "+nameNewSheet);
    sheetName.getRange(1,1,row,8).setValues(data);
    
    
    
 }
 
 
function del() {
  
  ws.deleteRows(2, row-1);

}

function genMenu() {

  var ui = SpreadsheetApp.getUi();
  var menu = ui.createMenu("Generate IDs");
  menu.addItem("Generate ", "generate");
  menu.addSeparator();
  menu.addItem("Create Sheet ", "create");
  menu.addSeparator();
  menu.addItem("Delete attributes IDs ", "del");
   
  menu.addToUi();
  

}

function onOpen(){

  genMenu();

}

function test() {
Logger.log(data);
}
