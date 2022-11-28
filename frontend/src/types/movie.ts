import { Review } from "./review";

export type MovieData = {
  id: number;
  title: string;
  subTitle: string;
  year: string;
  imgUrl: string;
  synopsis: string;
  genreId: number;
  reviews: Review[];
};



