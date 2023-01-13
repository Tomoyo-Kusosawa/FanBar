const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') 
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const countDown = (actEndTimeList) =>{//倒计时函数
  // 获取当前时间，同时得到活动结束时间数组
  let newTime = new Date().getTime();
  let endTimeList = actEndTimeList;
  let countDownArr = [];

  // 对结束时间进行处理渲染到页面
  endTimeList.forEach(o => {
    let endTime = new Date(o).getTime();

    let obj = null;
    // 如果活动未结束，对时间进行处理
    if (endTime - newTime > 0) {
      let time = (endTime - newTime) / 1000;
      // 获取天、时、分、秒
      let day = parseInt(time / (60 * 60 * 24));
      let hou = parseInt(time % (60 * 60 * 24) / 3600);
      let min = parseInt(time % (60 * 60 * 24) % 3600 / 60);
      let sec = parseInt(time % (60 * 60 * 24) % 3600 % 60);
      obj = {
        day: formatNumber(day),
        hou: formatNumber(hou),
        min: formatNumber(min),
        sec: formatNumber(sec)
      }
    } else {//活动已结束，全部设置为'00'
      obj = {
        day: '00',
        hou: '00',
        min: '00',
        sec: '00'
      }
    }
    countDownArr.push(obj);
  })
  // 渲染，然后每隔一秒执行一次倒计时函数

  return countDownArr;
}

function formatTimeTwo(number, format) {
  var formateArr = ['Y', 'M', 'D', 'h', 'm', 's'];
  var returnArr = [];
  var date = new Date(number * 1000);
  returnArr.push(date.getFullYear());
  returnArr.push(formatNumber(date.getMonth() + 1));
  returnArr.push(formatNumber(date.getDate()));
  returnArr.push(formatNumber(date.getHours()));
  returnArr.push(formatNumber(date.getMinutes()));
  returnArr.push(formatNumber(date.getSeconds()));
  for (var i in returnArr) {
    format = format.replace(formateArr[i], returnArr[i]);
  }
  return format;
}

const getWeekByDate = dates => {
  let show_day = new Array('7', '1', '2', '3', '4', '5', '6');
  let date = new Date(dates);
  date.setDate(date.getDate());
  let day = date.getDay();
  return show_day[day];
}



module.exports = {
  formatTime: formatTime,
  CountTime: countDown,
  formatTimeTwo: formatTimeTwo,
  getWeekByDate: getWeekByDate
}
