This is just a test in how to validate multiple Merkle Leaves in one call.
Note that one still need to submit data (`proof`, `isLeft`, `targetLeaf`, `merkleRoot`) first.

To test in remix
1. open http://remix.ethereum.org/#optimize=false&version=soljson-v0.5.2+commit.1df8f40c.js
2. paste the `multipleMerkle.sol` into it
3. deploy in remix
4. test it! basically call `addProof` to add one set of data, and call it multiple times to add several sets.
   Once finished, call `validateAllProofs`, it will return `true` only if **ALL** proofs are valid.

Note: to generate the parameters required for `addProof` and `merkleTreeValidator`, one can do the following
* in command line run `npm install`
* modify `generateProof.js` (such as the leaves in the tree)
* run `node generateProof.js` to get the parameters for a proof

## Results

* calling `addProof()`...
    - with 12 proofs (1025-2048 leaves) require gas ~438,000
    - with 9 proofs (257-512 leaves) require gas ~371,000
    - with 6 proofs (33-64 leaves) require gas ~304,000
    - with 3 proofs (5-8 leaves) require gas ~237,000
    - note that the cost is much lower for
        - second call of `addProof()` 
        - if reuse the mapping by calling the `resetData()`
