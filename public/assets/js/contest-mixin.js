export const contextMixin = {
  data() {
    return {
      questions: [],
      questionData: [],
      contestQuestions: ''
    }
  },
  computed: {},
  methods: {
    checkAnswerMore(e) {
      console.log('[e]', e)
      if (e == 'yes') {
        this.$router.push('/question/blast-question')
      } else {
        this.contestQuestions = 0
        // this.$router.push('/account/dashboard')
      }
    },
    getContestQuestions() {
      let contestQuestion = 0

      if (this.questions.generalBlastQuestions.length > 0) {
        contestQuestion += this.questions.generalBlastQuestions.length
        let data = {
          no: this.questions.generalBlastQuestions.length,
          type: 'general contest'
        }
        this.questionData.push(data)
      }
      // Check for regional questions
      if (this.questions.regionalQuestions.length > 0) {
        contestQuestion += this.questions.regionalQuestions.length
        let data = {
          no: this.questions.regionalQuestions.length,
          type: 'regional contest'
        }
        this.questionData.push(data)
      }
      // Check for Branch questions
      if (this.questions.branchQuestions.length > 0) {
        contestQuestion += this.questions.branchQuestions.length
        let data = {
          no: this.questions.branchQuestions.length,
          type: 'branch contest'
        }
        this.questionData.push(data)
      }
      // Check for department questions
      if (this.questions.departmentalQuestions.length > 0) {
        contestQuestion += this.questions.departmentalQuestions.length
        let data = {
          no: this.questions.departmentalQuestions.length,
          type: 'departmental contest'
        }
        this.questionData.push(data)
      }

      this.contestQuestions = contestQuestion
      return contestQuestion
    },
    async getQuestions() {
      try {
        let questions = await this.$store.dispatch('question/getDailyQuestion')
        // console.log('[questionsss]', questions)
        if (questions.message == "Kindly check back for today's question") {
          this.questions = []
          return
        }
        if (questions.message == 'Success') {
          this.questions = questions.result
          this.getContestQuestions()
        }
      } catch (error) {
        if (error.message == 'No question was set for today') {
          // console.log('[No questions today]')
          this.questions = []
        }
      }
    }
  },
  mounted() {
    this.getQuestions()
  }
}
