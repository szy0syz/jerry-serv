import Vue from 'vue'
import TinyMCE from 'tinymce-vue-2'
import 'tinymce/tinymce'
import 'tinymce/plugins/link/plugin'
import 'tinymce/plugins/image/plugin'
import 'tinymce/plugins/advlist/plugin'
import 'tinymce/plugins/autolink/plugin'
import 'tinymce/plugins/lists/plugin'
import 'tinymce/plugins/charmap/plugin'
import 'tinymce/plugins/print/plugin'
import 'tinymce/plugins/preview/plugin'
import 'tinymce/plugins/code/plugin'
import Theme from 'tinymce/themes/modern/theme'
import 'tinymce/skins/lightgray/skin.min.css'
import 'tinymce/skins/lightgray/content.min.css'

if (process.env.BROWSER) {
  window.Theme = Theme
}
Vue.component('tiny-mce', TinyMCE)