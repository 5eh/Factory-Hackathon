"use client";

import {
  CALL_TO_ACTION_BUTTON,
  CALL_TO_ACTION_QUESTION,
  MARKETPLACE_DESCRIPTION_LONG,
  MARKETPLACE_TITLE,
  NATIVE_TOKEN,
  NATIVE_TOKEN_DOCS,
} from "../../../configuration/company";

import { ArrowPathIcon, CloudArrowUpIcon, LockClosedIcon } from "@heroicons/react/20/solid";
import { Address } from "~~/components/scaffold-eth";
import { useAccount } from "wagmi";
import Link from "next/link";

const features = [
  {
    name: "Public transactions.",
    description: "Using blockchains, we have transparency in what our users sell.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Authentic reviews.",
    description: "All reviews are public and verified from people who purchased plants previously.",
    icon: LockClosedIcon,
  },
  {
    name: "Purchase real world goods.",
    description: "Our marketplaces ensure authentic entrepreneurs can sell both locally, and their own plants.",
    icon: ArrowPathIcon,
  },
  {
    name: "Payments in Ethereum.",
    description: "We only utilize cryptocurrencies in our marketplaces to ensure decentralized access.",
    icon: ArrowPathIcon,
  },
  {
    name: "Earn 97.5%* of everything.",
    description:
      "We charge a 2.5% smart contract fee per listing + $1 USD flat marketplace fee once sold, for both buyer and seller. Blockchain gas costs are not included.",
    icon: ArrowPathIcon,
  },
  {
    name: "Grow your business.",
    description:
      "Our marketplaces are improving to ensure you have the right tools, audience and marketing opportunities to scale your business into the crypto world.",
    icon: ArrowPathIcon,
  },
];

export default function Example() {
  const { address: connectedAddress } = useAccount();

  return (
    <div className="bg-light dark:bg-dark">
      <main>
        {/* Hero section */}
        <div className="relative isolate overflow-hidden bg-gray-900 pb-16 pt-14 sm:pb-20">
          <img src="./Background.png" alt="" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-15" />
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
              <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl code">
                  {MARKETPLACE_TITLE.toUpperCase()}
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-300">{MARKETPLACE_DESCRIPTION_LONG}</p>
                <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                  <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-200 ring-1 ring-white/10 hover:ring-white/20">
                    {CALL_TO_ACTION_QUESTION}
                    <Link href="/create" className="font-semibold text-primary dark:text-primary">
                      <span className="absolute inset-0 " aria-hidden="true" /> {CALL_TO_ACTION_BUTTON}{" "}
                      <span aria-hidden="true">&rarr;</span>
                    </Link>
                  </div>
                </div>
                <div className="flex justify-center text-white items-center space-x-2 flex-col sm:flex-row border border-white bg-gray-800/20">
                  <p className="my-2  font-medium">Welcome</p>
                  <Address address={connectedAddress} />{" "}
                </div>
              </div>
            </div>
          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
        </div>

        {/* Feature section */}
        <div className="mt-32 sm:mt-56">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="text-base font-semibold leading-7 text-secondary dark:text-secondary">use your crypto</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight dark:text-white text-gray-900 sm:text-4xl">
                Have{" "}
                <Link href={`${NATIVE_TOKEN_DOCS}`} className="text-primary">
                  ${NATIVE_TOKEN}{" "}
                </Link>{" "}
                - but can&apos;t spend it?{" "}
              </p>
              <p className="mt-6 text-lg leading-8 dark:text-gray-300 text-gray-600">
                We&apos;re building marketplaces that allow you to purchase any product, service or delivery with your
                Ethereum
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden pt-16">
            <div className="mx-auto w-auto max-w-7xl p-1 shadow-2xl">
              <img
                src="https://i.ibb.co/CsH95yd/Screenshot-2024-07-27-at-4-31-07-PM.png"
                alt="Explore section screenshot"
                className="mb-[-12%] rounded-xl ring-1 ring-gray-900/10"
                width={2432}
                height={1442}
              />
            </div>
          </div>
          <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
            <div className="grid grid-cols-3 gap-2">
              {features.map(feature => (
                <div
                  key={feature.name}
                  className="col-span-1 w-full h-48 hover:ease-in-out transition hover:bg-primary/30 border hover:border-primary border-primary/80 bg-primary/20"
                >
                  <div className="border border-transparent border-b-primary flex align-center justify-between py-2 px-4">
                    <span className="font-bold code">{feature.name}</span>

                    <span className="font-bold code w-5 h-5 text-gray-500 dark:text-gray-200">
                      <feature.icon />
                    </span>
                  </div>
                  <div className="py-2 px-4 code text-gray-600 dark:text-gray-300">
                    <span>{feature.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonial section */}
        <div className="relative z-10 mt-32 bg-gray-900 pb-20 sm:mt-56 sm:pb-24 xl:pb-0">
          <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
            <div className="absolute left-[calc(50%-19rem)] top-[calc(50%-36rem)] transform-gpu blur-3xl">
              <div
                className="aspect-[1097/1023] w-[68.5625rem] bg-gradient-to-r from-[#ff4694] to-[#776fff] opacity-25"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              />
            </div>
          </div>
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch">
            <div className="-mt-8 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
              <div className="relative aspect-[2/1] h-full md:-mx-8 xl:mx-0 xl:aspect-auto">
                <img
                  className="absolute inset-0 h-full w-full rounded-2xl bg-gray-800 object-cover shadow-2xl"
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
                  alt=""
                />
              </div>
            </div>
            <div className="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-24 pb-4">
              <figure className="relative isolate pt-6 sm:pt-12">
                <svg
                  viewBox="0 0 162 128"
                  fill="none"
                  aria-hidden="true"
                  className="absolute left-0 top-0 -z-10 h-32 stroke-white/20"
                >
                  <path
                    id="b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
                    d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
                  />
                  <use href="#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb" x={86} />
                </svg>
                <blockquote className="text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9">
                  <p>
                    Gravida quam mi erat tortor neque molestie. Auctor aliquet at porttitor a enim nunc suscipit
                    tincidunt nunc. Et non lorem tortor posuere. Nunc eu scelerisque interdum eget tellus non nibh
                    scelerisque bibendum.
                  </p>
                </blockquote>
                <figcaption className="mt-8 text-base">
                  <div className="font-semibold text-white">Texas Blockchain Accelerator</div>
                  <div className="mt-1 text-gray-400">Director of TXB.</div>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
