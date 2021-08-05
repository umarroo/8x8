var a = [];
for (var i = 1; i <= 8; i++) {
  a[i] = [];
  for (var e = 1; e <= 8; e++) a[i][e] = "null";
}

function disorder() {
  var tbl = $('#tbl > tbody > tr').map(function () {
    return $(this).children().map(function () {
      return $(this);
    });
  });

  var max = 7
  var min = 0
  for (let i = 0; i <= 7; i++) {
    var rand = Math.floor(Math.random() * (max - min + 1) + min);
    var rand2 = Math.floor(Math.random() * (max - min + 1) + min);
    var rand3 = Math.floor(Math.random() * (max - min + 1) + min);
    tbl[i][rand].addClass("select")
    tbl[rand2][i].addClass("select")
    tbl[i][rand3].addClass("select")
  }
}

$(document).ready(function () {
  $("table").click();

  disorder()
});

$(".reset").click(function () {
  $(".select").removeClass("select");
  $("table").click();
});

$(".disorder").click(function () {
  $(".select").removeClass("select");
  $("table").click();
  disorder();
})


$("td").click(function () {
  if ($(this).hasClass("select")) {
    $(this).removeClass("select");
  } else {
    $(this).addClass("select");
  }
});

$("table").click(function () {
  var t = $("table").first();
  var cols = t.find("tr");
  cols.each(function () {
    var rows = $(this).find("td");
    rows.each(function () {
      var x = $(this).parent().data("row");
      var y = $(this).data("col")
      a[x][y] = $(this).hasClass("select") ? 1 : 0;
    });
  });
  var c = printCoordinate();
});

function newArr(obj) {
  if (Object.prototype.toString.call(obj) === '[object Array]') {
    var out = [],
      i = 0,
      len = obj.length;
    for (; i < len; i++) {
      out[i] = arguments.callee(obj[i]);
    }
    return out;
  }
  if (typeof obj === 'object') {
    var out = {},
      i;
    for (i in obj) {
      out[i] = arguments.callee(obj[i]);
    }
    return out;
  }
  return obj;
}

function diff2d(a, b){
  for (var i = 1; i <= 8; i++) {
    for (var e = 1; e <= 8; e++) {
      if (a[i][e] != b[i][e]){
        return i.toString() + ", " + e.toString()
      }
    }
  }
}


var a_prev = newArr(a)
function printCoordinate() {
  var diff = diff2d(a_prev, a);
  console.log(diff);

  a_prev = newArr(a);

}

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