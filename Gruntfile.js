module.exports = function(grunt) {
      grunt.initConfig({
        concat_include: {
          options: {
            separator: ';',
            encoding: 'utf8',
          },
          your_target: {
            src: 'src/main.js',
            dest: 'dist/all.js',
            nonull: true,
            include: [
            'node_modules/@material-tailwind/html/scripts/collapse.js',
            'https://unpkg.com/@material-tailwind/html@latest/scripts/collapse.js',
            'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js',
   'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js',
   'https://unpkg.com/@material-tailwind/html@latest/scripts/dialog.js'
 
            ]
          },
        },
        copy: {
          main: {
            files: [
              {src: 'dist/all.js', dest: 'public/all.js'}
            ],
          },
        },
      });
      grunt.loadNpmTasks('grunt-concat-include');
      grunt.loadNpmTasks('grunt-contrib-copy');
      grunt.registerTask('default', ['concat_include', 'copy']);
    };
    