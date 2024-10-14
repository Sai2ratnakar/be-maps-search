/** Australian addresses information */
export type AutoCompleteDetailsResponse = {
    placeId: string;
    streetNumber: string;
    countryCode: string;
    country: string;
    freeformAddress: string;
    municipality: string;
}

/**https://developer.tomtom.com/search-api/documentation/search-service/fuzzy-search
 Response from the fuzzy search API */
export type FuzzySearchResponse = {
  summary: Summary;
  results: Result[];
}

export type Result = {
  type: string;
  id: string;
  score: number;
  dist: number;
  info: string;
  entityType: string;
  address: Address;
}

export type Address = {
  streetNumber: string;
  streetName: string;
  municipalitySubdivision: string;
  municipality: string;
  countrySecondarySubdivision: string;
  countryTertiarySubdivision: string;
  countrySubdivision: string;
  postalCode: string;
  extendedPostalCode: string;
  countryCode: string;
  country: string;
  countryCodeISO3: string;
  freeformAddress: string;
  countrySubdivisionName: string;
  localName: string;
}

export type Summary = {
  query: string;
  queryType: string;
  queryTime: number;
  numResults: number;
  offset: number;
  totalResults: number;
  fuzzyLevel: number;
}