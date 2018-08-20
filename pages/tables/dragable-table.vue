<style lang="less">
@import '../../assets/css/common.less';
.dragging-tip-enter-active {
  opacity: 1;
  transition: opacity 0.3s;
}
.dragging-tip-enter,
.dragging-tip-leave-to {
  opacity: 0;
  transition: opacity 0.3s;
}
.dragging-tip-con {
  display: block;
  text-align: center;
  width: 100%;
  height: 50px;
}
.dragging-tip-con span {
  font-size: 18px;
}
.record-tip-con {
  display: block;
  width: 100%;
  height: 292px;
  overflow: auto;
}
.record-item {
  box-sizing: content-box;
  display: block;
  overflow: hidden;
  height: 24px;
  line-height: 24px;
  padding: 8px 10px;
  border-bottom: 1px dashed gainsboro;
}
.record-tip-con span {
  font-size: 14px;
}
.edittable-test-con {
  height: 160px;
}
.edittable-table-height-con {
  height: 190px;
}
.edittable-con-1 {
  box-sizing: content-box;
  padding: 15px 0 0;
  height: 196px;
}
.edittable-table-get-currentdata-con {
  height: 190px !important;
}
.exportable-table-download-con1 {
  padding: 16px 0 16px 20px;
  border-bottom: 1px dashed #c3c3c3;
  margin-bottom: 16px;
}
.exportable-table-download-con2 {
  padding-left: 20px;
}
.show-image {
  padding: 20px 0px;
}
.show-image img {
  display: block;
  width: 100%;
  height: auto;
}
.searchable-table {
  &-con1 {
    height: 230px !important;
  }
}

.buttonPanel{ 
  margin-bottom: -8px;
  button {
    margin-left: 10px;
  }
}
</style>

<template>
  <div>
    <Row>
      <Col span="16">
        <Card>
          <DragableTable v-model="tableData" :columns-list="columnsList" @on-start="handleOnstart1" @on-end="handleOnend1"></DragableTable>
        </Card>
      </Col>
      <Col span="8" class="padding-left-10 height-100">
        <Card>
          <div class="buttonPanel" slot="extra">
            <Button type="info">添加</Button>
            <Button type="error">删除</Button>
            <Button type="success">保存</Button>
          </div>
          <p slot="title">
            <Icon type="clipboard"></Icon>
            首页导航操作记录( 拖拽 )
          </p>
          <Row style="height: 374px;">
            <div class="dragging-tip-con">
              <transition name="dragging-tip">
                <span v-show="table1.isDragging">您正在拖拽表格1单元行...</span>
              </transition>
            </div>
            <Card>
              <div class="record-tip-con">
                <div v-for="(item, index) in table1.draggingRecord" :key="index" class="record-item">
                  拖拽第 {{ item.from }} 行表格到第 {{ item.to }} 行
                </div>
              </div>
            </Card>
          </Row>
        </Card>
      </Col>
    </Row>
  </div>
</template>

<script>
import DragableTable from '~/components/tables/components/dragableTable.vue'

export default {
  name: 'dragable-table',
  components: {
    DragableTable
  },
  data() {
    return {
      columnsList: [],
      tableData: [],
      table1: {
        hasDragged: false,
        isDragging: false,
        oldIndex: 0,
        newIndex: 0,
        draggingRecord: []
      }
    }
  },
  methods: {
    handleOnstart1(from) {
      this.table1.oldIndex = from
      this.table1.hasDragged = true
      this.table1.isDragging = true
    },
    handleOnend1(e) {
      this.table1.isDragging = false
      this.table1.draggingRecord.unshift({
        from: e.from + 1,
        to: e.to + 1
      })
    },
    handleOnstart2(from) {
      this.table2.oldIndex = from
      this.table2.hasDragged = true
      this.table2.isDragging = true
    },
    handleOnend2(e) {
      this.table2.newIndex = e.to
      this.table2.isDragging = false
    },
    handleOnchoose2(from) {
      this.table2.chooseRecord.unshift(this.tableData[from].todoItem)
    },
    getData() {
      this.columnsList = [
        {
          title: '序号',
          type: 'index',
          width: 80,
          align: 'center'
        },
        {
          title: '导航名称',
          key: 'itemName'
        },
        {
          title: '导航图标',
          width: 130,
          key: 'cover',
          align: 'center',
          render: (h, params) => {
            return h('img', {
              attrs: {
                src: params.row.itemIco,
              },
              style: {
                display: 'inline-block',
                width: '66%'
              },
            })
          }
        },
        {
          title: '链接地址',
          key: 'itemUrl'
        },
        {
          title: '拖拽',
          key: 'drag',
          width: 90,
          align: 'center',
          render: h => {
            return h('Icon', {
              props: {
                type: 'arrow-move',
                size: 24
              }
            })
          }
        }
      ]
      this.tableData = [
        {
          itemName: '产业职教',
          itemIco: 'http://cdn.jerryshi.com/picgo/20180819213615.png',
          itemUrl: '/list?type=111'
        },
        {
          itemName: '校企合作',
          itemIco: 'http://cdn.jerryshi.com/picgo/20180819213615.png',
          itemUrl: '/list?type=222'
        },
        {
          itemName: '选学校',
          itemIco: 'http://cdn.jerryshi.com/picgo/20180819213615.png',
          itemUrl: '/list?type=333'
        },
        {
          itemName: '资源干货',
          itemIco: 'http://cdn.jerryshi.com/picgo/20180819213615.png',
          itemUrl: '/list?type=444'
        },
        {
          itemName: '校园安全',
          itemIco: 'http://cdn.jerryshi.com/picgo/20180819213615.png',
          itemUrl: '/list?type=555'
        },
        {
          itemName: '化育明珠',
          itemIco: 'http://cdn.jerryshi.com/picgo/20180819213615.png',
          itemUrl: '/list?type=666'
        },
        {
          itemName: '选企业',
          itemIco: 'http://cdn.jerryshi.com/picgo/20180819213615.png',
          itemUrl: '/list?type=777'
        },
        {
          itemName: '现代课堂',
          itemIco: 'http://cdn.jerryshi.com/picgo/20180819213615.png',
          itemUrl: '/list?type=888'
        },
      ]
    }
  },
  created() {
    // 可在此从服务端获取表格数据
    this.getData()
  }
}
</script>
