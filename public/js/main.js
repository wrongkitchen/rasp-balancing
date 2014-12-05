$(document).ready(function(){
	var smoothie = new SmoothieChart({
		maxValue : -90,
		minValue : 90
	});
		smoothie.streamTo(document.getElementById("mycanvas"));
	// Data
	var line1 = new TimeSeries();
	var line2 = new TimeSeries();
	var socket = io('http://localhost/xy');
	socket.on('passXY', function (data) {
		console.log(data);
	});
	//var getXYdata = function(){
	//	$.ajax({
	//        url: '//192.168.1.141:8080',
	//        type: 'get',
	//        dataType: "json",
	//        success: function (data) {
	//			line1.append(new Date().getTime(), data.x);
	//			line2.append(new Date().getTime(), data.y);
	//			getXYdata();
	//        }
	//    });
	//};
	// Add to SmoothieChart
	//smoothie.addTimeSeries(line1, { strokeStyle: 'rgba(255, 255, 0,1)', fillStyle: 'rgba(255, 255, 0, 0.1)', lineWidth: 1 });
	//smoothie.addTimeSeries(line2, { strokeStyle: 'rgba(255, 0, 0,1)', fillStyle: 'rgba(255, 0, 0, 0.1)', lineWidth: 1 });
	//getXYdata();
});
