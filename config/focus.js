module.exports = function(grunt, options){
  return {
    dev: {
      include: ['html', 'cssDev', 'headJsDev', 'bodyJsDev', 'imagesDev', 'favicons', 'fonts', 'htaccess', 'php', 'configFiles']
    },
    prod: {
      include: ['html', 'cssProd', 'headJsProd', 'bodyJsProd', 'imagesProd', 'favicons', 'fonts', 'htaccess', 'php', 'configFiles']
    }
  }
};