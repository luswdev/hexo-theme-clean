var searchFunc = function (path, search_id, content_id) {
    'use strict';
    $.ajax({
        url: path,
        dataType: "xml",
        success: function (xmlResponse) {
            // get the contents from search data
            var datas = $("entry", xmlResponse).map(function () {
                return {
                    title: $("title", this).text(),
                    content: $("content", this).text(),
                    url: $("url", this).text()
                };
            }).get();
            var $input = document.getElementById(search_id);
            var $resultContent = document.getElementById(content_id);
            $input.addEventListener('input', function () {
                var str = '<ul class=\"search-result-list list-unstyled\">';
                var keywords = this.value.trim().toLowerCase().split(/[\s\-]+/);
                var resultLength = 0;
                $resultContent.innerHTML = "";
                if (this.value.trim().length <= 0) {
                    $resultContent.innerHTML = '<div class="search-empty text-center text-muted p-5"><i class="far fa-meh"></i></div>';
                    return;
                }
                // perform local searching
                datas.forEach(function (data) {
                    var isMatch = true;
                    var content_index = [];
                    var data_title = data.title.trim().toLowerCase();
                    var data_content = data.content.trim().replace(/<[^>]+>/g, "").toLowerCase();
                    var data_url = data.url;
                    var index_title = -1;
                    var index_content = -1;
                    var first_occur = -1;
                    // only match artiles with not empty titles and contents
                    if (data_title != '' && data_content != '') {
                        keywords.forEach(function (keyword, i) {
                            index_title = data_title.indexOf(keyword);
                            index_content = data_content.indexOf(keyword);
                            if (index_title < 0 && index_content < 0) {
                                isMatch = false;
                            } else {
                                if (index_content < 0) {
                                    index_content = 0;
                                }
                                if (i == 0) {
                                    first_occur = index_content;
                                }
                            }
                        });
                    }
                    // show search results
                    if (isMatch) {
                        str += "<li class='mt-3 mb-1'><a href='" + data_url + "' class='search-result-title'>" + data_title + "</a>";
                        var content = data.content.trim().replace(/<[^>]+>/g, "");
                        if (first_occur >= 0) {
                            // cut out 100 characters
                            var start = first_occur - 20;
                            var end = first_occur + 80;
                            if (start < 0) {
                                start = 0;
                            }
                            if (start == 0) {
                                end = 100;
                            }
                            if (end > content.length) {
                                end = content.length;
                            }
                            var match_content = content.substr(start, end);
                            // highlight all keywords
                            keywords.forEach(function (keyword) {
                                var regS = new RegExp(keyword, "gi");
                                match_content = match_content.replace(regS, "<em class=\"search-keyword mx-1\">" + keyword + "</em>");
                            });

                            str += "<p class=\"search-result my-3\">" + match_content + "...</p>"
                        }
                        str += "</li>";
                        resultLength++;
                    }
                });

                str += "</ul>";

                if (resultLength == 0) {
                    str = '<div class="search-empty text-center text-muted p-5"><i class="far fa-meh"></i></div>';
                }

                $resultContent.innerHTML = str;
            });
        }
    });
}