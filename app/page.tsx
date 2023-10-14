import getWishList from "./api/get-wish-list";


export default async function Home() {

  const wishListData = getWishList();
  const [wishList] = await Promise.all([wishListData])

  // console.log(wishList.wants[0])

  return (
    <div>
      <p>wants</p>
      {wishList.wants[0].id}
      {wishList.wants.map((want: any) => {
        const {id, title} = want.basic_information;
        return (
          <div>
            <p>----------------------</p>
          <p>{id}</p>
          <p>{title}</p>
          <br/>
          {/* <a href={want.resource_url}>{want.resource_url}</a> */}
        </div> 
        )
      })}
    </div>
  )
}
