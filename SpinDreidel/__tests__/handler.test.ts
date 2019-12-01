/* eslint-disable @typescript-eslint/no-explicit-any */
import { DREIDEL_FACES } from "../consts";
import { getHandler } from "../handler";
import { FunctionResponse, RandomNumberGenerator } from "../types";

describe("getHandler", () => {
  it("should return an HTTP 200 response with a random dreidel face in the body when a valid request is received", async () => {
    // Create a mock RandomNumberGenerator
    const randomNumberGeneratorMock: RandomNumberGenerator = jest.fn(
      () => DREIDEL_FACES.length - 1
    );

    // Create the handler
    const handler = getHandler(DREIDEL_FACES, randomNumberGeneratorMock);

    // Call the handler and get the response
    const response = await handler({} as any, {} as any);

    const expectedResponse: FunctionResponse = {
      status: 200,
      body: DREIDEL_FACES[DREIDEL_FACES.length - 1],
      headers: {
        "Content-Type": "application/json"
      }
    };

    expect(randomNumberGeneratorMock).toHaveBeenCalledTimes(1);
    expect(randomNumberGeneratorMock).toHaveBeenCalledWith(
      0,
      DREIDEL_FACES.length
    );
    expect(response).toEqual(expectedResponse);
  });
});
