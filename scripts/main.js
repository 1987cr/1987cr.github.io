$('#host1').frameCarousel({
  debug: false,
  first: 0,
  swipeThreshold: 10,
  frame: 'images/frame.png',
  frameSize:[
        {width: 600, minScreenWidth: 1500},
        {width: 500, minScreenWidth: 1200, maxScreenWidth: 1499},
        {width: 450, minScreenWidth: 992, maxScreenWidth: 1199},
        {width: 300, minScreenWidth: 768, maxScreenWidth: 991},
        {width: 450, minScreenWidth: 521, maxScreenWidth: 767},
        {width: 300, minScreenWidth: 369, maxScreenWidth: 520},
        {width: 250, maxScreenWidth: 368}
            ],
  collapseThreshold: 320,
  boundingBox: {
    left: '4.3%',
    top: '4.48%',
    width: '91.4%',
    height: '61.1%'
  },
  images: [
    'images/sa.png',
    'images/sa1.png',
    'images/sa2.png'
    ]
});

$('#host2').frameCarousel({
  debug: false,
  first: 0,
  swipeThreshold: 10,
  frame: 'images/frame.png',
  frameSize:[
        {width: 600, minScreenWidth: 1500},
        {width: 500, minScreenWidth: 1200, maxScreenWidth: 1499},
        {width: 450, minScreenWidth: 992, maxScreenWidth: 1199},
        {width: 300, minScreenWidth: 768, maxScreenWidth: 991},
        {width: 450, minScreenWidth: 521, maxScreenWidth: 767},
        {width: 300, minScreenWidth: 369, maxScreenWidth: 520},
        {width: 250, maxScreenWidth: 368}
            ],
  collapseThreshold: 320,
  boundingBox: {
    left: '4.3%',
    top: '4.48%',
    width: '91.4%',
    height: '61.1%'
  },
  images: [
    'images/sa5.png',
    'images/sa3.png',
    'images/sa4.png',
    ]
});

$('#host3').frameCarousel({
  debug: false,
  first: 0,
  swipeThreshold: 10,
  frame: 'images/frame.png',
  frameSize:[
        {width: 600, minScreenWidth: 1500},
        {width: 500, minScreenWidth: 1200, maxScreenWidth: 1499},
        {width: 450, minScreenWidth: 992, maxScreenWidth: 1199},
        {width: 300, minScreenWidth: 768, maxScreenWidth: 991},
        {width: 450, minScreenWidth: 521, maxScreenWidth: 767},
        {width: 300, minScreenWidth: 369, maxScreenWidth: 520},
        {width: 250, maxScreenWidth: 368}
            ],
  collapseThreshold: 320,
  boundingBox: {
    left: '4.3%',
    top: '4.48%',
    width: '91.4%',
    height: '61.1%'
  },
  images: [
    'images/emg1.png',
    'images/emg2.png',
    'images/emg3.png',
    ]
});

$('#host4').frameCarousel({
  debug: false,
  first: 0,
  swipeThreshold: 10,
  frame: 'images/frame.png',
  frameSize:[
        {width: 600, minScreenWidth: 1500},
        {width: 500, minScreenWidth: 1200, maxScreenWidth: 1499},
        {width: 450, minScreenWidth: 992, maxScreenWidth: 1199},
        {width: 300, minScreenWidth: 768, maxScreenWidth: 991},
        {width: 450, minScreenWidth: 521, maxScreenWidth: 767},
        {width: 300, minScreenWidth: 369, maxScreenWidth: 520},
        {width: 250, maxScreenWidth: 368}
            ],
  collapseThreshold: 320,
  boundingBox: {
    left: '4.3%',
    top: '4.48%',
    width: '91.4%',
    height: '61.1%'
  },
  images: [
    'images/glb1.png',
    'images/glb2.png',
    'images/glb3.png',
    ]
});

$('#host5').frameCarousel({
  debug: false,
  first: 0,
  swipeThreshold: 10,
  frame: 'images/frame.png',
  frameSize:[
        {width: 600, minScreenWidth: 1500},
        {width: 500, minScreenWidth: 1200, maxScreenWidth: 1499},
        {width: 450, minScreenWidth: 992, maxScreenWidth: 1199},
        {width: 300, minScreenWidth: 768, maxScreenWidth: 991},
        {width: 450, minScreenWidth: 521, maxScreenWidth: 767},
        {width: 300, minScreenWidth: 369, maxScreenWidth: 520},
        {width: 250, maxScreenWidth: 368}
            ],
  collapseThreshold: 320,
  boundingBox: {
    left: '4.3%',
    top: '4.48%',
    width: '91.4%',
    height: '61.1%'
  },
  images: [
    'images/tn1.png',
    'images/tn2.png',
    'images/tn3.png',
    'images/tn4.png'
    ]
});

$('#host6').frameCarousel({
  debug: false,
  first: 0,
  swipeThreshold: 10,
  frame: 'images/frame.png',
  frameSize:[
        {width: 600, minScreenWidth: 1500},
        {width: 500, minScreenWidth: 1200, maxScreenWidth: 1499},
        {width: 450, minScreenWidth: 992, maxScreenWidth: 1199},
        {width: 300, minScreenWidth: 768, maxScreenWidth: 991},
        {width: 450, minScreenWidth: 521, maxScreenWidth: 767},
        {width: 300, minScreenWidth: 369, maxScreenWidth: 520},
        {width: 250, maxScreenWidth: 368}
            ],
  collapseThreshold: 320,
  boundingBox: {
    left: '4.3%',
    top: '4.48%',
    width: '91.4%',
    height: '61.1%'
  },
  images: [
    'images/tb1.png',
    'images/tb2.png',
    'images/tb3.png',
    'images/tb4.png'
    ]
});

var topbar = $(".topbar");
var openmenubutton = $(".hamburger");
var container = $(".st-container");
var pusher = $(".st-pusher");

openmenubutton.on("click", function(){
  topbar.toggleClass('open');
  openmenubutton.toggleClass('open');
  container.toggleClass("st-menu-open");
});

pusher.on("click", function(){
  if(container.hasClass("st-menu-open")){
    container.removeClass("st-menu-open");
    topbar.toggleClass('open');
    openmenubutton.toggleClass('open');
  }
})
/*$('#nav-icon3').click(function(){
  $(this).toggleClass('open');
});*/
$(window).scroll(function(){

    scrolltop = $(window).scrollTop();

    tofade = 1 - scrolltop / 700
    toscroll = "translateY(" + ((scrolltop / 3) - 50) + "%)";

    $(".header__text-container")
    .css("opacity", tofade)
    .css("transform", toscroll);
});