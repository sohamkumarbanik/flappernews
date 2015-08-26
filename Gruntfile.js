
//Gruntfile
module.exports = function(grunt) {

  //Initializing the configuration object
  grunt.initConfig({

    // Task configuration
    concat: {
      options: {
        separator: ';',
      },
      js_frontend: {
        src: [
          './bower_components/jquery/jquery.js',
          './bower_components/bootstrap/dist/js/bootstrap.js',
        ],
        dest: './public/javascripts/frontend.js',
      }
    },
    less: {
      development: {
            options: {
              compress: true,  //minifying the result
            },
            files: {
              //compiling frontend.less into frontend.css
              "./public/stylesheets/frontend.css":"./public/stylesheets/frontend.less",
            }
        }
    },
    uglify: {
      options: {
        mangle: false  // Use if you want the names of your functions and variables unchanged
      },
      frontend: {
        files: {
          './public/javascripts/frontend.js': './public/javascripts/frontend.js',
        }
      }
    },
    phpunit: {
      //...
    },
    copy: {
      main: {
        files: [{
            expand: true,
            cwd: './bower_components/font-awesome/fonts/',
            src: ['**'],
            dest: 'public/fonts/'
        }]
      }
    },
    watch: {
      js_frontend: {
        files: [
          //watched files
          './bower_components/jquery/jquery.js',
          './bower_components/bootstrap/dist/js/bootstrap.js',
          './public/javascripts/frontend.js'
          ],   
        tasks: ['concat:js_frontend','uglify:frontend'],     //tasks to run
        options: {
          livereload: true                        //reloads the browser
        }
      },
      less: {
        files: ['./public/stylesheets/*.less'],  //watched files
        tasks: ['less'],                          //tasks to run
        options: {
          livereload: true                        //reloads the browser
        }
      }
    }
  });

  // Plugin loading
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-phpunit');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Task definition
  grunt.registerTask('default', ['watch']);


};