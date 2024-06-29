import github from "../../assets/github.png";
export const CreatorSection = () => {
  return (
    <div className="flex justify-center mt-6">
      <div className="space-y-6">
        <div>
          <a
            className="flex space-x-4 items-center"
            href="https://github.com/Yh010/BlogApp"
          >
            <img className="h-8 w-8" src={github} />
            <div>Source code</div>
          </a>
        </div>
        <div className="border-t-2 pt-6">
          <div>Blogs by Yash Hegde:</div>
          <div>Link to Blogs on Your portfolio</div>
        </div>
      </div>
    </div>
  );
};
