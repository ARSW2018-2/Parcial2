	function getTime(){

			$.ajax(){

				type: "GET",
				url:'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=fb&apikey=Q1QZFVJQ21K7C6XM',
				data:"{}"
				contenteType:"application/json; charset=utf-8",
				dataype:"json",
				success: function (data){

					alert(data);
				},

				error: control
			)};	


		}
		function control(msg, url, line){
			alert('eroor: function(msg, url, line)');
			alert('msg= '+ msg.statusText+', url ='+url+'dsada');

		}





	}

