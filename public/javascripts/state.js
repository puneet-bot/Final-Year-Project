function runFunc() {

  var sno;
  var voteData;
  var fetchdata = fetch('http://localhost:3000/voteResults').then(function (res) {
    return res.json();
  }).then(function(myJson){
    var resultHasRegistered = [100,200,150,500,321,8,1000];
    var resultHasVoted = [95,190,140,500,319,8,950];
    var constituency = ['Delhi','Uttar Pradesh','Maharashtra','Rajasthan','Haryana','Gujarat','Uttarakhand']
   for(var i=0;i<7;i++){
    sno = i;
    var res = myJson;
    resultHasRegistered = res["resultHasRegistered"];
    resultHasVoted = res["resultHasVoted"]
    voteData = [resultHasRegistered[sno],resultHasVoted[sno],resultHasRegistered[sno] - resultHasVoted[sno]]
    var ctx = document.getElementById(`myChart-${sno}`);
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ["No. Voters Registered", "Voted" , "Not Voted"],
      datasets: [
        { label: `${constituency[sno]} Poll Analysis`,
          data: [voteData[0],voteData[1],voteData[2]],
          backgroundColor :['rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
  ],
    
  borderColor: [
                  'rgba(255,99,132,1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
              ],
  borderWidth : 1
        }
      ]
    },
    options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true
                  }
              }]
          }
      }
  });
   }
  })
  // var electionResults = getElectionResults()
  // console.log("results",electionResults)
  var fetchVotes = fetch("http://localhost:3000/noOfVotesToCandidateArr").then(function (res) {
    return res.json();
  }).then(function(myJson){
    var res = myJson;
    var voteArr,totalVotes;
    voteArr = res["voteArr"];
    totalVotes = res["totalVotes"]


    var ctx = document.getElementById(`chart-area`);
    var myChart = new Chart(ctx,{
      type: 'doughnut',
      data: {
        datasets: [{
            data: voteArr
    
          // data:[	
          //   electionResults.A,
          //   electionResults.B,
          //   electionResults.C,
          //   electionResults.D,
          //   electionResults.E,
          //   electionResults.F,
          //   electionResults.G,
          //   electionResults.H,
          //   electionResults.I,
          //   electionResults.J,
          //   electionResults.K,
          //   electionResults.L,
          //   electionResults.M,
          //   electionResults.N,
          //   electionResults.O,
          //   electionResults.P,
          //   electionResults.Q,
          //   electionResults.R,
          //   electionResults.S,
          //   electionResults.T,
          //   electionResults.U,
          // ]
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
            "#F8B195",  				
            "#F67280",   			
            "#C06C84",   					
            "#6C5B7B", 
            "#355C7D",
            "#305C7D",			
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
          'M: Gujarat',
          'N: Gujarat',
          'O: Gujarat',
          'P: Haryana',
          'Q: Haryana',
          'R: Haryana',
          'S: Uttarakhand',
          'T: Uttarakhand',
          'U: Uttarakhand',
        ]
      },
      options: {
        responsive: true,
        legend: {
          display: true,
          position: "center",
          labels: {
            fontFamily: "Comic Sans MS",
            boxWidth: 10,
              boxHeight: 120,
            marginRight: 130,
            }
        },
        animation: {
          animateScale: true,
          animateRotate: true
        }
      }
    })
  
  
  







  })
  

}

runFunc()