//elo here what's goin on

var instrumentsArray = [
  "hihat", "snare", "bass", "crash", "ride",
  "bell", "htom", "mtom", "ltom", "splash", "crash2",
  "china"
];

function hihat(){
  $('#1').get(0).currentTime = 0;
  $('#1').get(0).play();
  $('.hihat').addClass("pressed");
}

function snare(){
  $('#2').get(0).currentTime = 0;
  $('#2').get(0).play();
  $('.snare').addClass("pressed");
}

function bass(){
  $('#3').get(0).currentTime = 0;
  $('#3').get(0).play();
  $('.bass').addClass("pressed");
}

function crash(){
  $('#4').get(0).currentTime = 0;
  $('#4').get(0).play();
  $('.crash').addClass("pressed");
}

function ride(){
  $('#5').get(0).currentTime = 0;
  $('#5').get(0).play();
  $('.ride').addClass("pressed");
}

function bell(){
  $('#6').get(0).currentTime = 0;
  $('#6').get(0).play();
  $('.bell').addClass("pressed");
}

function htom(){
  $('#7').get(0).currentTime = 0;
  $('#7').get(0).play();
  $('.htom').addClass("pressed");
}

function mtom(){
  $('#8').get(0).currentTime = 0;
  $('#8').get(0).play();
  $('.mtom').addClass("pressed");
}

function ltom(){
  $('#9').get(0).currentTime = 0;
  $('#9').get(0).play();
  $('.ltom').addClass("pressed");
}

function splash(){
  $('#10').get(0).currentTime = 0;
  $('#10').get(0).play();
  $('.splash').addClass("pressed");
}

function crash2(){
  $('#11').get(0).currentTime = 0;
  $('#11').get(0).play();
  $('.crash2').addClass("pressed");
}

function china(){
  $('#12').get(0).currentTime = 0;
  $('#12').get(0).play();
  $('.china').addClass("pressed");
}

$(document).on("keydown", function(e){
  switch (e.keyCode) {
    case 78: hihat();
    break;
    case 67: bass();
    break;
    case 66: snare();
    break;
    case 88: snare();
    break;
    case 85: ride();
    break;
    case 73: bell();
    break;
    case 89: crash();
    break;
    case 86: bass();
    break;
    case 68: htom();
    break;
    case 70: mtom();
    break;
    case 71: ltom();
    break;
    case 90: hihat();
    break;
    case 84: splash();
    break;
    case 69: crash2();
    break;
    case 79: china();
    break;
  }
});

// $(".drumz").click(function(){
//   var ad = $(this).children('.div');
// )};

$('.pad').on('transitionend MSTransitionEnd webkitTransitionEnd oTransitionEnd', function(){
  $('.pad').removeClass('pressed');
})

// $('.pad').click(function(){
//   console.log("Works");
//     $('audio').get(0).currentTime = 0;
//     $('audio').get(0).play();
//   });
$('.hihat').click(function(){
  $('#1').get(0).currentTime = 0;
  $('#1').get(0).play();
})

$('.bass').click(function(){
  $('#3').get(0).currentTime = 0;
  $('#3').get(0).play();
})

$('.snare').click(function(){
  $('#2').get(0).currentTime = 0;
  $('#2').get(0).play();
})

$('.crash').click(function(){
  $('#4').get(0).currentTime = 0;
  $('#4').get(0).play();
})

$('.ride').click(function(){
  $('#5').get(0).currentTime = 0;
  $('#5').get(0).play();
})

$('.bell').click(function(){
  $('#6').get(0).currentTime = 0;
  $('#6').get(0).play();
})

$('.htom').click(function(){
  $('#7').get(0).currentTime = 0;
  $('#7').get(0).play();
})

$('.mtom').click(function(){
  $('#8').get(0).currentTime = 0;
  $('#8').get(0).play();
})

$('.ltom').click(function(){
  $('#9').get(0).currentTime = 0;
  $('#9').get(0).play();
})

$('.crash2').click(function(){
  $('#11').get(0).currentTime = 0;
  $('#11').get(0).play();
})

$('.splash').click(function(){
  $('#10').get(0).currentTime = 0;
  $('#10').get(0).play();
})

$('.china').click(function(){
  $('#12').get(0).currentTime = 0;
  $('#12').get(0).play();
})
