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
          'css/bootstrap.min.css',
          'css/normalize.css',
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
    uglify: {
      js: {
        files: {
          'js/main.min.js': ['js/jquery.min.js', 'js/Chart.min.js', 'js/bootstrap.min.js', 'js/application.js', 'js/results.js']
        }
      }
    },
    watch: {
      scripts: {
        files: ['js/*.js', 'scss/*.scss'],
        tasks: ['default'],
        options: {
          spawn: false,
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-css');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  
  grunt.registerTask('default', ['compass', 'concat', 'cssmin', 'uglify']);
};