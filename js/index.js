(function($){
  $(function(){

    var headBlock = $("#headBlock");

    var head = $("#head");

    var nameBlock = $("#nameBlock");
    var socialsBlock = $("#socialsBlock");
    var workBlock = $("#workBlock");

    var prodBtn = $("#projectsBtn");
    var prod = $("#projects");

    var cvBtn = $("#cvBtn");
    var cv = $("#cv");

    var contactBtn = $("#contactBtn");
    var contact = $("#contact");

    var meBtn = $("#meBtn");
    var me = $("#me");

    var openedCard = false;
    var blockOpacity = 0;

    headBlock.hover(
      function(){
        if (!openedCard) {
          head.css("width", "25%");
          head.css("height", "25%");
          nameBlock.css("opacity","1");
          head.css("transform","rotate(360deg)");
        }
      },
      function(){
        if (!openedCard) {
          head.css("width", "20%");
          nameBlock.css("opacity","0");
          head.css("height", "20%");
          head.css("transform","rotate(0deg)");
          workBlock.css("opacity", "0");
          socialsBlock.css("opacity", "0");
          blockOpacity = 0;
        }
      }
    );

    headBlock.click(
      function() {
        blockOpacity = 1-blockOpacity;
        workBlock.css("opacity", ""+blockOpacity);
        socialsBlock.css("opacity", ""+blockOpacity);
        if (openedCard) {
          openedCard = false;
        }
      }
    );

    function openCard(newBool) {
      openedCard =                newBool;
      head.css("width",           openedCard? "25%" : "20%");
      head.css("height",          openedCard? "25%" : "20%");
      nameBlock.css("opacity",    openedCard? "1" : "0");
      head.css("transform",       openedCard? "rotate(360deg)" : "rotate(0deg)")
      workBlock.css("opacity",    openedCard? "1" : "0");
      socialsBlock.css("opacity", openedCard? "1" : "0");
      blockOpacity = openedCard? 1 : 0;
    }

    contactBtn.click(
      function() {
        openCard(!openedCard);
      }
    );

  prodBtn.hover(
    function() {
      prod.css("opacity","1");
    },
    function() {
      prod.css("opacity","0");
    }
  )

  meBtn.hover(
    function() {
      me.css("opacity","1");
    },
    function() {
      me.css("opacity","0");
    }
  )

  cvBtn.hover(
    function() {
      cv.css("opacity","1");
    },
    function() {
      cv.css("opacity","0");
    }
  )

  contactBtn.hover(
    function() {
      contact.css("opacity","1");
    },
    function() {
      contact.css("opacity","0");
    }
  )


  });
})(jQuery);
