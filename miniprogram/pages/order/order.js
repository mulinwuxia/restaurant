// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current:'pay',
    orderListData: [],

  },
  // tab点击切换功能
  handleCurrent(event){
    let current = event.target.dataset.current;
    if( current == this.data.current ){
      return false;
    }
    //console.log(current);
    this.setData({
      current
    },()=>{
      //this.getListData();
    });
    
  },

  // 从云数据库中取出相应订单的数据（需要修改）
  // getListData(){
  //   db.collection('user').field({
  //     userPhoto: true,
  //     nickName: true,
  //     links: true
  //   })
  //   .orderBy(this.data.current,'desc')
  //   .get()
  //   .then((res)=>{
  //     this.setData({
  //       listData: res.data
  //     });
  //   });
  // },

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