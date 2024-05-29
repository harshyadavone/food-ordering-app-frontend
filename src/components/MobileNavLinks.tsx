import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import { LogOut } from "lucide-react";
import { ModeToggle } from "./mode-toggle";

const MobileNavLinks = () => {
  const { logout } = useAuth0();
  return (
    <>
    <div className="group">
      <Link
        className="flex items-center font-bold hover:bg-gray-900 p-2 rounded-lg"
        to="/order-status"
      >
        Order Status
      </Link>
      <Link
        className="flex items-center font-bold hover:bg-gray-900 p-2 rounded-lg"
        to="/user-profile"
      >
        User Profile
      </Link>

          <Link
            to="/manage-restaurant"
            className="flex items-center font-bold hover:bg-gray-900 p-2 rounded-lg"
          >
            Manage Restaurant
          </Link>
        
          </div>



      <div className="flex flex-row  gap-3">
      <ModeToggle/>
      <Button
        className="flex-1 items-center gap-3 px-3 font-bold text-orange-500 bg-transparent bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-900 hover:bg-gray-200"
        onClick={() => logout()}
      >
        Log Out <LogOut size={17} />
      </Button>
      </div>
    </>
  );
};

export default MobileNavLinks;
