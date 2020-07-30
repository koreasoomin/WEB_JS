var Links = {
    setColor: function (color) {
      $('a').css('color',color);
    }
  }
  var Body = {
    setColor: function (color) {
      // document.querySelector('body').style.color = color;
      $('body').css('color', color);
    },
    setBackgroundColor: function (color) {
      // document.querySelector('body').style.backgroundColor = color;
      $('body').css('backgroundColor', color);
    }
  }
  function nightDayHandler(self) {
    if (self.value == 'night') {
      self.value = 'day';
      Links.setColor('powderblue');
      Body.setColor('white');
      Body.setBackgroundColor('black');
    }
    else {
      self.value = 'night';
      Links.setColor('blue');
      Body.setColor('black');
      Body.setBackgroundColor('white');
    }
  }