



    // topstory
  

// end
  
 $(function(){
  $('select, input.radio, input.checkbox').styler();
  $(".topstory-slider").slick({
    autoplay:!0,
    autoplaySpeed:5e3,
    slidesToShow:1,
    pauseOnHover:!1,
    arrows:!1}),
    $("#topstory-slider-control .slick-arrow").on("click",function(){
      return $(".topstory-slider").slick($(this).data("method")),!1}),
      $(".topstory-slider").on("init reInit afterChange",function(o,t,r,i){var s=(r||0)+1;$("#topstory-slider-paginator").text(s+"/"+t.slideCount)})
  $('.navbar__menu').on('click', function () {
    $('.navbar__inner').slideToggle();
  });
  $('.nav__link').on('click', function () {
    $(this).closest('.nav__item').toggleClass('active');
  });
  
  function e(e){return null==e||""===e}function o(o){if(o=new String(o),!e(o)){var n=/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/,a=o.match(n);if(a&&11==a[2].length)return a[2]}return"error"}$(window).on("scroll",function(){var e=$(window).scrollTop(),o=$(window).width();o>1125?e>89?$("header").addClass("scrolled mt-0"):$("header").removeClass("scrolled mt-0"):o<1126&&o>786?e>48?$("header").addClass("scrolled position-fixed mt-0"):$("header").removeClass("scrolled position-fixed mt-0"):e>0?$("header").addClass("scrolled position-fixed mt-0"):$("header").removeClass("scrolled position-fixed mt-0")}),$(".submenu").on("click",function(e){e.stopPropagation()}),$(".submenu a.dropdown-toggle").on("click",function(e){$(this).parent().hasClass("show")||$(".submenu").removeClass("show"),$(this).parent().toggleClass("show")}),$(".main-menu").on("show.bs.collapse",function(){$(".navbar").addClass("open")}),$(".main-menu").on("hidden.bs.collapse",function(){$(".navbar").removeClass("open"),$(".submenu").removeClass("show")}),$(".offcanvas-toggler").on("click",function(){$(".col-off-canvas").toggleClass("open")}),$("main").on("click",function(){$(".col-off-canvas").removeClass("open")}),$("table").wrap('<div class="table-responsive"></div>'),$(".js-select").on("change",function(){location.href=$(this).val()}),$(".play-video-modal").on("click",function(e){e.preventDefault();var n=$(this).data("video"),a=$('<div class="video-modal modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">                 <div class="modal-dialog modal-lg">                     <div class="modal-content">                     <div class="embed-responsive embed-responsive-16by9">                         <iframe width="424" height="238" src="https://www.youtube.com/embed/'+o(n)+'?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                     </div>                     </div>                 </div>             </div>');$("body").append(a),$(".video-modal.hide").show(),$(".video-modal").modal()}),$(document).on("hidden.bs.modal",".video-modal",function(){$(this).remove()})});var MiniLazyload=function(){"use strict";function e(){var o=this,n=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},a=1<arguments.length?arguments[1]:void 0,t=2<arguments.length?arguments[2]:void 0;this.update=function(){var e,n;o.enabled?o.loadImages(function(){},!1):(e=o,e.allElements().forEach(function(o){(o.dataset.bg||o.dataset.lazyClass)&&e.newObserver().observe(o)}),e.loadImages(function(e){e.loading="lazy",n&&n(e)}))},this.allElements=function(){return[].slice.call(document.querySelectorAll(o.selector))},this.loadImages=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:function(){},n=!(1<arguments.length&&void 0!==arguments[1])||arguments[1],a=window.IntersectionObserver&&o.newObserver();o.allElements().forEach(function(o){i(o),e(o),!a||n?s(o):a.observe(o)})},this.newObserver=function(){return new IntersectionObserver(function(e,o){e.forEach(function(e){var n=e.intersectionRatio,a=e.target;0<n&&(o.unobserve(a),s(a,!0))})},o.options)};var s=function(e,o){var n=e.dataset,a=n.src,t=n.srcset,s=n.bg,i=n.lazyClass;o=o||!window.IntersectionObserver,a&&(e.src=a),t&&(e.srcset=t),o&&s&&(e.style.backgroundImage='url("'.concat(s,'")')),o&&i&&e.classList.add(i),l(e.parentElement)},l=function(e){window.HTMLPictureElement&&e instanceof HTMLPictureElement&&[].slice.call(e.querySelectorAll("[data-srcset]")).forEach(function(e){e.srcset=e.dataset.srcset})},i=function(e){function n(){l(e),e.classList.add("loaded")}var a=o.options,t=a.placeholder,s=a.onload,l=void 0===s?function(){}:s;e.addEventListener("error",function(){t&&!e.classList.contains("error")&&(e.src=t),e.classList.add("error"),e.removeEventListener("load",n)}),e.addEventListener("load",n)};this.selector=a||"[loading=lazy]",this.options=n,this.enabled=!HTMLImageElement.prototype.hasOwnProperty("loading")||t===e.IGNORE_NATIVE_LAZYLOAD,this.update()}return e.IGNORE_NATIVE_LAZYLOAD=!0,e}();new MiniLazyload({},".lazyload");
  $(document).ready(function(){var a=!1;$("a[data-gallery]").click(function(){if(!a){a=!0;var r=$(this).data("gallery"),t="/inc/gallery-ajax.php?mode="+r;return 1!=r&&2!=r&&3!=r||(t+="&id="+$(this).data("gallery-id")),$.getJSON(t,{format:"json"}).done(function(a){$(this).lightGallery({hash:!1,share:!1,dynamic:!0,dynamicEl:a,download:!1,backdropDuration:500})}).fail(function(a,r,t){alert("Nastala chyba pĹ™i naÄŤĂ­tĂˇnĂ­ galerie. ProsĂ­m zkuste to znovu."),console.error("getJSON failed, status: "+r+", error: "+t),console.error(a)}).always(function(){a=!1}),!1}})});

  