module.exports = function(grunt) {

  grunt.initConfig({
     shell: {
         makeDir: {
            command: 'mkdir test'
        }
    },
    watch: {
    },
    notify:{
      server: {
        options: {
          message: 'Server is ready!'
        }
      },
    },
  });

  grunt.loadNpmTasks('dp-grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-notify');
  //grunt.registerTask('default', ['shell']);
  grunt.registerTask('default', [
  // 'shell',
  'notify:server'
  ]);

};