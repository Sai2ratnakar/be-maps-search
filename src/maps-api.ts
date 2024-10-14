import axios from 'axios'
import { FuzzySearchResponse } from "./types";

// https://developer.tomtom.com/search-api/documentation/search-service/fuzzy-search
/**
 * Call the fuzzy search API to complete an incomplete place or address
 * @param key The TomTom API Key
 * @param address The incomplete address to search for
 * @param options Options for the search
 * @returns A list of places which match the search address
 * @link https://developer.tomtom.com/search-api/documentation/search-service/fuzzy-search
 */
export async function getPlaceAutocomplete(
    key: string,
    address: string,
    countrySet: string,
  ): Promise<FuzzySearchResponse["results"]> {
    const autocomplete = await axios.get<FuzzySearchResponse>(
      `https://api.tomtom.com/search/2/search/${address}.json'`,
      {
        params: {
          key,
          limit: 100,
          countrySet: countrySet,
        },
      },
    );
  
    return autocomplete.data.results;
  }
