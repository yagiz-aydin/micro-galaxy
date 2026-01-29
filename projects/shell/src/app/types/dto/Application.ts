
// microsoft graph application dto
export interface MicrosoftGraphResponse {
  "@odata.context": string;
  value: Application[];
}

export interface Application {
  id: string;
  deletedDateTime: string | null;
  appId: string;
  applicationTemplateId: string | null;
  disabledByMicrosoftStatus: string | null;
  createdDateTime: string;
  displayName: string;
  description: string | null;
  groupMembershipClaims: string | null;
  identifierUris: string[];
  isDeviceOnlyAuthSupported: boolean | null;
  isFallbackPublicClient: boolean;
  nativeAuthenticationApisEnabled: boolean | null;
  notes: string | null;
  publisherDomain: string;
  serviceManagementReference: string | null;
  signInAudience: string;
  tags: string[];
  tokenEncryptionKeyId: string | null;
  uniqueName: string | null;
  samlMetadataUrl: string | null;
  defaultRedirectUri: string | null;
  certification: any | null; // Replace 'any' if specific certification structure is known
  optionalClaims: any | null;
  requestSignatureVerification: any | null;
  addIns: any[];
  api: ApiSettings;
  appRoles: any[];
  info: ApplicationInfo;
  keyCredentials: KeyCredential[];
  parentalControlSettings: ParentalControlSettings;
  passwordCredentials: PasswordCredential[];
  publicClient: PublicClient;
  requiredResourceAccess: RequiredResourceAccess[];
  verifiedPublisher: VerifiedPublisher;
  web: WebSettings;
  servicePrincipalLockConfiguration: ServicePrincipalLockConfiguration;
  spa: SpaSettings;
}

// --- Nested Helper Interfaces ---

interface ApiSettings {
  acceptMappedClaims: boolean | null;
  knownClientApplications: string[];
  requestedAccessTokenVersion: number | null;
  oauth2PermissionScopes: OAuth2PermissionScope[];
  preAuthorizedApplications: any[];
}

interface OAuth2PermissionScope {
  adminConsentDescription: string;
  adminConsentDisplayName: string;
  id: string;
  isEnabled: boolean;
  type: string;
  userConsentDescription: string | null;
  userConsentDisplayName: string | null;
  value: string;
}

interface ApplicationInfo {
  logoUrl: string | null;
  marketingUrl: string | null;
  privacyStatementUrl: string | null;
  supportUrl: string | null;
  termsOfServiceUrl: string | null;
}

interface KeyCredential {
  customKeyIdentifier: string;
  displayName: string;
  endDateTime: string;
  key: string | null;
  keyId: string;
  startDateTime: string;
  type: string;
  usage: string;
}

interface PasswordCredential {
  customKeyIdentifier: string | null;
  displayName: string;
  endDateTime: string;
  hint: string;
  keyId: string;
  secretText: string | null;
  startDateTime: string;
}

interface RequiredResourceAccess {
  resourceAppId: string;
  resourceAccess: ResourceAccess[];
}

interface ResourceAccess {
  id: string;
  type: string;
}

interface WebSettings {
  homePageUrl: string;
  logoutUrl: string | null;
  redirectUris: string[];
  implicitGrantSettings: {
    enableAccessTokenIssuance: boolean;
    enableIdTokenIssuance: boolean;
  };
  redirectUriSettings: Array<{
    uri: string;
    index: number | null;
  }>;
}

interface ServicePrincipalLockConfiguration {
  isEnabled: boolean;
  allProperties: boolean;
  credentialsWithUsageVerify: boolean;
  credentialsWithUsageSign: boolean;
  identifierUris: boolean;
  tokenEncryptionKeyId: boolean;
}

interface ParentalControlSettings {
  countriesBlockedForMinors: string[];
  legalAgeGroupRule: string;
}

interface PublicClient {
  redirectUris: string[];
}

interface SpaSettings {
  redirectUris: string[];
}

interface VerifiedPublisher {
  displayName: string | null;
  verifiedPublisherId: string | null;
  addedDateTime: string | null;
}