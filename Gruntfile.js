module.exports = function(grunt) {
  grunt.initConfig({
    compass: {
      dist: {
        options: {
          sassDir: 'scss/',
          cssDir: 'css/'
        }
      }
    },
    concat: {
      css: {
        src: [
          'css/normalize.css',
          'css/bootstrap.min.css', 
          'css/bootstrap-responsive.min.css',
          'css/main.css'
        ],
        dest: 'css/main.concat.css'
      }
    },
    cssmin: {
      css: {
        src: 'css/main.concat.css',
        dest: 'css/main.min.css'
      }
    },
  });

  grunt.loadNpmTasks('grunt-css');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-compass');

  grunt.registerTask('default', ['compass', 'concat', 'cssmin']);
}