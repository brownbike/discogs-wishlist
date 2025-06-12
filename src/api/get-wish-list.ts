let user = process.env.DISCOGS_USER;

export type WishList = {
  pagination: Pagination;
  wants: Want[];
};

type Pagination = {
  page: number;
  pages: number;
  per_page: number;
  items: number;
  urls: string;
};

export type Want = {
  id: number;
  resource_url: string;
  date_added: string;
  basic_information: BasicInformation;
  rating: number;
};

type BasicInformation = {
  id: number;
  master_id: number;
  master_url: null;
  resource_url: string;
  title: string;
  year: number;
  formats: Array<Format>;
  artists: Array<Aartist>;
  labels: Array<Label>;
  thumb: string;
  cover_image: string;
  genres: Array<string>;
  styles: Array<string>;
};

type Format = {
  name: string;
  qty: string;
  descriptions: Array<string>;
};

type Aartist = {
  name: string;
  anv: string;
  join: string;
  role: string;
  tracks: string;
  id: number;
  resource_url: string;
};

type Label = {
  name: string;
  catno: string;
  entity_type: string;
  entity_type_name: String;
  id: number;
  resource_url: string;
};

export default async function getWishList() {
  try {
    const res = await fetch(`https://api.discogs.com/users/${user}/wants`);
    const data: WishList = await res.json();
    // console.log("date: ", data);
    return data;
  } catch (e) {
    console.error("Could not fetch wish list: ", e);
  }
}
