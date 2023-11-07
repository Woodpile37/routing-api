/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { FunctionFragment, Result } from '@ethersproject/abi'
import { BytesLike } from '@ethersproject/bytes'
import { Listener, Provider } from '@ethersproject/providers'
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  CallOverrides,
  ContractTransaction,
  ethers,
  Overrides,
  PopulatedTransaction,
  Signer,
} from 'ethers'
import { TypedEvent, TypedEventFilter, TypedListener } from './commons'

interface MixedRouteQuoterV1Interface extends ethers.utils.Interface {
  functions: {
    'WETH9()': FunctionFragment
    'factory()': FunctionFragment
    'factoryV2()': FunctionFragment
    'quoteExactInput(bytes,uint256)': FunctionFragment
    'quoteExactInputSingleV2(tuple)': FunctionFragment
    'quoteExactInputSingleV3(tuple)': FunctionFragment
    'uniswapV3SwapCallback(int256,int256,bytes)': FunctionFragment
  }

  encodeFunctionData(functionFragment: 'WETH9', values?: undefined): string
  encodeFunctionData(functionFragment: 'factory', values?: undefined): string
  encodeFunctionData(functionFragment: 'factoryV2', values?: undefined): string
  encodeFunctionData(functionFragment: 'quoteExactInput', values: [BytesLike, BigNumberish]): string
  encodeFunctionData(
    functionFragment: 'quoteExactInputSingleV2',
    values: [{ tokenIn: string; tokenOut: string; amountIn: BigNumberish }]
  ): string
  encodeFunctionData(
    functionFragment: 'quoteExactInputSingleV3',
    values: [
      {
        tokenIn: string
        tokenOut: string
        amountIn: BigNumberish
        fee: BigNumberish
        sqrtPriceLimitX96: BigNumberish
      }
    ]
  ): string
  encodeFunctionData(functionFragment: 'uniswapV3SwapCallback', values: [BigNumberish, BigNumberish, BytesLike]): string

  decodeFunctionResult(functionFragment: 'WETH9', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'factory', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'factoryV2', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'quoteExactInput', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'quoteExactInputSingleV2', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'quoteExactInputSingleV3', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'uniswapV3SwapCallback', data: BytesLike): Result

  events: {}
}

export class MixedRouteQuoterV1 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this

  listeners(eventName?: string): Array<Listener>
  off(eventName: string, listener: Listener): this
  on(eventName: string, listener: Listener): this
  once(eventName: string, listener: Listener): this
  removeListener(eventName: string, listener: Listener): this
  removeAllListeners(eventName?: string): this

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>

  interface: MixedRouteQuoterV1Interface

  functions: {
    WETH9(overrides?: CallOverrides): Promise<[string]>

    factory(overrides?: CallOverrides): Promise<[string]>

    factoryV2(overrides?: CallOverrides): Promise<[string]>

    quoteExactInput(
      path: BytesLike,
      amountIn: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    quoteExactInputSingleV2(
      params: { tokenIn: string; tokenOut: string; amountIn: BigNumberish },
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { amountOut: BigNumber }>

    quoteExactInputSingleV3(
      params: {
        tokenIn: string
        tokenOut: string
        amountIn: BigNumberish
        fee: BigNumberish
        sqrtPriceLimitX96: BigNumberish
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    uniswapV3SwapCallback(
      amount0Delta: BigNumberish,
      amount1Delta: BigNumberish,
      path: BytesLike,
      overrides?: CallOverrides
    ): Promise<[void]>
  }

  WETH9(overrides?: CallOverrides): Promise<string>

  factory(overrides?: CallOverrides): Promise<string>

  factoryV2(overrides?: CallOverrides): Promise<string>

  quoteExactInput(
    path: BytesLike,
    amountIn: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  quoteExactInputSingleV2(
    params: { tokenIn: string; tokenOut: string; amountIn: BigNumberish },
    overrides?: CallOverrides
  ): Promise<BigNumber>

  quoteExactInputSingleV3(
    params: {
      tokenIn: string
      tokenOut: string
      amountIn: BigNumberish
      fee: BigNumberish
      sqrtPriceLimitX96: BigNumberish
    },
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  uniswapV3SwapCallback(
    amount0Delta: BigNumberish,
    amount1Delta: BigNumberish,
    path: BytesLike,
    overrides?: CallOverrides
  ): Promise<void>

  callStatic: {
    WETH9(overrides?: CallOverrides): Promise<string>

    factory(overrides?: CallOverrides): Promise<string>

    factoryV2(overrides?: CallOverrides): Promise<string>

    quoteExactInput(
      path: BytesLike,
      amountIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber[], number[], BigNumber] & {
        amountOut: BigNumber
        v3SqrtPriceX96AfterList: BigNumber[]
        v3InitializedTicksCrossedList: number[]
        v3SwapGasEstimate: BigNumber
      }
    >

    quoteExactInputSingleV2(
      params: { tokenIn: string; tokenOut: string; amountIn: BigNumberish },
      overrides?: CallOverrides
    ): Promise<BigNumber>

    quoteExactInputSingleV3(
      params: {
        tokenIn: string
        tokenOut: string
        amountIn: BigNumberish
        fee: BigNumberish
        sqrtPriceLimitX96: BigNumberish
      },
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, number, BigNumber] & {
        amountOut: BigNumber
        sqrtPriceX96After: BigNumber
        initializedTicksCrossed: number
        gasEstimate: BigNumber
      }
    >

    uniswapV3SwapCallback(
      amount0Delta: BigNumberish,
      amount1Delta: BigNumberish,
      path: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>
  }

  filters: {}

  estimateGas: {
    WETH9(overrides?: CallOverrides): Promise<BigNumber>

    factory(overrides?: CallOverrides): Promise<BigNumber>

    factoryV2(overrides?: CallOverrides): Promise<BigNumber>

    quoteExactInput(
      path: BytesLike,
      amountIn: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    quoteExactInputSingleV2(
      params: { tokenIn: string; tokenOut: string; amountIn: BigNumberish },
      overrides?: CallOverrides
    ): Promise<BigNumber>

    quoteExactInputSingleV3(
      params: {
        tokenIn: string
        tokenOut: string
        amountIn: BigNumberish
        fee: BigNumberish
        sqrtPriceLimitX96: BigNumberish
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    uniswapV3SwapCallback(
      amount0Delta: BigNumberish,
      amount1Delta: BigNumberish,
      path: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>
  }

  populateTransaction: {
    WETH9(overrides?: CallOverrides): Promise<PopulatedTransaction>

    factory(overrides?: CallOverrides): Promise<PopulatedTransaction>

    factoryV2(overrides?: CallOverrides): Promise<PopulatedTransaction>

    quoteExactInput(
      path: BytesLike,
      amountIn: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    quoteExactInputSingleV2(
      params: { tokenIn: string; tokenOut: string; amountIn: BigNumberish },
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    quoteExactInputSingleV3(
      params: {
        tokenIn: string
        tokenOut: string
        amountIn: BigNumberish
        fee: BigNumberish
        sqrtPriceLimitX96: BigNumberish
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    uniswapV3SwapCallback(
      amount0Delta: BigNumberish,
      amount1Delta: BigNumberish,
      path: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>
  }
}
