import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RotateCcwIcon } from "lucide-react";
import SearchBar, { SearchForm } from "@/components/SearchBar";
import { Button } from "@/components/ui/button";

const HomePage = () => {
  const navigate = useNavigate();
  const [backendStatus, setBackendStatus] = useState("");

  const handleSearchSubmit = (searchFormValues: SearchForm) => {
    navigate(`/search/${searchFormValues.searchQuery}`);
  };

  const checkBackendHealth = async () => {
    setBackendStatus("Checking...");

    try {
      const timeout = setTimeout(() => {
        setBackendStatus("Backend might be down. Please wait...");
      }, 10000);

      const response = await fetch(
        "https://food-ordering-app-backend-se5p.onrender.com/health"
      );
      clearTimeout(timeout);

      if (response.ok) {
        setBackendStatus("Backend is up and running!");
      } else {
        setBackendStatus("Backend is not reachable. Please wait...");
      }
    } catch (error) {
      setBackendStatus("Backend is not reachable.");
    }
  };

  return (
    <div className="flex flex-col gap-12">
      <div className="px-5 md:px-32 bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16 dark:bg-gray-950">
        <h1 className="text-5xl font-bold tracking-tight text-orange-500">
          Tuck into a takeaway today
        </h1>
        <span className="text-xl">Food is just a click away</span>
        <SearchBar
          placeHolder="Search by City or Town"
          onSubmit={handleSearchSubmit}
        />
        <div className="flex justify-center">
          <Button
            className=""
            variant="outline"
            onClick={checkBackendHealth}
            disabled={backendStatus === "Checking..."}
          >
            {backendStatus === "Checking..." ? (
              <>
                <RotateCcwIcon
                  className="animate-spin mr-2 transform -rotate-180"
                  size={18}
                  aria-label="Loading"
                />
                Checking...
              </>
            ) : (
              <>Check Backend Health</>
            )}
          </Button>
        </div>
        {backendStatus && (
          <div
            className={`text-sm mt-2 ${
              backendStatus.includes("up") ? "text-green-500" : "text-red-500"
            }`}
          >
            {backendStatus.includes("up")
              ? "Backend is Up and running "
              : `${backendStatus}`}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
