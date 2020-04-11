Component({
  data: {
    currentIndex:0
  },
  properties: {
    titles:{
      type:Array,
      value:[]
    }
  },
  methods: {
    handleTap(e){
      const index=e.currentTarget.dataset.index
      this.setData({
        currentIndex:index
      })
    }
  }
})