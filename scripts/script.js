$( document ).ready(function() {

  const navMenu = document.querySelector('.header-nav');
  const navTitle = document.querySelector('.header-title h1');
  const navMenuItems = document.querySelector('.header-nav ul');
  const ham = document.querySelector('.ham');


  function debounce(func, wait = 10, immediate = true) {
  	var timeout;
  	return function() {
  		var context = this, args = arguments;
  		var later = function() {
  			timeout = null;
  			if (!immediate) func.apply(context, args);
  		};
  		var callNow = immediate && !timeout;
  		clearTimeout(timeout);
  		timeout = setTimeout(later, wait);
  		if (callNow) func.apply(context, args);
  	};
  };


  const moveNav = () => {
    if( window.scrollY >= 25 ) {
      navMenu.style.bottom = 500 + 'px';
      navTitle.classList.add('title-scroll');
    } else if( window.scrollY <= 25 ) {
      navMenu.style.bottom = 0 + 'px';
      navTitle.classList.remove('title-scroll');
    }

    // if( window.scrollY >= 25 ) {
    //   $('.header-nav').css('bottom','200px');
    // } else if( window.scrollY <= 25 ) {
    //   $('.header-nav').css('bottom','0px');
    // }

  }

  window.addEventListener( 'scroll', debounce(moveNav));

  ham.addEventListener( 'click', () => {
    navMenuItems.classList.toggle('toggle-click');
  });


});
