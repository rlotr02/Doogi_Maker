export type TNavigationBarItem = {
  id: number;
  text: string;
  image: TNavigationBarItemImage;
};

export type TSelectedImage = {
  body: number;
  eyes: number;
  mouth: number;
  faceDress: number;
  headDress: number;
  handDress: number;
  clothes: number;
  shoes: number;
  background: number;
};

export type TNavigationBarItemImage = keyof TSelectedImage;
