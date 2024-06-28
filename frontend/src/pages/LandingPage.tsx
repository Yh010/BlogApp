import { Link } from "react-router-dom";
import blogImg from "../assets/website-blog.jpg";
export const LnadingPage = () => {
  return (
    <div>
      <div className="h-screen flex bg-amber-100">
        <div className="w-3/4 flex items-center justify-center">
          <div className="text-center">
            <div className="text-8xl text-start">
              Human <p>stories & ideas</p>
            </div>
            <div className="text-2xl mt-10 text-start">
              A place to read, write, and deepen your understanding
            </div>

            <div className="flex justify-between space-x-4 mt-20">
              <div>
                <Link
                  className="border rounded-full py-4 px-6 bg-black text-white"
                  to={"/signup"}
                >
                  Start Reading
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/4 flex items-center justify-center">
          <img className="mr-40" src={blogImg} />
        </div>
      </div>
    </div>
  );
};
