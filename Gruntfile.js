/* Gruntfile.js
 */

module.exports = function (grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        /**
         * Mocha Unit Tests & Blanket Coverage 
         */ 
        //blanket_mocha: {
        //    all: ["test/test_runner.html"],
        //    options: {
        //        threshold: 90,
        //        run: false
        //    }
        //},
        watch: {
            scripts: {
                files: [
                    './src/goatstone/**/*.css',
                    '<%= jshint.files %>'
                ],
                tasks: ['default'],
                options: {
                    spawn: false,
                    event: ['all'],
                    livereload: true
                }
            }
        },
        concat: {
            options: {
                separator: ' '
            },
            css: {
                src: [
                    'src/goatstone/alphacronke/style/*.css',
                    'src/goatstone/ui/style/*.css'
                ],
                dest: 'public/css/<%= pkg.name %>.all.css'
            }
        },
        jshint: {
            files: ['Gruntfile.js', 'src/goatstone/**/*.js'],
            options: {
                //  options here to override JSHint defaults
                "-W030": true,
                globals: {
                    jQuery: true,
                    console: true,
                    module: true,
                    document: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    //grunt.loadNpmTasks("grunt-blanket-mocha");
    //grunt.registerTask("test", ["blanket_mocha"]);
    grunt.registerTask('default', ['jshint' ]);
};