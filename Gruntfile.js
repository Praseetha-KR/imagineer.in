module.exports = function(grunt) {
	grunt.initConfig({
		wintersmith: {
			production: {
				options: {
					action: "build",
					config: './config.json'
				}
			},
			preview: {
				options: {
					action: "preview",
					config: './config.json'
				}
			}
		},
		less: {
			development: {
				options: {
					paths: ["contents/assets/css"]
				},
				files: {
					"./contents/assets/css/app.css": "./contents/assets/less/app.less"
				}
			}
		},
		concurrent: {
			target: {
				tasks: ['wintersmith:preview', 'less'],
				options: {
					logCurrentOutput: true
				}
			}
		}
	});
	grunt.loadNpmTasks('grunt-wintersmith');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-concurrent');

	grunt.registerTask('production', ['wintersmith:production']);
	grunt.registerTask('default', ['concurrent:target']);
};
