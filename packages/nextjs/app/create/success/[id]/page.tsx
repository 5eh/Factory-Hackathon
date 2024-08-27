import Link from "next/link";

const Page = () => {
  return (
    <div id="main" className="mx-auto lg:mt-8 lg:pt-8 max-w-7xl  px-4 sm:px-6 lg:px-2">
      <div className="grid grid-cols-1 lg:grid-cols-2 pt-24 lg:gap-8">
        {/* <div className="col-span-1">
              <PreviewCard creator={creator} listing={listing} />
            </div> */}

        <div className="px-4 sm:px-0 ">
          <div className="mt-6 border-t border-white/10">
            <dl className="divide-y divide-white/10">
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-white">FULL NAME</dt>
                <dd className="mt-1 text-sm text-right leading-6 text-gray-400 sm:col-span-2 sm:mt-0">INSERT NAME</dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-white">EARNINGS RATE</dt>
                <dd className="mt-1 text-sm text-right leading-6 text-gray-400 sm:col-span-2 sm:mt-0">
                  INSERT EARNINGS RATE
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-white">VERIFICATIONS</dt>
                <dd className="mt-1 text-sm text-right leading-6 text-gray-400 sm:col-span-2 sm:mt-0">Passport ID</dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-white">CREATED AN ACCOUNT IN</dt>
                <dd className="mt-1 text-sm text-right leading-6 text-gray-400 sm:col-span-2 sm:mt-0">2023</dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 border-b border-white/10">
                <dt className="text-sm font-medium leading-6 text-white">ABOUT</dt>
                <dd className="mt-1 text-sm  text-right leading-6 text-gray-400 sm:col-span-2 sm:mt-0">
                  INSERT DESCRIPTION
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      <div className="mt-2 p-2 lg:mt-0 lg:w-full">
        <div className="rounded-2xl lg:pr-10 py-2 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
          <div className="flex w-full items-center justify-center">
            <div className="h-px flex-1 bg-gray-300 mr-2"></div>

            <div className="flex items-center gap-x-2">
              <Link href={"/view/"}>
                <button className="inline-flex items-center ring-1 ring-gray-500 gap-x-0.5 rounded-md bg-gray-800 border border-gray-700 px-2 py-1 text-xs font-medium text-gray-200 hover:bg-gray-700 hover:text-white">
                  VIEW LISTING
                </button>
              </Link>

              <Link href={"/share/"}>
                <button className="inline-flex items-center ring-1 ring-gray-500 gap-x-0.5 rounded-md bg-gray-800 border border-gray-700 px-2 py-1 text-xs font-medium text-gray-200 hover:bg-gray-700 hover:text-white">
                  SHARE LISTINGS
                </button>
              </Link>

              <Link href={"/close/"}>
                <button className="inline-flex items-center ring-1 ring-gray-500 gap-x-0.5 rounded-md bg-gray-800 border border-gray-700 px-2 py-1 text-xs font-medium text-gray-200 hover:bg-gray-700 hover:text-white">
                  CLOSE PAGE
                </button>
              </Link>
            </div>

            <div className="h-px flex-1 bg-gray-300 ml-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
