module.exports = function (grunt) {
  //----------------------------------------------
  //- Global variables
  //----------------------------------------------
  var deployDomain = 'wardoosterlijnck.be'; // No trailing slash, no subdomain
  var deploySubDir = ''; // Trailing slash
  var deployURL = deployDomain + '/' + deploySubDir;

  // Read package.json
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')
  });

  // Save grunt options
  grunt.option('deployDomain', deployDomain);
  grunt.option('deploySubDir', deploySubDir);
  grunt.option('deployURL', deployURL);
  grunt.option('projectDir', process.cwd().split('/').pop()); // Project name according to the root directory name
  grunt.option('absolute', grunt.option('absolute') || false); // Default is false

  // Lookup and save IP address in grunt option
  var ifaces = require('os').networkInterfaces();
  Object.keys(ifaces).forEach(function (ifname) {
    ifaces[ifname].forEach(function (iface) {
      if ('IPv4' !== iface.family || iface.internal !== false) { return; } // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
      grunt.option('ipAddress', iface.address); // Save in Grunt option
    });
  });

  // Display project settings
  grunt.log.subhead((' ' + grunt.option('projectDir') + ' ').green.inverse);
  grunt.log.writeln(
      'Local IP'.bold + ': ' + grunt.option('ipAddress') + '\n' +
      'Deploy URL'.bold + ': ' + grunt.option('deployURL') + '\n' +
      'Absolute paths'.bold + ': ' + grunt.option('absolute')
    );

  // Load grunt configurations automatically and define the configuration for all the tasks
  grunt.initConfig(require('load-grunt-configs')(grunt));

  // Load all grunt tasks
  require('load-grunt-tasks')(grunt);

  // Record execution time of tasks
  require('time-grunt')(grunt);

  //----------------------------------------------
  //- Create tasks
  //----------------------------------------------

  // Create build task
  grunt.registerTask('build', [
    'jade',
    'less',
    'uglify',
    'imagemin',
    'favicons',
    'copy',
    'textfile',
    'notify:build'
  ]);

  // Create server task
  grunt.registerTask('server', [
    'exec:mamp',
    'browserSync',
    'notify:server',
    'watch'
  ]);

  // Create seo tasks
  grunt.registerTask('seo', [
    'sitemap',
    'robotstxt'
  ]);

  // Create deploy tasks
  grunt.registerTask('deploy', [
    'clean',
    'build',
    'seo',
    'ftp-deploy',
    'notify:deploy',
    'open:deploy'
  ]);

  // Create dev task
  grunt.registerTask('dev', [
    'devUpdate',
    'clean',
    'build',
    'seo',
    'server'
  ]);

  // Create default task
  grunt.registerTask('default', [
    'clean',
    'build',
    'server'
  ]);
};

// Close MAMP server after processes stop
var exec = require('child_process').exec;
process.on('SIGINT', function () {
  exec('/Applications/MAMP/bin/stop.sh', function () {
    process.exit();
  });
});
