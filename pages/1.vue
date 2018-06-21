<template>
  <question :questions="questions"></question>
</template>

<script>
  import question from '~/components/question'
  export default {
    head: {
      title: '谭佩'
    },
    components: {
      question
    },
    data () {
      return {
        questions: [
          {
            id: 1,
            type: 'single',
            content: '优软商城成立于哪一年？',
            options: ['A. 2014', 'B. 2015', 'C. 2016', 'D. 2017'],
            answer: 'C. 2016',
            userAnswer: null
          },
          {
            id: 2,
            type: 'fill',
            content: '优软商城官方网址是多少？',
            answers: 'www.usoftmall.com',
            userAnswer: ''
          },
          {
            id: 3,
            type: 'multiple',
            content: '可以从哪些方式获取优软商城？',
            options: ['A. UU互联APP', 'B. 网页版', 'C. 微信公众号', 'D. 微信小程序'],
            answers: 'A,B,C,D',
            userAnswer: []
          },
          {
            id: 4,
            type: 'multiple',
            content: '以下哪些功能模块需要登录？',
            options: ['A. 供应商', 'B. 我的商机', 'C. 店铺列表', 'D. 品牌墙', 'F. 首页', 'G. 买家中心', 'H. 卖家中心'],
            answers: 'B,G,H',
            userAnswer: []
          },
          {
            id: 5,
            type: 'multiple',
            content: '以下哪些功能模块不需要登录？',
            options: ['A. 供应商', 'B. 我的商机', 'C. 店铺列表', 'D. 品牌墙', 'F. 首页', 'G. 买家中心', 'H. 卖家中心'],
            answers: 'A,C,D,E,F',
            userAnswer: []
          }
        ]
      }
    }
  }
</script>