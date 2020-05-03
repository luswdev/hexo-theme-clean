/**
 * progress.js | global hexo script.
 *
 * Usage:
 *
 * {% progress [class] @percent %}
 *
 * [class] : primary | secondary | success | danger | warning | info | light | dark.
 *           If not defined, secondary class will be selected.
 */

function postProgress (args) {
    args = args.join(' ').split('@');
    var classes = args[0] || '';
    var percent = args[1] || '0';

    classes = classes.trim();
    if (classes) {
        classes = 'bg-' + classes;
    }

    var html = '<div class="progress">';
    html += '<div class="progress-bar ' + classes + '" role="progressbar" ';
    html += 'style="width: ' + percent + '%;" aria-valuenow="' + percent + '" aria-valuemin="0" aria-valuemax="100"></div>';
    html += '</div>';

    return html;
}
  
hexo.extend.tag.register('progress', postProgress, { ends: false });