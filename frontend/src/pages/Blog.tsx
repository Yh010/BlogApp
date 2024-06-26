export const Blog = () => {
  return (
    <div className="flex h-screen">
      <div className="w-3/4 border p-6">
        <div>Blog Title</div>
        <div>Blog posted date</div>
        <div>blog desc</div>
      </div>
      <div className="w-1/4 p-6">
        <div className="border-b-2">Author</div>
        <div className="flex">
          <div className="m-2">Author Pic</div>
          <div>
            <div>Author Name</div>
            <div>Author Desc</div>
          </div>
        </div>
      </div>
    </div>
  );
};
