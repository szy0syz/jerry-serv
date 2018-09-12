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
          render: (h, params) => {
            const color = params.row.isTop ? 'green': 'default'
            const text = params.row.isTop ? '是' : '否'
            return h('Tag', { props: { type: 'dot', color: color} }, text)
          },
          width: 110,
          align: 'center'
        },
        {
          title: '标题',
          key: 'title',
          align: 'center'
        },
        {
          title: '文档类别',
          render: (h, params) => {
            return h('span', params.row.type ? params.row.type.name : { name: '无分类'})
          },
          width: 100
        },
        {
          title: '文档状态',
          render: (h, params) => {
            return h('span', artStatus[params.row.status])
          },
          width: 100
        },
        {
          title: '公开度',
          render: (h, params) => {
            return h('span', artOpenness[params.row.openness])
          },
          width: 90
        },
        {
          title: '点击量',
          key: 'clickNum',
          width: 90
        },
        {
          title: '点赞数',
          key: 'likeNum',
          width: 90
        },
        {
          title: '评论数',
          key: 'commentNum',
          width: 90
        },
        {
          title: '作者',
          render: (h, params) => {
            return h('span', params.row.author.username)
          },
          width: 180
        },
        {
          title: '创建时间',
          render: (h, params) => {
            return h(
              'span',
              dayjs(params.row.meta.createdAt).format('YYYY-MM-DD')
            )
          },
          width: 200
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
    handleCurrentRow(curt, prev) {
      this.currentRow = curt
    },
    handleRow(type) {
      this.optType = type

      if (type === 'add') {
        this.$router.push({ name: 'article-publish' })
      } else {
        if (!this.currentRow) {
          this.$Message.error('请点击需编辑的行')
        } else {
          this.$router.push({
            name: 'article-edit',
            query: { _id: this.currentRow._id }
          })
        }
      }
    },
    handleRemoveRow() {
      if (!this.currentRow) {
        this.$Message.error('请点击需要删除的行')
        return void 0
      }
      this.$Modal.confirm({
        title: '确认框',
        content: `<p>确认删除《${this.currentRow.title}》吗？</p>`,
        onOk: () => {
          this.$store.dispatch('deleteArticle', this.currentRow._id)
          this.$store.dispatch('getArticles')
        }
      })
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