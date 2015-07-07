var dest = "./build";
var src = './src';
var layout = src + "/app/layout"
var components = src + "/app/components";

module.exports = {
  browserSync: {
    server: {
      // Serve up our build folder
      baseDir: dest
    }
  },
  stylus: {
    src:  [src + "/stylus/app.styl", src + "/stylus/stars.styl"],
  	watch: [src + "/stylus/app.styl", src + "/stylus/mixins/*.styl"],
  	dest: dest + "/css"
  },
  images: {
    src: src + "/images/**",
    dest: dest + "/images"
  },
  fonts: {
    src: src + "/fonts/**",
    dest: dest + "/fonts"
  },
  markup: {
    src: src + "/htdocs/**",
    dest: dest
  },
  audio: {
    src: src + "/audio/**",
    dest: dest + '/audio'
  },
  browserify: {
    // A separate bundle will be generated for each
    // bundle config in the list below
    bundleConfigs: [{
      entries: src + '/coffee/app.coffee',
      dest: dest + '/js',
      outputName: 'app.js',
      // Additional file extentions to make optional
      extensions: ['.coffee','.hbs'],
      // list of modules to make require-able externally
      external: ['jquery']
    }, {
      // entries: src + '/app/core/Vendor.coffee',
      dest: dest + '/js',
      outputName: 'vendor.js',
      // list of externally available modules to exclude from the bundle
      // extensions: '.js',
      require: ['jquery']
    }]
  },
  build: {
    cssSrc: dest + '/css/*.css',
    jsSrc: dest + '/js/*.js',
    cssDest: dest + '/css/',
    jsDest: dest + '/js/',
    dest: dest
  }
};
