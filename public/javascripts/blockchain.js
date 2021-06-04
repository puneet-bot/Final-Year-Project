var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

var abi = JSON.parse('[{"constant":true,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"totalVotesFor","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"validCandidate","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"votesReceived","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"candidateList","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"voteForCandidate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"candidateNames","type":"bytes32[]"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]');


var VotingContract = web3.eth.contract(abi);
// In your nodejs console, execute deployedContract.address to get the address at which the contract is deployed and change the line below to use your deployed address
var contractInstance = VotingContract.at('0x4b92ec377038c8069f1ddb3aab4c2c7ec8f5186c');

var candidates = {
  "A": "candidate-1",
  "B": "candidate-2",
  "C": "candidate-3",
  "D": "candidate-4",
  "E": "candidate-5",
  "F": "candidate-6",
  'G': "candidate-7",		
  'H': "candidate-8",
  'I': "candidate-9",
  'J': "candidate-10",
  'K': "candidate-11",
  'L': "candidate-12",
  'M': "candidate-13",
  'N': "candidate-14",
  'O': "candidate-15",
}

function voteForCandidate(id) {
  console.log(id)
  var candidateName = document.getElementById("result").value;
  console.log("vote candidate =>",candidateName)
  var voteflag = confirm("Confirm Vote");

  if (voteflag == true) {
    contractInstance.voteForCandidate(candidateName, {
      from: web3.eth.accounts[0]
    }, function () {
      //console.log(contractInstance.validCandidate.call(candidateName).toString())
      console.log(contractInstance.totalVotesFor.call(candidateName).toString());
      window.location = "/voteadded/" + id;
    });
  }
}

//  async function addNewCandidate(newcandidate) {
//   var cand_length = Object.keys(candidates).length
//   candidates[`${newcandidate}`] = "candidate-"+(cand_length+1);
//   console.log(candidates);
//   var candidateName = newcandidate;
//   console.log("new candidate =>",candidateName)

//     contractInstance.addCandidate(candidateName, {
//       from: web3.eth.accounts[0]
//     }, function () {
   
//       console.log(contractInstance.validCandidate.call(candidateName).toString());
      
//     });
// }
//addNewCandidate()

// var electionResults = {
//   Rahul: '10',
//   Arvind: '5',
//   Narendra: '2',
//   Rajnath: '1',
//   Piyush: '4',
//   Smriti: '5'
// }
function getElectionResults() {
  var voteResults = {};
  var candidateNames = Object.keys(candidates);
  console.log(candidateNames+"   ================================== ");
  for (var i = 0; i < candidateNames.length; i++) {
    var name = candidateNames[i];
    var val = contractInstance.totalVotesFor.call(name).toLocaleString();
    voteResults[name] = val;
  }
  console.log(voteResults)
  return voteResults;
}
// electionResults;
// console.log(contractInstance.candidateList(0,{from: web3.eth.accounts[0]}))
// console.log(contractInstance.validCandidate(('Arvind'), {
//   from: web3.eth.accounts[0]}))
// }), function () {
//   //console.log(contractInstance.validCandidate.call(candidateName).toString())
 // console.log(contractInstance.totalVotesFor.call("Rahul").toString());
//   //window.location = "/voteadded/" + id;
// }))
// $(document).ready(function () {
//   candidateNames = Object.keys(candidates);
//   for (var i = 0; i < candidateNames.length; i++) {
//     let name = candidateNames[i];
//     let val = contractInstance.totalVotesFor.call(name).toString()
//     $("#" + candidates[name]).html(val);
//   }
// });
