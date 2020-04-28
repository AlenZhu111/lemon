// pages/jihua/jihua.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		titles:[
			{
				id:0,
				value:"每日计划",
				isActive:true
			},
			{
				id:1,
				value:"每月目标",
				isActive:false
			},
			{
				id:2,
				value:"日常习惯",
				isActive:false
			}
		],
		planList:[],
		planContent:"",
		count1:0,
		targetList:[],
		targetContent:"",
		count2:0,
		habitList:[],
		habitContent:"",
		count3:0,
		isBlank1:true,
		isBlank2:true,
		isBlank3:true,
		hidePlanInput:true,
		hideTargetInput:true,
		hideHabitInput:true,
		colorArray:['#99e4b3','#83daeb','#f8aad5','#baa7e4','#7dddd4','#edc0a9','#b4d786','#f4c388','#f9a3ae','#93c7f3',
                '#cdcde2','#fecbcb','#d7cbd7','#cbcbd9','#ebd3cd','#cbd8cb','#d6ddcd','#ccdbda','#ffd4cb','#f2d1d9',
                '#e4a3a1','#a7c0cc','#868e9b','#d3c4b3','#f09299','#c09ca5','#9294a3','#b1afb0','#e1caa7','#a9888c']
	},

	

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {

	},
	handleTabsItemChange(e){
		const {index}=e.detail;

		let {titles}=this.data;
		titles.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false);
		this.setData({
			titles
		})
	},

	handleAddPlan(){
		this.setData({
			
			hidePlanInput:false
		})
	},
	handlePlanInput(e){
		var {value}=e.detail;
		
		this.setData({
			planContent:value
			
		})
	},
	confirmPlanInput(){
		var planList=this.data.planList;
		var count=Math.ceil(Math.random()*this.data.colorArray.length);
		planList.push({value:this.data.planContent, color:this.data.colorArray[count]});
		this.setData({
			planList,
			planContent:"",
			hidePlanInput:true,
			count:this.data.count+1,
			isBlank1:false
		})
	},
	handlePlanDel(e){
		console.log(e)
		var {index}=e.currentTarget.dataset;
		var planList=this.data.planList;
		planList.splice(index,1);
		this.setData({
			planList
		})
	},

	handleAddTarget(){
		this.setData({
			
			hideTargetInput:false
		})
	},
	handleTargetInput(e){
		var {value}=e.detail;
		this.setData({
			targetContent:value
			
		})
	},
	confirmTargetInput(){
		var targetList=this.data.targetList;
		var count=Math.ceil(Math.random()*this.data.colorArray.length);
		targetList.push({value:this.data.targetContent, color:this.data.colorArray[count]});
		this.setData({
			targetList,
			targetContent:"",
			hideTargetInput:true,
			count2:this.data.count2+1,
			isBlank2:false
		})
	},
	handleTargetDel(e){
		console.log(e)
		var {index}=e.currentTarget.dataset;
		var targetList=this.data.targetList;
		targetList.splice(index,1);
		this.setData({
			targetList
		})
	},

		
	handleAddHabit(){
		this.setData({
			
			hideHabitInput:false
		})
	},
	handleHabitInput(e){
		var {value}=e.detail;
		this.setData({
			habitContent:value
			
		})
	},
	confirmHabitInput(){
		var habitList=this.data.habitList;
		var planList=this.data.planList;
		var count=Math.ceil(Math.random()*this.data.colorArray.length);
		habitList.push({value:this.data.habitContent, color:this.data.colorArray[count]});
		planList.push({value:this.data.habitContent, color:this.data.colorArray[count]});
		this.setData({
			habitList,
			planList,
			habitContent:"",
			hideHabitInput:true,
			count3:this.data.count3+1,
			isBlank3:false
		})
	},
	handleHabitDel(e){
		console.log(e)
		var {index}=e.currentTarget.dataset;
		var habitList=this.data.habitList;
		habitList.splice(index,1);
		this.setData({
			habitList
		})
	}
	
	
	
})