import logo from "../assets/logo.jpg";
import { PublishButton } from "./PublishButton";
import { UserProfileIcon } from "./UserProfile/UserProfileIcon";
export const Navbar = () => {
  return (
    <div className="border-b-2 flex justify-between p-4">
      <div className="flex justify items-center space-x-2">
        <div>
          <img className="h-10 w-10 rounded-full" src={logo} />
        </div>
        <div>Blog App</div>
      </div>

      <div className="flex justify items-center space-x-4">
        <div>
          <PublishButton />
        </div>
        <div>
          <UserProfileIcon inputname="users Name" />
        </div>
      </div>
    </div>
  );
};
