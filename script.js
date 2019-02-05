





//BLOG JS
$(function () {

    // let readMore = () => {
    //     if ($('.hideTheWords').is(':visible')) {
    //         $('.toggleReadMore').text('Read Less');
    //     } else {
    //         $(this).text('Read More');
    //     } 
    // }

    // HAVE EVENT HERE
    // $('.hideTheWords').slideToggle('slow', function () {
    //     readMore();

    let CheckName = function () {
        if ($('.hiddenWords').hasClass('hideTheWords')) {
            // 
            console.log('cat')
        } else {
            $('.toggleReadMore').text('Read Less');
        }
    }



    //TOGGLE TEXT ON CLICK .BLOGPOST TEXT
    $('.toggleReadMore').on('click', function () {
        $('.hiddenWords').toggleClass('hideTheWords').slideToggle('slow', function () { 
            CheckName();

        });
        
    
        
        
    
  
      });

    })

;
