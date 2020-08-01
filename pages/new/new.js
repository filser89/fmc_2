// pages/new/new.js
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

  createNewDog: function (e) {
    
    const dog = {}
    dog.name = e.detail.value.name
    dog.description = e.detail.value.description
    dog.id = Math.floor(Math.random()*1000)
    dog.clicked = ""
    dog.btn = `I'm ${dog.name}`
    dog.action = "turnRed"
    dog.defAction = "turnRed"
    
    getApp().globalData.dogs.push(dog)
    wx.redirectTo({
      url: '/pages/stories/stories'
    })
  }
})