
function onClickScreenMode(input) {
    var target = document.body;
    if(input.value == 'night'){
      input.value = 'day';
      target.className = 'day';
    } else{
      input.value = 'night';
      target.className = 'night';
    }
}

