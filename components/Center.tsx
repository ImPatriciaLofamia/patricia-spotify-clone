import { ChevronDownIcon } from "@heroicons/react/outline";
import UserProfile from "./UserProfile";
const Center = () => {
  return (
    <div className="flex flex-grow  ">
      <p>This is a center</p>
      <header className=" absolute top-5 right-8">
        <div className="bg-green-500 opacity-90 hover:opacity-80 cursor-pointer py-1 px-1 rounded-full">
          <UserProfile
            className="rounded-full w-5 h-5 text-white"
            src="PAT.jpg"
            username="Patricia Lofamia"
            dropdown={<ChevronDownIcon className="text-white w-5 h-5" />}
          />
        </div>
      </header>
    </div>
  );
};
export default Center;
