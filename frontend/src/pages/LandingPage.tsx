import { Link } from "react-router-dom";

export const LnadingPage = () => {
  return (
    <div className="h-screen flex justify-center">
      <div>
        <div>Signup or signin to view blogs</div>
        <div className="flex justify-between space-x-4">
          <div>
            <Link className="border rounded-full" to={"/signup"}>
              SignUP
            </Link>
          </div>
          <div>
            <Link className="border rounded-full" to={"/signin"}>
              SignIn
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
