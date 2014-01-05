/* global desc, task, jake, fail, complete */
(function() {
    "use strict";

    desc ('Build and Test');
    task('default', ['lint', 'test']);

    desc('lint everything');
    task('lint', [], function() {
        var lint = require('./build/lint/lint_runner.js'),
        files = new jake.FileList();
        files.include('**/*.js');
        files.exclude('node_modules');
        files.exclude('build');

        lint.validateFileList(files.toArray(), nodeLintOptions(), {} || fail('lint failes'));
    });

    desc('test everything');
    task('test', [], function(){
        console.log('first test');
    });

    desc('example');
    task('example', function() {
      console.log('example task');
    });

    desc('integrate');
    task('integrate', ["default"], function() {
        console.log('1. Make sure git status is clean');
        console.log("2. Build on integration box");
        console.log("    a. Walk over to integration box");
        console.log("    b. 'git pull'");
        console.log("    c. 'jake'");
        console.log("    d. If Jake Fails start over");
        console.log("3. 'git check integration'");
        console.log("4. 'git merge master --no-ff --log'");
        console.log("5. 'git checkout master'");
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