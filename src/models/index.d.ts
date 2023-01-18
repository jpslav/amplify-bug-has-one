import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem } from "@aws-amplify/datastore";





type EagerCar = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Car, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly engine?: Engine | null;
  readonly trunk?: Trunk | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly carEngineId?: string | null;
  readonly carTrunkId?: string | null;
}

type LazyCar = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Car, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly engine: AsyncItem<Engine | undefined>;
  readonly trunk: AsyncItem<Trunk | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly carEngineId?: string | null;
  readonly carTrunkId?: string | null;
}

export declare type Car = LazyLoading extends LazyLoadingDisabled ? EagerCar : LazyCar

export declare const Car: (new (init: ModelInit<Car>) => Car) & {
  copyOf(source: Car, mutator: (draft: MutableModel<Car>) => MutableModel<Car> | void): Car;
}

type EagerEngine = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Engine, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly car?: Car | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly engineCarId?: string | null;
}

type LazyEngine = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Engine, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly car: AsyncItem<Car | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly engineCarId?: string | null;
}

export declare type Engine = LazyLoading extends LazyLoadingDisabled ? EagerEngine : LazyEngine

export declare const Engine: (new (init: ModelInit<Engine>) => Engine) & {
  copyOf(source: Engine, mutator: (draft: MutableModel<Engine>) => MutableModel<Engine> | void): Engine;
}

type EagerTrunk = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Trunk, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly car?: Car | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly trunkCarId?: string | null;
}

type LazyTrunk = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Trunk, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly car: AsyncItem<Car | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly trunkCarId?: string | null;
}

export declare type Trunk = LazyLoading extends LazyLoadingDisabled ? EagerTrunk : LazyTrunk

export declare const Trunk: (new (init: ModelInit<Trunk>) => Trunk) & {
  copyOf(source: Trunk, mutator: (draft: MutableModel<Trunk>) => MutableModel<Trunk> | void): Trunk;
}