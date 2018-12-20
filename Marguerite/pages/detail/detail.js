// pages/detail/detail.js
var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
      gDetail:{},
      radioItemsColor: [],
      radioItemsSize: [],
      checkedColorNum:"",
      checkedSizeNum:"",
      IsAdd:false
  },
  radioColorChange: function (e) {
    this.setData({
        checkedColorNum: e.detail.value
    });
    this.data.gDetail.CheckedColor = this.data.radioItemsColor[e.detail.value];
  },
  radioSizeChange: function (e) {
    this.setData({
      checkedSizeNum: e.detail.value
    });
    this.data.gDetail.CheckedSize = this.data.radioItemsSize[e.detail.value];
  },
  addBag:function(e){
    this.setData({
      IsAdd: true
    });
    app.IsAddBag=true;
    app.IsBuyNow = false;
  },
  buyNow: function (e) {
    this.setData({
      IsAdd: true
    });
    app.IsBuyNow = true;
    app.IsAddBag =false;
  },
  Adding:function(){
    if (app.IsAddBag){
      app.shoppingBag.push(this.data.gDetail);
    }
    if (app.IsBuyNow){
      wx.navigateTo({
        url: '../payment/payment',
      })
      app.paymentBag[0]=this.data.gDetail;
    }
    this.setData({
      IsAdd: false
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({ gDetail: app.tempGoodsDetail.gDetail});
    var radioItemsColor = this.data.gDetail.gColor;
    var radioItemsSize = this.data.gDetail.gSize;
    this.setData({
      radioItemsColor: radioItemsColor,
      radioItemsSize: radioItemsSize
    });
    this.data.gDetail.CheckedColor = this.data.gDetail.gColor[0];
    this.data.gDetail.CheckedSize = this.data.gDetail.gSize[0];
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