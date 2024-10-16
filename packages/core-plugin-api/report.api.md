## API Report File for "@backstage/core-plugin-api"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts
/// <reference types="react" />

import { BackstagePlugin as BackstagePlugin_2 } from '@backstage/core-plugin-api';
import { ComponentType } from 'react';
import { Config } from '@backstage/config';
import { IconComponent as IconComponent_2 } from '@backstage/core-plugin-api';
import { IdentityApi as IdentityApi_2 } from '@backstage/core-plugin-api';
import { JsonValue } from '@backstage/types';
import { Observable } from '@backstage/types';
import { PropsWithChildren } from 'react';
import { default as React_2 } from 'react';
import { ReactElement } from 'react';
import { ReactNode } from 'react';

// @public
export type AlertApi = {
  post(alert: AlertMessage): void;
  alert$(): Observable<AlertMessage>;
};

// @public
export const alertApiRef: ApiRef<AlertApi>;

// @public
export type AlertMessage = {
  message: string;
  severity?: 'success' | 'info' | 'warning' | 'error';
  display?: 'permanent' | 'transient';
};

// @public
export type AnalyticsApi = {
  captureEvent(event: AnalyticsEvent): void;
};

// @public
export const analyticsApiRef: ApiRef<AnalyticsApi>;

// @public
export const AnalyticsContext: (options: {
  attributes: Partial<AnalyticsContextValue>;
  children: ReactNode;
}) => React_2.JSX.Element;

// @public
export type AnalyticsContextValue = CommonAnalyticsContext & {
  [param in string]: string | boolean | number | undefined;
};

// @public
export type AnalyticsEvent = {
  action: string;
  subject: string;
  value?: number;
  attributes?: AnalyticsEventAttributes;
  context: AnalyticsContextValue;
};

// @public
export type AnalyticsEventAttributes = {
  [attribute in string]: string | boolean | number;
};

// @public
export type AnalyticsTracker = {
  captureEvent: (
    action: string,
    subject: string,
    options?: {
      value?: number;
      attributes?: AnalyticsEventAttributes;
    },
  ) => void;
};

// @public
export type AnyApiFactory = ApiFactory<
  unknown,
  unknown,
  {
    [key in string]: unknown;
  }
>;

// @public
export type AnyApiRef = ApiRef<unknown>;

// @public
export type AnyExternalRoutes = {
  [name: string]: ExternalRouteRef;
};

// @public @deprecated (undocumented)
export type AnyParams = AnyRouteRefParams;

// @public
export type AnyRouteRefParams =
  | {
      [param in string]: string;
    }
  | undefined;

// @public
export type AnyRoutes = {
  [name: string]: RouteRef | SubRouteRef;
};

// @public
export type ApiFactory<
  Api,
  Impl extends Api,
  Deps extends {
    [name in string]: unknown;
  },
> = {
  api: ApiRef<Api>;
  deps: TypesToApiRefs<Deps>;
  factory(deps: Deps): Impl;
};

// @public
export type ApiHolder = {
  get<T>(api: ApiRef<T>): T | undefined;
};

// @public
export type ApiRef<T> = {
  id: string;
  T: T;
};

// @public
export type ApiRefConfig = {
  id: string;
};

// @public
export type AppComponents = {
  NotFoundErrorPage: ComponentType<PropsWithChildren<{}>>;
  BootErrorPage: ComponentType<BootErrorPageProps>;
  Progress: ComponentType<PropsWithChildren<{}>>;
  Router: ComponentType<
    PropsWithChildren<{
      basename?: string;
    }>
  >;
  ErrorBoundaryFallback: ComponentType<ErrorBoundaryFallbackProps>;
  ThemeProvider?: ComponentType<PropsWithChildren<{}>>;
  SignInPage?: ComponentType<SignInPageProps>;
};

// @public
export type AppContext = {
  getPlugins(): BackstagePlugin_2[];
  getSystemIcon(key: string): IconComponent_2 | undefined;
  getSystemIcons(): Record<string, IconComponent_2>;
  getComponents(): AppComponents;
};

// @public
export type AppTheme = {
  id: string;
  title: string;
  variant: 'light' | 'dark';
  icon?: React.ReactElement;
  Provider(props: { children: ReactNode }): JSX.Element | null;
};

// @public
export type AppThemeApi = {
  getInstalledThemes(): AppTheme[];
  activeThemeId$(): Observable<string | undefined>;
  getActiveThemeId(): string | undefined;
  setActiveThemeId(themeId?: string): void;
};

// @public
export const appThemeApiRef: ApiRef<AppThemeApi>;

// @public
export const atlassianAuthApiRef: ApiRef<
  OAuthApi & ProfileInfoApi & BackstageIdentityApi & SessionApi
>;

// @public
export function attachComponentData<P>(
  component: ComponentType<P>,
  type: string,
  data: unknown,
): void;

// @public
export type AuthProviderInfo = {
  id: string;
  title: string;
  icon: IconComponent;
};

// @public
export type AuthRequestOptions = {
  optional?: boolean;
  instantPopup?: boolean;
};

// @public
export type BackstageIdentityApi = {
  getBackstageIdentity(
    options?: AuthRequestOptions,
  ): Promise<BackstageIdentityResponse | undefined>;
};

// @public
export type BackstageIdentityResponse = {
  token: string;
  expiresAt?: Date;
  identity: BackstageUserIdentity;
};

// @public
export type BackstagePlugin<
  Routes extends AnyRoutes = {},
  ExternalRoutes extends AnyExternalRoutes = {},
  _Ignored extends {} = {},
> = {
  getId(): string;
  getApis(): Iterable<AnyApiFactory>;
  getFeatureFlags(): Iterable<PluginFeatureFlagConfig>;
  provide<T>(extension: Extension<T>): T;
  routes: Routes;
  externalRoutes: ExternalRoutes;
};

// @public
export type BackstageUserIdentity = {
  type: 'user';
  userEntityRef: string;
  ownershipEntityRefs: string[];
};

// @public
export const bitbucketAuthApiRef: ApiRef<
  OAuthApi & ProfileInfoApi & BackstageIdentityApi & SessionApi
>;

// @public
export const bitbucketServerAuthApiRef: ApiRef<
  OAuthApi & ProfileInfoApi & BackstageIdentityApi & SessionApi
>;

// @public
export type BootErrorPageProps = PropsWithChildren<{
  step: 'load-config' | 'load-chunk';
  error: Error;
}>;

// @public
export type CommonAnalyticsContext = {
  pluginId: string;
  routeRef: string;
  extension: string;
};

// @public
export type ComponentLoader<T> =
  | {
      lazy: () => Promise<T>;
    }
  | {
      sync: T;
    };

// @public
export type ConfigApi = Config;

// @public
export const configApiRef: ApiRef<ConfigApi>;

// @public
export function createApiFactory<
  Api,
  Impl extends Api,
  Deps extends {
    [name in string]: unknown;
  },
>(factory: ApiFactory<Api, Impl, Deps>): ApiFactory<Api, Impl, Deps>;

// @public
export function createApiFactory<Api, Impl extends Api>(
  api: ApiRef<Api>,
  instance: Impl,
): ApiFactory<Api, Impl, {}>;

// @public
export function createApiRef<T>(config: ApiRefConfig): ApiRef<T>;

// @public
export function createComponentExtension<
  T extends (props: any) => JSX.Element | null,
>(options: { component: ComponentLoader<T>; name?: string }): Extension<T>;

// @public
export function createExternalRouteRef<
  Params extends {
    [param in ParamKey]: string;
  },
  Optional extends boolean = false,
  ParamKey extends string = never,
>(options: {
  id: string;
  params?: ParamKey[];
  optional?: Optional;
  defaultTarget?: string;
}): ExternalRouteRef<OptionalParams<Params>, Optional>;

// @public
export function createPlugin<
  Routes extends AnyRoutes = {},
  ExternalRoutes extends AnyExternalRoutes = {},
>(
  config: PluginConfig<Routes, ExternalRoutes>,
): BackstagePlugin<Routes, ExternalRoutes>;

// @public
export function createReactExtension<
  T extends (props: any) => JSX.Element | null,
>(options: {
  component: ComponentLoader<T>;
  data?: Record<string, unknown>;
  name?: string;
}): Extension<T>;

// @public
export function createRoutableExtension<
  T extends (props: any) => JSX.Element | null,
>(options: {
  component: () => Promise<T>;
  mountPoint: RouteRef;
  name?: string;
}): Extension<T>;

// @public
export function createRouteRef<
  Params extends {
    [param in ParamKey]: string;
  },
  ParamKey extends string = never,
>(config: {
  id: string;
  params?: ParamKey[];
}): RouteRef<OptionalParams<Params>>;

// @public
export function createSubRouteRef<
  Path extends string,
  ParentParams extends AnyParams = never,
>(config: {
  id: string;
  path: Path;
  parent: RouteRef<ParentParams>;
}): MakeSubRouteRef<PathParams<Path>, ParentParams>;

// @public
export type DiscoveryApi = {
  getBaseUrl(pluginId: string): Promise<string>;
};

// @public
export const discoveryApiRef: ApiRef<DiscoveryApi>;

// @public
export interface ElementCollection {
  findComponentData<T>(query: { key: string }): T[];
  getElements<
    Props extends {
      [name: string]: unknown;
    },
  >(): Array<ReactElement<Props>>;
  selectByComponentData(query: {
    key: string;
    withStrictError?: string;
  }): ElementCollection;
}

// @public
export type ErrorApi = {
  post(error: ErrorApiError, context?: ErrorApiErrorContext): void;
  error$(): Observable<{
    error: ErrorApiError;
    context?: ErrorApiErrorContext;
  }>;
};

// @public
export type ErrorApiError = {
  name: string;
  message: string;
  stack?: string;
};

// @public
export type ErrorApiErrorContext = {
  hidden?: boolean;
};

// @public
export const errorApiRef: ApiRef<ErrorApi>;

// @public
export type ErrorBoundaryFallbackProps = PropsWithChildren<{
  plugin?: BackstagePlugin_2;
  error: Error;
  resetError: () => void;
}>;

// @public
export type Extension<T> = {
  expose(plugin: BackstagePlugin): T;
};

// @public
export type ExternalRouteRef<
  Params extends AnyParams = any,
  Optional extends boolean = any,
> = {
  $$routeRefType: 'external';
  params: ParamKeys<Params>;
  optional?: Optional;
};

// @public
export type FeatureFlag = {
  name: string;
  pluginId: string;
  description?: string;
};

// @public
export interface FeatureFlagsApi {
  getRegisteredFlags(): FeatureFlag[];
  isActive(name: string): boolean;
  registerFlag(flag: FeatureFlag): void;
  save(options: FeatureFlagsSaveOptions): void;
}

// @public
export const featureFlagsApiRef: ApiRef<FeatureFlagsApi>;

// @public
export type FeatureFlagsHooks = {
  register(name: string): void;
};

// @public
export type FeatureFlagsSaveOptions = {
  states: Record<string, FeatureFlagState>;
  merge?: boolean;
};

// @public
export enum FeatureFlagState {
  Active = 1,
  None = 0,
}

// @public
export type FetchApi = {
  fetch: typeof fetch;
};

// @public
export const fetchApiRef: ApiRef<FetchApi>;

// @public
export function getComponentData<T>(
  node: ReactNode,
  type: string,
): T | undefined;

// @public
export const githubAuthApiRef: ApiRef<
  OAuthApi & ProfileInfoApi & BackstageIdentityApi & SessionApi
>;

// @public
export const gitlabAuthApiRef: ApiRef<
  OAuthApi &
    OpenIdConnectApi &
    ProfileInfoApi &
    BackstageIdentityApi &
    SessionApi
>;

// @public
export const googleAuthApiRef: ApiRef<
  OAuthApi &
    OpenIdConnectApi &
    ProfileInfoApi &
    BackstageIdentityApi &
    SessionApi
>;

// @public
export type IconComponent = ComponentType<{
  fontSize?: 'medium' | 'large' | 'small' | 'inherit';
}>;

// @public
export type IdentityApi = {
  getProfileInfo(): Promise<ProfileInfo>;
  getBackstageIdentity(): Promise<BackstageUserIdentity>;
  getCredentials(): Promise<{
    token?: string;
  }>;
  signOut(): Promise<void>;
};

// @public
export const identityApiRef: ApiRef<IdentityApi>;

// @public @deprecated
export type MakeSubRouteRef<
  Params extends {
    [param in string]: string;
  },
  ParentParams extends AnyParams,
> = keyof Params & keyof ParentParams extends never
  ? SubRouteRef<OptionalParams<MergeParams<Params, ParentParams>>>
  : never;

// @public @deprecated
export type MergeParams<
  P1 extends {
    [param in string]: string;
  },
  P2 extends AnyParams,
> = (P1[keyof P1] extends never ? {} : P1) & (P2 extends undefined ? {} : P2);

// @public
export const microsoftAuthApiRef: ApiRef<
  OAuthApi &
    OpenIdConnectApi &
    ProfileInfoApi &
    BackstageIdentityApi &
    SessionApi
>;

// @public
export type OAuthApi = {
  getAccessToken(
    scope?: OAuthScope,
    options?: AuthRequestOptions,
  ): Promise<string>;
};

// @public
export type OAuthRequestApi = {
  createAuthRequester<OAuthResponse>(
    options: OAuthRequesterOptions<OAuthResponse>,
  ): OAuthRequester<OAuthResponse>;
  authRequest$(): Observable<PendingOAuthRequest[]>;
};

// @public
export const oauthRequestApiRef: ApiRef<OAuthRequestApi>;

// @public
export type OAuthRequester<TAuthResponse> = (
  scopes: Set<string>,
) => Promise<TAuthResponse>;

// @public
export type OAuthRequesterOptions<TOAuthResponse> = {
  provider: AuthProviderInfo;
  onAuthRequest(scopes: Set<string>): Promise<TOAuthResponse>;
};

// @public
export type OAuthScope = string | string[];

// @public
export const oktaAuthApiRef: ApiRef<
  OAuthApi &
    OpenIdConnectApi &
    ProfileInfoApi &
    BackstageIdentityApi &
    SessionApi
>;

// @public
export const oneloginAuthApiRef: ApiRef<
  OAuthApi &
    OpenIdConnectApi &
    ProfileInfoApi &
    BackstageIdentityApi &
    SessionApi
>;

// @public
export type OpenIdConnectApi = {
  getIdToken(options?: AuthRequestOptions): Promise<string>;
};

// @public @deprecated
export type OptionalParams<
  Params extends {
    [param in string]: string;
  },
> = Params[keyof Params] extends never ? undefined : Params;

// @public @deprecated
export type ParamKeys<Params extends AnyParams> = [AnyRouteRefParams] extends [
  Params,
]
  ? string[]
  : keyof Params extends never
  ? []
  : Array<keyof Params>;

// @public @deprecated
export type ParamNames<S extends string> =
  S extends `${infer Part}/${infer Rest}`
    ? ParamPart<Part> | ParamNames<Rest>
    : ParamPart<S>;

// @public @deprecated
export type ParamPart<S extends string> = S extends `:${infer Param}`
  ? Param
  : never;

// @public @deprecated
export type PathParams<S extends string> = {
  [name in ParamNames<S>]: string;
};

// @public
export type PendingOAuthRequest = {
  provider: AuthProviderInfo;
  reject(): void;
  trigger(): Promise<void>;
};

// @public
export type PluginConfig<
  Routes extends AnyRoutes,
  ExternalRoutes extends AnyExternalRoutes,
> = {
  id: string;
  apis?: Iterable<AnyApiFactory>;
  routes?: Routes;
  externalRoutes?: ExternalRoutes;
  featureFlags?: PluginFeatureFlagConfig[];
};

// @public
export type PluginFeatureFlagConfig = {
  name: string;
};

// @public
export type ProfileInfo = {
  email?: string;
  displayName?: string;
  picture?: string;
};

// @public
export type ProfileInfoApi = {
  getProfile(options?: AuthRequestOptions): Promise<ProfileInfo | undefined>;
};

// @public
export type RouteFunc<Params extends AnyParams> = (
  ...[params]: Params extends undefined ? readonly [] : readonly [Params]
) => string;

// @public
export type RouteRef<Params extends AnyParams = any> = {
  $$routeRefType: 'absolute';
  params: ParamKeys<Params>;
};

// @public
export type SessionApi = {
  signIn(): Promise<void>;
  signOut(): Promise<void>;
  sessionState$(): Observable<SessionState>;
};

// @public
export enum SessionState {
  SignedIn = 'SignedIn',
  SignedOut = 'SignedOut',
}

// @public
export type SignInPageProps = PropsWithChildren<{
  onSignInSuccess(identityApi: IdentityApi_2): void;
}>;

// @public
export interface StorageApi {
  forBucket(name: string): StorageApi;
  observe$<T extends JsonValue>(
    key: string,
  ): Observable<StorageValueSnapshot<T>>;
  remove(key: string): Promise<void>;
  set<T extends JsonValue>(key: string, data: T): Promise<void>;
  snapshot<T extends JsonValue>(key: string): StorageValueSnapshot<T>;
}

// @public
export const storageApiRef: ApiRef<StorageApi>;

// @public
export type StorageValueSnapshot<TValue extends JsonValue> =
  | {
      key: string;
      presence: 'unknown' | 'absent';
      value?: undefined;
    }
  | {
      key: string;
      presence: 'present';
      value: TValue;
    };

// @public
export type SubRouteRef<Params extends AnyParams = any> = {
  $$routeRefType: 'sub';
  parent: RouteRef;
  path: string;
  params: ParamKeys<Params>;
};

// @public
export type TypesToApiRefs<T> = {
  [key in keyof T]: ApiRef<T[key]>;
};

// @public
export function useAnalytics(): AnalyticsTracker;

// @public
export function useApi<T>(apiRef: ApiRef<T>): T;

// @public
export function useApiHolder(): ApiHolder;

// @public
export const useApp: () => AppContext;

// @public
export function useElementFilter<T>(
  node: ReactNode,
  filterFn: (arg: ElementCollection) => T,
  dependencies?: any[],
): T;

// @public
export function useRouteRef<Optional extends boolean, Params extends AnyParams>(
  routeRef: ExternalRouteRef<Params, Optional>,
): Optional extends true ? RouteFunc<Params> | undefined : RouteFunc<Params>;

// @public
export function useRouteRef<Params extends AnyParams>(
  routeRef: RouteRef<Params> | SubRouteRef<Params>,
): RouteFunc<Params>;

// @public
export function useRouteRefParams<Params extends AnyParams>(
  _routeRef: RouteRef<Params> | SubRouteRef<Params>,
): Params;

// @public
export const vmwareCloudAuthApiRef: ApiRef<
  OAuthApi &
    OpenIdConnectApi &
    ProfileInfoApi &
    BackstageIdentityApi &
    SessionApi
>;

// @public
export function withApis<T extends {}>(
  apis: TypesToApiRefs<T>,
): <TProps extends T>(
  WrappedComponent: React_2.ComponentType<TProps>,
) => {
  (
    props: React_2.PropsWithChildren<Omit<TProps, keyof T>>,
  ): React_2.JSX.Element;
  displayName: string;
};
```