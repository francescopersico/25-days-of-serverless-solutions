/**
 * A function to spin the dreidel and return a random face
 */
import { DREIDEL_FACES } from "./consts";
import { getHandler } from "./handler";
import { RandomNumberGenerator } from "./types";

/**
 * Random number generator based on `Math.random`
 */
const randomNumberGenerator: RandomNumberGenerator = (
  min: number,
  max: number
) => Math.floor(Math.random() * (max - min)) + min;

// Create the function handler
const handler = getHandler(DREIDEL_FACES, randomNumberGenerator);

export default handler;
