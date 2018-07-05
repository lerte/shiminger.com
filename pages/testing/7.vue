<template>
  <question :questions="questions"></question>
</template>

<script>
  import question from '~/components/question'
  export default {
    layout: 'testing',
    head: {
      title: '石明'
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
            content: '个人中心的个人信息只可以修改的是？',
            options: ['A. 头像', 'B. 用户名', 'C. 邮箱', 'D. 手机'],
            answer: 'A. 头像',
            userAnswer: null
          },
          {
            id: 2,
            type: 'judgment',
            content: '只有管理员才能修改企业信息和店铺信息？',
            options: ['✔', '✖'],
            answer: '✔',
            userAnswer: null
          },
          {
            id: 3,
            type: 'fill',
            content: '注册账号时短信验证码的有效期是？',
            answer: '10分钟',
            userAnswer: null
          },
          {
            id: 4,
            type: 'judgment',
            content: '密码须为8-20个字符的英文、数字混合',
            options: ['✔', '✖'],
            answer: '✔',
            userAnswer: null
          },
          {
            id: 5,
            type: 'multiple',
            content: '企业注册时，无论手机号是否注册，都有的信息的？',
            options: ['A. 企业名称', 'B. 营业执照号', 'C. 管理员姓名', 'D. 登录密码', 'F. 确认密码', 'G. 联系邮箱'],
            answers: 'A,B,D',
            userAnswer: []
          }
        ]
      }
    }
  }
</script>