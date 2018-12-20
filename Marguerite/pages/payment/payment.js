// pages/payment/payment.js
var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    paymentBagList:[],
    totalPrice:"",
    cName:"",
    cTel:"",
    cAddr:""
  },
  getCName:function(e){
    // e.det
    this.setData({
      cName: e.detail.value
    });
  },
  getCTel: function (e) {
    // e.det
    this.setData({
      cTel: e.detail.value
    });
  },
  getCAddr: function (e) {
    // e.det
    this.setData({
      cAddr: e.detail.value
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var a="";
    for(var i=0;i<app.paymentBag.length;i++){
      a += parseInt(app.paymentBag[i].gPrice.slice(1));
      
    }
    this.setData({
      totalPrice:a
    });
    this.setData({
      paymentBagList: app.paymentBag
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