/*	--------------------------------------------------------------------------/
 *	author		: 
 *	module		：
 *											COPYRIGHT 
 *	-------------------------------------------------------------------------*/


/*	--------------------------------------------------------------------------/
 *	index.js
 *	-------------------------------------------------------------------------*/	

const express = require('express');
const http = require("http");
const router = express.Router();

// routing : title
router.get('/back2_find', function (request, response) {
  
  
  let param=request.query.key;
  if(null == param) param="";
  if(param.indexOf("夏") >= 0) {
    let tmp1={},tmp2={},tmp3 = {},tmp4 = {};
    let obj = {};
    obj.json =[tmp1,tmp2,tmp3,tmp4];
    tmp1.id = "21";
    tmp1.image = "blue-2564660_1920.jpg";
    tmp1.headline = "アウトドアスタイル!!";
    tmp1.sub_headline = "日常でも快適に着られるアウトドアスタイルファッション";

    tmp2.id = "22";
    tmp2.image = "people-2563491_1920.jpg";
    tmp2.headline = "UGスタイル";
    tmp2.sub_headline = "UGで自分らしく自由なスタイルを";

    tmp3.id = "23";
    tmp3.image = "hip-hop-1209499_1920.jpg";
    tmp3.headline = "街角スタイル";
    tmp3.sub_headline = "街へでかけよう、ファッションを楽しもう";

    tmp4.id = "24";
    tmp4.image = "sunset-1282282_1920.jpg";
    tmp4.headline = "夏の特別コレクション";
    tmp4.sub_headline = "より快適に、より心地よいライフスタイルを";
    response.send(JSON.stringify(obj));
    
  } else if (param.indexOf("冬") >= 0) {
    let tmp1={},tmp2={},tmp3 = {},tmp4 = {},tmp5 = {};
    let obj = {};
    //obj.json =[tmp1,tmp2,tmp3,tmp4,tmp5];
    obj.json =[tmp3,tmp4,tmp5];
    tmp1.id = "21";
    tmp1.image = "cold-1284029_1920.jpg";
    tmp1.headline = "冬の空でも快適に";
    tmp1.sub_headline = "気軽なダウン、UGスタイル";

    tmp2.id = "22";
    tmp2.image = "cold-1284028_1920.jpg";
    tmp2.headline = "子供たちの冬休みは？";
    tmp2.sub_headline = "雪山でも暖かく、UGスタイル";

    tmp3.id = "23";
    tmp3.image = "fog-3914967_1920.jpg";
    tmp3.headline = "冬の朝";
    tmp3.sub_headline = "厳寒の中でも快適で暖かいスタイルファッション";
    
    tmp4.id = "24";
    tmp4.image = "fashion-1063100_1920.jpg";
    tmp4.headline = "UGスタイル";
    tmp4.sub_headline = "UGで自分らしく自由なスタイルを";
    
    tmp5.id = "24";
    tmp5.image = "covering-face-1149200_1920.jpg";
    tmp5.headline = "雪山スタイル";
    tmp5.sub_headline = "雪山へでかけよう、ファッションを楽しもう";
    
    
    response.send(JSON.stringify(obj));
    
  } else {
    let obj = {};obj.json =[];
    response.send(JSON.stringify(obj));
  }
});





module.exports = router;


