import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import { LogOut } from "lucide-react";

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


      <Button
        className="flex items-center gap-3 px-3 font-bold text-orange-500 bg-transparent hover:bg-gray-900"
        onClick={() => logout()}
      >
        Log Out <LogOut size={17} />
      </Button>
    </>
  );
};

export default MobileNavLinks;
