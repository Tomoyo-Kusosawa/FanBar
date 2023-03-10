const { articleList } = require("../../data/article-data.js");
Page({
  data:{
       //类型
       chooseValues:[],
  ArticleLists:articleList,
  typeItems:['菜菜','肉肉','调料','蛋蛋','生存','忌口','海鲜','辅料','主食'],
  typeCurrentIndex:0,
   chooseItems:{
    0:[{
      name:'西兰花',
      value:'001',
      selected:false
    },{
      name:'白萝卜',
      value:'002',
      selected:false
    },{
      name:'芋头',
      value:'003',
      selected:false
    },{
      name:'南瓜',
      value:'004',
      selected:false
    },{
      name:'白菜',
      value:'005',
      selected:false
    },{
      name:'菠菜',
      value:'006',
      selected:false
    },{
      name:'西红柿',
      value:'007',
      selected:false
    },{
      name:'山药',
      value:'008',
      selected:false
    },{
      name:'胡萝卜',
      value:'009',
      selected:false
    },{
      name:'青椒',
      value:'010',
      selected:false
    },{
      name:'木耳',
      value:'011',
      selected:false
    },{
      name:'土豆',
      value:'012',
      selected:false
    },{
      name:'豆腐',
      value:'013',
      selected:false
    },{
      name:'彩椒',
      value:'014',
      selected:false
    },{
      name:'洋葱',
      value:'015',
      selected:false
    },{
      name:'黄瓜',
      value:'016',
      selected:false
    },{
      name:'蔬菜粒',
      value:'017',
      selected:false
    }
  ],
    1:[{
      name:'猪肉',
      value:'101',
      selected:false
    },{
      name:'羊肉',
      value:'102',
      selected:false
    },{
      name:'牛肉',
      value:'103',
      selected:false
    },{
      name:'火腿肠',
      value:'104',
      selected:false
    },{
      name:'鸡胸肉',
      value:'105',
      selected:false
    },{
      name:'鸡爪',
      value:'106',
      selected:false
    },{
      name:'鸡腿',
      value:'107',
      selected:false
    },{
      name:'鸡脖',
      value:'108',
      selected:false
    },{
      name:'排骨',
      value:'109',
      selected:false
    },{
      name:'里脊肉',
      value:'110',
      selected:false
    }],
    2:[{
      name:'盐',
      value:'201',
      selected:false
    },{
      name:'味素',
      value:'202',
      selected:false
    },
    {
      name:'水',
      value:'203',
      selected:false
    },
    {
      name:'姜',
      value:'204',
      selected:false
    },{
      name:'葱',
      value:'205',
      selected:false
    },{
      name:'蒜',
      value:'206',
      selected:false
    },{
      name:'黄酒',
      value:'207',
      selected:false
    },{
      name:'生抽',
      value:'208',
      selected:false
    },{
      name:'料酒',
      value:'209',
      selected:false
    },{
      name:'淀粉',
      value:'210',
      selected:false
    },{
      name:'老抽',
      value:'211',
      selected:false
    },{
      name:'陈醋',
      value:'212',
      selected:false
    },{
      name:'白糖',
      value:'213',
      selected:false
    },{
      name:'蚝油',
      value:'214',
      selected:false
    },{
      name:'香叶',
      value:'215',
      selected:false
    },{
      name:'冰糖',
      value:'216',
      selected:false
    },{
      name:'米醋',
      value:'217',
      selected:false
    },{
      name:'辣椒面',
      value:'218',
      selected:false
    },{
      name:'鸡精',
      value:'219',
      selected:false
    },{
      name:'孜然粉',
      value:'220',
      selected:false
    },{
      name:'胡椒粉',
      value:'221',
      selected:false
    },{
      name:'五香粉',
      value:'222',
      selected:false
    },{
      name:'NULL',//SHANCHU
      value:'223',
      selected:false
    },{
      name:'小米辣',
      value:'224',
      selected:false
    },{
      name:'八角',
      value:'225',
      selected:false
    },{
      name:'番茄酱',
      value:'226',
      selected:false
    }
  ],
    3:[{
      name:'鸡蛋',
      value:'301',
      selected:false
    },{
      name:'鹅蛋',
      value:'302',
      selected:false
    },{
      name:'皮蛋',
      value:'303',
      selected:false
    }],
    4:[{
      name:'快手',
      value:'401',
      selected:false
    },{
      name:'家常',
      value:'402',
      selected:false
    },{
      name:'B站',
      value:'403',
      selected:false
    },{
      name:'抖音',
      value:'404',
      selected:false
    }],
    5:[{
      name:'辣',
      value:'501',
      selected:false
    },{
      name:'酸',
      value:'502',
      selected:false
    }],
    6:[{
      name:'螃蟹',
      value:'601',
      selected:false
    },{
      name:'鲍鱼',
      value:'602',
      selected:false
    },{
      name:'鱿鱼',
      value:'603',
      selected:false
    },{
      name:'大虾',
      value:'604',
      selected:false
    },{
      name:'虾仁',
      value:'605',
      selected:false
    }],
    7:[{
        name:'芝士',
        value:'701',
        selected:false
      },{
        name:'干辣椒',
        value:'702',
        selected:false
      },{
        name:'豆瓣酱',
        value:'701',
        selected:false
      },{
        name:'芝麻',
        value:'702',
        selected:false
      },{
        name:'甜面酱',
        value:'703',
        selected:false
      }],
      8:[{
        name:'粥',
        value:'801',
        selected:false
      },{
        name:'米饭',
        value:'802',
        selected:false
      },{
        name:'面粉',
        value:'803',
        selected:false
      },{
        name:'油',
        value:'804',
        selected:false
      },{
        name:'啤酒',
        value:'805',
        selected:false
      },{
        name:'面',
        value:'806',
        selected:false
      }]
  },
  },
  //筛选
//下拉收回
sreenShow:function(){
  this.setData({
    sreenShow:!this.data.sreenShow,
  })
},
cancel:function(){
  this.setData({
    sreenShow:false
  })
},
//清空选择
clear:function(){
  console.log("clear已调用")
  for(var i=0,t=1000;i<t;i++){
    if(this.data.chooseItems[i]==null){
      break;
    }
    for(var m=0,n=1000;m<n;m++){
      if(this.data.chooseItems[i][m]==null){
        break;
      }
      this.data.chooseItems[i][m].selected=false
    }
  }
  this.setData({
    chooseItems:this.data.chooseItems,
    chooseValues:[]
  })
},
//确认筛选
confirm:function(){
  this.setData({
    sreenShow:false, 
  })
},

//点击遮罩层
mask:function(){
  this.setData({
    sreenShow:false,
    sortShow:false
  })
},
//选择类型
chooseType:function(e){
  const{index}=e.currentTarget.dataset;
  console.log(index);
  this.setData({
    typeCurrentIndex:index,
  })
},
//选择具体内容
chooseItem:function(e){
  this.data.chooseItems[this.data.typeCurrentIndex][e.target.dataset.index].selected=!this.data.chooseItems[this.data.typeCurrentIndex][e.target.dataset.index].selected
  this.setData({
    chooseItems:this.data.chooseItems,
  })
//choosevalue
let arr = this.data.chooseItems
let values = []
for(let key in arr) {
  arr[key].map(item => {
    if(item.selected) {
       values.push(item.value)
    }
  })}
this.setData({
  chooseValues: values
})
this.search()
},
//复制内容
copybv: function (event) {
  wx.setClipboardData({
    data: `${event.currentTarget.dataset.bv}`,
    success (res) {
      wx.getClipboardData({
        success: (res) => {
          console.log(res.data)
        },
      })
      
    }
  })

},
onLoad(){
  this.search();
  
},
search(){
  let ArticleLists=articleList.filter(a=>this.data.chooseValues.reduce((p,c)=>p&&a.vavlue.includes(c),articleList))
  console.log(ArticleLists);
  this.setData({
    ArticleLists:ArticleLists
  })
},

//教学页面的功能
showModal(){
  wx.showModal({
      title: '新手教学',
      content: '点击本页面的筛选功能，\t通过侧边栏选择种类，\n选择这顿饭你想吃的食材\n筛选出结果后，点击菜谱名称，\n即可复制菜谱的BV号（B站）或抖音链接，\n前往打开相对应的视频软件，即可直接打开菜谱视频教学，\n目前抖音相关菜谱需要进入APP后等待1-2s才可显示',
      success: function (res) {
          if (res.confirm) {
              console.log('用户点击确定')
          }else{
          console.log('用户点击取消')
          }

      }
  })
},

//share
onShareAppMessage: function () {
  return {
   
  }
},
onShareTimeline: function(res){
  return {
    
  }
},
onPageScroll:function(){

},

//gotoup
gotop:function(e){
  if (wx.pageScrollTo) {
    wx.pageScrollTo({
      scrollTop: 0
    })
  } else {
    wx.showModal({
      title: '提示',
      content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
    })
  }

},
//BUG消失了


})


