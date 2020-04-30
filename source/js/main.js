$(document).ready( function () {
    let imgInit = function () {
        $('article .container img').each(function () {
            let imgPath = $(this).attr('src');
            $(this).wrap('<div class="img-item" data-src="' + imgPath + '" data-sub-html=".caption"></div>');

            $(this).addClass("img-shadow img-margin");
            let captionText = $(this).attr('alt') || $(this).attr('title') || "";
            
            if (captionText !== "") {
                let caption = "<div class='img-caption d-block text-center'>";
                caption += "<span class='center-caption text-muted border-bottom'>" + captionText + "</span>";
                caption += "</div>";

                let captionHtml = $.parseHTML(caption);
                $(this).parent().append(captionHtml);
            }
        });
    };
    imgInit();

    $('article').lightGallery({
        selector: '.img-item',
        subHtmlSelectorRelative: true
    });

    let tableInit = function () {
        $('article .container table').each(function () {
            if (!($(this).parent().hasClass("highlight"))) {
                $(this).wrap('<div class="table-responsive"></div>');
                $(this).addClass('table table-bordered');
            }
        });
    }
    tableInit();

    let highlightInit = function () {
        $('article .container figure:has(td.gutter)').each(function () {
            $(this).addClass('line_number');
        });
    }
    highlightInit();

    let footnoteInit = function () {
        $("#footnotes hr").addClass("block-hr");
        $("#footnotelist").addClass("card card-default");
        $("#footnotelist ol").addClass("list-group list-group-flush");
        $("#footnotelist li").addClass("list-group-item");
        $("#footnotelist ol").css({"margin-left": "0"});
        $("#footnotelist li span:first-child").css({"margin-left": "0"});

        var heading = '<div class="card-header">Reference</div>'
        let headingHtml = $.parseHTML(heading);
        $("#footnotelist").prepend(headingHtml);
    }
    footnoteInit();

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
        $(".expand-text").toggle()
        $(".close-text").toggle()
    })

    $('.back-to-top').on('click', function () {
        $('body, html').stop(true, true).animate({
            scrollTop: 0
        }, 100, 'linear')
    });

    $('.go-to-bottom').on('click', function () {
        $('body, html').stop(true, true).animate({
            scrollTop: $(document.body)[0].scrollHeight
        }, 100, 'linear')
    });
});
