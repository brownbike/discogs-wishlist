let user = process.env.DISCOGS_USER

export default async function getWishList() {
    const data = await fetch(`https://api.discogs.com/users/${user}/wants`);
    return data.json();
}