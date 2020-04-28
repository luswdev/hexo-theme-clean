/**
 * badge.js | global hexo script.
 *
 * Usage:
 *
 * {% badge [class]@Text %}
 *
 * [class] : primary | secondary | success | danger | warning | info | light | dark.
 *           If not defined, secondary class will be selected.
 */

function postBadge (args) {
    args = args.join(' ').split('@');
    var classes = args[0] || 'secondary';
    var text = args[1] || '';
  
    classes = classes.trim();
    !text && hexo.log.warn('badge text must be defined!');
  
    return '<span class="badge badge-' + classes + '">' + text + '</span>';
}
  
hexo.extend.tag.register('badge', postBadge, { ends: false });