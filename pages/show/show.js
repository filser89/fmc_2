// pages/show/show.js
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
    wx.request({
      url: `http://localhost:3000/api/v1/dogs/${options.id}`,
      method: "GET",
      success(res) {
        // what to do with the API data
        // 1. save it to a local variable
        // 2. set page's data with that local variable
        console.log(res)
        const dog = res.data;
        console.log(dog)
        page.setData(dog)
        console.log(page.Data)
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

  goToNew: function (e){
    
    wx.navigateTo({
      
      url: `/pages/new/new?id=${this.data.id}`
    })
  },
  deleteDog: function(){
    console.log(this.data)
    const id = this.data.id
    wx.request({
      url: `http://localhost:3000/api/v1/dogs/${id}`,
      method: "DELETE",
      success(res) {
        wx.reLaunch({
          url: '/pages/stories/stories',
        })
      }

    })
  },
  createNewComment: function(e){
    const comment = {}
    comment.name = e.detail.value.name
    comment.content = e.detail.value.content
    const id = this.data.id
    wx.request({
      url: `http://localhost:3000/api/v1/dogs/${id}/comments`,
      method: "POST",
      data: comment,
      success(res){
        console.log(res)
        wx.redirectTo({
          url: `/pages/show/show?id=${id}`
        })
      }
    })
  }
})