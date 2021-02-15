//21.01.13 JE
//햄버거 버튼 클릭하면 
//21.01.18 JE
//전체메뉴 창 띄우기
$('#line-wrapper').click(function(){
  $('.line').removeClass('init');
  $('#line-top').toggleClass('line-top').toggleClass('top-reverse');
  $('#line-mid').toggleClass('line-mid').toggleClass('mid-reverse');
  $('#line-bot').toggleClass('line-bot').toggleClass('bot-reverse');
  $('.button').fadeToggle("normal", "linear");
  $('.layer2').fadeToggle("normal", "linear");
});

//21.01.18 JE
//자동 스크롤 이동
function move(seq){
  var offset = $("#tab"+seq).offset();
  $('html,body').animate({scrollTop : offset.top},600);
}

//21.01.18 JE
//비즈니스 탭 마우스 오버
$(".flight").hover(function(){
  $(".flight").attr('src','img/ico_flight.gif').load(function(){
    this.width;
  $("#flight").css({"color":"rgb(6, 125, 194)"});
  })
}, function(){
  $(".flight").attr('src','img/ico_flight_0.png').load(function(){
    this.width;
    $("#flight").css({"color":"black"});
  })
});
$(".space").hover(function(){
  $(".space").attr('src','img/ico_space.gif').load(function(){
    this.width;
  $("#space").css({"color":"rgb(6, 125, 194)"});
  })
}, function(){
  $(".space").attr('src','img/ico_space_0.png').load(function(){
    this.width;
    $("#space").css({"color":"black"});
  })
});

//21.01.16 
//fade 슬라이더

// var now_img; var next_img;

// function fade(){
//   now_img = $(".container img:eq(0)");
//   next_img = $(".container img:eq(1)");
//   next_img.addClass("active").css("opacity", 0).animate({"opacity":1},1000,function(){
//     $(".container").append(now_img);
//     now_img.removeClass("active");
//   });
// }

// var timer = setInterval("fade()",1000);

// $("div.container").hover(function(){
//   clearInterval(timer);
// }, function(){
//   timer = setInterval("fade()", 4000);
// });


//21.01.19 
//fade 
var img = ["img/slider1.jpg", "img/slider2.jpg", "img/slider3.jpg", "img/slider4.jpg"]
var index = 0;

function slideShow(){
  var slider = document.getElementById('slider');
   slider.className+= "fadeOut";
  setTimeout(function(){
    document.getElementById('slider').src = img[index];
    document.getElementById('slider').className = "";
  }, 1000);
  index++;
  if(index == img.length){index = 0;}
  setTimeout(slideShow, 3000);
}

slideShow();




//21.01.15 JE
//뉴스 탭 마우스 hover
// $("#news1").hover(function(){
//   $("#news1").css({"opacity":"0.5"});
// }, function(){
//   $("#news1").css({"opacity":"1"});
// });
// => 그냥 CSS로 했다!ㅠ.ㅠ
