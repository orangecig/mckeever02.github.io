var chart;$(document).ready(function(){var t={chart:{renderTo:"sales",defaultSeriesType:"area",marginRight:10,marginBottom:20},title:{text:"Highchart With Mysql"},subtitle:{text:"www.spjoshis.blogspot.com"},xAxis:{categories:["Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar"]},yAxis:{title:{text:"Average"},plotLines:[{value:0,width:1,color:"#808080"}]},tooltip:{crosshairs:!0,shared:!0},legend:{layout:"vertical",align:"right",verticalAlign:"top",x:-10,y:30,borderWidth:0},plotOptions:{series:{cursor:"pointer",marker:{lineWidth:1}}},series:[{color:Highcharts.getOptions().colors[2],name:"Test Colomn",marker:{fillColor:"#FFFFFF",lineWidth:3,lineColor:null},dataLabels:{enabled:!0,rotation:0,color:"#666666",align:"top",x:-10,y:-10,style:{fontSize:"9px",fontFamily:"Verdana, sans-serif",textShadow:"0 0 0px black"}}}]};jQuery.get("values.php",null,function(e){var a=[];traffic=[];try{e=e.split(/\n/g),jQuery.each(e,function(t,e){e=e.split(/\t/),date=e[0],amo=parseFloat(e[1].replace(",","")),isNaN(amo)&&(amo=null),traffic.push([date,amo])})}catch(r){}t.series[0].data=traffic,chart=new Highcharts.Chart(t)})});