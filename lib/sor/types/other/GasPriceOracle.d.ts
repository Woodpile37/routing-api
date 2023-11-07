/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { EventFragment, FunctionFragment, Result } from '@ethersproject/abi'
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

interface GasPriceOracleInterface extends ethers.utils.Interface {
  functions: {
    'decimals()': FunctionFragment
    'gasPrice()': FunctionFragment
    'getL1Fee(bytes)': FunctionFragment
    'getL1GasUsed(bytes)': FunctionFragment
    'l1BaseFee()': FunctionFragment
    'overhead()': FunctionFragment
    'owner()': FunctionFragment
    'renounceOwnership()': FunctionFragment
    'scalar()': FunctionFragment
    'setDecimals(uint256)': FunctionFragment
    'setGasPrice(uint256)': FunctionFragment
    'setL1BaseFee(uint256)': FunctionFragment
    'setOverhead(uint256)': FunctionFragment
    'setScalar(uint256)': FunctionFragment
    'transferOwnership(address)': FunctionFragment
  }

  encodeFunctionData(functionFragment: 'decimals', values?: undefined): string
  encodeFunctionData(functionFragment: 'gasPrice', values?: undefined): string
  encodeFunctionData(functionFragment: 'getL1Fee', values: [BytesLike]): string
  encodeFunctionData(functionFragment: 'getL1GasUsed', values: [BytesLike]): string
  encodeFunctionData(functionFragment: 'l1BaseFee', values?: undefined): string
  encodeFunctionData(functionFragment: 'overhead', values?: undefined): string
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string
  encodeFunctionData(functionFragment: 'renounceOwnership', values?: undefined): string
  encodeFunctionData(functionFragment: 'scalar', values?: undefined): string
  encodeFunctionData(functionFragment: 'setDecimals', values: [BigNumberish]): string
  encodeFunctionData(functionFragment: 'setGasPrice', values: [BigNumberish]): string
  encodeFunctionData(functionFragment: 'setL1BaseFee', values: [BigNumberish]): string
  encodeFunctionData(functionFragment: 'setOverhead', values: [BigNumberish]): string
  encodeFunctionData(functionFragment: 'setScalar', values: [BigNumberish]): string
  encodeFunctionData(functionFragment: 'transferOwnership', values: [string]): string

  decodeFunctionResult(functionFragment: 'decimals', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'gasPrice', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getL1Fee', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getL1GasUsed', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'l1BaseFee', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'overhead', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'renounceOwnership', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'scalar', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'setDecimals', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'setGasPrice', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'setL1BaseFee', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'setOverhead', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'setScalar', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'transferOwnership', data: BytesLike): Result

  events: {
    'DecimalsUpdated(uint256)': EventFragment
    'GasPriceUpdated(uint256)': EventFragment
    'L1BaseFeeUpdated(uint256)': EventFragment
    'OverheadUpdated(uint256)': EventFragment
    'OwnershipTransferred(address,address)': EventFragment
    'ScalarUpdated(uint256)': EventFragment
  }

  getEvent(nameOrSignatureOrTopic: 'DecimalsUpdated'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'GasPriceUpdated'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'L1BaseFeeUpdated'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'OverheadUpdated'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'OwnershipTransferred'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'ScalarUpdated'): EventFragment
}

export class GasPriceOracle extends BaseContract {
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

  interface: GasPriceOracleInterface

  functions: {
    decimals(overrides?: CallOverrides): Promise<[BigNumber]>

    gasPrice(overrides?: CallOverrides): Promise<[BigNumber]>

    getL1Fee(_data: BytesLike, overrides?: CallOverrides): Promise<[BigNumber]>

    getL1GasUsed(_data: BytesLike, overrides?: CallOverrides): Promise<[BigNumber]>

    l1BaseFee(overrides?: CallOverrides): Promise<[BigNumber]>

    overhead(overrides?: CallOverrides): Promise<[BigNumber]>

    owner(overrides?: CallOverrides): Promise<[string]>

    renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>

    scalar(overrides?: CallOverrides): Promise<[BigNumber]>

    setDecimals(
      _decimals: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    setGasPrice(
      _gasPrice: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    setL1BaseFee(
      _baseFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    setOverhead(
      _overhead: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    setScalar(
      _scalar: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>
  }

  decimals(overrides?: CallOverrides): Promise<BigNumber>

  gasPrice(overrides?: CallOverrides): Promise<BigNumber>

  getL1Fee(_data: BytesLike, overrides?: CallOverrides): Promise<BigNumber>

  getL1GasUsed(_data: BytesLike, overrides?: CallOverrides): Promise<BigNumber>

  l1BaseFee(overrides?: CallOverrides): Promise<BigNumber>

  overhead(overrides?: CallOverrides): Promise<BigNumber>

  owner(overrides?: CallOverrides): Promise<string>

  renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>

  scalar(overrides?: CallOverrides): Promise<BigNumber>

  setDecimals(
    _decimals: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  setGasPrice(
    _gasPrice: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  setL1BaseFee(
    _baseFee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  setOverhead(
    _overhead: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  setScalar(
    _scalar: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  callStatic: {
    decimals(overrides?: CallOverrides): Promise<BigNumber>

    gasPrice(overrides?: CallOverrides): Promise<BigNumber>

    getL1Fee(_data: BytesLike, overrides?: CallOverrides): Promise<BigNumber>

    getL1GasUsed(_data: BytesLike, overrides?: CallOverrides): Promise<BigNumber>

    l1BaseFee(overrides?: CallOverrides): Promise<BigNumber>

    overhead(overrides?: CallOverrides): Promise<BigNumber>

    owner(overrides?: CallOverrides): Promise<string>

    renounceOwnership(overrides?: CallOverrides): Promise<void>

    scalar(overrides?: CallOverrides): Promise<BigNumber>

    setDecimals(_decimals: BigNumberish, overrides?: CallOverrides): Promise<void>

    setGasPrice(_gasPrice: BigNumberish, overrides?: CallOverrides): Promise<void>

    setL1BaseFee(_baseFee: BigNumberish, overrides?: CallOverrides): Promise<void>

    setOverhead(_overhead: BigNumberish, overrides?: CallOverrides): Promise<void>

    setScalar(_scalar: BigNumberish, overrides?: CallOverrides): Promise<void>

    transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>
  }

  filters: {
    DecimalsUpdated(undefined?: null): TypedEventFilter<[BigNumber], { arg0: BigNumber }>

    GasPriceUpdated(undefined?: null): TypedEventFilter<[BigNumber], { arg0: BigNumber }>

    L1BaseFeeUpdated(undefined?: null): TypedEventFilter<[BigNumber], { arg0: BigNumber }>

    OverheadUpdated(undefined?: null): TypedEventFilter<[BigNumber], { arg0: BigNumber }>

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<[string, string], { previousOwner: string; newOwner: string }>

    ScalarUpdated(undefined?: null): TypedEventFilter<[BigNumber], { arg0: BigNumber }>
  }

  estimateGas: {
    decimals(overrides?: CallOverrides): Promise<BigNumber>

    gasPrice(overrides?: CallOverrides): Promise<BigNumber>

    getL1Fee(_data: BytesLike, overrides?: CallOverrides): Promise<BigNumber>

    getL1GasUsed(_data: BytesLike, overrides?: CallOverrides): Promise<BigNumber>

    l1BaseFee(overrides?: CallOverrides): Promise<BigNumber>

    overhead(overrides?: CallOverrides): Promise<BigNumber>

    owner(overrides?: CallOverrides): Promise<BigNumber>

    renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>

    scalar(overrides?: CallOverrides): Promise<BigNumber>

    setDecimals(
      _decimals: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    setGasPrice(
      _gasPrice: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    setL1BaseFee(
      _baseFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    setOverhead(
      _overhead: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    setScalar(_scalar: BigNumberish, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>

    transferOwnership(newOwner: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>
  }

  populateTransaction: {
    decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>

    gasPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>

    getL1Fee(_data: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>

    getL1GasUsed(_data: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>

    l1BaseFee(overrides?: CallOverrides): Promise<PopulatedTransaction>

    overhead(overrides?: CallOverrides): Promise<PopulatedTransaction>

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>

    renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>

    scalar(overrides?: CallOverrides): Promise<PopulatedTransaction>

    setDecimals(
      _decimals: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    setGasPrice(
      _gasPrice: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    setL1BaseFee(
      _baseFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    setOverhead(
      _overhead: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    setScalar(
      _scalar: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>
  }
}