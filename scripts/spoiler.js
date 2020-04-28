/**
 * spolier.js | global hexo script.
 *
 * Usage:
 *
 * {% spolier Title %}
 *
 */

function details (args, content) {
    var title = args.join(' ') || 'Details';
    var html  = '';
    
    html += '<details class="alert alert-secondary">';
    html += '<summary>' + title + '</summary>';
    html += hexo.render.renderSync({text: content, engine: 'markdown'}).trim();
    html += '</details>';

    return html;
}
  
hexo.extend.tag.register('spoiler', details, { ends: true });