Component({
  data: {
    isActive:false
  },
  properties: {
    titles:{
      type:Array,
      value:[]
    }
  },
  methods: {
    handleTap(e){
      const index=e.currentTarget.dataset.index;
      this.setData({
        currentIndex:index
      });
      this.triggerEvent("tabsItemChange",{index});
    }
  }
})