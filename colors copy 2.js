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

// 세션 쿠키 생성 - 브라우저를 닫으면 없으집니다. 
$.cookie('name', 'value'); 
// 7일 뒤에 만료되는 쿠키 생성 
$.cookie('name', 'value', { expires: 7 }); 
// 전체 사이트에 대해 7일 뒤에 만료되는 쿠키 생성 
$.cookie('name', 'value', { expires: 7, path: '/' });
// 세션 쿠키 생성 - 브라우저를 닫으면 없으집니다. 
$.cookie('name', 'value'); 
// 7일 뒤에 만료되는 쿠키 생성 
$.cookie('name', 'value', { expires: 7 }); 
// 전체 사이트에 대해 7일 뒤에 만료되는 쿠키 생성 
$.cookie('name', 'value', { expires: 7, path: '/' });

// 키로 사용한 이름으로 값을 읽습니다. 
// 키로 저장된 값이 없으면 undefined 가 반환됩니다. 
$.cookie('name'); 
// 모든 쿠키 읽기 
// 모든 쿠키를 { "name": "value" } 형태의 객체로 반환합니다. 
$.cookie();

// //쿠키 설정
// function setCookie(name, value, exp) {
//   var date = new Date();
//   date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
//   document.cookie = name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
// };

// setCookie("obj.value", "night", 1);

// //쿠키 얻기
// var getCookie = function (name) {
//   var value = document.cookie.match('(^|;)?' + name + '=({^;}*)(;|$)');
//   return value ? value[2] : null;
// };

// getCookie('obj.value');

// var is_night = getCookie("obj.value");
// console.log("쿠키 is_night 변수에 저장된 값 : " + is_night);

// // var deleteCookie = function (name) {
// //   document.cookie = name + '=; expires=Thu, 01 Jan 1999 00:00:10 GMT;';
// // }
// // deleteCookie('name');


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

