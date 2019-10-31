module.exports = function(grunt){
    grunt.initConfig({
        // pass in options to plugins, references to files
        jshint: {
            files: ['*.js', 'js/*.js'],
            options: {
                globals: {
                    jQuery: true
                },
                esversion: 6
            }
        },
        csslint: {
          strict: {
            options: {
              import: 2,
              quiet: true
            },
            src: ['css/style.css']
          },
      },
      cssmin: {
          target: {
              files: [{
                  expand: true,
                  src: ['css/*.css', 'css/!*.min.css'],
                  dest: '',
                  ext: '.min.css'
              }]
          }
      },
      uglify: {
          options: {
            mangle: false
          },
          my_target: {
            files: {
              'js/script.min.js': ['js/script.js']
            }
          }
      },
        watch: {
            files: ['<%= jshint.files %>', 'css/style.css'],
            tasks: ['jshint', 'csslint']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify-es');

    grunt.registerTask('checkJS', ['jshint']);
    grunt.registerTask('checkCSS',['csslint']);
    grunt.registerTask('minifyCSS', ['cssmin']);
    grunt.registerTask('runWatch', ['watch']);
};
