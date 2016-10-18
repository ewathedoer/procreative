module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    vulcanize: {
      default: {
        options: {
          abspath: __dirname + '/app',
          stripComments: true,
          inlineScripts: true,
          inlineCss: true
        },
        files: {
          '404.html': '404.html',
          'contact.html': 'contact.html',
          'ecommerce-development.html': 'ecommerce-development.html',
          'hire-procreative.html': 'hire-procreative.html',
          'index.html': 'index.html',
          'portfolio.html': 'portfolio.html',
          'project-manager.html': 'project-manager.html',
          'software-development.html': 'software-development.html',
          'startup-developer.html': 'startup-developer.html',
          'system-development.html': 'system-development.html',
          'team.html': 'team.html',
          'ux-designer.html': 'ux-designer.html',
          'website-development.html': 'website-development.html'
        },
      },
    }
  });

  grunt.loadNpmTasks('grunt-vulcanize');
  
  grunt.file.setBase(__dirname + '/app');

  // Default task(s).
  grunt.registerTask('default', ['vulcanize']);

};