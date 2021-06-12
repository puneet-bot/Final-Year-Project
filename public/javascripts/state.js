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
    console.log(voteData)
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
