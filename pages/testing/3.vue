<template>
  <question :questions="questions"></question>
</template>

<script>
  import question from '~/components/question'
  export default {
    layout: 'testing',
    head: {
      title: '辛娟'
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
            content: '未登录不可查看更多求购信息',
            options: ['✔', '✖'],
            answer: '✖',
            userAnswer: null
          },
          {
            id: 2,
            type: 'judgment',
            content: '未开店的供应商不可询价',
            options: ['✔', '✖'],
            answer: '✖',
            userAnswer: null
          },
          {
            id: 3,
            type: 'judgment',
            content: '获得商机需要注册开通卖家中心并上传产品',
            options: ['✔', '✖'],
            answer: '✔',
            userAnswer: null
          },
          {
            id: 4,
            type: 'judgment',
            content: '询价供应商时数量（PCS）是必需的',
            options: ['✔', '✖'],
            answer: '✖',
            userAnswer: null
          },
          {
            id: 5,
            type: 'judgment',
            content: '我的商机里面给产品报价只支持RMB',
            options: ['✔', '✖'],
            answer: '✖',
            userAnswer: null
          }
        ]
      }
    }
  }
</script>