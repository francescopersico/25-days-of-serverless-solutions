import * as t from "io-ts";

/**
 * A type for a function that generate a number between `min` and `max`
 */
export type RandomNumberGenerator = (min: number, max: number) => number;

/**
 * Runtime types checker useful to check request/response.
 */
export const DreidelFace = t.interface({
  symbol: t.string,
  name: t.string
});

export type DreidelFace = t.TypeOf<typeof DreidelFace>;

export const FunctionResponse200 = t.interface({
  status: t.literal(200),
  body: DreidelFace
});

export type FunctionResponse200 = t.TypeOf<typeof FunctionResponse200>;

// For now we have only a valid 200 response
export const FunctionResponse = FunctionResponse200;

export type FunctionResponse = t.TypeOf<typeof FunctionResponse> & {
  headers?: unknown;
};
