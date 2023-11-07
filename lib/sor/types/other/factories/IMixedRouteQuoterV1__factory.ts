/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Provider } from '@ethersproject/providers'
import { Contract, Signer, utils } from 'ethers'
import type { IMixedRouteQuoterV1, IMixedRouteQuoterV1Interface } from '../IMixedRouteQuoterV1'

const _abi = [
  {
    inputs: [
      {
        internalType: 'bytes',
        name: 'path',
        type: 'bytes',
      },
      {
        internalType: 'uint256',
        name: 'amountIn',
        type: 'uint256',
      },
    ],
    name: 'quoteExactInput',
    outputs: [
      {
        internalType: 'uint256',
        name: 'amountOut',
        type: 'uint256',
      },
      {
        internalType: 'uint160[]',
        name: 'v3SqrtPriceX96AfterList',
        type: 'uint160[]',
      },
      {
        internalType: 'uint32[]',
        name: 'v3InitializedTicksCrossedList',
        type: 'uint32[]',
      },
      {
        internalType: 'uint256',
        name: 'v3SwapGasEstimate',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'tokenIn',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'tokenOut',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'amountIn',
            type: 'uint256',
          },
        ],
        internalType: 'struct IMixedRouteQuoterV1.QuoteExactInputSingleV2Params',
        name: 'params',
        type: 'tuple',
      },
    ],
    name: 'quoteExactInputSingleV2',
    outputs: [
      {
        internalType: 'uint256',
        name: 'amountOut',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'tokenIn',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'tokenOut',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'amountIn',
            type: 'uint256',
          },
          {
            internalType: 'uint24',
            name: 'fee',
            type: 'uint24',
          },
          {
            internalType: 'uint160',
            name: 'sqrtPriceLimitX96',
            type: 'uint160',
          },
        ],
        internalType: 'struct IMixedRouteQuoterV1.QuoteExactInputSingleV3Params',
        name: 'params',
        type: 'tuple',
      },
    ],
    name: 'quoteExactInputSingleV3',
    outputs: [
      {
        internalType: 'uint256',
        name: 'amountOut',
        type: 'uint256',
      },
      {
        internalType: 'uint160',
        name: 'sqrtPriceX96After',
        type: 'uint160',
      },
      {
        internalType: 'uint32',
        name: 'initializedTicksCrossed',
        type: 'uint32',
      },
      {
        internalType: 'uint256',
        name: 'gasEstimate',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
]

export class IMixedRouteQuoterV1__factory {
  static readonly abi = _abi
  static createInterface(): IMixedRouteQuoterV1Interface {
    return new utils.Interface(_abi) as IMixedRouteQuoterV1Interface
  }
  static connect(address: string, signerOrProvider: Signer | Provider): IMixedRouteQuoterV1 {
    return new Contract(address, _abi, signerOrProvider) as IMixedRouteQuoterV1
  }
}
