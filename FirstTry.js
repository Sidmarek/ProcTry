var cols = 20;
var rows = 10;
var colors = new Array(20);
var arr;
var w,h; 
function setup() {
  createCanvas(600, 300);
  arr = make2dArray(int(random(20)),int(random(10)));
  for (var i=0; i<cols; i++) {
    colors[i] = new Array();
    for (var j=0; j<cols; j++) {
      var rgb = new Array(3);
      rgb[0] = random(255);
      rgb[1] = random(255);
      rgb[2] = random(255);
      colors[i][j] = rgb; 
    }
  }
}
function make2dArray(cols, rows) {
  var arr = new Array(cols);
  for (var i = 0; i<arr.length; i++) {
    arr[i] = new Array(rows);
  }
  console.log(arr);
  return arr;
}
function draw() {
  background(120, 15, 15);
  var colCount = (600/arr[0].length);
  var rowCount = (300/arr.length);
  for (var i = 0; i<arr.length; i++) {
    for (var j = 0; j<arr[0].length; j++) {
      var x = i * colCount;
      if(x==0) {
        w = colCount;
      }else{
        w = x;
      }
      var y = j * rowCount;
      if(y==0) {
        h = colCount;
      }else{
        h = x;
      }
      fill(colors[i][j][0],colors[i][j][1],colors[i][j][2]);
      stroke(0);
      rect(x, y, w, h);
    }
  }
}
