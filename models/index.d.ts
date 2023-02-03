import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";



type EagerUser = {
  readonly id: string;
  readonly email: string;
  readonly family_name: string;
  readonly given_name: string;
  readonly sub: string;
  readonly username: string;
}

type LazyUser = {
  readonly id: string;
  readonly email: string;
  readonly family_name: string;
  readonly given_name: string;
  readonly sub: string;
  readonly username: string;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User)

type EagerMembers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Members, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly email: string;
  readonly family_name: string;
  readonly given_name: string;
  readonly sub: string;
  readonly username: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMembers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Members, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly email: string;
  readonly family_name: string;
  readonly given_name: string;
  readonly sub: string;
  readonly username: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Members = LazyLoading extends LazyLoadingDisabled ? EagerMembers : LazyMembers

export declare const Members: (new (init: ModelInit<Members>) => Members) & {
  copyOf(source: Members, mutator: (draft: MutableModel<Members>) => MutableModel<Members> | void): Members;
}

type EagerUsers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Users, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly user_list?: (User | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUsers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Users, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly user_list?: (User | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Users = LazyLoading extends LazyLoadingDisabled ? EagerUsers : LazyUsers

export declare const Users: (new (init: ModelInit<Users>) => Users) & {
  copyOf(source: Users, mutator: (draft: MutableModel<Users>) => MutableModel<Users> | void): Users;
}