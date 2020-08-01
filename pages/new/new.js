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
    const page = this;
    console.log(options)
    if (options.id){
      wx.request({
        url: `http://localhost:3000/api/v1/dogs/${options.id}`,
        method: "GET",
        success(res) {
          // what to do with the API data
          // 1. save it to a local variable
          // 2. set page's data with that local variable
          const dog = res.data;
          page.setData(dog)
          console.log(page.Data)
        }
      })
    }
    
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
    console.log(this.data)
    const dog = {}
    dog.name = e.detail.value.name
    dog.description = e.detail.value.description
    dog.image = e.detail.value.image

    if (this.data.id) {
      dog.id = this.data.id
      wx.request({
        url: `http://localhost:3000/api/v1/dogs/${this.data.id}`,
        method: "PUT",
        data: dog,
        success(res){
          console.log(res)
          wx.redirectTo({
            url: '/pages/stories/stories'
          })
        }
      })

    } else{
      wx.request({
        url: 'http://localhost:3000/api/v1/dogs',
        method: "POST",
        data: dog,
        success(res){
          console.log(res)
          wx.redirectTo({
            url: '/pages/stories/stories'
          })
        }
      })
    }

    

    
    
    
  }
})