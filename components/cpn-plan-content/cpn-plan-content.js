
Component({
  
  data: {
    isFinished:false
  },
  properties: {
    planContent:{
      type:String,
      value:""
    },
    currentColor:{
      type:String,
      value:"#99e4b3"
    }
  },
  methods: {
    handleFinished(){
      this.setData({
        isFinished:!this.data.isFinished
      })
    }
  }
 
})