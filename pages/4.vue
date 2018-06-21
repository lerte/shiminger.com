<template>
  <question :questions="questions"></question>
</template>

<script>
  import question from '~/components/question'
  export default {
    head: {
      title: '刘帅'
    },
    components: {
      question
    },
    data () {
      return {
        questions: [
          {
            id: 1,
            type: 'multiple',
            content: '店铺列表里面的有哪些类型的店铺？',
            options: ['A. 原厂', 'B. 代理', 'C. 经销', 'D. 寄售'],
            answers: 'A,B,C,D',
            userAnswer: []
          },
          {
            id: 2,
            type: 'multiple',
            content: '公司介绍里面的联系我们有哪些项？',
            options: ['A. 电话', 'B. 传真', 'C. 手机', 'D. 邮箱', 'E. 微信', 'F. QQ'],
            answers: 'A,B,C,E,F',
            userAnswer: []
          },
          {
            id: 3,
            type: 'judgment',
            content: '产品详情页点击联系买家只能看到联系电话',
            options: ['✔', '✖'],
            answer: '✖',
            userAnswer: null
          },
          {
            id: 4,
            type: 'fill',
            content: '品牌页的品牌里面有哪些内容？',
            answer: '主营产品、应用领域、品牌介绍、官网地址',
            userAnswer: null
          },
          {
            id: 5,
            type: 'judgment',
            content: '需要登录才可查看品牌的产品页的规格书',
            options: ['✔', '✖'],
            answer: '✔',
            userAnswer: null
          }
        ]
      }
    }
  }
</script>