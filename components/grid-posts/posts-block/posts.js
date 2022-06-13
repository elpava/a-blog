import PostCard from '../../posts/post-card';

function Posts({ posts }) {
  const gridPosts = posts
    .slice(-3)
    .map(post => <PostCard key={post.slug} postData={post} grid />);

  return <div className="block">{gridPosts}</div>;
}

export default Posts;
