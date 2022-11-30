// ハンバーガーメニュークリック動作
const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', function (e) {
  if (this.checked) {
    hidden_menu.style.display = 'block';
  } else {
    hidden_menu.style.display = 'none';
  }
}, false);

// スライドイン・フェイドイン要素が画面表示時にアニメーションする為のタイミング指定
$(function () {
  $('.slide_left').on('inview', function (event, isInView) {
    if (isInView) {
      $(this).addClass('is-inview_left');
    } else {
      $(this).removeClass('is-inview_left');
    }
  });
});
$(function () {
  $('.slide_right').on('inview', function (event, isInView) {
    if (isInView) {
      $(this).addClass('is-inview_right');
    } else {
      $(this).removeClass('is-inview_right');
    }
  });
});
$(function () {
  $('.student').on('inview', function (event, isInView) {
    if (isInView) {
      $(this).addClass('student_hidden');
    } else {
      $(this).removeClass('student_hidden');
    }
  });
});
