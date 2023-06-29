$(function () {
  /** (참고)
   * JS include시 script 미작동 오류로 인해
   * body에서 이벤트를 발생시켜 자식요소에 이벤트 전달
   * 따라서 실제 프로젝트 진행시 '선택자' 수정 必
   */
  
  $(window).scroll(function () {
    var win = $(window);
    var nav = $("nav");
    var pos = nav.position().top; // offset() 대신 position() 사용

    if (win.scrollTop() > pos) {
      nav.addClass("sticky");
    } else {
      nav.removeClass("sticky");
    }

    // 스크롤 위치에 따라 "top 이동" 버튼 표시/숨김 처리
    var scrollUp = $(".scroll-up");

    if (win.scrollTop() > 0) {
      scrollUp.addClass("show");
    } else {
      scrollUp.removeClass("show");
    }
  });


  // top 이동 버튼 클릭시 1s에 걸쳐 스르륵 이동.
  $("body").on("click", ".scroll-up", function () {
    $("html, body").animate({ scrollTop: 0 }, 1000);
    return false;
  });


  /** header
   * GNB
   */ 
  $("body").on("click", ".gnb .all-ctgy", function() {  // GNB 영역에 마우스 오버시
      $(".lnb").stop().fadeToggle();  // LNB fadeIn
  });
  // $("body").on("mouseover", "header > .inner", function() {
  //     $(".lnb").stop().fadeOut();
  // });
  // $("body").on("mouseleave", ".lnb", function() {
  //     $(this).stop().fadeOut();
  // });

  // 검색창 click : 입력창 오픈
  $("body").on("click", "header .search-btn", function() {
      $(".search-box").stop().fadeToggle();
  });

  // 즐겨찾기 추가 안내 alert
  $("body").on("click", ".favorites", function() {
      alert("확인을 클릭하신 후 주소창에 <Ctrl+D>를 누르시면 즐겨찾기에 등록됩니다.");
  });
});