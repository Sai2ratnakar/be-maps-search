import { getPlaceAutocomplete } from './maps-api'
import { AutoCompleteDetailsResponse } from "./types";
import { CONFIG } from "./config";

/* In future to be moved have to be in ISO 3166-1 alpha-2 format
  * For now, we are using AU for Australia
  * https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
*/ 
const countrySet = "AU"; 

/**
 * Partial address input and return full address suggestions along with the address broken 
 * into its individual components using the TomTom API.
 * @param address The incomplete address to search for
 * @returns An array of address suggestions
 */
export async function getAutoCompleteDetailsResponse(
    address: string,
  ): Promise<AutoCompleteDetailsResponse[]> {
    const apiKey = CONFIG.TOMTOM_API_KEY;
    // get autocomplete results
    const autocompleteResponse = await getPlaceAutocomplete(apiKey, address, countrySet);


    // map over results and return only the details that are needed.
    return autocompleteResponse.map<AutoCompleteDetailsResponse>((result) => ({
      placeId: result.id,
      streetNumber: result.address.streetNumber,
      countryCode: result.address.countryCode as typeof countrySet,
      country: result.address.country,
      freeformAddress: result.address.freeformAddress,
      municipality: result.address.municipality,
    }));
  }
  