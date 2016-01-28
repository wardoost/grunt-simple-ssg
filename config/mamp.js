module.exports = function(grunt, options){
  return {
    configserver: {
      options: {
        path: 'build',
        pathRelative: true,
        port: 8888,
        user: 'Ward'
      }
    },
    startserver: {
      options: {
        path: 'build',
        pathRelative: true,
        port: 8888,
        user: 'ward'
      }
    },
    stopserver: {
    }
  }
};