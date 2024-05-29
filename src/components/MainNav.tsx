import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";
import UsernameMenu from "./UsernameMenu";
import { Link } from "react-router-dom";
import { ModeToggle } from "./mode-toggle";

const MainNav = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    <span className="flex space-x-2 items-center">
      {isAuthenticated ? (
        <>
        <ModeToggle />
          <Link
            to="/order-status"
            className="font-bold dark:text-neutral-300 text-neutral-700 hover:bg-gray-200 hover:dark:bg-gray-900 p-2 rounded-lg"
          >
            Order Status
          </Link>
          <UsernameMenu />
        </>
      ) : (
        <Button
          variant="ghost"
          className="font-bold  bg-orange-500 text-white hover:text-white  hover:bg-orange-600 rounded-md"
          onClick={async () => await loginWithRedirect()}
        >
          Log In
        </Button>
      )}
    </span>
  );
};

export default MainNav;
