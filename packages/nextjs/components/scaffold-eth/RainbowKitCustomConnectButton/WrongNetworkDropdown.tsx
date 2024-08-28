import { NetworkOptions } from "./NetworkOptions";
import { useDisconnect } from "wagmi";
import { ArrowLeftOnRectangleIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { SwitchTheme } from "~~/components/SwitchTheme";
import { hardhat } from "viem/chains";
import { useTargetNetwork } from "~~/hooks/scaffold-eth";
import { CheckCircleIcon, CogIcon, DocumentDuplicateIcon, UserIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { getAddress } from "viem";

export const WrongNetworkDropdown = ({ address }) => {
  const { disconnect } = useDisconnect();
  const { targetNetwork } = useTargetNetwork();
  const [addressCopied, setAddressCopied] = useState(false);
  const selectingNetwork = useState(false);
  const checkSumAddress = getAddress(address);

  const isLocalNetwork = targetNetwork.id === hardhat.id;

  return (
    <div className="dropdown dropdown-end leading-3">
      <summary
        tabIndex={0}
        className="btn hover:border-primary hover:bg-primary/20 border border-black dark:border-white btn-sm ml-3 mr-3 dropdown-toggle !h-auto rounded-none"
      >
        <span>Wrong network</span>
        <ChevronDownIcon className="h-6 w-4 ml-2 sm:ml-0" />
      </summary>
      <ul
        tabIndex={0}
        className="dropdown-content menu z-[2] m-2  bg-base-200 border border-black dark:border-white gap-1"
      >
        <NetworkOptions />
        <li className={selectingNetwork ? "hidden" : ""}>
          {addressCopied ? (
            <div className="btn-sm  flex gap-3">
              <CheckCircleIcon className="text-xl font-normal h-6 w-4 cursor-pointer ml-2 sm:ml-0" aria-hidden="true" />
              <span className="whitespace-nowrap">Copy address</span>
            </div>
          ) : (
            <CopyToClipboard
              text={checkSumAddress}
              onCopy={() => {
                setAddressCopied(true);
                setTimeout(() => {
                  setAddressCopied(false);
                }, 800);
              }}
            >
              <div className="btn-sm rounded-none hover:bg-primary/20 hover:border-primary hover:border flex gap-3">
                <DocumentDuplicateIcon
                  className="text-xl font-normal  h-6 w-4 cursor-pointer ml-2 sm:ml-0"
                  aria-hidden="true"
                />
                <span className=" whitespace-nowrap">Copy address</span>
              </div>
            </CopyToClipboard>
          )}
        </li>
        <li></li>
        <li>
          <Link
            href="/profile"
            className="menu-item text-error btn-sm rounded-none hover:bg-primary/20 hover:border-primary hover:border flex gap-3 py-3"
            type="button"
            onClick={() => disconnect()}
          >
            <UserIcon className="h-6 w-4 ml-2 sm:ml-0 dark:text-white text-black" />{" "}
            <span className="dark:text-white text-black">Profile</span>
          </Link>
        </li>
        <li>
          <Link
            href="/settings"
            className="menu-item text-error btn-sm rounded-none hover:bg-primary/20 hover:border-primary hover:border flex gap-3 py-3"
            type="button"
            onClick={() => disconnect()}
          >
            <CogIcon className="h-6 w-4 ml-2 sm:ml-0 dark:text-white text-black" />{" "}
            <span className="dark:text-white text-black">Settings</span>
          </Link>
        </li>

        <li></li>

        <li className={selectingNetwork ? "hidden" : ""}>
          <button
            className="menu-item text-error btn-sm rounded-none hover:bg-red-500/20 hover:border-red-500 hover:border flex  gap-3 py-3"
            type="button"
            onClick={() => disconnect()}
          >
            <ArrowLeftOnRectangleIcon className="h-6 w-4 ml-2 sm:ml-0 " /> <span>Disconnect </span>
          </button>
        </li>

        <SwitchTheme className={`pointer-events-auto ${isLocalNetwork ? "self-end md:self-auto" : ""}`} />
      </ul>
    </div>
  );
};
