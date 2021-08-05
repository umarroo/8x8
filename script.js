var a = [];
for (var i = 1; i <= 8; i++) {
  a[i] = [];
  for (var e = 1; e <= 8; e++) a[i][e] = "null";
}


$(document).ready(function() {
  $("table").click();
  
  var tbl = $('#tbl > tbody > tr').map(function () {
    return $(this).children().map(function ()
    {
        return $(this);
    });
  });
  for (var i = 0; i <= 7; i++){
    tbl[i][7-i].addClass("select")
    tbl[i][i].addClass("select")
  }
});

$(".reset").click(function() {
  $(".select").removeClass("select");
  $("table").click();
});

$("td").click(function() {
  if ($(this).hasClass("select")) {
    $(this).removeClass("select");
  } else {
    $(this).addClass("select");
  }
});

$("table").click(function() {
  console.log(a)
  for (var i = 1; i <= 8; i++){
    a[i][1] = 1
  }
  var t = $("table").first();
  var cols = t.find("tr");
  cols.each(function() {
    var rows = $(this).find("td");
    rows.each(function() {
      var x = $(this).parent().data("row");
      var y = $(this).data("col")
      a[x][y] = $(this).hasClass("select") ? 1 : 0;
    });
  });
  var c = convertBin();
});

function convertBin() {
  var binaryArt = "{";
  for (var i = 1; i <= 8; i++) {
    var row = "";
    for (var j = 1; j <= 8; j++) {
      row += a[i][j] + "";
    }
    row += ", "
    binaryArt += row;
  }
  binaryArt += "}";
  $(".export").text(binaryArt);
}
