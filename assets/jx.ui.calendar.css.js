(function(styleText){var d=document,n=d.createElement('style'),s,t;n.type='text/css';if(s=n.styleSheet){s.cssText=styleText;}else{t=d.createTextNode(styleText);n.appendChild(t);}(d.head || d.documentElement).appendChild(n);})(
'.calendarBox { position:absolute; z-index:1000; background:#FFFFFF;}\
.calendarBox .calender,.calender div{margin:0;padding:0 !important;}\
.calendarBox .calender { width:184px;  float:left;font-size:12px; margin:0; border:1px solid #397EAE; padding:5px;}\
.calendarBox .calender ul {margin:0; padding:0; list-style:none;}\
.calendarBox .calender .day { background-color:#E3EEF9; height:20px; font-weight:bold;}\
.calendarBox .calender .day li,.calender .date li{ float:left; width:22px; height:20px; margin:2px; line-height:20px;list-style:none; text-align:center}\
.calendarBox .calender li a { text-decoration:none; font-family:Tahoma; font-size:12px; color:#333}\
.calender .date li.have{ background:#C4E0F9}\
.calendarBox .calender li a:hover { color:#f30; text-decoration:underline}\
.calendarBox .calender li a.hasArticle {font-weight:bold; color:#f60 !important}\
.calendarBox .lastMonthDate, .nextMonthDate {color:#bbb;font-size:11px}\
.calendarBox .selectThisYear a, .selectThisMonth a{text-decoration:none; margin:0 2px; color:#000; }\
.calendarBox .calender .lastMonth, .calender .nextMonth{ text-decoration:none; color:#000; font-size:18px; font-weight:bold; line-height:16px;}\
.calendarBox .calender .lastMonth { float:left;}\
.calendarBox .calender .nextMonth { float:right;}\
.calendarBox .calenderBody {clear:both}\
.calendarBox .calenderTitle {text-align:center;height:20px; line-height:20px; clear:both;}\
.calendarBox .today{ background-color:#ffffaa;border:1px solid #f60;padding:0 1px;}\
.calendarBox .today a { color:#f30; }\
.calendarBox .calenderBottom {clear:both; border-top:1px solid #ddd; padding: 3px 0; text-align:left;}\
.calendarBox .calenderBottom a {text-decoration:none; margin:2px !important; font-weight:bold; color:#000}\
.calendarBox .calenderBottom a.closeCalender{float:right}\
.calendarBox .closeCalenderBox {float:right; border:1px solid #000; background:#fff;width:11px; height:11px; line-height:11px; text-align:center;overflow:hidden; font-weight:normal !important}');