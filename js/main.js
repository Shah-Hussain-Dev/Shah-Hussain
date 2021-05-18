
$(document).ready(function(){
            $('.toggle').click(function(){
                $('.navbar').toggleClass('active');
            });
        });
        $(document).ready(function() {
            $('.progress .progress-bar').css("width",
                      function() {
                          return $(this).attr("aria-valuenow") + "%";
                      }
              )
          });
      