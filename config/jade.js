module.exports = function(grunt, options){
  return {
    options: {
      client: false,
      basedir: 'src',
      // pretty: true,
      data: function(dest, src) {
        function toTitleCase(str) {
          return str.replace(/\w\S*/g, function(txt){
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
          });
        }

        // Adapt the base URL for every file
        var baseUrl = '';
        if (grunt.option('absolute')){
          // Absolute paths
          baseUrl = 'http://' + grunt.option('deployURL') + String(src).replace('src/', '').replace(String(src).split('/').pop(), '');
        } else {
            // Relative paths
            var subDirs = String(src).split('/').length - 2;
            for(i = 0; i < subDirs; i++){
              baseUrl = '../' + baseUrl;
            }
        }

        // Create variables use in JADE
        var fileName = String(src).split('/').pop().replace('.jade','');
        var absoluteUrl = 'http://' + grunt.option('deployURL') + String(src).replace('src/', '').replace('.jade','');
        var deploySubDir = grunt.option('deploySubDir');
        var deployUrl = 'http://' + grunt.option('deployURL');
        var pageTitle = toTitleCase(fileName.replace(/-/g,' '));
        var websiteTitle = toTitleCase(grunt.option('projectDir').replace(/-/g,' '));
        var shareImgFound = grunt.file.exists('src/img/social-share.png');

        // Create timestamp
        var date = new Date();
        var month = date.getMonth()+1;
        var day = date.getDate();
        var timeStamp = (day<10 ? '0' : '') + day + '/' + (month<10 ? '0' : '') + month + '/' + date.getFullYear()

        return {
          websiteTitle: websiteTitle,
          pageTitle: pageTitle,
          fileName: fileName,
          baseUrl: baseUrl,
          absoluteUrl: absoluteUrl,
          deploySubDir: deploySubDir,
          deployUrl: deployUrl,
          shareImgFound: shareImgFound,
          timeStamp : timeStamp
        };
      }
    },
    html: {
      files: [ {
        cwd: 'src',
        src: ['**/*.jade', '!layouts/**/*.jade', '!includes/**/*.jade'],
        dest: 'build/<%= grunt.option("deploySubDir") %>',
        expand: true,
        ext: '.html'
      } ]
    }
  }
};