import Vue from 'vue'
import { ImageDrop } from 'quill-image-drop-module'
// import { ImageResize } from 'quill-image-resize-module'
import VueQuillEditor, { Quill } from 'vue-quill-editor/dist/ssr'
// import { container,ImageExtend, QuillWatch } from "quill-image-extend-module"
// import {container, ImageExtend, QuillWatch} from "quill-image-extend-module"

if (process.browser) {
  // Quill.register("modules/imageExtend", ImageExtend)  
  // Quill.register("modules/imageResize", ImageResize)
  Quill.register('modules/imageDrop', ImageDrop)
  // Quill.register('modules/imageResize', ImageResize)

  // 注册字体
  // const Font = Quill.import('formats/font')
  // Font.whitelist = ['Arial', '宋体', '黑体', '微软雅黑']
  // Quill.register(Font, true)
}

Vue.use(VueQuillEditor)
