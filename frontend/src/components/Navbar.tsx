import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { PublishButton } from "./PublishButton";
import { UserProfileIcon } from "./UserProfile/UserProfileIcon";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import twitter from "../assets/twitter.png";
export const Navbar = () => {
  return (
    <div className="bg-amber-100 border-b-2 border-black flex justify-between p-4">
      <Link className="flex justify items-center space-x-2" to={"/blogs"}>
        <div>
          <img className="h-10 w-10 rounded-full" src={logo} />
        </div>
        <div>Blog App</div>
      </Link>
      <div className="flex justify items-center space-x-2">
        <div>Made by Yash Hegde</div>
        <div className="flex space-x-4 justify items-center">
          <div>
            <a
              className="flex space-x-4 items-center"
              href="https://github.com/Yh010/"
            >
              <img className="h-8 w-8" src={github} />
            </a>
          </div>
          <div>
            <a
              className="flex space-x-4 items-center"
              href="https://www.linkedin.com/in/yash-hegde-927721201/"
            >
              <img className="h-8 w-8" src={linkedin} />
            </a>
          </div>
          <div>
            <a
              className="flex space-x-4 items-center"
              href="https://x.com/YashHegde7"
            >
              <img className="h-8 w-8" src={twitter} />
            </a>
          </div>
        </div>
      </div>

      <div className="flex justify items-center space-x-4">
        <div>
          <Link to={"/publish"}>
            <PublishButton />
          </Link>
        </div>
        <div>
          <UserProfileIcon inputname="users Name" />
        </div>
      </div>
    </div>
  );
};
