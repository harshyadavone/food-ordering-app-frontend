import SearchBar, { SearchForm } from "@/components/SearchBar";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const handleSearchSubmit = (searchFormValues: SearchForm) => {
    navigate({
      pathname: `/search/${searchFormValues.searchQuery}`,
    });
  };
  return (
    <div className="flex flex-col gap-12">
      <div className="px-5 md:px-32 bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16 dark:bg-gray-950">
        <h1 className="text-5xl font-bold tracking-tight text-orange-500">
          Tuck into a takeway today
        </h1>
        <span className="text-xl">Food is just a click away</span>
        <SearchBar placeHolder="Search by City or Town"  onSubmit={handleSearchSubmit}/>
      </div>
    </div>
  );
};

export default HomePage;
