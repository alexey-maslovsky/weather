export default class LikesApi {
  getLikes(search) {
    return new Promise((resolve) => {
      const likes = Math.round(Math.random() * 100);

      setTimeout(() => resolve(likes), 1000);
    });
  }

  like(search) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(), 1000);
    });
  }

  dislike(search) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(), 1000);
    });
  }
}
