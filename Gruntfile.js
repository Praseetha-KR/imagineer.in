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
				tasks: ['watch', 'wintersmith:preview'],
				options: {
					logCurrentOutput: true
				}
			}
		},
		watch: {
			development: {
				files: "./contents/assets/less/*",
				tasks: ['less']
			}
		}
	});
	grunt.loadNpmTasks('grunt-wintersmith');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-concurrent');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('production', ['wintersmith:production']);
	grunt.registerTask('default', ['concurrent:target']);
};
