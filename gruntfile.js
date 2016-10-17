module.exports = function(grunt) {

  grunt.initConfig({
     ftpPut: {
        options: {
            host: 'h3p.eu',
            user: 'Tcdi',
            pass: 'poitiers'
        },
        upload: {
            files: {
                'public_html': 'fi.le'
            }
        }
    },
    watch: {
        }
  });

  grunt.loadNpmTasks('dp-grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-ftp');
  grunt.registerTask('default', ['ftpPut']);

};