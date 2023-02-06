import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerValidatedPhotos = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ValidatedPhotos, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly sender: string;
  readonly receiver: string;
  readonly link: string;
  readonly title?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyValidatedPhotos = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ValidatedPhotos, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly sender: string;
  readonly receiver: string;
  readonly link: string;
  readonly title?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ValidatedPhotos = LazyLoading extends LazyLoadingDisabled ? EagerValidatedPhotos : LazyValidatedPhotos

export declare const ValidatedPhotos: (new (init: ModelInit<ValidatedPhotos>) => ValidatedPhotos) & {
  copyOf(source: ValidatedPhotos, mutator: (draft: MutableModel<ValidatedPhotos>) => MutableModel<ValidatedPhotos> | void): ValidatedPhotos;
}

type EagerIncomingPhotos = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<IncomingPhotos, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly sender: string;
  readonly receiver: string;
  readonly link: string;
  readonly title?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyIncomingPhotos = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<IncomingPhotos, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly sender: string;
  readonly receiver: string;
  readonly link: string;
  readonly title?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type IncomingPhotos = LazyLoading extends LazyLoadingDisabled ? EagerIncomingPhotos : LazyIncomingPhotos

export declare const IncomingPhotos: (new (init: ModelInit<IncomingPhotos>) => IncomingPhotos) & {
  copyOf(source: IncomingPhotos, mutator: (draft: MutableModel<IncomingPhotos>) => MutableModel<IncomingPhotos> | void): IncomingPhotos;
}

type EagerFriends = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Friends, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly one: string;
  readonly two: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyFriends = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Friends, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly one: string;
  readonly two: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Friends = LazyLoading extends LazyLoadingDisabled ? EagerFriends : LazyFriends

export declare const Friends: (new (init: ModelInit<Friends>) => Friends) & {
  copyOf(source: Friends, mutator: (draft: MutableModel<Friends>) => MutableModel<Friends> | void): Friends;
}

type EagerInvitation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Invitation, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly inviter: string;
  readonly invited: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyInvitation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Invitation, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly inviter: string;
  readonly invited: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Invitation = LazyLoading extends LazyLoadingDisabled ? EagerInvitation : LazyInvitation

export declare const Invitation: (new (init: ModelInit<Invitation>) => Invitation) & {
  copyOf(source: Invitation, mutator: (draft: MutableModel<Invitation>) => MutableModel<Invitation> | void): Invitation;
}

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