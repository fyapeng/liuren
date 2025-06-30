// 您提供的 calendar.js 代码 (原封不动)
var calendar = {lunarInfo:[0x04bd8,0x04ae0,0x0a570,0x054d5,0x0d260,0x0d950,0x16554,0x056a0,0x09ad0,0x055d2,0x04ae0,0x0a5b6,0x0a4d0,0x0d250,0x1d255,0x0b540,0x0d6a0,0x0ada2,0x095b0,0x14977,0x04970,0x0a4b0,0x0b4b5,0x06a50,0x06d40,0x1ab54,0x02b60,0x09570,0x052f2,0x04970,0x06566,0x0d4a0,0x0ea50,0x06e95,0x05ad0,0x02b60,0x186e3,0x092e0,0x1c8d7,0x0c950,0x0d4a0,0x1d8a6,0x0b550,0x056a0,0x1a5b4,0x025d0,0x092d0,0x0d2b2,0x0a950,0x0b557,0x06ca0,0x0b550,0x15355,0x04da0,0x0a5b0,0x14573,0x052b0,0x0a9a8,0x0e950,0x06aa0,0x0aea6,0x0ab50,0x04b60,0x0aae4,0x0a570,0x05260,0x0f263,0x0d950,0x05b57,0x056a0,0x096d0,0x04dd5,0x04ad0,0x0a4d0,0x0d4d4,0x0d250,0x0d558,0x0b540,0x0b6a0,0x195a6,0x095b0,0x049b0,0x0a974,0x0a4b0,0x0b27a,0x06a50,0x06d40,0x0af46,0x0ab60,0x09570,0x04af5,0x04970,0x064b0,0x074a3,0x0ea50,0x06b58,0x055c0,0x0ab60,0x096d5,0x092e0,0x0c960,0x0d954,0x0d4a0,0x0da50,0x07552,0x056a0,0x0abb7,0x025d0,0x092d0,0x0cab5,0x0a950,0x0b4a0,0x0baa4,0x0ad50,0x055d9,0x04ba0,0x0a5b0,0x15176,0x052b0,0x0a930,0x07954,0x06aa0,0x0ad50,0x05b52,0x04b60,0x0a6e6,0x0a4e0,0x0d260,0x0ea65,0x0d530,0x05aa0,0x076a3,0x096d0,0x04afb,0x04ad0,0x0a4d0,0x1d0b6,0x0d250,0x0d520,0x0dd45,0x0b5a0,0x056d0,0x055b2,0x049b0,0x0a577,0x0a4b0,0x0aa50,0x1b255,0x06d20,0x0ada0,0x14b63,0x09370,0x049f8,0x04970,0x064b0,0x168a6,0x0ea50,0x06b20,0x1a6c4,0x0aae0,0x0a2e0,0x0d2e3,0x0c960,0x0d557,0x0d4a0,0x0da50,0x05d55,0x056a0,0x0a6d0,0x055d4,0x052d0,0x0a9b8,0x0a950,0x0b4a0,0x0b6a6,0x0ad50,0x055a0,0x0aba4,0x0a5b0,0x052b0,0x0b273,0x06930,0x07337,0x06aa0,0x0ad50,0x14b55,0x04b60,0x0a570,0x054e4,0x0d160,0x0e968,0x0d520,0x0daa0,0x16aa6,0x056d0,0x04ae0,0x0a9d4,0x0a2d0,0x0d150,0x0f252,0x0d520],solarMonth:[31,28,31,30,31,30,31,31,30,31,30,31],Gan:["甲","乙","丙","丁","戊","己","庚","辛","壬","癸"],Zhi:["子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥"],Animals:["鼠","牛","虎","兔","龙","蛇","马","羊","猴","鸡","狗","猪"],solarTerm:["小寒","大寒","立春","雨水","惊蛰","春分","清明","谷雨","立夏","小满","芒种","夏至","小暑","大暑","立秋","处暑","白露","秋分","寒露","霜降","立冬","小雪","大雪","冬至"],sTermInfo:['9778397bd097c36b0b6fc9274c91aa','97b6b97bd19801ec9210c965cc920e','97bcf97c3598082c95f8c965cc920f','97bd0b06bdb0722c965ce1cfcc920f','b027097bd097c36b0b6fc9274c91aa','97b6b97bd19801ec9210c965cc920e','97bcf97c359801ec95f8c965cc920f','97bd0b06bdb0722c965ce1cfcc920f','b027097bd097c36b0b6fc9274c91aa','97b6b97bd19801ec9210c965cc920e','97bcf97c359801ec95f8c965cc920f','97bd0b06bdb0722c965ce1cfcc920f','b027097bd097c36b0b6fc9274c91aa','9778397bd19801ec9210c965cc920e','97b6b97bd19801ec95f8c965cc920f','97bd09801d98082c95f8e1cfcc920f','97bd097bd097c36b0b6fc9210c8dc2','9778397bd197c36c9210c9274c91aa','97b6b97bd19801ec95f8c965cc920e','97bd09801d98082c95f8e1cfcc920f','97bd097bd097c36b0b6fc9210c8dc2','9778397bd097c36c9210c9274c91aa','97b6b97bd19801ec95f8c965cc920e','97bcf97c3598082c95f8e1cfcc920f','97bd097bd097c36b0b6fc9210c8dc2','9778397bd097c36c9210c9274c91aa','97b6b97bd19801ec9210c965cc920e','97bcf97c3598082c95f8c965cc920f','97bd097bd097c35b0b6fc920fb0722','9778397bd097c36b0b6fc9274c91aa','97b6b97bd19801ec9210c965cc920e','97bcf97c3598082c95f8c965cc920f','97bd097bd097c35b0b6fc920fb0722','9778397bd097c36b0b6fc9274c91aa','97b6b97bd19801ec9210c965cc920e','97bcf97c359801ec95f8c965cc920f','97bd097bd097c35b0b6fc920fb0722','9778397bd097c36b0b6fc9274c91aa','97b6b97bd19801ec9210c965cc920e','97bcf97c359801ec95f8c965cc920f','97bd097bd097c35b0b6fc920fb0722','9778397bd097c36b0b6fc9274c91aa','97b6b97bd19801ec9210c965cc920e','97bcf97c359801ec95f8c965cc920f','97bd097bd07f595b0b6fc920fb0722','9778397bd097c36b0b6fc9210c8dc2','9778397bd19801ec9210c9274c920e','97b6b97bd19801ec95f8c965cc920f','97bd07f5307f595b0b0bc920fb0722','7f0e397bd097c36b0b6fc9210c8dc2','9778397bd097c36c9210c9274c920e','97b6b97bd19801ec95f8c965cc920f','97bd07f5307f595b0b0bc920fb0722','7f0e397bd097c36b0b6fc9210c8dc2','9778397bd097c36c9210c9274c91aa','97b6b97bd19801ec9210c965cc920e','97bd07f1487f595b0b0bc920fb0722','7f0e397bd097c36b0b6fc9210c8dc2','9778397bd097c36b0b6fc9274c91aa','97b6b97bd19801ec9210c965cc920e','97bcf7f1487f595b0b0bb0b6fb0722','7f0e397bd097c35b0b6fc920fb0722','9778397bd097c36b0b6fc9274c91aa','97b6b97bd19801ec9210c965cc920e','97bcf7f1487f595b0b0bb0b6fb0722','7f0e397bd097c35b0b6fc920fb0722','9778397bd097c36b0b6fc9274c91aa','97b6b97bd19801ec9210c965cc920e','97bcf7f1487f531b0b0bb0b6fb0722','7f0e397bd097c35b0b6fc920fb0722','9778397bd097c36b0b6fc9274c91aa','97b6b97bd19801ec9210c965cc920e','97bcf7f1487f531b0b0bb0b6fb0722','7f0e397bd07f595b0b6fc920fb0722','9778397bd097c36b0b6fc9274c91aa','97b6b97bd19801ec9210c9274c920e','97bcf7f0e47f531b0b0bb0b6fb0722','7f0e397bd07f595b0b0bc920fb0722','9778397bd097c36b0b6fc9210c91aa','97b6b97bd197c36c9210c9274c920e','97bcf7f0e47f531b0b0bb0b6fb0722','7f0e397bd07f595b0b0bc920fb0722','9778397bd097c36b0b6fc9210c8dc2','9778397bd097c36c9210c9274c920e','97b6b7f0e47f531b0723b0b6fb0722','7f0e37f5307f595b0b0bc920fb0722','7f0e397bd097c36b0b6fc9210c8dc2','9778397bd097c36b0b70c9274c91aa','97b6b7f0e47f531b0723b0b6fb0721','7f0e37f1487f595b0b0bb0b6fb0722','7f0e397bd097c35b0b6fc9210c8dc2','9778397bd097c36b0b6fc9274c91aa','97b6b7f0e47f531b0723b0b6fb0721','7f0e27f1487f595b0b0bb0b6fb0722','7f0e397bd097c35b0b6fc920fb0722','9778397bd097c36b0b6fc9274c91aa','97b6b7f0e47f531b0723b0b6fb0721','7f0e27f1487f531b0b0bb0b6fb0722','7f0e397bd097c35b0b6fc920fb0722','9778397bd097c36b0b6fc9274c91aa','97b6b7f0e47f531b0723b0b6fb0721','7f0e27f1487f531b0b0bb0b6fb0722','7f0e397bd097c35b0b6fc920fb0722','9778397bd097c36b0b6fc9274c91aa','97b6b7f0e47f531b0723b0b6fb0721','7f0e27f1487f531b0b0bb0b6fb0722','7f0e397bd07f595b0b0bc920fb0722','9778397bd097c36b0b6fc9274c91aa','97b6b7f0e47f531b0723b0787b0721','7f0e27f0e47f531b0b0bb0b6fb0722','7f0e397bd07f595b0b0bc920fb0722','9778397bd097c36b0b6fc9210c91aa','97b6b7f0e47f149b0723b0787b0721','7f0e27f0e47f531b0723b0b6fb0722','7f0e397bd07f595b0b0bc920fb0722','9778397bd097c36b0b6fc9210c8dc2','977837f0e37f149b0723b0787b0721','7f07e7f0e47f531b0723b0b6fb0722','7f0e37f5307f595b0b0bc920fb0722','7f0e397bd097c35b0b6fc9210c8dc2','977837f0e37f14998082b0787b0721','7f07e7f0e47f531b0723b0b6fb0721','7f0e37f1487f595b0b0bb0b6fb0722','7f0e397bd097c35b0b6fc9210c8dc2','977837f0e37f14998082b0787b06bd','7f07e7f0e47f531b0723b0b6fb0721','7f0e27f1487f531b0b0bb0b6fb0722','7f0e397bd097c35b0b6fc920fb0722','977837f0e37f14998082b0787b06bd','7f07e7f0e47f531b0723b0b6fb0721','7f0e27f1487f531b0b0bb0b6fb0722','7f0e397bd097c35b0b6fc920fb0722','977837f0e37f14998082b0787b06bd','7f07e7f0e47f531b0723b0b6fb0721','7f0e27f1487f531b0b0bb0b6fb0722','7f0e397bd07f595b0b0bc920fb0722','977837f0e37f14998082b0787b06bd','7f07e7f0e47f531b0723b0b6fb0721','7f0e27f1487f531b0b0bb0b6fb0722','7f0e397bd07f595b0b0bc920fb0722','977837f0e37f14998082b0787b06bd','7f07e7f0e47f149b0723b0787b0721','7f0e27f0e47f531b0b0bb0b6fb0722','7f0e397bd07f595b0b0bc920fb0722','977837f0e37f14998082b0723b06bd','7f07e7f0e37f149b0723b0787b0721','7f0e27f0e47f531b0723b0b6fb0722','7f0e397bd07f595b0b0bc920fb0722','977837f0e37f14898082b0723b02d5','7ec967f0e37f14998082b0787b0721','7f07e7f0e47f531b0723b0b6fb0722','7f0e37f1487f595b0b0bb0b6fb0722','7f0e37f0e37f14898082b0723b02d5','7ec967f0e37f14998082b0787b0721','7f07e7f0e47f531b0723b0b6fb0722','7f0e37f1487f531b0b0bb0b6fb0722','7f0e37f0e37f14898082b0723b02d5','7ec967f0e37f14998082b0787b06bd','7f07e7f0e47f531b0723b0b6fb0721','7f0e37f1487f531b0b0bb0b6fb0722','7f0e37f0e37f14898082b072297c35','7ec967f0e37f14998082b0787b06bd','7f07e7f0e47f531b0723b0b6fb0721','7f0e27f1487f531b0b0bb0b6fb0722','7f0e37f0e37f14898082b072297c35','7ec967f0e37f14998082b0787b06bd','7f07e7f0e47f531b0723b0b6fb0721','7f0e27f1487f531b0b0bb0b6fb0722','7f0e37f0e366aa89801eb072297c35','7ec967f0e37f14998082b0787b06bd','7f07e7f0e47f149b0723b0787b0721','7f0e27f1487f531b0b0bb0b6fb0722','7f0e37f0e366aa89801eb072297c35','7ec967f0e37f14998082b0723b06bd','7f07e7f0e47f149b0723b0787b0721','7f0e27f0e47f531b0723b0b6fb0722','7f0e37f0e366aa89801eb072297c35','7ec967f0e37f14998082b0723b06bd','7f07e7f0e37f14998083b0787b0721','7f0e27f0e47f531b0723b0b6fb0722','7f0e37f0e366aa89801eb072297c35','7ec967f0e37f14898082b0723b02d5','7f07e7f0e37f14998082b0787b0721','7f07e7f0e47f531b0723b0b6fb0722','7f0e36665b66aa89801e9808297c35','665f67f0e37f14898082b0723b02d5','7ec967f0e37f14998082b0787b0721','7f07e7f0e47f531b0723b0b6fb0722','7f0e36665b66a449801e9808297c35','665f67f0e37f14898082b0723b02d5','7ec967f0e37f14998082b0787b06bd','7f07e7f0e47f531b0723b0b6fb0721','7f0e36665b66a449801e9808297c35','665f67f0e37f14898082b072297c35','7ec967f0e37f14998082b0787b06bd','7f07e7f0e47f531b0723b0b6fb0721','7f0e26665b66a449801e9808297c35','665f67f0e37f1489801eb072297c35','7ec967f0e37f14998082b0787b06bd','7f07e7f0e47f531b0723b0b6fb0721','7f0e27f1487f531b0b0bb0b6fb0722'],nStr1:["日","一","二","三","四","五","六","七","八","九","十"],nStr2:["初","十","廿","卅"],nStr3:["正","二","三","四","五","六","七","八","九","十","冬","腊"],lYearDays:function(y){var i,sum=348;for(i=0x8000;i>0x8;i>>=1)sum+=(this.lunarInfo[y-1900]&i)?1:0;return sum+this.leapDays(y)},leapMonth:function(y){return this.lunarInfo[y-1900]&0xf},leapDays:function(y){if(this.leapMonth(y))return(this.lunarInfo[y-1900]&0x10000)?30:29;return 0},monthDays:function(y,m){if(m>12||m<1)return-1;return(this.lunarInfo[y-1900]&(0x10000>>m))?30:29},solarDays:function(y,m){if(m>12||m<1)return-1;var ms=m-1;if(ms==1)return(y%4==0&&y%100!=0)||(y%400==0)?29:28;else return this.solarMonth[ms]},toGanZhiYear:function(lYear){var ganKey=(lYear-3)%10;var zhiKey=(lYear-3)%12;if(ganKey==0)ganKey=10;if(zhiKey==0)zhiKey=12;return this.Gan[ganKey-1]+this.Zhi[zhiKey-1]},toAstro:function(cMonth,cDay){var s="魔羯水瓶双鱼白羊金牛双子巨蟹狮子处女天秤天蝎射手魔羯";var arr=[20,19,21,21,21,22,23,23,23,23,22,22];return s.substr(cMonth*2-(cDay<arr[cMonth-1]?2:0),2)+"座"},toGanZhi:function(offset){return this.Gan[offset%10]+this.Zhi[offset%12]},getTerm:function(y,n){if(y<1900||y>2100)return-1;if(n<1||n>24)return-1;var _table=this.sTermInfo[y-1900];var _info=[parseInt('0x'+_table.substr(0,5)).toString(),parseInt('0x'+_table.substr(5,5)).toString(),parseInt('0x'+_table.substr(10,5)).toString(),parseInt('0x'+_table.substr(15,5)).toString(),parseInt('0x'+_table.substr(20,5)).toString(),parseInt('0x'+_table.substr(25,5)).toString()];var _calday=[_info[0].substr(0,1),_info[0].substr(1,2),_info[0].substr(3,1),_info[0].substr(4,2),_info[1].substr(0,1),_info[1].substr(1,2),_info[1].substr(3,1),_info[1].substr(4,2),_info[2].substr(0,1),_info[2].substr(1,2),_info[2].substr(3,1),_info[2].substr(4,2),_info[3].substr(0,1),_info[3].substr(1,2),_info[3].substr(3,1),_info[3].substr(4,2),_info[4].substr(0,1),_info[4].substr(1,2),_info[4].substr(3,1),_info[4].substr(4,2),_info[5].substr(0,1),_info[5].substr(1,2),_info[5].substr(3,1),_info[5].substr(4,2)];return parseInt(_calday[n-1])},toChinaMonth:function(m){if(m>12||m<1)return-1;var s=this.nStr3[m-1];s+="月";return s},toChinaDay:function(d){var s;switch(d){case 10:s='初十';break;case 20:s='二十';break;case 30:s='三十';break;default:s=this.nStr2[Math.floor(d/10)];s+=this.nStr1[d%10]}return s},getAnimal:function(y){return this.Animals[(y-4)%12]},solar2lunar:function(y,m,d){if(y<1900||y>2100)return-1;if(y==1900&&m==1&&d<31)return-1;if(!y){var objDate=new Date}else{var objDate=new Date(y,parseInt(m)-1,d)}var i,leap=0,temp=0;var y=objDate.getFullYear(),m=objDate.getMonth()+1,d=objDate.getDate();var offset=(Date.UTC(objDate.getFullYear(),objDate.getMonth(),objDate.getDate())-Date.UTC(1900,0,31))/86400000;for(i=1900;i<2101&&offset>0;i++){temp=this.lYearDays(i);offset-=temp}if(offset<0){offset+=temp;i--}var isTodayObj=new Date(),isToday=false;if(isTodayObj.getFullYear()==y&&isTodayObj.getMonth()+1==m&&isTodayObj.getDate()==d){isToday=true}var nWeek=objDate.getDay(),cWeek=this.nStr1[nWeek];if(nWeek==0){nWeek=7}var year=i;var leap=this.leapMonth(i);var isLeap=false;for(i=1;i<13&&offset>0;i++){if(leap>0&&i==(leap+1)&&isLeap==false){--i;isLeap=true;temp=this.leapDays(year)}else{temp=this.monthDays(year,i)}if(isLeap==true&&i==(leap+1)){isLeap=false}offset-=temp}if(offset==0&&leap>0&&i==leap+1){if(isLeap){isLeap=false}else{isLeap=true;--i}}if(offset<0){offset+=temp;--i}var month=i;var day=offset+1;var sm=m-1;var gzY=this.toGanZhiYear(year);var firstNode=this.getTerm(y,(m*2-1));var secondNode=this.getTerm(y,(m*2));var gzM=this.toGanZhi((y-1900)*12+m+11);if(d>=firstNode){gzM=this.toGanZhi((y-1900)*12+m+12)}var isTerm=false;var Term=null;if(firstNode==d){isTerm=true;Term=this.solarTerm[m*2-2]}if(secondNode==d){isTerm=true;Term=this.solarTerm[m*2-1]}var dayCyclical=Date.UTC(y,sm,1,0,0,0,0)/86400000+25567+10;var gzD=this.toGanZhi(dayCyclical+d-1);var astro=this.toAstro(m,d);return{'lYear':year,'lMonth':month,'lDay':day,'Animal':this.getAnimal(year),'IMonthCn':(isLeap?"闰":'')+this.toChinaMonth(month),'IDayCn':this.toChinaDay(day),'cYear':y,'cMonth':m,'cDay':d,'gzYear':gzY,'gzMonth':gzM,'gzDay':gzD,'isToday':isToday,'isLeap':isLeap,'nWeek':nWeek,'ncWeek':"星期"+cWeek,'isTerm':isTerm,'Term':Term,'astro':astro}},lunar2solar:function(y,m,d,isLeapMonth){var isLeapMonth=!!isLeapMonth;var leapOffset=0;var leapMonth=this.leapMonth(y);var leapDay=this.leapDays(y);if(isLeapMonth&&(leapMonth!=m)){return-1}if(y==2100&&m==12&&d>1||y==1900&&m==1&&d<31){return-1}var day=this.monthDays(y,m);var _day=day;if(isLeapMonth){_day=this.leapDays(y,m)}if(y<1900||y>2100||d>_day){return-1}var offset=0;for(var i=1900;i<y;i++){offset+=this.lYearDays(i)}var leap=0,isAdd=false;for(var i=1;i<m;i++){leap=this.leapMonth(y);if(!isAdd){if(leap<=i&&leap>0){offset+=this.leapDays(y);isAdd=true}}offset+=this.monthDays(y,i)}if(isLeapMonth){offset+=day}var stmap=Date.UTC(1900,1,30,0,0,0);var calObj=new Date((offset+d-31)*86400000+stmap);var cY=calObj.getUTCFullYear();var cM=calObj.getUTCMonth()+1;var cD=calObj.getUTCDate();return this.solar2lunar(cY,cM,cD)}};

// =================================================================
// ===== 以下是小六壬推算的核心逻辑 =====
// =================================================================

// 定义小六壬的六个宫位
const xiaoLiuRenPalaces = ['大安', '留连', '速喜', '赤口', '小吉', '空亡'];
const earthlyBranches = calendar.Zhi; 

// 新增：小六壬解卦数据
const palaceInterpretations = {
    '大安': {
        fortune: '吉',
        fortuneClass: 'good',
        meaning: '身心安泰，诸事稳定。',
        analysis: '此为吉卦，代表稳定、安宁和顺利。适宜采取稳健的策略，不宜冒进。所问之事进展顺利，结果多为正面。利于求财、婚姻、出行和谋事，但需要耐心等待时机。'
    },
    '留连': {
        fortune: '半吉半凶',
        fortuneClass: 'neutral',
        meaning: '事有延迟，纠缠不清。',
        analysis: '此卦带有延迟和纠缠的意味。所问之事进展缓慢，中间可能会有波折和阻碍。需要有极大的耐心和毅力去处理，问题不易速决。不宜做重大决策，最好静观其变。'
    },
    '速喜': {
        fortune: '吉',
        fortuneClass: 'good',
        meaning: '喜事将近，好事速来。',
        analysis: '此为大吉之卦，代表有突如其来的好消息或喜事。所问之事能快速达成，且结果令人满意。特别利于求财、感情和各种短期计划。应抓住时机，果断行动。'
    },
    '赤口': {
        fortune: '凶',
        fortuneClass: 'bad',
        meaning: '口舌是非，官司破财。',
        analysis: '此为凶卦，主要预示着冲突、争执和是非。处理事情时容易遇到小人或发生激烈争吵。不利于合作、谈判和诉讼。建议保持冷静，谨言慎行，避免与人发生正面冲突。'
    },
    '小吉': {
        fortune: '吉',
        fortuneClass: 'good',
        meaning: '小有喜事，合作顺利。',
        analysis: '此为吉卦，虽不如速喜来得快，但代表事情正在朝好的方向发展。特别有利于合作、合伙项目，能得到贵人相助。事情虽有小成，但已是很好的开端，未来可期。'
    },
    '空亡': {
        fortune: '凶',
        fortuneClass: 'bad',
        meaning: '事多虚空，劳而无功。',
        analysis: '此为凶卦，代表空虚、失落和徒劳无功。所问之事可能没有结果，或者之前的努力付诸东流。信息不实，希望渺茫。此时不宜抱有太大期望，应重新审视计划，或暂时搁置。'
    }
};

// 页面加载完成后运行
document.addEventListener('DOMContentLoaded', function() {
    runTimeCalculation(); // 默认执行一次时间推算
});

// 标签页切换逻辑
function openTab(evt, tabName) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";

    // 切换时清空结果
    document.getElementById('result-container').style.display = 'none';
}

/**
 * 根据小时计算当前时辰的地支索引 (0-11)
 */
function getHourBranchIndex(hour) {
    return Math.floor((hour + 1) / 2) % 12;
}

/**
 * 按当前时间推算
 */
function runTimeCalculation() {
    const now = new Date();
    const year = now.getFullYear(), month = now.getMonth() + 1, day = now.getDate(), hour = now.getHours(), minute = now.getMinutes(), second = now.getSeconds();

    document.getElementById('solar-time').textContent = `${year}年${month}月${day}日 ${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}:${String(second).padStart(2, '0')}`;
    
    const lunarData = calendar.solar2lunar(year, month, day);
    if (!lunarData) { alert("日期转换失败，可能超出了1900-2100年的范围。"); return; }
    
    const lunarMonth = lunarData.lMonth, lunarDay = lunarData.lDay;
    document.getElementById('lunar-time').textContent = `${lunarData.gzYear}年 ${lunarData.IMonthCn}${lunarData.IDayCn}`;

    const hourIndex = getHourBranchIndex(hour);
    const currentHourBranch = earthlyBranches[hourIndex];
    document.getElementById('hour-branch').textContent = `${currentHourBranch}时 (${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')})`;

    let processHtml = '';
    const monthPositionIndex = (lunarMonth - 1) % 6;
    const monthPositionName = xiaoLiuRenPalaces[monthPositionIndex];
    processHtml += `<p>① 从【大安】起正月，顺数到农历【${lunarData.IMonthCn}】，落在【<b>${monthPositionName}</b>】</p>`;

    const dayPositionIndex = (monthPositionIndex + lunarDay - 1) % 6;
    const dayPositionName = xiaoLiuRenPalaces[dayPositionIndex];
    processHtml += `<p>② 从月上【${monthPositionName}】起初一，顺数到【${lunarData.IDayCn}】，落在【<b>${dayPositionName}</b>】</p>`;

    const finalIndex = (dayPositionIndex + hourIndex) % 6;
    const finalResultName = xiaoLiuRenPalaces[finalIndex];
    processHtml += `<p>③ 从日上【${dayPositionName}】起子时，顺数到【${currentHourBranch}时】，最终落在【<b>${finalResultName}</b>】</p>`;
    
    document.getElementById('time-calculation-process').innerHTML = processHtml;
    displayResult(finalResultName);
}

/**
 * 按随机数字推算
 */
function runNumberCalculation() {
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);
    const num3 = parseInt(document.getElementById('num3').value);

    if (isNaN(num1) || isNaN(num2) || isNaN(num3) || num1 <= 0 || num2 <= 0 || num3 <= 0) {
        alert("请输入三个有效的正整数！");
        return;
    }
    
    let processHtml = '';
    const pos1Index = (num1 - 1) % 6;
    const pos1Name = xiaoLiuRenPalaces[pos1Index];
    processHtml += `<p>① 从【大安】起1，顺数到数字【${num1}】，落在【<b>${pos1Name}</b>】</p>`;

    const pos2Index = (pos1Index + num2 - 1) % 6;
    const pos2Name = xiaoLiuRenPalaces[pos2Index];
    processHtml += `<p>② 从上一宫位【${pos1Name}】起1，顺数到数字【${num2}】，落在【<b>${pos2Name}</b>】</p>`;
    
    const finalIndex = (pos2Index + num3 - 1) % 6;
    const finalResultName = xiaoLiuRenPalaces[finalIndex];
    processHtml += `<p>③ 从上一宫位【${pos2Name}】起1，顺数到数字【${num3}】，最终落在【<b>${finalResultName}</b>】</p>`;

    document.getElementById('number-calculation-process').innerHTML = processHtml;
    displayResult(finalResultName);
}

/**
 * 显示最终结果和解卦内容
 * @param {string} palaceName - 最终推算出的宫位名称
 */
function displayResult(palaceName) {
    const interpretation = palaceInterpretations[palaceName];
    if (!interpretation) return;

    const resultContainer = document.getElementById('result-container');
    
    // 更新内容
    document.getElementById('final-result-name').textContent = palaceName;
    document.getElementById('final-result-fortune').textContent = interpretation.fortune;
    document.getElementById('result-meaning').textContent = interpretation.meaning;
    document.getElementById('result-analysis').textContent = interpretation.analysis;

    // 更新样式
    resultContainer.className = 'result ' + interpretation.fortuneClass;
    
    // 显示结果区域
    resultContainer.style.display = 'block';
}