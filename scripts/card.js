/**
 * card.js | global hexo script.
 *
 * Usage:
 *
 * {% card class %}
 * <!-- header -->
 * Any content (support inline tags too).
 *  <!-- endheader -->
 * 
 * Any content (support inline tags too).
 * 
 * <!-- footer -->
 * Any content (support inline tags too).
 *  <!-- endfooter -->
 * {% endcard %}
 * 
 * [class] : default | primary | secondary | success | danger | warning | info | light | dark.
 *           If not defined, default class will be selected.
 *
 */

function cardContent (args, content) {
    var classes = args[0] || 'default';
    var textClass = (classes != 'default' && classes != 'light' ) ? ' text-white' : '';
    var rHeading = /<!--\s*header\s*-->\n([\w\W\s\S]*?)<!--\s*endheader\s*-->/g;
    var rFooter = /<!--\s*footer\s*-->\n([\w\W\s\S]*?)<!--\s*endfooter\s*-->/g;
    var heading = '';
    var footer = '';

    var returnVal = '<div class="card bg-' + classes + ' ' + textClass + ' my-3">';

    if (heading = rHeading.exec(content)) {
        content = content.replace(rHeading, '');
        returnVal += '<div class="card-header">' 
        returnVal += hexo.render.renderSync({text: heading[1], engine: 'markdown'}).trim() + '</div>';
    }

    if (footer = rFooter.exec(content)) {
        content = content.replace(rFooter, '');
        returnVal += '<div class="card-body">' + hexo.render.renderSync({text: content, engine: 'markdown'}).trim() + '</div>';
        returnVal += '<div class="card-footer">' + hexo.render.renderSync({text: footer[1], engine: 'markdown'}).trim() + '</div></div>';
    } else {
        returnVal += '<div class="card-body">' + hexo.render.renderSync({text: content, engine: 'markdown'}).trim() + '</div></div>';
    }

    return returnVal;
}
  
hexo.extend.tag.register('card', cardContent, { ends: true });
