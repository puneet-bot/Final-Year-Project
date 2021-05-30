
var electionResults = getElectionResults()
		console.log("results",electionResults)
		var config = {
			type: 'doughnut',
			data: {
				datasets: [{
				    // data: [1,1,0,1,0,]

					data:[	
						electionResults.A,
						electionResults.B,
						electionResults.C,
						electionResults.D,
						electionResults.E,
						electionResults.F,
						electionResults.G,
						electionResults.H,
						electionResults.I,
						electionResults.J,
						electionResults.K,
						electionResults.L,
						electionResults.M,
						electionResults.N,
						electionResults.O,
					]
					,
					backgroundColor: [
						window.chartColors.red,
						window.chartColors.orange,
						window.chartColors.yellow,
						window.chartColors.green,
						window.chartColors.blue,
						window.chartColors.purple,
						"#e52165",
						"#0d1137",
						"#d72631",
						"#a2d5c6",
						"#e2d810",
						"#d9138a",
						"#12a4d9",
						"#322e2f",
						"#fbcbc9",					
					],
					borderWidth:1,
					borderColor:'#777',
					hoverBorderWidth:3,
					hoverBorderColor:'#000',
					label: 'Elections'
				}],
				labels: [
					'A: Delhi',
					'B: Delhi',
					'C: Delhi',
					'D: Rajasthan',
					'E: Rajasthan',
					'F: Rajasthan',
					'G: Uttar Pradesh',
					'H: Uttar Pradesh',
					'I: Uttar Pradesh',
					'J: Maharashtra',
					'K: Maharashtra',
					'L: Maharashtra',
					'M: Haryana',
					'N: Haryana',
					'O: Haryana',
				]
			},
			options: {
				responsive: true,
				legend: {
					display: true,
					position: "right",
					labels: {
						fontFamily: "Comic Sans MS",
						boxWidth: 10,
    					boxHeight: 120,
						marginRight: 130,
    				}
				},
				// title: {
				// 	display: true,
				// 	text: '𝐸𝓁𝑒𝒸𝓉𝒾𝑜𝓃 𝒫𝑜𝓁𝓁 𝑅𝑒𝓈𝓊𝓁𝓉𝓈:',
				// 	align:'center',
				// 	fontSize:120,
				// },
				animation: {
					animateScale: true,
					animateRotate: true
				}
			}
		};

		window.onload = function () {
			var ctx = document.getElementById('chart-area').getContext('2d');
			window.myDoughnut = new Chart(ctx, config);
		};