module.exports = function(grunt) {
  grunt.initConfig({
    browserify:{
      production:{
        files:{
          'dist/openvv.js':['src/OpenVV.js']
        },
        options:{
          transform:['babelify'],
          browserifyOptions:{
            debug:true,
            standalone:'OpenVV'
          }
        }
      }
    },
    uglify: {
      my_target: {
        files: {
          'dist/openvv.min.js': ['dist/openvv.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default',['browserify:production']);
  grunt.registerTask('minifyme', ['uglify']);
  grunt.registerTask('development',['browserify:development']);
  grunt.registerTask('test',[]);
}