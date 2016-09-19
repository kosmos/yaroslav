var util = require('gulp-util');

var production = util.env.production || util.env.prod || false;

var devPath = 'src';
var destPath = 'build';
var tmpPath = '.tmp';

var config = {
    env       : 'development',
    production: production,

    src: {
        root         : devPath,
        templates    : devPath + '/templates',
        templatesData: devPath + '/templates/data',
        sass         : devPath + '/sass',
        // path for sass files that will be generated automatically via some of tasks
        sassGen      : devPath + '/sass/generated',
        js           : devPath + '/js',
        img          : devPath + '/img',
        svg          : devPath + '/img/svg',
        icons        : devPath + '/icons',
        data         : devPath + '/data',
        // path to png sources for sprite:png task
        iconsPng     : devPath + '/icons',
        // path to svg sources for sprite:svg task
        iconsSvg     : devPath + '/icons',
        // path to svg sources for iconfont task
        iconsFont    : devPath + '/icons',
        fonts        : devPath + '/fonts',
        lib          : devPath + '/lib',
        blocks       : devPath + '/blocks'
    },
    dest: {
        root : destPath,
        html : destPath,
        tmp  : tmpPath,
        css  : destPath + '/css',
        js   : destPath + '/js',
        img  : destPath + '/img',
        fonts: destPath + '/fonts',
        lib  : destPath + '/lib',
        data : tmpPath + '/data'
    },

    setEnv: function(env) {
        if (typeof env !== 'string') return;
        this.env = env;
        this.production = env === 'production';
        process.env.NODE_ENV = env;
    },

    logEnv: function() {
        util.log(
            'Environment:',
            util.colors.white.bgRed(' ' + process.env.NODE_ENV + ' ')
        );
    },

    errorHandler: require('./util/handle-errors')
};

config.setEnv(production ? 'production' : 'development');

module.exports = config;
