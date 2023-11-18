import React, { useContext } from "react";
import Logo from "./Logo";

import { CrowdFundingContext } from '../Context/CrowdFunding'
const NavBar = () => {
  const { currentAccount, connectWallet } = useContext(CrowdFundingContext);
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuList = ["White Paper", "Project", "Donation", "Members"];

  return (
    <div class="backgroundMain ">asdasdas
      <div class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
        <div class="relative flex items-center justify-between">
          <div class="flex items-center">
            <a href="/" aria-label="Company" title="C" class="inline-flex item-center mr-8">
              <Logo color="text-white" />
              <span class="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase" />
              Company
            </a>
            <ul>
              {menuList.map((et, i) => (
                <li key={i + 1}>{et}</li>
              ))}
            </ul>
          </div>
        </div>

        {!currentAccount && (
          <ul class="flex items-center hidden space-x-8 lg:flex">
            <li>
              <button
                onClick={() => connectWallet()} aria-label="Sign Up">
                Connect Wallet
              </button>
            </li>
          </ul>
        )}
      </div>
    </div>
  )

}
export default NavBar;