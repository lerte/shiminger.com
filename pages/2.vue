<template>
  <question :questions="questions"></question>
</template>

<script>
  import question from '~/components/question'
  export default {
    head: {
      title: '周莹'
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
            content: '联系商城里面内容有哪些？具体是什么？',
            answers: '商家地址:深圳市南山区英唐大厦1楼、致电:4008301818、邮件:yrsc@usoftchina.com',
            userAnswer: ''
          },
          {
            id: 2,
            type: 'judgment',
            content: '首页Banner广告可以对外开放？',
            options: ['✔', '✖'],
            answer: '✖',
            userAnswer: null
          },
          {
            id: 3,
            type: 'single',
            content: '下面哪个模块需要登录？',
            options: ['A. 供应商', 'B. 我的商机', 'C. 店铺列表', 'D. 品牌墙'],
            answer: 'B. 我的商机',
            userAnswer: null
          },
          {
            id: 4,
            type: 'fill',
            content: '数据统计器有几项数据？分别是哪些',
            answer: '9项，分别是现货数量、规格书数量、品牌数量、店铺数量、供应商数量、本年度交易额（元）、上年交易额（元）、本月询价求购数量、上月询价求购数量',
            userAnswer: null
          },
          {
            id: 5,
            type: 'judgment',
            content: '交易额单位是万？',
            options: ['✔', '✖'],
            answer: '✖',
            userAnswer: null
          },
        ]
      }
    }
  }
</script>