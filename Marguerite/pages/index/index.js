//index.js
//获取应用实例
var goodsList=require("../../utils/dataConfig.js");
var common = require("../../utils/common.js");
var app = getApp()
Page({
  data: {
    userInfo:{},
    gHotBoxImgs:{},
    gNewBoxImgs:{},
    imgUrls: [
      goodsList[0].gImg1Src,
      goodsList[1].gImg1Src
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    motto1:"热销推荐",
    motto2:"新    品"
  },
  NavigateToDetail:function(e){
    // console.log(e);
    wx.navigateTo({
      url: '../detail/detail',
    })
    app.setGoodsData(e.currentTarget.dataset.detail);
  },
  onLoad: function () {
    console.log('onLoad');
    var t = this;
    t.setData({
      gHotBoxImgs: goodsList.slice(0,3),
      gNewBoxImgs: goodsList.slice(3)
    })
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      console.log(userInfo);
      //更新数据
      t.setData({
        userInfo: userInfo
      })
    })
  }
})

