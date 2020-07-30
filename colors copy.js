var Links = {
  setColor: function (color) {
    var alist = document.querySelectorAll('a');
    var i = 0;
    while (i < alist.length) {
      alist[i].style.color = color;
      i = i + 1;
    }
  }
}
var Body = {
  getBody: function () {
    return;
  },
  setColor: function (color) {
    document.querySelector('body').style.color = color;
  },
  setBackgroundColor: function (color) {
    document.querySelector('body').style.backgroundColor = color;
  }
}
//쿠키 설정
function setCookie(name, value, exp) {
  var date = new Date();
  date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
  document.cookie = name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
};

setCookie("expend", "true", 1);

//쿠키 얻기
var getCookie = function (name) {
  var value = document.cookie.match('(^|;)?' + name + '=({^;}*)(;|$)');
  return value ? value[2] : null;
};

getCookie('expend');

var is_expend = getCookie("expend");
console.log("쿠키 is_expend 변수에 저장된 값 : " + is_expend);

// var deleteCookie = function (name) {
//   document.cookie = name + '=; expires=Thu, 01 Jan 1999 00:00:10 GMT;';
// }
// deleteCookie('name');


function nightDayHandler(obj) {
  if (obj.value == 'night') {
    obj.value = 'day';
    Links.setColor('powderblue');
    Body.setColor('white');
    Body.setBackgroundColor('black');
  }
  else {
    obj.value = 'night';
    Links.setColor('blue');
    Body.setColor('black');
    Body.setBackgroundColor('white');
  }
}

