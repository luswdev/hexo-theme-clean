/**
 * alert.js | global hexo script.
 *
 * Usage:
 *
 * {% alert [class] %}
 * Any content (support inline tags too).
 * {% endalert%}
 *
 * [class] : primary | secondary | success | danger | warning | info | light | dark.
 *           If not defined, secondary class will be selected.
 */

function alertContent (args, content) {
    var className = args.join(' ') || 'secondary';
    var html = '';
    
    html += '<div class="alert alert-' + className + '">';
    html += hexo.render.renderSync({text: content, engine: 'markdown'}).trim();
    html += '</div>';

    return html
}
  
hexo.extend.tag.register('alert', alertContent, {ends: true});