<template>
  <v-content>
    <v-card class="mb-3">
      <v-card-text>
        开始时间：{{startTime}}&nbsp;&nbsp;&nbsp;&nbsp;用时：{{elapsedTime}}
      </v-card-text>
    </v-card>
    <v-stepper v-model="e1" v-if="!isSubmitted">
      <v-stepper-header>
        <template v-for="question in questions">
          <v-stepper-step
            :key="`${question.id}-step`"
            :step="question.id"
            :complete="e1 > question.id"
            editable>
          </v-stepper-step>
          <v-divider v-if="question.id !== questions.length" :key="question.id"></v-divider>
        </template>
      </v-stepper-header>
      <v-stepper-items>
        <v-stepper-content
          v-for="question in questions"
          :step="question.id"
          :key="`${question.id}-content`">
          <v-card color="grey lighten-4" class="mb-5">
            <v-card-title>
              <v-subheader>
                {{questionTypes[question.type]}}
              </v-subheader>
            </v-card-title>
            <v-card-text>
              <p class="subheading primary--text">{{question.content}}</p>
              <ul v-if="question.type!='judgment'">
                <li v-for="(option, index) in question.options" :key="index">
                  {{option}}
                </li>
              </ul>
            </v-card-text>
            <v-card-actions v-if="question.type=='judgment'">
              <v-radio-group v-model="question.userAnswer">
                <v-radio
                  v-for="(i, index) in question.options"
                  :key="index"
                  :label="i"
                  :value="i">
                </v-radio>
              </v-radio-group>
            </v-card-actions>
            <v-card-actions v-if="question.type=='fill'">
              <v-text-field
                v-model="question.userAnswer"
                label="请输入答案">
              </v-text-field>
            </v-card-actions>
            <v-card-actions v-if="question.type=='single'">
              <v-radio-group v-model="question.userAnswer">
                <v-radio
                  v-for="(i, index) in question.options"
                  :key="index"
                  :label="`${answerTypes[index]}`"
                  :value="i">
                </v-radio>
              </v-radio-group>
            </v-card-actions>
            <v-card-actions v-if="question.type=='multiple'">
              <v-checkbox
                v-for="(i, index) in question.options"
                :key="index"
                :label="`${answerTypes[index]}`"
                :value="i"
                v-model="question.userAnswer">
              </v-checkbox>
            </v-card-actions>
          </v-card>
          <v-btn color="primary" @click="prevStep(question.id)" :disabled="question.id==1">上一题</v-btn>
          <v-btn color="primary" @click="nextStep(question.id)" :disabled="question.id==questions.length">下一题</v-btn>
          <v-btn color="info" @click="submit" :disabled="!isFinished">交卷</v-btn>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
    <v-card class="mb-3" v-else>
      <v-card-title>
        参考答案
      </v-card-title>
      <v-card-text>
        <ul>
          <li v-for="(question, index) in questions" :key="index">
            <p class="subheading primary--text">{{question.content}}</p>
            <p class="info--text">用户答案：{{question.userAnswer}}</p>
            <p class="success--text" v-if="question.answer">正确答案：{{question.answer}}</p>
            <p class="success--text" v-if="question.answers">参考答案：{{question.answers}}</p>
          </li>
        </ul>
        <v-btn color="info" @click="redo">重做</v-btn>
      </v-card-text>
    </v-card>
  </v-content>
</template>

<script>
  export default {
    props: {
        questions: Array
    },
    data () {
      return {
        e1: 1,
        timeInterval: 10,
        isSubmitted: false,
        questionTypes: {
          fill: '填空题',
          single: '单选题',
          multiple: '多选题',
          judgment: '判断题'
        },
        answerTypes: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'],
        start: new Date(),
        elapsed: 0
      }
    },
    computed: {
      startTime(){
        return `${this.start.getHours()}:${this.start.getMinutes()}`.replace(/\b(\d)\b/g, "0$1")
      },
      elapsedTime(){
        return this.second2Minutes(Math.round(this.elapsed/1000))
      },
      isFinished(){
        let flag = true
        this.questions.forEach((question)=>{
          if(question.userAnswer instanceof Array){
            flag = flag && Boolean(question.userAnswer.length)
          }else{
            flag = flag && Boolean(question.userAnswer)
          }
        })
        return flag
      }
    },
    methods: {
      prevStep (n) {
        this.e1 = n - 1
      },
      nextStep (n) {
        this.e1 = n + 1
      },
      submit(){
        this.isSubmitted = true
        clearInterval(this.timeInterval)
      },
      redo(){
        this.isSubmitted = false
        this.e1 = 1
        this.elapsed = 0
        this.start = new Date()
        this.doing()
      },
      calcElapsed () {
        this.elapsed = new Date().getTime() - this.start.getTime()
      },
      doing(){
        this.timeInterval = setInterval(()=>{
          this.calcElapsed()
        }, 1000)
      },
      second2Minutes(second){
        if(second){
          return [parseInt(second / 60 / 60), parseInt(second / 60 % 60), second % 60].join(":").replace(/\b(\d)\b/g, "0$1")
        }else{
          return second
        }
      }
    },
    mounted(){
      this.doing()
    }
  }
</script>