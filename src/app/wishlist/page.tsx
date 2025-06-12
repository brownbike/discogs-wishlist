import getWishList, { Want } from "../../api/get-wish-list";
import Wants from "@/components/Wants";

export default async function WishListPage() {
  const wishList = await getWishList();
  const wants: Want[] | undefined = wishList?.wants;

  // console.log("wants: ", JSON.stringify(wants[0], null, 2));
  return <>{wants && <Wants wants={wants} />}</>;
}
