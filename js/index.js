$(document).ready(function(){

  // setInterval(slideupTop,5000);
  // setInterval(slideupBottom,5000);

  //탑 모바일메뉴_____________________

  /* 햄버거 메뉴 */
  $(".lgnb_list").css({"left":"-60%"});

  /* 메뉴버튼 */
  $(".gnb_btn").click(function(){
    $(".lgnb_list").stop().animate({"left":0});
    $(".back").stop().fadeIn();
  });

  /* 닫기버튼 */
  $(".lgnb .close").click(function(){
    $(".lgnb_list").stop().animate({"left":"-60%"});
    $(".back").stop().fadeOut();
  });

});