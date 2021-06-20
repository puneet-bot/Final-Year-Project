var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

var abi = JSON.parse('[{"constant":true,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"totalVotesFor","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"validCandidate","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"votesReceived","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"candidateList","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"voteForCandidate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"candidateNames","type":"bytes32[]"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]');


var VotingContract = web3.eth.contract(abi);
// In your nodejs console, execute deployedContract.address to get the address at which the contract is deployed and change the line below to use your deployed address
var contractInstance = VotingContract.at('0x5790b9f0032054888c37d4f1e1fbed3d7653106f'); //change contract address here

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
  'P': "candidate-16",
  'Q': "candidate-17",
  'R': "candidate-18",
  'S': "candidate-19",
  'T': "candidate-20",
  'U': "candidate-21",
}

function voteForCandidate(id) {
  var candidateName = document.getElementById("result").value;
  console.log("vote candidate =>",candidateName)
  var voteflag = confirm("Confirm Vote");

  if (voteflag == true) {
    contractInstance.voteForCandidate(candidateName, {
      from: web3.eth.accounts[0]
    }, function () {
      console.log(contractInstance.totalVotesFor.call(candidateName).toString());
      window.location = "/voteadded/" + id;
    });
  }
}


function getElectionResults() {
  var voteResults = {};
  var candidateNames = Object.keys(candidates);
  for (var i = 0; i < candidateNames.length; i++) {
    var name = candidateNames[i];
    var val = contractInstance.totalVotesFor.call(name).toLocaleString();
    voteResults[name] = val;
  }
  return voteResults;
}
