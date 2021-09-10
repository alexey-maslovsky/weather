export default class LikesApi {
  async getLikes(search) {
    const response = await fetch(`/api/weather/${search}/likes`);

    const { likes } = await response.json();

    return likes;
  }

  async like(search) {
    await fetch(`/api/weather/${search}/likes`, { method: 'POST' });
  }

  async dislike(search) {
    await fetch(`/api/weather/${search}/likes`, { method: 'DELETE' });
  }
}
