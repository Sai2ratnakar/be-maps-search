
import "dotenv/config";

// Set up the config object
export const CONFIG = {
  TOMTOM_API_KEY: process.env.TOMTOM_API_KEY as string,
};

// check to see if the TOMTOM_API_KEY is defined
if (!process.env.TOMTOM_API_KEY) {
    throw new Error('TOMTOM_API_KEY is not defined!');
}
  