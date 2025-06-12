let user = process.env.DISCOGS_USER;

export default async function getWishList() {
  try {
    const res = await fetch(`https://api.discogs.com/users/${user}/wants`);
    const data = await res.json();
    // console.log("date: ", data);
    return data;
  } catch (e) {
    console.error("Could not fetch wish list: ", e);
  }
}
