export const getGifts = async (category) => {
  const URL = `https://api.giphy.com/v1/gifs/search?api_key=Reel12s28spWkhIjaOKiLpzZnZxQaHvB&q=${category}&limit=10`;
  const response = await fetch(URL);
  const { data } = await response.json();
  const gifts = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));
  return gifts;
};
