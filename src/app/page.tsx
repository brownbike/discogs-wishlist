import getWishList from "../api/get-wish-list";

type Want = {
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

export default async function Home() {
  const { wants } = await getWishList();

  return (
    <>
      <div>
        <h1 className="text-white">Wants</h1>
        {wants.length > 0 && (
          <div>
            {wants.map((want: any) => {
              const { id, title } = want.basic_information;
              return (
                <div key={id}>
                  <p>----------------------</p>
                  <p>Id: {id}</p>
                  <p>Title: {title}</p>
                  {/* <a href={want.resource_url}>{want.resource_url}</a> */}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
