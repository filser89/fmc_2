// pages/stories/stories.js
Page({

  /**
   * Page initial data
   */
  data: {
    
  


  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    const page = this;
    wx.request({
      
      url: 'http://localhost:3000/api/v1/dogs',
      method: "GET",
      success(res) {
        // what to do with the API data
        // 1. save it to a local variable
        // 2. set page's data with that local variable
        page.setData({dogs: res.data.dogs})
      }
    })
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {
    // console.log(this.data)
  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  },
  goToNew: function(e){
    wx.navigateTo({
      url: '/pages/new/new'
    })
  },
  goToShow: function (e) {
    wx.navigateTo({
      url: `/pages/show/show?id=${e.target.dataset.id}`
    })
  }

  // turnRed: function (e) {
  //   console.log("turn red")

  //   // console.log(e, e.target)
  //   const dogs = this.data.dogs
  //   const dog = dogs.find(dog => dog.id === e.target.dataset.id);
  //   // console.log(e.target)

  //   // console.log(dog)
  //   dog.clicked = "red-btn"
  //   dog.action = "turnGreen"
  //   this.setData({dogs: dogs})
    
  //   // this.setData({ dogs.btn: "Hello I'm Juja" })
  // },

  // turnYellow: function (e) {
  //   console.log("turn yellow", e)
  //   const dogs = this.data.dogs
  //   const dog = dogs.find(dog => dog.id == e.target.dataset.id);
  //   // console.log("chcking target",e.target)
  //   // console.log(dog)
  //   dog.clicked = "yellow-btn"
  //   dog.action ="turnGreen"
  //   this.setData({ dogs: dogs })

  //   // this.setData({ dogs.btn: "Hello I'm Juja" })
  // },

  // turnGreen: function(e) {
  //   const dogs = this.data.dogs
  //   const dog = dogs.find(dog => dog.id == e.target.dataset.id);
  //   dog.clicked = ""
  //   dog.action = dog.defAction
  //   this.setData({ dogs: dogs })
  // },
  
})