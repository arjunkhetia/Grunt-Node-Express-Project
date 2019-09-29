module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    express: {
      options: {
        // Override defaults here
      },
      server: {
        options: {
          script: 'bin/www'
        }
      }
    },
    watch: {
      express: {
        files:  [ '**/*.js', '**/*.hbs', '**/*.css' ],
        tasks:  [ 'express:server' ],
        options: {
          spawn: false,
          livereload: true
        }
      }
    }
  });

  grunt.registerTask('default', ['express', 'watch']);

};
