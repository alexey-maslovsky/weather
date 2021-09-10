export default class CommentsApi {
  async getComments(search) {
    const response = await fetch(`/api/weather/${search}/comments`);

    const data = await response.json();

    return data;
  }

  async addComment(search, comment) {
    const response = await fetch(`/api/weather/${search}/comments`, {
      method: 'POST',
      body: JSON.stringify(comment),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    return data;
  }
}
