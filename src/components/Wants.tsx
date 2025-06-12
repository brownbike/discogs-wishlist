import { Want } from "../api/get-wish-list";

export default function Wants({ wants }: { wants: Want[] | undefined }) {
  // console.log("wants: ", JSON.stringify(wants[0], null, 2));
  return (
    <>
      <div>
        <h1 className="text-white text-2xl text-center pb-4">Wants</h1>
        {wants && (
          <div className="min-h-screen flex flex-wrap flex-row">
            {wants.map((want) => {
              const { id, title, artists } = want.basic_information;
              const artist = artists[0]?.name;

              return (
                <div key={id} className="p-4 m-4 border">
                  <p>Id: {id}</p>
                  <p>Artist: {artist}</p>
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
