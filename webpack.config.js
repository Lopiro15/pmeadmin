const Encore = require('@symfony/webpack-encore');

// Manually configure the runtime environment if not already configured yet by the "encore" command.
// It's useful when you use tools that rely on webpack.config.js file.
if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

Encore
    // directory where compiled assets will be stored
    .setOutputPath('public/build/')
    // public path used by the web server to access the output path
    .setPublicPath('/build')
    // only needed for CDN's or subdirectory deploy
    //.setManifestKeyPrefix('build/')

    /*
     * ENTRY CONFIG
     *
     * Each entry will result in one JavaScript file (e.g. app.js)
     * and one CSS file (e.g. app.css) if your JavaScript imports CSS.
     */
    .addEntry('app', './assets/app.js')


    // js file inculdes
    .addEntry('js/advanced-form-elements', './assets/js/advanced-form-elements.js')
    .addEntry('js/apexcharts', './assets/js/apexcharts.js')
    .addEntry('js/blog-post', './assets/js/blog-post.js')
    .addEntry('js/calendar', './assets/js/calendar.js')
    .addEntry('js/carousel', './assets/js/carousel.js')
    .addEntry('js/chart-circle', './assets/js/chart-circle.js')
    .addEntry('js/chart.chartjs', './assets/js/chart.chartjs.js')
    .addEntry('js/chart.echarts', './assets/js/chart.echarts.js')
    .addEntry('js/chart.flot', './assets/js/chart.flot.js')
    .addEntry('js/chart.flot.sampledata', './assets/js/chart.flot.sampledata.js')
    .addEntry('js/chart.morris', './assets/js/chart.morris.js')
    .addEntry('js/chart.peity', './assets/js/chart.peity.js')
    .addEntry('js/chart.sparkline', './assets/js/chart.sparkline.js')
    .addEntry('js/chat', './assets/js/chat.js')
    .addEntry('js/check-all-mail', './assets/js/check-all-mail.js')
    .addEntry('js/checkout-jquery-steps', './assets/js/checkout-jquery-steps.js')
    .addEntry('js/contacts', './assets/js/contacts.js')
    .addEntry('js/crypto-buysell', './assets/js/crypto-buysell.js')
    .addEntry('js/crypto-dashboard', './assets/js/crypto-dashboard.js')
    .addEntry('js/crypto-exchange', './assets/js/crypto-exchange.js')
    .addEntry('js/crypto-market', './assets/js/crypto-market.js')
    .addEntry('js/crypto-transaction', './assets/js/crypto-transaction.js')
    .addEntry('js/custom', './assets/js/custom.js')
    .addEntry('js/switcher-styles', './assets/js/switcher-styles.js')
    .addEntry('js/ecommerce-dashboard', './assets/js/ecommerce-dashboard.js')
    .addEntry('js/file-detail', './assets/js/file-detail.js')
    .addEntry('js/form-editor', './assets/js/form-editor.js')
    .addEntry('js/form-elements', './assets/js/form-elements.js')
    .addEntry('js/form-validation', './assets/js/form-validation.js')
    .addEntry('js/form-vallidations', './assets/js/form-vallidations.js')
    .addEntry('js/form-wizard', './assets/js/form-wizard.js')
    .addEntry('js/gallery', './assets/js/gallery.js')
    .addEntry('js/generate-otp', './assets/js/generate-otp.js')
    .addEntry('js/handleCounter', './assets/js/handleCounter.js')
    .addEntry('js/index', './assets/js/index.js')
    .addEntry('js/jquery.vmap.sampledata', './assets/js/jquery.vmap.sampledata.js')
    .addEntry('js/mapelmaps', './assets/js/mapelmaps.js')
    .addEntry('js/modal', './assets/js/modal.js')
    .addEntry('js/picker', './assets/js/picker.js')
    .addEntry('js/popover', './assets/js/popover.js')
    .addEntry('js/select2', './assets/js/select2.js')
    .addEntry('js/sticky', './assets/js/sticky.js')
    .addEntry('js/summernote', './assets/js/summernote.js')
    .addEntry('js/sweet-alert', './assets/js/sweet-alert.js')
    .addEntry('js/table-data', './assets/js/table-data.js')
    .addEntry('js/tabs', './assets/js/tabs.js')
    .addEntry('js/themeColors', './assets/js/themeColors.js')
    .addEntry('js/timline', './assets/js/timline.js')
    .addEntry('js/tooltip', './assets/js/tooltip.js')
    .addEntry('js/vector-map', './assets/js/vector-map.js')
    .addEntry('js/widgets', './assets/js/widgets.js')
    .addEntry('switcher/switcher', './assets/switcherjs/switcher.js')


    // enables the Symfony UX Stimulus bridge (used in assets/bootstrap.js)
    .enableStimulusBridge('./assets/controllers.json')

    // When enabled, Webpack "splits" your files into smaller pieces for greater optimization.
    .splitEntryChunks()

    // will require an extra script tag for runtime.js
    // but, you probably want this, unless you're building a single-page app
    .enableSingleRuntimeChunk()

    /*
     * FEATURE CONFIG
     *
     * Enable & configure other features below. For a full
     * list of features, see:
     * https://symfony.com/doc/current/frontend.html#adding-more-features
     */
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .enableSourceMaps(!Encore.isProduction())
    // enables hashed filenames (e.g. app.abc123.css)
    .enableVersioning(Encore.isProduction())

    // configure Babel
    // .configureBabel((config) => {
    //     config.plugins.push('@babel/a-babel-plugin');
    // })

    // enables and configure @babel/preset-env polyfills
    .configureBabelPresetEnv((config) => {
        config.useBuiltIns = 'usage';
        config.corejs = '3.38';
    })

    .copyFiles({
        from: './assets/img',
        // optional target path, relative to the output dir
        to: 'img/[path][name].[ext]',

        // if versioning is enabled, add the file hash too
        //to: 'img/[path][name].[hash:8].[ext]',

        // only copy files matching this pattern
        //pattern: /\.(png|jpg|jpeg)$/
    })

    .copyFiles({
        from: './assets/plugins',

        // optional target path, relative to the output dir
        to: 'plugins/[path][name].[ext]',

        // if versioning is enabled, add the file hash too
        //to: 'plugins/[path][name].[ext]',

        // only copy files matching this pattern
        //pattern: /\.(js)$/
    })

    .copyFiles({
        from: './assets/web-fonts',

        // optional target path, relative to the output dir
        to: 'web-fonts/[path][name].[ext]',

        // if versioning is enabled, add the file hash too
        //to: 'plugins/[path][name].[ext]',

        // only copy files matching this pattern
        //pattern: /\.(js)$/
    })

    // enables Sass/SCSS support
    .enableSassLoader()

    // uncomment if you use TypeScript
    //.enableTypeScriptLoader()

    // uncomment if you use React
    //.enableReactPreset()

    // uncomment to get integrity="..." attributes on your script & link tags
    // requires WebpackEncoreBundle 1.4 or higher
    //.enableIntegrityHashes(Encore.isProduction())

    // uncomment if you're having problems with a jQuery plugin
    //.autoProvidejQuery()
    .enableVueLoader()
;

module.exports = Encore.getWebpackConfig();
