/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)

import './styles/css/icon-list.css';
import './styles/css/plugin.css';
import './styles/css/icons.css';
import './styles/scss/style.scss';
import './web-fonts/font-awesome/font-awesome.min.css';
import './styles/css/plugins.css';
import './styles/switchercss/switcher.css';
import './styles/switchercss/demo.css';
import './styles/app.css';


require('./js/parametrage/add-collection-repas-detail');
require('./js/parametrage/add-collection-page-imageBanniere');
require('./js/parametrage/add-collection-section-detailSection');

$('select.select2').select2({width: '100%'});

// const $ = require('./plugins/jquery/jquery.min');
// global.$ = global.jQuery = $;
// global.jQuery = $;
//
// import toastr from 'toastr';
// global.toastr = toastr;

// start the Stimulus application
// import './bootstrap';

import { createApp } from 'vue';
import { createPinia } from 'pinia'
import App from './components/Message.vue';
import App2 from './components/Suggestion.vue';
const app = createApp(App)
const app2 = createApp(App2)

app.use(createPinia())
app.mount('#appMessage')

app2.use(createPinia())
app2.mount('#appSuggestion')
