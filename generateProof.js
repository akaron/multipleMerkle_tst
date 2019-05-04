'use strict'
const MerkleTree = require('merkle_tree');
const ethUtils = require('ethereumjs-utils');
const keccak256 = ethUtils.keccak256;

const merkleTree = new MerkleTree();
let bank = [];
var numLeaves = 257;
for (var i = 0; i<numLeaves; i++) { bank.push(String(Math.random())); }
merkleTree.addLeaves(bank.map((x)=>keccak256(x).toString('hex')));
merkleTree.makeTree();
let mroot = merkleTree.getMerkleRoot();

// get parameters
var i = Math.floor(numLeaves*Math.random());
let proofArr = merkleTree.getProof(i, true);
let isLeft = proofArr[0];
let proof = proofArr[1].map((x) => {return ethUtils.bufferToHex(x);});

console.log("# generate proof, isLeft, leave, merkleRoot:\n");
console.log(JSON.stringify(proof));
console.log(isLeft);
console.log('0x' + merkleTree.getLeaf(i).toString('hex'));
console.log('0x' + mroot.toString('hex'));

