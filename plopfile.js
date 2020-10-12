module.exports = function (plop) {
    // controller generator
    plop.setGenerator('component', {
        description: 'create stateless component',
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'component name please'
        }],
        actions: [{
            type: 'add',
            path: 'src/components/{{name}}/{{name}}.js',
            templateFile: 'plop-templates/component.js'
        }, {
                type: 'add',
                path: 'src/components/{{name}}/{{name}}.test.js',
                templateFile: 'plop-templates/component.test.js'
        }]
    });
    plop.setGenerator('container', {
        description: 'create class',
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'class name'
        }],
        actions: [{
            type: 'add',
            path: 'src/containers/{{name}}/{{name}}.js',
            templateFile: 'plop-templates/class.js'
        }, {
            type: 'add',
            path: 'src/containers/{{name}}/{{name}}.test.js',
            templateFile: 'plop-templates/class.test.js'
        }]
    });
    plop.setGenerator('styled component', {
        description: 'create styled component',
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'component name please'
        }, {
            type: 'input',
            name: 'element',
            message: 'element name please'
        }],
        actions: [{
            type: 'add',
            path: 'src/components/{{name}}/{{name}}.js',
            templateFile: 'plop-templates/styled-component.js'
        }, {
            type: 'add',
            path: 'src/components/{{name}}/{{name}}.test.js',
            templateFile: 'plop-templates/component.test.js'
        }]
    });
};