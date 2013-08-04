/* global desc, task, jake, fail, complete */
(function() {
    "use strict";

    task('default', ['lint']);

    desc('lint everything');
    task('lint', [], function() {
        var lint = require('./build/lint/lint_runner.js'),
        files = new jake.FileList();
        files.include('**/*.js');
        files.exclude('node_modules');
        files.exclude('build');

        lint.validateFileList(files.toArray(), nodeLintOptions(), {});
        if(!passed) fail("lint failed");
    });

    desc('example');
    task('example', function() {
      console.log('example task');
    });

    desc('integrate');
    task('integrate', ["default"], function() {
        console.log('Integration Logic Goes Here');
    });

    function nodeLintOptions() {
        return {
            bitwise: true,
            curly: false,
            eqeqeq: true,
            forin: true,
            immed: true,
            latedef: true,
            newcap: true,
            noarg: true,
            noempty: true,
            nonew: true,
            regexp: true,
            undef: true,
            strict: true,
            trailing: true,
            node: true
        };
    }
}());