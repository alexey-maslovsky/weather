export default class CommentsApi {
  getComments(search) {
    return new Promise((resolve) => {
      setTimeout(() => resolve([]), 1500);
    });
  }

  addComment(comment) {
    return new Promise((resolve) => {
      setTimeout(() => resolve({
        id: Math.random() * Date.now() + comment.name,
        ...comment,
      }), 500);
    });
  }
}
