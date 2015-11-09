var rewriteRulesSnippet = require("grunt-connect-rewrite/lib/utils").rewriteRequest;

module.exports = function(grunt, options){
  return {
    options: {
      port: 8000,
      hostname: '*',
      livereload: true,
    },
    build: {
      rules: [{
          from: '(^((?!css|html|js|img|fonts|\/$).)*$)',
          to: "$1.html"
        }],
      options: {
        base: 'build',
        middleware: function (connect, options) {
          var middlewares = [];
         
          // RewriteRules support 
          middlewares.push(rewriteRulesSnippet);

          if (!Array.isArray(options.base)) {
            options.base = [options.base];
          }

          var directory = options.directory || options.base[options.base.length - 1];
          options.base.forEach(function (base) {
            // Serve static files. 
            middlewares.push(connect.static(base));
          });

          // Make directory browse-able. 
          middlewares.push(connect.directory(directory));

          return middlewares;
        }
      }
    }
  }
};