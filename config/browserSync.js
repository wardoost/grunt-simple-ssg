module.exports = function(grunt, options){
  return {
    build: {
      options: {
        proxy: 'localhost:8888',
        files: ['build/**/*'],
        watchTask: true,
        logLevel: 'info',
        logConnections: true,
        open: "ui-external",
        browser: "google chrome",
        notify: false
      }
    }
  }
};