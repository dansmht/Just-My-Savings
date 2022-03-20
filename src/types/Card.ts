// import {} from './GradientVariant'

import type { Currency } from "./Currency";

export type CardType = "card" | "cash" | "other";

export type Card = {
  id: number;
  title: string;
  type: CardType;
  savings: number;
  currency: Currency;
  // gradientVariant: GradientVariant;
};
