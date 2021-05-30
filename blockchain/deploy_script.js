var Web3 = require('web3')
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
var fs = require('fs')
web3.eth.accounts

code = fs.readFileSync('C://Users//PUNEET ARORA//Downloads//5_6147420621006439197//blockchain//voting.sol').toString()
solc = require('solc')
compiledCode = solc.compile(code)
abiDefinition = JSON.parse(compiledCode.contracts[':Voting'].interface)
VotingContract = web3.eth.contract(abiDefinition)
byteCode = compiledCode.contracts[':Voting'].bytecode
deployedContract = VotingContract.new(['A', 'B', 'C', 'D', 'E', 'F','G','H','I','J','K','L','M','N','O'], {
    data: byteCode,
    from: web3.eth.accounts[0],
    gas: 4700000
});
deployedContract.address
console.log(deployedContract)
JSON.stringify(abiDefinition)
contractInstance = VotingContract.at(deployedContract.address)