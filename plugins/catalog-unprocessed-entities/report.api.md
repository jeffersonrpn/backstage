## API Report File for "@backstage/plugin-catalog-unprocessed-entities"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts
/// <reference types="react" />

import { ApiRef } from '@backstage/core-plugin-api';
import { BackstagePlugin } from '@backstage/core-plugin-api';
import { Entity } from '@backstage/catalog-model';
import { JSX as JSX_2 } from 'react';
import { default as React_2 } from 'react';
import { RouteRef } from '@backstage/core-plugin-api';

// @public
export interface CatalogUnprocessedEntitiesApi {
  delete(entityId: string): Promise<void>;
  failed(): Promise<CatalogUnprocessedEntitiesApiResponse>;
  pending(): Promise<CatalogUnprocessedEntitiesApiResponse>;
}

// @public
export const catalogUnprocessedEntitiesApiRef: ApiRef<CatalogUnprocessedEntitiesApi>;

// @public
export type CatalogUnprocessedEntitiesApiResponse = {
  entities: UnprocessedEntity[];
};

// @public
export const CatalogUnprocessedEntitiesPage: () => JSX_2.Element;

// @public
export const catalogUnprocessedEntitiesPlugin: BackstagePlugin<
  {
    root: RouteRef<undefined>;
  },
  {}
>;

// @public (undocumented)
export const UnprocessedEntitiesContent: () => React_2.JSX.Element;

// @public
export type UnprocessedEntity = {
  entity_id: string;
  entity_ref: string;
  unprocessed_entity: Entity;
  unprocessed_hash?: string;
  processed_entity?: Entity;
  result_hash?: string;
  cache?: UnprocessedEntityCache;
  next_update_at: string | Date;
  last_discovery_at: string | Date;
  errors?: UnprocessedEntityError[];
  location_key?: string;
};

// @public
export type UnprocessedEntityCache = {
  ttl: number;
  cache: object;
};

// @public
export type UnprocessedEntityError = {
  name: string;
  message: string;
  cause: {
    name: string;
    message: string;
    stack: string;
  };
};

// (No @packageDocumentation comment for this package)
```