// NOTE: This file contains more than just pagination types so it should probably be renamed.

import { createNumberRangeSet } from "../utils/utils.js";

export type PaginationOptions = {
  limit: number;
  before?: string;
  after?: string;
};

export type TagOptions = {
  tag: string;
};

export type TaggedPaginationOptions = TagOptions & PaginationOptions;

export type PaginationValidatorOptions = {
  defaultLimit?: number;
  minLimit?: number;
  maxLimit?: number;
};

export type SeasonOptions = {
  seasonID: string;
};

export type LocationOptions = {
  locationID: number;
};

export type SeasonPaginationOptions = SeasonOptions & PaginationOptions;

export type LocationPaginationOptions = LocationOptions & PaginationOptions;

export const validLocationIDs = createNumberRangeSet(57000000, 57000261);

// NOTE: Pretty sure this isn't necessary and if I turn out to be right I will just delete this entirely
export const validCountryIDs = createNumberRangeSet(57000007, 57000260);