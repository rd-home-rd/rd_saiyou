// jQueryは読み込み済み前提
$(function(){
   $('.btn_menu').click(function(){
    $('nav').toggleClass('open');}
  );
        })

 // jQueryは読み込み済み前提
$(function(){
  $('.btn_menu').click(function(){
    $(this).toggleClass('active');
  });
        })
//ページ内リンク、#非表示。スムーズスクロール
  $('a[href^="#"]').click(function(){
    var speed = 800;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });