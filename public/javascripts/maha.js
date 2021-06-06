
  
var ctx = document.getElementById("myChart-2");
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["No. Voters Registered", "Voted" , "Verified"],
    datasets: [
      { label: '# of votes',
        data: [105,30,105],
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