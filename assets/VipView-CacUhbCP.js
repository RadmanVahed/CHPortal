import{_ as p}from"./Separator.vue_vue_type_script_setup_true_lang-CmnQokGG.js";import{d as m,p as t,c as b,i as o,a as e,ad as x,H as u,o as h}from"./index-CNhmc1uw.js";const v={class:"min-md:flex m-4 justify-between min-md:mx-8"},_=m({__name:"VipView",setup(w){const i=t({chart:{type:"area",toolbar:{show:!1},selection:{enabled:!1},zoom:{enabled:!1},foreColor:"#ccc"},xaxis:{categories:["1399","1400","1401","1402","1403","1404"]},legend:{show:!1},tooltip:{enabled:!1},colors:["#00BAEC"],stroke:{width:3},grid:{borderColor:"#555",yaxis:{lines:{show:!1}}},dataLabels:{enabled:!1},fill:{gradient:{opacityFrom:.55,opacityTo:0}},markers:{size:5,colors:["#000524"],strokeColors:"#00BAEC",strokeWidth:3}}),n=t([{name:"Sales",data:[30,40,35,50,49,60]}]),d=t({chart:{type:"bar",toolbar:{show:!1},selection:{enabled:!1},zoom:{enabled:!1},foreColor:"#ccc"},xaxis:{categories:[" تایید شده "," در انتظار "," رد شده "],labels:{style:{colors:["#fff","#fff","#fff"],fontFamily:"IRANSansFaNum"}}},legend:{show:!1},tooltip:{enabled:!1},colors:["#28a745","#ffc107","#dc3545"],stroke:{width:3},grid:{borderColor:"#555",yaxis:{lines:{show:!1}}},dataLabels:{enabled:!1},plotOptions:{bar:{columnWidth:"50%",distributed:!0}}}),f=t([{name:"تعداد",data:[10,1,4]}]),l=t({chart:{type:"bar",toolbar:{show:!1},selection:{enabled:!1},zoom:{enabled:!1},foreColor:"#ccc"},legend:{show:!1},xaxis:{categories:["دانشگاه تهران","دانشگاه اصفهان"],labels:{style:{colors:["#fff","#fff","#fff"],fontFamily:"IRANSansFaNum"}}},tooltip:{enabled:!1},colors:["#00BAEC"],stroke:{width:3},grid:{borderColor:"#555",yaxis:{lines:{show:!1}}},dataLabels:{enabled:!1},plotOptions:{bar:{columnWidth:"50%",distributed:!0}}}),r=t([{name:"تعداد",data:[4,7]}]);return(y,s)=>{const c=p,a=x("apexchart");return h(),b(u,null,[o(c,{class:"my-8",label:"داشبورد کشوری"}),e("div",v,[e("div",null,[s[0]||(s[0]=e("div",{class:"text-white text-end text-xl mt-8"}," تعداد برنامه های حوزه موسیقی ",-1)),o(a,{type:"bar",options:l.value,series:r.value},null,8,["options","series"])]),e("div",null,[s[1]||(s[1]=e("div",{class:"text-white text-end text-xl mt-8"},"نمودار درخواست ها",-1)),o(a,{type:"bar",options:d.value,series:f.value},null,8,["options","series"])]),e("div",null,[s[2]||(s[2]=e("div",{class:"text-white text-end text-xl mt-8"}," تعداد برنامه های تشکل ها ",-1)),o(a,{type:"bar",options:l.value,series:r.value},null,8,["options","series"])]),e("div",null,[s[3]||(s[3]=e("div",{class:"text-white text-end text-xl mt-8"}," نمودار مشارکت دانشجویان ",-1)),o(a,{type:"area",options:i.value,series:n.value},null,8,["options","series"])])])],64)}}});export{_ as default};
