/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { MicroBlog } from "../MicroBlog";

export class MicroBlog__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<MicroBlog> {
    return super.deploy(overrides || {}) as Promise<MicroBlog>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MicroBlog {
    return super.attach(address) as MicroBlog;
  }
  connect(signer: Signer): MicroBlog__factory {
    return super.connect(signer) as MicroBlog__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MicroBlog {
    return new Contract(address, _abi, signerOrProvider) as MicroBlog;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "author",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "postId",
        type: "string",
      },
    ],
    name: "Dislike",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "author",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "postId",
        type: "string",
      },
    ],
    name: "Like",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "author",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "content",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "replyTo",
        type: "string",
      },
    ],
    name: "Post",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "postId",
        type: "string",
      },
    ],
    name: "dislike",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "postId",
        type: "string",
      },
    ],
    name: "like",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "content",
        type: "string",
      },
      {
        internalType: "string",
        name: "replyTo",
        type: "string",
      },
    ],
    name: "post",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610341806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80630ae1b13d146100465780632edf21681461005b578063e5ee94c31461006e575b600080fd5b610059610054366004610201565b610081565b005b6100596100693660046101c6565b6100c8565b61005961007c3660046101c6565b61010c565b336001600160a01b03167fc2a24b33e52365462e520478af6ac73195f0894f754dfbf7edd62a5879c55df983836040516100bc9291906102c7565b60405180910390a25050565b336001600160a01b03167f55c96d5b696a1a69fe31bf038177f7d04443e1c9fd5938432c3e5daa56af88c48260405161010191906102ad565b60405180910390a250565b336001600160a01b03167f5d7039dfc2af95019aa5c618b7de8a6217e0e93d94e44952b480d0d30b8001ac8260405161010191906102ad565b600082601f830112610155578081fd5b813567ffffffffffffffff80821115610170576101706102f5565b604051601f8301601f191681016020018281118282101715610194576101946102f5565b6040528281528483016020018610156101ab578384fd5b82602086016020830137918201602001929092529392505050565b6000602082840312156101d7578081fd5b813567ffffffffffffffff8111156101ed578182fd5b6101f984828501610145565b949350505050565b60008060408385031215610213578081fd5b823567ffffffffffffffff8082111561022a578283fd5b61023686838701610145565b9350602085013591508082111561024b578283fd5b5061025885828601610145565b9150509250929050565b60008151808452815b818110156102875760208185018101518683018201520161026b565b818111156102985782602083870101525b50601f01601f19169290920160200192915050565b6000602082526102c06020830184610262565b9392505050565b6000604082526102da6040830185610262565b82810360208401526102ec8185610262565b95945050505050565b634e487b7160e01b600052604160045260246000fdfea2646970667358221220cc5b3be6ab52d20410fd7f563948c015950b6d2dfc27a80fab0695456425b68264736f6c63430008000033";