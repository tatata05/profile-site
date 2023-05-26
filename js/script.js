//カルーセル
$('#carousel').slick({
  autoplay: true,
  dots: true,
  infinite: true,
  speed: 1500,
  arrows: false,
  fade: true,
  pauseOnHover: false
});

//不透明度
$('a').hover(
  function(){
    $(this).animate({
      'opacity':0.6 
    },300);
  },
  function(){
    $(this).animate({
      'opacity':1.0
    },300);
  }
);

//TOPに戻る
const topBtn = document.getElementById('top');

window.addEventListener('scroll', () => {
  const scrollValue = document.scrollingElement.scrollTop;

  if (scrollValue >= 100) {
    topBtn.style.display = 'inline';
  }
  else {
    topBtn.style.display = 'none';
  }
});

// ページ内リンクのスクロールをなめらかにする（スムーズスクロール）
$('a[href ^= "#"]').click(function(){
  const speed = 500;
  const href = $(this).attr('href');
  let $target;
  if (href == '#'){
    $target = $('html');
  }
  else{
    $target = $(href);
  }
  const position =$target.offset().top;
  $('html, body').animate({'scrollTop': position }, speed, 'swing');
  return false;
})

  // スクロールしたときにセクションをフェードインさせる
  $(window).scroll(function () {
    const scrollAmount = $(window).scrollTop();
    const windowHeight = $(window).height();
    $('section').each(function () {
      const position = $(this).offset().top;
      if (scrollAmount > position - windowHeight + 100) {
        $(this).addClass('fade-in');
      }
    });
  });

  //スクロールした時にセクションをフェードインさせる
  $(window).scroll(function(){
    const scrollAmount = $(window).scrollTop();
    const windowHeight = $(window).height();
    $('section').each(function(){
      const position = $(this).offset().top;
      if (scrollAmount > position - windowHeight + 100) {
        $(this).addClass('fade-in');
      }
    });
  });