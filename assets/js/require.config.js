// Set up module management
require.config({
    //By default load any component from assets
    baseUrl: '/',
    //except, if the component starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        'jquery': 'js/lib/jquery-1.7.2.min',
        'underscore': 'js/lib/underscore-min',
        'backbone': 'js/lib/backbone-min',
        'backbone-mvc': 'js/lib/backbone-mvc',
        'handlebars': 'js/lib/handlebars.runtime',

        // Plugins
        'css': 'js/lib/css'
    },
    shim: {
        'jquery': {
            exports: '$'
        },
        'underscore': {
            exports: '_'
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'backbone-mvc': {
            deps: ['backbone'],
            exports: 'BackboneMVC'
        },
        'handlebars': {
            exports: 'Handlebars'
        }
    }
});
