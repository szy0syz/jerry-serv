<style lang="less" scoped>
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

.ivu-row{
  height: 500px;
}
</style>

<template>
    <div>
        <Row class="margin-top-10">
            <Col span="24">
            <Card>
                <p slot="title">
                    <Icon type="ios-keypad"></Icon>
                    编辑首页轮播
                </p>
                <Row :gutter="10">
                    <Col span="24">
                    <div class="edittable-table-height-con">
                        <can-edit-table refs="table4" v-model="editInlineAndCellData" @on-cell-change="handleCellChange" @on-change="handleChange" :editIncell="true" :columns-list="editInlineAndCellColumn"></can-edit-table>
                    </div>
                    </Col>
                    <Modal :width="900" v-model="showCurrentTableData">
                        <can-edit-table refs="table5" v-model="editInlineAndCellData" :columns-list="showCurrentColumns"></can-edit-table>
                    </Modal>
                </Row>
            </Card>
            </Col>
        </Row>
    </div>
</template>

<script>
import canEditTable from '~/components/tables/components/canEditTable.vue'

export default {
  name: 'article-type',
  components: {
    canEditTable
  },
  data() {
    return {
      editInlineAndCellColumn: [
        {
          title: '序号',
          type: 'index',
          width: 80,
          align: 'center'
        },
        {
          title: '类别名称',
          align: 'center',
          key: 'name',
          width: 300,
          editable: true
        },
        {
          title: '备注',
          align: 'center',
          key: 'remark',
          editable: true
        },
        {
          title: '操作',
          align: 'center',
          width: 200,
          key: 'handle',
          handle: ['edit', 'delete']
        }
      ],
      editInlineAndCellData: [
        {
          name: '产业职教',
          remark: '【备注】产业职教'
        },
        {
          name: '校企合作',
          remark: '【备注】校企合作'
        },
        {
          name: '选学校',
          remark: '【备注】选学校'
        },
        {
          name: '资源干货',
          remark: '【备注】资源干货'
        },
        {
          name: '校企安全',
          remark: '【备注】校企安全'
        },
        {
          name: '化育明珠',
          remark: '【备注】化育明珠'
        },
        {
          name: '选企业',
          remark: '【备注】选企业'
        },
        {
          name: '现代课堂',
          remark: '【备注】现代课堂'
        }
      ],
      showCurrentColumns: [
        {
          title: '序号',
          type: 'index',
          width: 80,
          align: 'center'
        },
        {
          title: '类别名称',
          align: 'center',
          key: 'name',
          width: 300,
          editable: true
        },
        {
          title: '备注',
          align: 'center',
          width: 300,
          key: 'remark',
          editable: true
        }
      ],
      showCurrentTableData: false
    }
  },
  methods: {
    handleNetConnect(state) {
      this.breakConnect = state
    },
    handleLowSpeed(state) {
      this.lowNetSpeed = state
    },
    getCurrentData() {
      this.showCurrentTableData = true
    },
    handleDel(val, index) {
      this.$Message.success('删除了第' + (index + 1) + '行数据')
    },
    handleCellChange(val, index, key) {
      this.$Message.success(
        '修改了第 ' + (index + 1) + ' 行列名为 ' + key + ' 的数据'
      )
    },
    handleChange(val, index) {
      this.$Message.success('修改了第' + (index + 1) + '行数据')
    }
  },
  created() {
  }
}
</script>
