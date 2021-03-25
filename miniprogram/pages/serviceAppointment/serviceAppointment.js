// pages/serviceAppointment/serviceAppointment.js
var dateTimePicker = require ('../../uitls/dateTimePicker.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    numberIndex:0,
    number:[
      '1人', '2人', '3人', '4人', '5人', '6人', '7人', '8人', '9人', '10人', '10人以上' 
    ],

    
    dateTimeArray: null,
    dateTime: null,
    startYear: 2000,
    endYear: 2050,

    tableIndex:0,
    tableType:[
      '卡座', '包间'
    ],

    contactName:'',

    sex: [
      {
        id: 1,
        value: '男士',
        checked:true
      }, 
      {
        id: 2,
        value: '女士'
      }
  ],

  contactPhone:'',

  orderDish: false,

  mode: [
    {
      id: 1,
      value: '只定座',
      checked:true
    }, 
    {
      id: 2,
      value: '提前预定菜品'
    }
  ],

  remark:''


  },

  //选择人数
  bindNumberChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      numberIndex: e.detail.value
    })
  },

  //选择时间
  changeDateTime(e) {
    this.setData({ dateTime: e.detail.value });
  },

  changeDateTimeColumn(e) {
    var arr = this.data.dateTime, dateArr = this.data.dateTimeArray;

    arr[e.detail.column] = e.detail.value;
    dateArr[2] = dateTimePicker.getMonthDay(dateArr[0][arr[0]], dateArr[1][arr[1]]);

    this.setData({ 
      dateTimeArray: dateArr,
      dateTime: arr
    });
  },

  //选择桌位类型
  bindTableChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      tableIndex: e.detail.value
    })
  },

  // 选择性别
  radioChange: function (e) {
    // console.log('radio发生change事件，携带value值为：', e.detail.value)
    const sex = this.data.sex
    for (let i = 0, len = sex.length; i < len; ++i) {
      sex[i].checked = sex[i].id == e.detail.value
    }
    this.setData({
      sex
    })
  },

  // 选择预定模式
  modeChange: function (e) {
    // console.log('radio发生change事件，携带value值为：', e.detail.value)
    const mode = this.data.mode
    for (let i = 0, len = mode.length; i < len; ++i) {
      mode[i].checked = mode[i].id == e.detail.value
    }
    if (e.detail.value == 2){
      this.setData({
        orderDish: true
      });
    }else{
      this.setData({
        orderDish: false
      });
    }

    this.setData({
      mode
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取完整的年月日 时分秒，以及默认显示的数组
    var obj = dateTimePicker.dateTimePicker(this.data.startYear, this.data.endYear);
   
    // 精确到分的处理，将数组的秒去掉
    var lastArray = obj.dateTimeArray.pop();
    var lastTime = obj.dateTime.pop();
    
    this.setData({
      dateTime: obj.dateTime,
      dateTimeArray: obj.dateTimeArray,
     
    });

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