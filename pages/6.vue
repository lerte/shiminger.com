<template>
  <question :questions="questions"></question>
</template>

<script>
  import question from '~/components/question'
  export default {
    head: {
      title: '清秀'
    },
    components: {
      question
    },
    data () {
      return {
        questions: [
          {
            id: 1,
            type: 'judgment',
            content: '卖家中心需在PC端开通',
            options: ['✔', '✖'],
            answer: '✔',
            userAnswer: null
          },
          {
            id: 2,
            type: 'fill',
            content: '卖家中心产品管理包括哪些模块？',
            answer: '企业产品库、个人产品库、在售产品',
            userAnswer: null
          },
          {
            id: 3,
            type: 'judgment',
            content: '在售产品交期（天）是一个区间有2个值？',
            options: ['✔', '✖'],
            answer: '✔',
            userAnswer: null
          },
          {
            id: 4,
            type: 'judgment',
            content: '卖家中心商机管理里面有公司商机和我的商机',
            options: ['✔', '✖'],
            answer: '✔',
            userAnswer: null
          },
          {
            id: 5,
            type: 'fill',
            content: '报价交期（天）最大值是多少？',
            answer: '999',
            userAnswer: null
          }
        ]
      }
    }
  }
</script>