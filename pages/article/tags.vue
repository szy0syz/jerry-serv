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
  name: 'article-tags',
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
          title: '标签名称',
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
          name: '超级教程',
          remark: '【备注】超级教程'
        },
        {
          name: '最佳搭档',
          remark: '【备注】最佳搭档'
        },
        {
          name: '精华',
          remark: '【备注】精华'
        },
        {
          name: '热门',
          remark: '【备注】热门'
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
          title: '标签名称',
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
