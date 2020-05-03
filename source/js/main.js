$(document).ready( function () {
    $('article').lightGallery({
        selector: '.img-item',
        subHtmlSelectorRelative: true
    });

    let tocInit = function () {
        $("#toc-content a").each( function () {
            var oldText = $(this).text();
            var newText = oldText.replace('#','');
            $(this).text(newText);

            if ($(this).hasClass("toc-link")) {
                $(this).addClass("text-truncate d-block");
            }
        });
    }
    tocInit();

    let cardListInit = function () {  
	    $(".card ul").each( function () {
            if ($(this).parent().hasClass("card-body")) {
                $(this).unwrap();
            }
        });
        $(".card ul").addClass("list-group list-group-flush");
        $(".card ul li").addClass("list-group-item");
    }
    cardListInit();

    $(".dropdown-menu a").on('click', function () {
        event.preventDefault(); 
        event.stopPropagation(); 
        
        if ($(this).hasClass("toc-link")) {
            const elem = $(this).attr("href");
            window.location.href = elem;
        } 
    });

    $('.expand-toggle').on('click', function () {
        $("#toc-content").toggleClass("expand");
        $(".expand-text").toggle();
        $(".close-text").toggle();
    })

    $('.back-to-top').on('click', function () {
        $('body, html').stop(true, true).animate({
            scrollTop: 0
        }, 100, 'linear');
    });

    $('.go-to-bottom').on('click', function () {
        $('body, html').stop(true, true).animate({
            scrollTop: $(document.body)[0].scrollHeight
        }, 100, 'linear');
    });
});
