/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-06-05 22:23:11
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-06-05 22:27:13
 * @FilePath: \疫情\js\time.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
function time() {
    var vWeek, vWeek_s, vDay;
    vWeek = ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
    var date =  new Date();
    year = date.getFullYear();
    month = date.getMonth() + 1;
    day = date.getDate();
    hours = date.getHours();
    minutes = date.getMinutes();
    seconds = date.getSeconds();
    vWeek_s = date.getDay();
    document.getElementById("time").innerHTML = year + "年" + month + "月" + day + "日" + "\t" + hours + ":" + minutes + ":" + seconds + "\t" + vWeek[vWeek_s];

};
setInterval("time()", 1000);
