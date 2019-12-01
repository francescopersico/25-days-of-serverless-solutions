/**
 * SpinDreidel function handler
 */
import { Context, HttpRequest } from "@azure/functions";

import { DreidelFace, FunctionResponse, RandomNumberGenerator } from "./types";

export const getHandler = (
  dreidelFaces: ReadonlyArray<DreidelFace>,
  randomNumberGenerator: RandomNumberGenerator
) =>
  async function(_: Context, __: HttpRequest): Promise<FunctionResponse> {
    // Generate a random number
    const randomNumber = randomNumberGenerator(0, dreidelFaces.length);

    // Get a random dreidel face
    const dreidelFace = dreidelFaces[randomNumber];

    return {
      status: 200,
      body: DreidelFace.encode(dreidelFace),
      headers: {
        "Content-Type": "application/json"
      }
    };
  };
