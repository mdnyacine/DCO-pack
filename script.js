var prefix = dynamicContent.citroen_DCO_New_guideline_DATACitroen[0];
var AnimationSpeed = prefix.ANIMATION_SPEED;
var lang = 'FR'.toUpperCase();

var tl;

function initObjects() {
    tl = new TimelineLite({paused: true, onComplete: function(){ mouseOver= true}});

    tl
    .set('#logo', {opacity:0})
    .set('#citroen_logo', {opacity:1, y:300})
    .set('#screen1', {opacity:0, scale:0.6, transformOrigin: "50% 50%"})

    .set('#screen2, #cta', {opacity:0, y:40})
    .set('#screen3', {opacity:0, display:'none'})
    .set('#car', {x:-300,opacity:0,  rotation: 0.01})
    .set('#img_promo, #screen-end_text', {opacity:0, x:200, display:'none'})

    if (prefix.SCREEN3_TYPE == 'List') {
      tl.set('#screen3 li', {y:-30,opacity:0})
    } else {
      tl.set('#bloc-list', {y:-30, opacity:0})
    }


  // SCREEN 1
    tl.addLabel("screen1", "+=1")
      .to('#screen1', 0.5, {opacity:1 , ease:  Power4.easeOut}, "screen1")
      .to('#screen1', 1, {scale:1, ease: "none"}, "screen1+=0.1")

      .to('#citroen_logo', 2, {opacity:1, y:-300 , ease:  Power4.easeOut}, "screen1+=2.3")
      .to('#screen1-text, #background_img', .2, {opacity:0 , ease:  Power4.easeOut}, "screen1+=2.5")

  // SCREEN 2

    .addLabel("screen2", "-=0.5")
    .to('#logo', .3, {opacity: 1}, "screen2")
    .to('#screen2', 1, {opacity:1, y:0 , ease:  Power4.easein}, "screen2")

  // CAR 
    .to('#car',1, {x:0, opacity:1, ease:Sine.easeOut}, "screen2")

  // SCREEN 3 
    .addLabel("screen3")
      if (prefix.SCREEN3_ANIMATION == 'active') {
        tl.to('#screen3', 0, {opacity:1, display:'block'}, "screen3")

        if (prefix.SCREEN3_TYPE == 'List') {
          tl.staggerTo("#screen3 li", 0.5, {y: 0,  opacity:1,ease:Sine.easeOut}, 0.3, "screen3")

          .to('#screen3', .5, {opacity:0 ,display:'none', delay: 2 * AnimationSpeed, ease:  Power4.easeOut}, "screen3+=2")
        } else {
          tl.to("#bloc-list", 0.8, {y: 0,  opacity:1,ease:Sine.easeOut}, "screen3")

          .to('#screen3', .5, {opacity:0 ,display:'none', delay: 2 * AnimationSpeed, ease:  Power4.easeOut}, "screen3+=2")
        }
      }

  // SCREEN 4 
  (prefix.SCREEN3_ANIMATION == 'active' ? tl.addLabel("screen4", "-=0.5") :  tl.addLabel("screen4", "+=2"));
      tl.to('.bloc-left',0.5, {width:'55%',  ease:  Power4.easein}, "screen4")
      .to('.bloc-right',0.5, {width:'45%',  ease:  Power4.easein}, "screen4")
      .to('#screen-car img',0.5, {height: 'auto', width:'100%',  ease:  Power4.easein}, "screen4")
      .to('#screen-main',0.5, {marginTop:25,  ease:  Power4.easein}, "screen4")

      if (prefix['SCREEN3_IMAGE_' + lang].trim() != "") {
        tl.to('#img_promo',0.6, {x:0,opacity:1, display:'block', ease:  Power4.easein}, "screen4")
        .to('#img_promo', .6, {x:200 ,display:'none', ease:  Power4.easein}, "screen4+=2")
      }

  // SCREEN END

    tl.addLabel("screen5")
    
      .to('#screen-end_text',0.6, {x:0,opacity:1, display:'block', ease:  Power4.easein}, "screen5")
      .to('#cta', 1, {y:0, opacity:1 , ease:  Power4.easeOut},"screen5")
}


function launch() {
  tl.play();
}
initObjects();
launch();
