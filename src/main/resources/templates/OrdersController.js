

	var	orders=[]
	
	async function getOrders(){

	        await axios.get( "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=fb&apikey=Q1QZFVJQ21K7C6XM")
           .then(function (response) {
				
                orders=response.data
				
           })
           .catch(function (error) {
             console.log('There is a problem with our servers. We apologize for the inconvince, please try again later', error.message);

           })
           .then(function () {
             // always executed
           });

    }
