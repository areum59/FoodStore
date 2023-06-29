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
  });