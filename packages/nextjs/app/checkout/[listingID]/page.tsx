"use client";

import { useParams } from "next/navigation";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";

import { useEffect, useState } from "react";

import { COMPANY_DESCRIPTION, COMPANY_NAME, NATIVE_TOKEN } from "../../../../../configuration/company";

import Popup from "~~/components/Popup";
import { CheckIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { CheckmarkIcon } from "react-hot-toast";

interface ListingData {
  title: string;
  description: string;
  location: string;
  completionRequirements: string;
  termsOfService: string;
  image: string;
  price: number;
  timeValidity: string;
  quantity: number;
  creatorWallet: string;
}

interface FormData {
  name: string;
  address1: string;
  address2: string;
  country: string;
  state: string;
  province: string;
  postcode: string;
  instructions: string;
  business: string;
  upcharges: string | number;
  shippingMethod: string | number;
}

export default function Checkout() {
  const { listingID } = useParams();
  // const [product, setProduct] = useState<any>(null);

  const [product, setProduct] = useState<ListingData>({
    title: "Title of Product",
    description: "Amazing description of product",
    location: "Austin Texas",
    completionRequirements: "I promise to complete X Y and Z to ensure I receive X in payment.",
    termsOfService: "You agree to the following terms in order for my to complete my service",
    image: "https://images.unsplash.com/link",
    price: 5500000,
    timeValidity: "33/33333/33",
    quantity: 55,
    creatorWallet: "",
  });
  const [openPopup, setOpenPopup] = useState(false);
  const [openConfirmationPopup, setOpenConfirmationPopup] = useState(false);
  const [openMarketplaceTACPopup, setOpenMarketplaceTACPopup] = useState(false);
  const [openProviderssPromiseAgreement, setOpenProvidersPromiseAgreementPopup] = useState(false);
  const [openProvidersTACgreementPopup, setOpenProvidersTACgreementPopup] = useState(false);

  const [loading, setLoading] = useState(true);

  const { data: getListing } = useScaffoldReadContract({
    contractName: "ServiceContract",
    functionName: "getServiceData",
    args: listingID,
  });

  useEffect(() => {
    if (getListing) {
      const listingData = getListing[0];
      setProduct(listingData);
      setLoading(false);
    }
  }, [getListing]);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    address1: "",
    address2: "",
    country: "",
    state: "",
    province: "",
    postcode: "",
    instructions: "",
    business: "",
    upcharges: "",
    shippingMethod: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  const togglePopup = () => {
    setOpenPopup(!openPopup);
  };

  const toggleConfirmationPopup = () => {
    setOpenConfirmationPopup(!openConfirmationPopup);
  };

  const toggleMarketplaceTACPopup = () => {
    setOpenMarketplaceTACPopup(!openMarketplaceTACPopup);
  };

  const toggleProviderPromiseAgreementPopup = () => {
    setOpenProvidersPromiseAgreementPopup(!openProviderssPromiseAgreement);
  };

  const toggleProvidersServiceTACPopup = () => {
    setOpenProvidersTACgreementPopup(!openProvidersTACgreementPopup);
  };

  // if (loading) {
  //   return <p>Loading...</p>;
  // }

  // if (!product) {
  //   return <p>Listing not found.</p>;
  // }

  return (
    <div className="px-6 lg:px-8">
      <div className="mt-12">
        <h1 className="text-4xl font-semibold code"> {product.title} </h1>
        <button onClick={togglePopup} className="text-primary underline">
          View Details
        </button>
      </div>

      <Popup
        isOpen={openPopup}
        onClose={togglePopup}
        className="xl:w-3/5 min-h-64 max-w-full max-h-[80vh] overflow-y-auto relative"
        title={
          <Popup.Title className="pl-3 pr-3 uppercase">
            <div className="flex w-full justify-between">
              <span className="text-left code">{product.title}</span>
              <span className="text-right dark:text-gray-100/50 font-thin lowercase">{product.location}</span>
            </div>
          </Popup.Title>
        }
      >
        <div className="grid grid-cols-auto grid-rows-auto gap-2 m-4">
          <div className="col-span-2 row-span-2 border border-gray-800 h-fit">
            <div className="p-4">
              <span>{product.description}</span>
            </div>
          </div>

          <div className="col-span-2 row-span-6 border border-gray-400 overflow-hidden">
            <div className="relative w-full h-full">
              <div className="absolute inset-0 flex items-center justify-center filter blur-xl">
                <Image
                  src={product.image}
                  alt={product.title}
                  layout="fill"
                  objectFit="cover"
                  className="object-center"
                />
              </div>
              <div className="relative flex items-center justify-center w-full h-full">
                <Image
                  src={product.image}
                  alt={product.title}
                  layout="fill"
                  objectFit="contain"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          <div className="col-span-2 flex gap-2">
            <div className="grid grid-cols-2 gap-3 w-full">
              <div className="border border-gray-700 w-full flex items-center gap-3 pl-4 pr-4">
                <div className="relative w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center border border-green-500">
                  <CheckIcon className="w-4 h-6 text-white" />
                </div>
                <p>Feature 1</p>
              </div>
              <div className="border border-gray-700 w-full flex items-center gap-3 pl-4 pr-4">
                <div className="relative w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center border border-green-500">
                  <CheckIcon className="w-4 h-6 text-white" />
                </div>
                <p>Feature 2</p>
              </div>
            </div>
          </div>

          <div className="col-span-2 row-span-2 border border-gray-600 border-dotted h-64">
            <div className="relative w-full h-full">
              <div className="absolute inset-0 flex items-center justify-center filter blur-xl">
                <Image
                  src="https://plus.unsplash.com/premium_photo-1673137021181-ac1b77dda93a?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt={product.title}
                  layout="fill"
                  objectFit="cover"
                  className="object-center"
                />
              </div>
              <div className="relative flex items-center justify-center w-full h-full">
                <Image
                  src="https://plus.unsplash.com/premium_photo-1673137021181-ac1b77dda93a?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt={product.title}
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          <div className="col-span-2 border border-gray-400 h-fit pl-4 pr-4">
            <p>Upcharge list</p>
          </div>

          <div className="col-span-2 border border-gray-400 h-fit pl-4 pr-4">
            <p>Shipping Method List (dropdown)</p>
          </div>

          <div className="col-span-2 col-start-3 border border-primary/80 bg-primary/20 p-4">
            <div className="flex gap-3 items-center justify-between">
              <span className="text-lg font-bold dark:text-gray-200">
                {(Number(product.price) / 10 ** 18).toFixed(8)} {NATIVE_TOKEN}
              </span>
              <span className="font-thin dark:text-gray-400">
                {(Number(product.price) / 10 ** 18).toFixed(4)} {NATIVE_TOKEN}
              </span>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center w-full mt-2 gap-x-1 relative">
          <div className="w-full border border-transparent border-t-black dark:border-t-primary pt-1" />
          <div className="text-center w-1/2">
            <p>ABOUT SELLER</p>
          </div>
          <div className="w-full border border-transparent border-t-black dark:border-t-primary pt-1" />
        </div>

        <div className="grid grid-cols-6 grid-rows-auto gap-4 m-4 ">
          <div className="col-span-2 row-span-2 border border-white relative overflow-hidden flex items-center justify-center w-auto h-64">
            <div className="absolute inset-0 flex items-center justify-center filter blur-xl">
              <Image
                src="https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt={product.title}
                layout="fill"
                objectFit="cover"
                className="object-center w-64 h-64"
              />
            </div>
            <div className="relative flex items-center justify-center w-full h-full">
              <Image
                src="https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt={product.title}
                layout="fill"
                objectFit="cover"
                className="w-64 h-64"
              />
            </div>
          </div>

          <div className="col-span-1 ">
            <div className="">
              <div className="font-bold">
                <span>{COMPANY_NAME}</span>{" "}
              </div>
              <div>
                <span className="font-semibold dark:text-gray-500">{COMPANY_DESCRIPTION}</span>
              </div>
            </div>
          </div>
          <div className="col-start-4 border border-white">Location</div>
          <div className="col-start-5 border border-white">Reviews</div>
          <div className="col-start-6 row-span-2 border border-white">Other listings</div>
          <div className="col-span-1 col-start-auto max-w-48 grid align-bottom ">
            <div className="flex justify-start  m-0">
              <p className="align-baseline text-center font-bold pt-2 pb-2 pl-3 pr-3 border border-primary/80 bg-primary/20 w-fit">
                4.8 / 10
              </p>
            </div>

            <div className="flex justify-start ">
              <span className="align-baseline text-center font-bold pt-2 pb-2 pl-3 pr-3 border border-primary/80 bg-primary/20 w-fit">
                24 Ratings
              </span>
            </div>
          </div>
          <div className="col-start-4 row-start-2 border border-white">Badges</div>
          <div className="col-start-5 row-start-2 border border-white">View full profile button</div>
        </div>

        <div className="flex justify-center items-center w-full mt-2 relative pl-4 pr-4 gap-4">
          <Link
            href={`/message/${product.creatorWallet}`}
            className="text-center w-full bg-gray-600/20 border border-gray-600 hover:cursor-pointer"
          >
            <p>MESSAGE {product.title.toUpperCase()}</p>
          </Link>
        </div>
      </Popup>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-x-4 lg:grid-cols-2 lg:px-8 xl:gap-x-12">
        <h1 className="sr-only">Order information</h1>

        <div className="px-4 pb-10 pt-16 sm:px-6 lg:col-start-2 lg:row-start-1 lg:px-0 lg:pb-16">
          <div className="mx-auto max-w-lg lg:max-w-none">
            <h2 id="summary-heading" className="text-lg font-medium text-gray-300">
              Order summary
            </h2>
            <dl className="space-y-6 border-t border-gray-200 pt-6 text-sm font-medium text-white">
              <div className="flex items-center justify-between">
                <dt className="text-gray-400">Subtotal</dt>
                <dd className="ml-auto">
                  {(Number(product.price) / 10 ** 18).toFixed(8)}{" "}
                  <span className="code text-primary">{NATIVE_TOKEN}</span>
                </dd>
              </div>

              <div className="flex items-center justify-between">
                <dt className="text-gray-400">Shipping Method</dt>
                <dd className="ml-auto">
                  <p className="text-right">Standard</p>
                  <p className="text-right">
                    {(Number(product.price) / 10 ** 18).toFixed(8)}{" "}
                    <span className="code text-primary">{NATIVE_TOKEN}</span>
                  </p>
                </dd>
              </div>

              <div className="flex items-center justify-between">
                <dt className="text-gray-400">Taxes</dt>
                <dd className="ml-auto">
                  {(Number(product.price) / 10 ** 18).toFixed(8)}{" "}
                  <span className="code text-primary">{NATIVE_TOKEN}</span>
                </dd>
              </div>

              <div className="flex items-center justify-between">
                <dt className="text-gray-400">Upcharges</dt>
                <dd className="ml-auto block space-y-2 text-right">
                  <p>
                    Item 1:{" "}
                    <span className="code text-primary">
                      {(Number(product.price) / 10 ** 18).toFixed(2)} {NATIVE_TOKEN}
                    </span>
                  </p>
                  <p>
                    Item 2:{" "}
                    <span className="code text-primary">
                      {(Number(product.price) / 10 ** 18).toFixed(2)} {NATIVE_TOKEN}
                    </span>
                  </p>
                  <p>
                    Item 3:{" "}
                    <span className="code text-primary">
                      {(Number(product.price) / 10 ** 18).toFixed(2)} {NATIVE_TOKEN}
                    </span>
                  </p>
                </dd>
              </div>

              <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                <dt className="text-base">Total</dt>
                <dd className="text-base ml-auto">
                  {(Number(product.price) / 10 ** 18 + 41.8).toFixed(8)}{" "}
                  <span className="code text-primary">{NATIVE_TOKEN}</span>
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <form className="px-4 pb-36 pt-16 sm:px-6 lg:col-start-1 lg:px-0 lg:pb-16" onSubmit={handleSubmit}>
          <div className="mx-auto max-w-lg lg:max-w-none">
            <section aria-labelledby="shipping-heading" className="mt-10">
              <h2 id="shipping-heading" className="text-lg font-medium text-gray-300">
                Shipping address
              </h2>

              <div className="mt-6 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-3">
                <div className="sm:col-span-3">
                  <label htmlFor="name" className="block text-sm font-medium text-white">
                    NAME
                  </label>
                  <div className="sm:col-span-4">
                    <div className="mt-2">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        autoComplete="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="text-left border-b border-gray-900 dark:border-gray-200/20 w-full bg-gray-500/20 py-2 px-3 text-sm leading-6 text-gray-800 dark:text-gray-300 focus:bg-gray-700/20 focus:border-primary/40 hover:border-primary/60 focus:outline-none"
                        placeholder="Name or alias for delivery"
                      />
                    </div>
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="address1" className="block text-sm font-medium text-white">
                    Address 1
                  </label>
                  <div className="sm:col-span-4">
                    <div className="mt-2">
                      <input
                        type="text"
                        name="address1"
                        id="address1"
                        autoComplete="address-line1"
                        value={formData.address1}
                        onChange={handleChange}
                        className="text-left border-b border-gray-900 dark:border-gray-200/20 w-full bg-gray-500/20 py-2 px-3 text-sm leading-6 text-gray-800 dark:text-gray-300 focus:bg-gray-700/20 focus:border-primary/40 hover:border-primary/60 focus:outline-none"
                        placeholder="Address 1"
                      />
                    </div>
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="address2" className="block text-sm font-medium text-white">
                    Address 2
                  </label>
                  <div className="sm:col-span-4">
                    <div className="mt-2">
                      <input
                        type="text"
                        name="address2"
                        id="address2"
                        autoComplete="address-line2"
                        value={formData.address2}
                        onChange={handleChange}
                        className="text-left border-b border-gray-900 dark:border-gray-200/20 w-full bg-gray-500/20 py-2 px-3 text-sm leading-6 text-gray-800 dark:text-gray-300 focus:bg-gray-700/20 focus:border-primary/40 hover:border-primary/60 focus:outline-none"
                        placeholder="Apartment, suite, house number"
                      />
                    </div>
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="country" className="block text-sm font-medium text-white">
                    Country
                  </label>
                  <div className="sm:col-span-4">
                    <div className="mt-2">
                      <input
                        type="text"
                        name="country"
                        id="country"
                        autoComplete="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="text-left border-b border-gray-900 dark:border-gray-200/20 w-full bg-gray-500/20 py-2 px-3 text-sm leading-6 text-gray-800 dark:text-gray-300 focus:bg-gray-700/20 focus:border-primary/40 hover:border-primary/60 focus:outline-none"
                        placeholder="Country"
                      />
                    </div>
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="state" className="block text-sm font-medium text-white">
                    State / Province
                  </label>
                  <div className="sm:col-span-4">
                    <div className="mt-2">
                      <input
                        type="text"
                        name="state"
                        id="state"
                        autoComplete="address-level1"
                        value={formData.state}
                        onChange={handleChange}
                        className="text-left border-b border-gray-900 dark:border-gray-200/20 w-full bg-gray-500/20 py-2 px-3 text-sm leading-6 text-gray-800 dark:text-gray-300 focus:bg-gray-700/20 focus:border-primary/40 hover:border-primary/60 focus:outline-none"
                        placeholder="State or Province"
                      />
                    </div>
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="postcode" className="block text-sm font-medium text-white">
                    Postcode
                  </label>
                  <div className="sm:col-span-4">
                    <div className="mt-2">
                      <input
                        type="text"
                        name="postcode"
                        id="postcode"
                        autoComplete="postal-code"
                        value={formData.postcode}
                        onChange={handleChange}
                        className="text-left border-b border-gray-900 dark:border-gray-200/20 w-full bg-gray-500/20 py-2 px-3 text-sm leading-6 text-gray-800 dark:text-gray-300 focus:bg-gray-700/20 focus:border-primary/40 hover:border-primary/60 focus:outline-none"
                        placeholder="Postcode"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-span-full">
                  <label htmlFor="instructions" className="block text-sm font-medium leading-6 mt-12 text-white">
                    CUSTOM INSTRUCTIONS
                  </label>
                  <p className="mt-1 text-sm leading-6 text-gray-400">
                    Write a few sentences if you need to handle a custom delivery or handle specific instructions.
                  </p>
                  <textarea
                    id="instructions"
                    name="instructions"
                    rows={3}
                    value={formData.instructions}
                    onChange={handleChange}
                    className="text-left border border-gray-200/20 w-full bg-gray-500/20 py-2 px-3 text-sm leading-6 text-gray-800 dark:text-gray-300 focus:bg-gray-700/20 focus:border-primary/40 hover:border-primary/60 focus:outline-none"
                    placeholder="Please deliver directly to my door, it is room number 3102. You can locate it by going to the entrance and buzzing the door. Someone should be home."
                  />
                </div>
              </div>
            </section>

            <div className="mt-10 border-t border-gray-200 pt-6 sm:items-center sm:justify-between w-full">
              <div className="flex gap-4" onClick={toggleMarketplaceTACPopup}>
                <div>
                  <button
                    type="submit"
                    className="my-2 border border-primary/80 bg-primary/10 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary/30 focus:outline-none focus:ring-1 focus:ring-primary/80"
                  >
                    <CheckmarkIcon />
                  </button>
                </div>

                <p>
                  {" "}
                  I agree to the <span className="text-primary italic">marketplaces terms and conditions</span>{" "}
                </p>
              </div>

              <Popup
                isOpen={openMarketplaceTACPopup}
                onClose={toggleMarketplaceTACPopup}
                className="xl:w-3/5 min-h-64 max-w-full max-h-[80vh] overflow-y-auto relative"
                title={
                  <Popup.Title className="pl-3 pr-3">
                    <div className="flex w-full justify-between">
                      <span className="text-right dark:text-gray-100/50 font-thin ">
                        Marketplace Terms and Conditions
                      </span>
                    </div>
                  </Popup.Title>
                }
              >
                <div className="flex justify-center items-center w-full mt-2 relative pl-4 pr-4 gap-4">
                  <p>MARKETPLACE CONDITIONS </p>
                </div>
              </Popup>

              <div className="flex gap-4" onClick={toggleProviderPromiseAgreementPopup}>
                <div>
                  <button
                    type="submit"
                    className="my-2 border border-primary/80 bg-primary/10 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary/30 focus:outline-none focus:ring-1 focus:ring-primary/80 "
                  >
                    <CheckmarkIcon />
                  </button>
                </div>

                <p>
                  {" "}
                  I agree to the <span className="text-primary italic">service providers promise agreement</span>{" "}
                </p>
              </div>

              <Popup
                isOpen={openProviderssPromiseAgreement}
                onClose={toggleProviderPromiseAgreementPopup}
                className="xl:w-3/5 min-h-64 max-w-full max-h-[80vh] overflow-y-auto relative"
                title={
                  <Popup.Title className="pl-3 pr-3">
                    <div className="flex w-full justify-between">
                      <span className="text-right dark:text-gray-100/50 font-thin">Providers Agreement of service</span>
                    </div>
                  </Popup.Title>
                }
              >
                <div className="flex justify-center items-center w-full mt-2 relative pl-4 pr-4 gap-4">
                  <p>
                    CONDITIONS THAT THE SERVICE PROVIDER PUTS UPON THEMSELVES TO ENSURE SATISFACTION AND PROPER
                    COMPLETION FOR COMPENSATION{" "}
                  </p>
                </div>
              </Popup>

              <div className="flex gap-4" onClick={toggleProvidersServiceTACPopup}>
                <div>
                  <button
                    type="submit"
                    className="my-2 border border-primary/80 bg-primary/10 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary/30 focus:outline-none focus:ring-1 focus:ring-primary/80 "
                  >
                    <CheckmarkIcon />
                  </button>
                </div>

                <p>
                  {" "}
                  I agree to the service providers <span className="text-primary italic">terms and service</span>{" "}
                </p>
              </div>

              <Popup
                isOpen={openProvidersTACgreementPopup}
                onClose={toggleProvidersServiceTACPopup}
                className="xl:w-3/5 min-h-64 max-w-full max-h-[80vh] overflow-y-auto relative"
                title={
                  <Popup.Title className="pl-3 pr-3 ">
                    <div className="flex w-full justify-between">
                      <span className="text-right dark:text-gray-100/50 font-thin">Providers Terms of Service</span>
                    </div>
                  </Popup.Title>
                }
              >
                <div className="flex justify-center items-center w-full mt-2 relative pl-4 pr-4 gap-4">
                  <p>
                    TERMS AND SERVICE PROVIDED BY THE SERVICE PROVIDER. THIS WILL TYPICALLY INCLUDE CONDITIONS AND
                    REQUIREMENTS TO ENSURE CUSTOMER CAN PROVIDE SUCCIFIENT AND NECESSARY RESOURCES IN CASE THE PROVIDER
                    NEEDS
                  </p>
                </div>
              </Popup>

              <button
                type="submit"
                onClick={toggleConfirmationPopup}
                className="min-w-full my-2 border border-primary/80 bg-primary/30 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary/50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-50 sm:order-last "
              >
                CONFIRM AND PAY WITH {NATIVE_TOKEN}
              </button>

              <Popup
                isOpen={openConfirmationPopup}
                onClose={toggleConfirmationPopup}
                className="xl:w-3/5 min-h-64 max-w-full max-h-[80vh] overflow-y-auto relative"
                title={
                  <Popup.Title className="pl-3 pr-3 uppercase">
                    <div className="flex w-full justify-between">
                      <span className="text-left code">{product.title}</span>
                      <span className="text-right dark:text-gray-100/50 font-thin lowercase">{product.location}</span>
                    </div>
                  </Popup.Title>
                }
              >
                <div className="flex justify-center items-center w-full mt-2 relative pl-4 pr-4 gap-4">
                  <Link
                    href={`/message/${product.creatorWallet}`}
                    className="text-center w-full bg-gray-600/20 border border-gray-600 hover:cursor-pointer"
                  >
                    <p>PAY AND COMPLETE</p>
                  </Link>
                </div>
              </Popup>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
