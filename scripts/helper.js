/* global hexo */

'use strict';

hexo.extend.filter.register('after_post_render', function (data) {
    /* table */
    data.content = data.content.replace(/<table>\n<thead>/g, '<div class="table-responsive">\n<table class="table table-bordered table-striped">\n<thead>');
    data.content = data.content.replace(/<\/tbody>\n<\/table>/g, '</tbody>\n</table></div>');

    /* highlight line-number class */
    data.content = data.content.replace(/<figure class="highlight ([A-z0-9]*)"><table><tbody><tr><td class="gutter">/g, '<figure class="highlight $1 line-number"><table><tbody><tr><td class="gutter">');

    /* light gallery */
    data.content = data.content.replace(/(<img[^>]*) src=("[^"]*") ([^>]*>)/g, '<div class="img-item" data-src=$2 data-sub-html=".caption">$1 src=$2 $3</div>');

    let rAlt    = /(<img[^>]*) alt="([^"]*)"([^>]*>)/g;
    let rtitle  = /(<img[^>]*) title="([^"]*)"([^>]*>)/g;
    if (rAlt.exec(data.content)) {
        data.content = data.content.replace(rAlt, '$1 alt="$2"$3<div class="img-caption d-block text-center"><span class="center-caption text-muted border-bottom">$2</span></div>');
    } else if (rtitle.exec(data.content)) {
        data.content = data.content.replace(rtitle, '$1 title="$2"$3<div class="img-caption d-block text-center"><span class="center-caption text-muted border-bottom">$2</span></div>');
    }

    /* footnote */
    data.content = data.content.replace(/<div id="footnotes"><hr>/g, '<div id="footnotes"><hr class="block-hr">');
    data.content = data.content.replace(/<div id="footnotelist"><ol style="list-style: none; padding-left: 0; margin-left: [\d]+px">/g, '<div id="footnotelist" class="card card-default"><div class="card-header">Reference</div><ol class="list-group list-group-flush" style="list-style: none; padding-left: 0; margin-left: 0px">');
    data.content = data.content.replace(/<li id="fn:([\d]+)">/g, '<li id="fn:$1" class="list-group-item">');
    data.content = data.content.replace(/<span style="display: inline-block; vertical-align: top; padding-right: 10px; margin-left: [-\d]+px">/g, '<span style="display: inline-block; vertical-align: top; padding-right: 10px; margin-left: 0px">');

    return data;
});