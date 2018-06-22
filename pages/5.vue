<template>
  <question :questions="questions"></question>
</template>

<script>
  import question from '~/components/question'
  export default {
    head: {
      title: '雪滢'
    },
    components: {
      question
    },
    data () {
      return {
        questions: [
          {
            id: 1,
            type: 'fill',
            content: '买家中心包括哪些模块？',
            answer: '我的求购、器件收藏、店铺关注',
            userAnswer: null
          },
          {
            id: 2,
            type: 'fill',
            content: '买家中心我的求购包括哪些模块？',
            answer: '待报价、已报价、发布求购',
            userAnswer: null
          },
          {
            id: 3,
            type: 'multiple',
            content: '发布求购哪些是必填项？',
            options: ['A. 品牌', 'B. 类目（产品名称）', 'C. 型号', 'D. 规格', 'E. 截止日期', 'F. 数量（PCS）'],
            answers: 'A,B,C,E',
            userAnswer: []
          },
          {
            id: 4,
            type: 'judgment',
            content: '发布求购的信息先会进入待报价，有公司报价后系统会移到已报价',
            options: ['✔', '✖'],
            answer: '✔',
            userAnswer: null
          },
          {
            id: 5,
            type: 'judgment',
            content: '发布求购的截止日期需不小于今天且在90天以内？',
            options: ['✔', '✖'],
            answer: '✔',
            userAnswer: null
          }
        ]
      }
    }
  }
</script>