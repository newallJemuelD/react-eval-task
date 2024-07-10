export interface Card {
  title: string;
  description: string;
}

export interface CardContent {
  title: string;
  description: string;
};

export interface CardRowProps {
  cardsContent: CardContent[];
};