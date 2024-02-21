import PostListHeader from "./PostListHeader";
import PostListBody from "./PostListBody";
import PostListFooter from "./PostListFooter";

function PostListContainer() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-between">
      <PostListHeader />
      <PostListBody />
      <PostListFooter />
    </div>
  );
}

export default PostListContainer;
