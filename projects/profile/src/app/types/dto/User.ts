// microsoft graph user dto
export interface MicrosoftGraphUserDto {
  '@odata.context': string;
  id: string;
  displayName: string;
  givenName: string;
  surname: string;
  jobTitle: string | null;
  officeLocation: string | null;
  preferredLanguage: string | null;
  userPrincipalName: string;
  businessPhones: string[];
  mail: string | null;
  mobilePhone: string | null;
}