module.exports = function(grunt) {

  grunt.initConfig({
    copy: {
    main: {
      files: [
        {src: ['node_modules/grunt/**'], dest: 'copy/'}, // includes files in path 
        {expand: true, cwd: 'path/', src: ['**'], dest: 'dest/'}, // makes all src relative to cwd 
        {expand: true, flatten: true, src: ['path/**'], dest: 'dest/', filter: 'isFile'} // flattens results to a single level 
      ]
    }
  },
    watch: {
        }
  });

  grunt.loadNpmTasks('dp-grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['copy']);

};