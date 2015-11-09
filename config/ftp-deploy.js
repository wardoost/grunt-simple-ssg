module.exports = function(grunt, options){
  return {
    build: {
      auth: {
        host: grunt.option("deployDomain"),
        port: 21,
        authKey: 'key1'
      },
      src: 'build/<%= grunt.option("deploySubDir") %>',
      dest: 'root/<%= grunt.option("deploySubDir") %>',
      exclusions: ['build/<%= grunt.option("deploySubDir") %>**/.DS_Store',
                   'build/<%= grunt.option("deploySubDir") %>**/Thumbs.db'],
      forceVerbose: true
    }
  }
};