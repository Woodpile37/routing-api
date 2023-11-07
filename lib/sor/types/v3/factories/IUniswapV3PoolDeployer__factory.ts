/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Provider } from '@ethersproject/providers'
import { Contract, Signer, utils } from 'ethers'
import type { IUniswapV3PoolDeployer, IUniswapV3PoolDeployerInterface } from '../IUniswapV3PoolDeployer'

const _abi = [
  {
    inputs: [],
    name: 'parameters',
    outputs: [
      {
        internalType: 'address',
        name: 'factory',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'token0',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'token1',
        type: 'address',
      },
      {
        internalType: 'uint24',
        name: 'fee',
        type: 'uint24',
      },
      {
        internalType: 'int24',
        name: 'tickSpacing',
        type: 'int24',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
]

export class IUniswapV3PoolDeployer__factory {
  static readonly abi = _abi
  static createInterface(): IUniswapV3PoolDeployerInterface {
    return new utils.Interface(_abi) as IUniswapV3PoolDeployerInterface
  }
  static connect(address: string, signerOrProvider: Signer | Provider): IUniswapV3PoolDeployer {
    return new Contract(address, _abi, signerOrProvider) as IUniswapV3PoolDeployer
  }
}
