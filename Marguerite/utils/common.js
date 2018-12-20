var goodsList=require("dataConfig.js");
function GetDataGImgs() {
  var imgList=[];
  for(var i=0;i<goodsList.length;i++){
    imgList.unshift({ gImg1Src: goodsList[i].gImg1Src, key: goodsList[i].key});
  }
  return imgList;
}
module.exports = {
  GetDataGImgs: GetDataGImgs
  };