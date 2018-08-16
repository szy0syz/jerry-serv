import Vue from 'vue'
import { ImageDrop } from 'quill-image-drop-module'
// import { ImageResize } from 'quill-image-resize-module'
import VueQuillEditor, { Quill } from 'vue-quill-editor/dist/ssr'
// import { container,ImageExtend, QuillWatch } from "quill-image-extend-module"
// import {container, ImageExtend, QuillWatch} from "quill-image-extend-module"

if(process.browser) {  
  // Quill.register("modules/imageExtend", ImageExtend)  
  // Quill.register("modules/imageResize", ImageResize)
  Quill.register('modules/imageDrop', ImageDrop)
  // Quill.register('modules/imageResize', ImageResize)
}

Vue.use(VueQuillEditor)
