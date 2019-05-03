const MerkleTree = require('merkle_tree');
const ethUtils = require('ethereumjs-utils');
const keccak256 = ethUtils.keccak256;

const merkleTree = new MerkleTree();
let bank = [];
for (var i = 0; i<257; i++) { bank.push(String(Math.random())); }
merkleTree.addLeaves(bank.map((x)=>keccak256(x).toString('hex')));
merkleTree.makeTree();
let mroot = merkleTree.getMerkleRoot();

// get parameters
var i = 13;
var proofArr, target, isValid;
proofArr = merkleTree.getProof(i, true);
isLeft = proofArr[0];
proof = proofArr[1].map((x) => {return ethUtils.bufferToHex(x);});

console.log("# generate proof, isLeft, leave, merkleRoot:\n");
console.dir(proof);
console.log(isLeft);
console.log('0x' + merkleTree.getLeaf(i).toString('hex'));
console.log('0x' + mroot.toString('hex'));

