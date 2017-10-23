const user = {
  posts: [
    {
      likes: 10
    },
    {
      likes: 15
    }
  ],
  
}

function sumUserPostLikes(user) {
  var likesTotal = 0;
  for (let i = 0; i < user.posts.likes.length; i++) {
  likesTotal = likesTotal + likes[i];
  }
    console.log(likesTotal);
    return likesTotal;
}
sumUserPostLikes(user);