<style lang="less">
@import '../../assets/css/common.less';
.ivu-table-row-highlight {
  background-color: #ffffcc;
}

.main-con {
  background-color: #fff;
}

.filter-con {
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  .filter-group {
    margin-left: 16px;
  }

  .search-font {
    font-size: 14px;
    font-weight: 700;
  }

  .optBtns {
    margin-right: 18px;
    & button {
      margin-left: 8px;
    }
  }
}
</style>

<template>
  <div class="main-con">
    <Row style="border-bottom: 1px dashed #ddd;">
      <Col span="14">
      <div class="filter-con">
        <div class="filter-group">
          <span class="search-font">文档标题：&nbsp;</span>
          <Input v-model="inpNumber" placeholder="检索文档标题" clearable style="width: 160px"></Input>
        </div>
        <div class="filter-group">
          <span class="search-font">文档内容：&nbsp;</span>
          <Input v-model="inpName" placeholder="检索文档内容" clearable style="width: 260px"></Input>
        </div>
        <div class="filter-group">
          <Button @click="handleSearch" type="primary" icon="ios-search">搜索</Button>
        </div>
      </div>
      </Col>
      <Col span="10">
      <div class="filter-con" style="justify-content: flex-end;">
        <div class="optBtns">
          <Button @click="handleRow('add')" type="info">添加</Button>
          <Button @click="handleRow('edit')" type="warning">修改</Button>
          <Button @click="handleRemoveRow" type="error">删除</Button>
          <Button type="primary">审核</Button>
        </div>
      </div>
      </Col>
    </Row>
    <Table highlight-row @on-current-change="handleCurrentRow" style="margin-top:10px;" stripe border :height="700" :columns="columns" :data="articleList"></Table>
    <Modal @on-ok="handleOpt" width="700" v-model="showForm" title="单位登记变更">
      <Card>
        <Form :model="rowModel" :label-width="90">
          <FormItem label="单位编号： ">
            <Input v-model="rowModel.number" placeholder="请输入单位编号"></Input>
          </FormItem>
          <FormItem label="单位名称： ">
            <Input v-model="rowModel.name" placeholder="请输入单位名称"></Input>
          </FormItem>
          <FormItem label="单位地址： ">
            <Input v-model="rowModel.address" placeholder="请输入单位地址"></Input>
          </FormItem>
        </Form>
      </Card>
    </Modal>
  </div>
</template>

<script>
import dayjs from 'dayjs'
const artStatus = {
  0: '保存',
  1: '提交',
  9: '审核'
}
const artOpenness = {
  public: '公开',
  protected: '密码保护',
  private: '私密'
}

export default {
  name: 'unitReg',
  data() {
    return {
      optType: 'add',
      selectedArea: [],
      showForm: false,
      currentRow: '',
      inpNumber: '',
      inpName: '',
      rowModel: {
        _id: '',
        name: '',
        number: '',
        address: '',
        region: 0
      },
      columns: [
        {
          title: '序号',
          type: 'index',
          width: 68,
          align: 'center'
        },
        {
          title: '置顶',
          key: 'isTop',
          width: 70,
          align: 'center'
        },
        {
          title: '标题',
          key: 'title',
          width: 400,
        },
        {
          title: '文档类别',
          render: (h, params) => {
            return h('span', params.row.type.name)
          },
          width: 100,
        },
        {
          title: '文档状态',
          render: (h, params) => {
            return h('span', artStatus[params.row.status])
          },
          width: 100,
        },
        {
          title: '公开度',
          render: (h, params) => {
            return h('span', artOpenness[params.row.openness])
          },
          width: 90,
        },
        {
          title: '点击量',
          key: 'clickNum',
          width: 90,
        },
        {
          title: '点赞数',
          key: 'likeNum',
          width: 90,
        },
        {
          title: '评论数',
          key: 'commentNum',
          width: 90,
        },
        {
          title: '作者',
          render: (h, params) => {
            return h('span', params.row.author.username)
          }
        },
        {
          title: '创建时间',
          render: (h, params) => {
            return h('span', dayjs(params.row.meta.createdAt).format('YYYY-MM-DD'))
          }
        }
      ]
    }
  },
  computed: {
    articleList() {
      return this.$store.state.article.articles
    }
  },
  methods: {
    async handleOpt() {
      // this.rowModel.region = this.selectedArea[2]
      // if (this.optType === 'add') {
      //   await this.$store.dispatch('postProjUnit', this.rowModel)
      // } else {
      //   console.log('edit')
      //   await this.$store.dispatch('putProjUnit', this.rowModel)
      // }
    },
    handleCurrentRow(curt, prev) {
      this.currentRow = curt
    },
    handleRow(type) {
      // this.optType = type
      // if (type === 'add') {
      //   this.rowModel = {
      //     name: '',
      //     number: '',
      //     address: '',
      //     region: 0
      //   }
      //   this.showForm = true
      // } else {
      //   if (!this.currentRow) {
      //     this.$Message.error('请点击需编辑的行')
      //   } else {
      //     this.rowModel._id = this.currentRow._id
      //     this.rowModel.number = this.currentRow.number
      //     this.rowModel.name = this.currentRow.name
      //     this.rowModel.address = this.currentRow.address
      //     this.rowModel.region = this.currentRow.region
      //     this.showForm = true
      //   }
      // }
    },
    handleRemoveRow() {
      // if (!this.currentRow) {
      //   this.$Message.error('请点击需要删除的行')
      //   return void 0
      // }
      // this.$store.dispatch('removeProjUnit', this.currentRow._id)
    },
    handleSearch() {
      // this.$store.dispatch('fetchProjUnit', {
      //   number: this.inpNumber,
      //   name: this.inpName
      // })
    }
  },
  mounted() {
    this.$store.dispatch('getArticles')
  }
}
</script>