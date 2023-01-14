module.exports = function(grunt) {
    grunt.initConfig({
      concat_include: {
        options: {
          // Task-specific options go here.
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
    });
    grunt.loadNpmTasks('grunt-concat-include');
    grunt.registerTask('default', ['concat_include']);
  };