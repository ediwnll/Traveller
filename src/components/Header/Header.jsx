import React from "react";
import { Autocomplete } from "@react-google-maps/api";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Header = () => {
  return (
    <nav>
      <div className=" flex justify-between static top-0 z-30 w-full py-6 bg-slate-800 text-white">
        <div className="mainTitle">Traveller</div>
        <div className="rightSideComp flex items-center gap-4">
          <div>Explore the World</div>
          {/*<Autocomplete>*/}
          <div className="gap-2">
            <div className="searchbarComponent">
              <form className="pr-4">
                <label>
                  <MagnifyingGlassIcon className=" pointer-events-none w-6 h-6 absolute text-black mt-[6px]"/>
                  <input placeholder="Search..." className='text-black rounded-3xl pl-7' type="text" name="location" />
                </label>
                <input type="submit" value={""}/>
              </form>
            </div>
          </div>
          {/*</Autocomplete>*/}
        </div>
      </div>
    </nav>
  );
};

export default Header;
