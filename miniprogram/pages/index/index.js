//index.js
const app = getApp()

Page({
  data: {
    swiper:{
      background: [
      '../../images/index-swiper/swiper1.jpg',
      '../../images/index-swiper/swiper2.jpeg', 
      '../../images/index-swiper/swiper3.jpeg'],
      indicatorDots: true,
      vertical: true,
      autoplay: true,
      circular: true,
      interval: 2000,
      duration: 500
    },
    restaurant:app.globalData.restaurant
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {


  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }


})
