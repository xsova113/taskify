"use client";

import { Card } from "@prisma/client";

interface CardItemProps {
  index: number;
  data: Card;
}

export const CardItem = ({ data, index }: CardItemProps) => {
  return <div>CardItem</div>;
};
