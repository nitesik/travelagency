import { country_list, dzongkhags, siteConfig } from "@/utils/siteConfig";
import { use, useEffect, useState } from "react";
import { useSearchParams, notFound } from "next/navigation";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import icons from "@/utils/icons";
import { CustomSelect } from "@/components";
import { Checkbox } from "react-aria-components";

export type UserDetails = {
  firstName: string;
  middleName: string;
  lastName: string;
  emailAddress: string;
  countryCode: string;
  phoneNumber: string;
  countryOfOrigin: string;
  dateOfArrival: string;
  packageType: string;
  airline: string;
  hasWhatsapp: boolean;
  selectedDzongkhags: string[];
};

export default function InboundComponent() {
  const searchParams = useSearchParams();
  const [packageType, setPackageType] = useState("0");
  const [selectedDzongkhags, setSelectedDzongkhags] = useState<string[]>([]);

  const [userDetails, setUserDetails] = useState<UserDetails>({
    firstName: "",
    middleName: "",
    lastName: "",
    emailAddress: "",
    countryCode: "",
    phoneNumber: "",
    countryOfOrigin: "",
    dateOfArrival: "",
    packageType,
    airline: "DrukAir",
    hasWhatsapp: false,
    selectedDzongkhags: [],
  });

  const router = useRouter();
  useEffect(() => {
    if (["0", "1", "2"].includes(searchParams.get("level") || ""))
      setUserDetails({
        ...userDetails,
        packageType: searchParams.get("level")!,
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.isReady]);

  return (
    <main>
      <Head>
        <title>Inbound Registration</title>
      </Head>
      <div
        className="min-h-[90vh] pt-5 bg-no-repeat bg-center bg-cover flex justify-center lg:px-10 xl:px-0"
        style={{ backgroundImage: `url(${siteConfig.images.homebg})` }}
      >
        <div className="lg:w-[1200px]">
          <div className="mx-5 lg:m-0  flex flex-col gap-10 lg:gap-14">
            <div className="text-2xl lg:text-5xl inline text-white font-semibold text-center mt-[100px] lg:grid gap-10 ">
              <h1>Registration for</h1>
              <h1 className="text-primary">Inbound Tour</h1>
            </div>
            <form
              className="bg-white w-full p-10 rounded-xl flex flex-col shadow-md mb-10"
              action=""
            >
              <div className="lg:w-[70%] flex flex-col gap-5 ">
                <div className="flex flex-col md:flex-row md:justify-between">
                  <label className="flex flex-col items-start gap-2">
                    <h3 className="font-semibold text-xl">First Name *</h3>
                    <input
                      type="text"
                      className="bg-transparent border rounded-md p-3 outline-none w-full"
                      onChange={(e) =>
                        setUserDetails({
                          ...userDetails,
                          firstName: e.target.value,
                        })
                      }
                    />
                  </label>
                  <label className="flex flex-col items-start gap-2">
                    <h3 className="font-semibold text-xl">Middle Name</h3>
                    <input
                      type="text"
                      className="bg-transparent border rounded-md p-3 outline-none w-full"
                      onChange={(e) =>
                        setUserDetails({
                          ...userDetails,
                          middleName: e.target.value,
                        })
                      }
                    />
                  </label>
                  <label className="flex flex-col items-start gap-2">
                    <h3 className="font-semibold text-xl">Last Name</h3>
                    <input
                      type="text"
                      className="bg-transparent border rounded-md p-3 outline-none w-full"
                      onChange={(e) =>
                        setUserDetails({
                          ...userDetails,
                          lastName: e.target.value,
                        })
                      }
                    />
                  </label>
                </div>
                <div className="flex gap-3 ">
                  <div className="flex w-full gap-3 items-center">
                    <label className="flex flex-col items-start gap-2">
                      <h3 className="font-semibold text-xl">Code</h3>
                      <div className="flex gap-1 items-center border rounded-md p-3 w-[100px] justify-start ">
                        <h4 className="font-bold">+</h4>
                        <input
                          required
                          type="number"
                          className="bg-transparent outline-none w-full text-start"
                          onChange={(e) =>
                            setUserDetails({
                              ...userDetails,
                              countryCode: e.target.value,
                            })
                          }
                        />
                      </div>
                    </label>
                    <label className="flex flex-1 flex-col items-start gap-2">
                      <h3 className="font-semibold text-xl">Phone Number*</h3>
                      <div className="flex items-center flex-1 gap-3 w-full">
                        <input
                          type="text"
                          className="bg-transparent border rounded-md p-3  outline-none w-full md:w-fit"
                          onChange={(e) =>
                            setUserDetails({
                              ...userDetails,
                              phoneNumber: e.target.value,
                            })
                          }
                        />
                        <label className="hidden md:flex w-full  flex-1 font-semibold items-center gap-2">
                          <input
                            type="checkbox"
                            checked={userDetails.hasWhatsapp}
                            onChange={(e) =>
                              setUserDetails({
                                ...userDetails,
                                hasWhatsapp: e.target.checked,
                              })
                            }
                            className="w-[25px] h-[25px] "
                          />
                          <h3 className="flex-1  ">
                            Have WhatsApp in this Number?
                          </h3>
                        </label>
                      </div>
                    </label>
                  </div>
                </div>
                <label className="flex md:hidden w-full flex-1 font-semibold items-center gap-2">
                  <input
                    type="checkbox"
                    checked={userDetails.hasWhatsapp}
                    onChange={(e) =>
                      setUserDetails({
                        ...userDetails,
                        hasWhatsapp: e.target.checked,
                      })
                    }
                    className="w-[25px] h-[25px] bg-green-500"
                  />
                  <h3 className="">Have WhatsApp in this Number?</h3>
                </label>
                <label className="flex flex-1 flex-col items-start gap-2">
                  <h3 className="font-semibold text-xl">Email Address*</h3>
                  <input
                    type="text"
                    className="bg-transparent border rounded-md p-3 w-full outline-none"
                    onChange={(e) =>
                      setUserDetails({
                        ...userDetails,
                        emailAddress: e.target.value,
                      })
                    }
                  />
                </label>
                <div className="flex md:flex-row flex-col gap-3">
                  {/* <label className="flex flex-col items-start gap-2">
                    <h3 className="font-semibold text-xl">Country of Origin</h3>
                    <input
                      type="text"
                      className="bg-transparent border rounded-md p-3 outline-none"
                    />
                  </label> */}
                  <div className="relative md:w-[300px] w-full">
                    <CustomSelect
                      userDetails={userDetails}
                      setUserDetails={setUserDetails}
                      header="Country of Origin"
                      listOfCountries={country_list}
                    />
                  </div>
                  <label className="flex flex-col items-start gap-2">
                    <h3 className="font-semibold text-xl">Date of Arrival</h3>
                    <input
                      onChange={(e) =>
                        setUserDetails({
                          ...userDetails,
                          dateOfArrival: new Date(
                            e.target.value
                          ).toDateString(),
                        })
                      }
                      placeholder="date"
                      required
                      type="date"
                      min={
                        new Date(Date.now() + 4.32e8)
                          .toISOString()
                          .split("T")[0]
                      }
                      className="border rounded-lg py-3 px-5 w-full md:w-[300px] outline-none"
                    />
                  </label>
                </div>

                <div className="text-center md:text-start">
                  <h3 className="text-xl font-semibold">Select your package</h3>
                  <div className="flex md:flex-row flex-col items-center gap-3 mt-4 ">
                    <label className="w-full md:w-fit">
                      <div className="border flex flex-col gap-2 items-center h-fit w-full md:w-fit py-3 px-5 rounded-lg select-none cursor-pointer">
                        <span className="flex gap-2 items-center font-semibold">
                          <input
                            value={"0"}
                            checked={userDetails.packageType === "0"}
                            onChange={(e) =>
                              e.currentTarget.checked &&
                              setUserDetails({
                                ...userDetails,
                                packageType: e.target.value,
                              })
                            }
                            type="radio"
                            name="package"
                          />
                          <h5>Budget</h5>
                        </span>
                        <h2 className="text-2xl font-bold">$200/day</h2>
                      </div>
                    </label>
                    <label className="w-full md:w-fit">
                      <div className="border flex flex-col gap-2 items-center h-fit w-full md:w-fit py-3 px-5 rounded-lg select-none cursor-pointer">
                        <span className="flex gap-2 items-center font-semibold">
                          <input
                            value={"1"}
                            checked={userDetails.packageType === "1"}
                            onChange={(e) =>
                              e.currentTarget.checked &&
                              setUserDetails({
                                ...userDetails,
                                packageType: e.target.value,
                              })
                            }
                            type="radio"
                            name="package"
                          />
                          <h5>Intermediate</h5>
                        </span>
                        <h2 className="text-2xl font-bold">$350/day</h2>
                      </div>
                    </label>
                    <label className="w-full md:w-fit">
                      <div className="border flex flex-col gap-2 items-center h-fit w-full md:w-fit py-3 px-5 rounded-lg select-none cursor-pointer">
                        <span className="flex gap-2 items-center font-semibold">
                          <input
                            value={"2"}
                            checked={userDetails.packageType === "2"}
                            onChange={(e) =>
                              e.currentTarget.checked &&
                              setUserDetails({
                                ...userDetails,
                                packageType: e.target.value,
                              })
                            }
                            type="radio"
                            name="package"
                          />
                          <h5>Premium</h5>
                        </span>
                        <h2 className="text-2xl font-bold">$1000/day</h2>
                      </div>
                    </label>
                  </div>
                </div>

                <div>
                  <h1 className="font-semibold text-xl text-center md:text-start">
                    Select your Airline
                  </h1>
                  <div className="mt-4 flex md:flex-row flex-col gap-3">
                    <label className="md:w-fit w-full">
                      <div className="border flex w-full flex-col gap-2 items-center h-fit md:w-fit py-3 px-5 rounded-lg select-none cursor-pointer">
                        <span className="flex gap-2 items-center font-semibold">
                          <input
                            value={"DrukAir"}
                            checked={userDetails.airline === "DrukAir"}
                            onChange={(e) =>
                              e.currentTarget.checked &&
                              setUserDetails({
                                ...userDetails,
                                airline: e.target.value,
                              })
                            }
                            type="radio"
                            name="airline"
                          />
                          <h5>DrukAir</h5>
                          <Image
                            src={icons.drukairLogo}
                            alt="drukair"
                            width={60}
                            height={60}
                            className="rounded-sm"
                          />
                        </span>
                      </div>
                    </label>
                    <label>
                      <div className="border flex flex-col gap-2 items-center h-fit w-full md:w-fit py-3 px-5 rounded-lg select-none cursor-pointer">
                        <span className="flex gap-2 items-center font-semibold">
                          <input
                            value={"Bhutan Airlines"}
                            checked={userDetails.airline === "Bhutan Airlines"}
                            onChange={(e) =>
                              e.currentTarget.checked &&
                              setUserDetails({
                                ...userDetails,
                                airline: e.target.value,
                              })
                            }
                            type="radio"
                            name="airline"
                          />
                          <h5>Bhutan Airlines</h5>
                          <Image
                            src={icons.tashiairLogo}
                            alt="drukair"
                            width={60}
                            height={60}
                          />
                        </span>
                      </div>
                    </label>
                  </div>
                </div>
                <div>
                  <h1 className="text-xl font-semibold">Desired Locations</h1>
                  <div className="mt-4 flex gap-3 flex-wrap">
                    {dzongkhags
                      .sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
                      .map((dzongkhag, index) => (
                        <span
                          key={index}
                          className={`px-3 py-1 border rounded-md cursor-pointer ${
                            userDetails.selectedDzongkhags?.includes(dzongkhag)
                              ? "bg-primary font-semibold"
                              : ""
                          }`}
                          onClick={() => {
                            if (
                              userDetails.selectedDzongkhags.includes(dzongkhag)
                            )
                              setUserDetails({
                                ...userDetails,
                                selectedDzongkhags:
                                  userDetails.selectedDzongkhags.filter(
                                    (prevDzongkhags) =>
                                      prevDzongkhags !== dzongkhag
                                  ),
                              });
                            // setUserDetails({...userDetails, selectedDzongkhags: (prevDzongkhags) => [
                            //   ...prevDzongkhags,
                            //   dzongkhag,
                            // ]});
                            else
                              setUserDetails({
                                ...userDetails,
                                selectedDzongkhags: [
                                  ...userDetails.selectedDzongkhags,
                                  dzongkhag,
                                ],
                              });
                          }}
                        >
                          {dzongkhag}
                        </span>
                      ))}
                  </div>
                </div>

                <button className="bg-primary w-fit px-5 py-3 font-semibold rounded-lg">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
