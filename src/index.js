//Call all functions inside services and log updated value/s
import { generateId } from "./utils";
import { updateUser, getAllUsers, addUser } from "./services/users";
import {
  getCommentById,
  getCommentsByPostId,
  updateCommentBody,
  deleteCommentById,
  addComment,
  getAllComments,
} from "./services/comments";
import {
  getPosts,
  addPost,
  getPostsByUser,
  getPostById,
  deletePostBy,
  deletePostsByUserId,
  updatePostTitle,
  updatePostBody,
  updatePost,
} from "./services/posts";
import { posts } from "./data/posts";

// console.log(getAllUsers());
// updateUser(1, { email: "roger@77.com", website: "hilde-edit.org" });
// console.log(getAllUsers());
// addUser({
//   id: generateId(getAllUsers()),
//   username: "New User",
//   email: "newUser@user.biz",
// });
// console.log(getAllUsers());

//console.log(getCommentById(2));
// console.log(getCommentsByPostId(2));
// console.log(updateCommentBody(2, { body: "new comment" }));
// console.log(deleteCommentById(1));
// addComment({ id: generateId(getAllComments), postId: 123, name: "Jack" });
// console.log(getAllComments());

// console.log(getPosts());
// console.log(getPostsByUser(4));
// console.log(getPostById(2));
// console.log(deletePostBy(1));
// console.log(deletePostsByUserId(1));
// console.log(updatePostTitle(1, { title: "New Title" }));
// console.log(updatePostBody(1, { body: "New Body" }));
// console.log(
//   updatePost(1, {
//     title: "new title",
//     body: "new body",
//   })
// );
console.log(getPosts());
addPost({
  id: generateId(getPosts()),
  userId: 12345,
  title: "newPost",
  body: "newBody",
});
console.log(getPosts());
