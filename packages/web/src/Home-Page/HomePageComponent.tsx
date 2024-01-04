import { CustomButton, PricingComponent } from "@/components";
import { siteConfig } from "@/utils/siteConfig";
import icons from "@/utils/icons";
import Image from "next/image";

export default function HomePageComponent() {
  return (
    <main className="min-h-screen">
      <div
        className="min-h-[90vh] pt-5 bg-no-repeat bg-center bg-cover flex justify-center"
        style={{ backgroundImage: `url(${siteConfig.images.homebg})` }}
      >
        <div className="xl:w-[1200px]  mx-5 lg:m-0  flex flex-col gap-10 lg:gap-14">
          <div className="text-2xl lg:text-5xl inline text-white font-semibold text-center mt-[100px] lg:grid gap-10 ">
            <h1>
              The <span className="text-primary">Trusted Companion</span> for
            </h1>
            <h1 className="">Expanding Travel Agencies & Tour Operators</h1>
          </div>

          <div className="text-xl lg:text-3xl text-white text-center leading-[40px] lg:leading-[60px]">
            <p>
              <span className="text-primary">Inspiring Travel Adventures</span>{" "}
              and <span className="text-primary">Success Stories</span> Since
              2012 Exclusively Partnering with a Handpicked Group of{" "}
              <span className="text-primary">5 Clients at a Time</span>
            </p>
          </div>

          <div className="flex flex-col items-center gap-10 font-semibold">
            <CustomButton>Get Started</CustomButton>
            <p className="text-white">Only 3 slots available</p>
          </div>

          <div className="w-full flex justify-between lg:mt-[75px]  ">
            {siteConfig.imageGroupOne().map((image, index) => (
              <div
                key={index}
                className="w-[23%] lg:w-[24%] rounded-xl overflow-hidden lg:h-[300px] h-[120px]  "
              >
                <div
                  className="w-full h-full bg-cover bg-center hover:scale-110 ease-in transition-all "
                  style={{ backgroundImage: `url(${image})` }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-[60px]">
        <div className="xl:w-[1200px]  mx-5 lg:m-0 ">
          <div className="text-center">
            <h1 className="text-4xl font-bold">How This Agency Works</h1>
            <p className="text-xl mt-3 font-semibold">
              Simplicity in Travel Planning: Effortless Subscription with the
              Flexibility to Pause or Cancel at Any Time
            </p>
          </div>

          <div className="w-full mt-[50px] gap-10 lg:gap-0 flex items-center lg:items-start lg:justify-between flex-col lg:flex-row">
            <div className="w-[70%] lg:w-[30%] text-center flex items-center flex-col  gap-5">
              <Image
                src={icons.requestIcon}
                alt="icon"
                width={43}
                height={43}
              />
              <h3 className="font-bold text-xl">
                Secure Your Complimentary Trial & Make a Request
              </h3>
              <p className="font-semibold">
                Unlock Your Complimentary 3-Day Trial and Request Unlimited
                Travels. No Credit Card Needed to Begin.
              </p>
            </div>
            <div className="w-[70%] lg:w-[30%] text-center flex items-center flex-col gap-3">
              <Image src={icons.reviewIcon} alt="icon" width={43} height={43} />
              <h3 className="font-bold text-xl">Receive & Review</h3>
              <p className="font-semibold">
                Receive your confirmation within 1-3 business days on average.
              </p>
            </div>
            <div className="w-[70%] lg:w-[30%] text-center flex items-center flex-col gap-3">
              <Image
                src={icons.feedbackIcon}
                alt="icon"
                width={43}
                height={43}
              />
              <h3 className="font-bold text-xl">Refine with feedback</h3>
              <p className="font-semibold">
                Send your feedback and we&apos;ll refine the tour until
                you&apos;re 100% happy with it. Move on to the next tour
                request.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center my-[75px]">
        <div className="xl:w-[1200px]  mx-5 lg:m-0  bg-secondary h-fit py-10 px-12 text-center leading-[40px] gap-5 text-xl text-white font-medium rounded-xl flex flex-col items-center">
          <Image
            src={icons.quotationIcon}
            alt="icon"
            width={34}
            height={34}
            className="invert"
          />
          <p className="">
            I&apos;ve partnered with BhutanUpwardTravels on various tours.
            <span className="text-primary font-semibold">
              They consistently delivered outstanding outcomes
            </span>
            , meeting our visual preferences while ensuring timely completion
            and maintaining transparent communication throughout the process
          </p>
          <div>
            <h2 className="font-bold">- Sujan Giri</h2>
            <p className="text-base text-gray-400">RTC Passout</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center" id="benefits">
        <div className="xl:w-[1200px]  mx-5 lg:m-0 ">
          <div className="text-center flex flex-col gap-5 items-center">
            <h1 className="text-4xl font-bold">Partnership Benefits</h1>
            <h4 className="text-xl font-semibold text-gray-600 mb-5">
              Try before you buy with a FREE 3-day trial. No credit card
              required.
            </h4>
            <CustomButton>Get Started</CustomButton>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 mt-10 gap-10">
            <div className="flex flex-col items-center gap-3 text-center">
              <Image
                src={icons.feedbackIcon}
                alt="icon"
                width={45}
                height={45}
              />
              <h1 className="text-2xl font-semibold">Design Project</h1>
              <p>
                Add unlimited design tasks in your own project in Teamwork.com
                and bring your entire team on board.
              </p>
            </div>
            <div className="flex flex-col items-center gap-3 text-center">
              <Image
                src={icons.feedbackIcon}
                alt="icon"
                width={45}
                height={45}
              />
              <h1 className="text-2xl font-semibold">Design Project</h1>
              <p>
                Add unlimited design tasks in your own project in Teamwork.com
                and bring your entire team on board.
              </p>
            </div>
            <div className="flex flex-col items-center gap-3 text-center">
              <Image
                src={icons.feedbackIcon}
                alt="icon"
                width={45}
                height={45}
              />
              <h1 className="text-2xl font-semibold">Design Project</h1>
              <p>
                Add unlimited design tasks in your own project in Teamwork.com
                and bring your entire team on board.
              </p>
            </div>
            <div className="flex flex-col items-center gap-3 text-center">
              <Image
                src={icons.feedbackIcon}
                alt="icon"
                width={45}
                height={45}
              />
              <h1 className="text-2xl font-semibold">Design Project</h1>
              <p>
                Add unlimited design tasks in your own project in Teamwork.com
                and bring your entire team on board.
              </p>
            </div>
            <div className="flex flex-col items-center gap-3 text-center">
              <Image
                src={icons.feedbackIcon}
                alt="icon"
                width={45}
                height={45}
              />
              <h1 className="text-2xl font-semibold">Design Project</h1>
              <p>
                Add unlimited design tasks in your own project in Teamwork.com
                and bring your entire team on board.
              </p>
            </div>
            <div className="flex flex-col items-center gap-3 text-center">
              <Image
                src={icons.feedbackIcon}
                alt="icon"
                width={45}
                height={45}
              />
              <h1 className="text-2xl font-semibold">Design Project</h1>
              <p>
                Add unlimited design tasks in your own project in Teamwork.com
                and bring your entire team on board.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center my-[50px]">
        <div className="xl:w-[1200px]  mx-5 lg:m-0  bg-tertiary flex flex-col items-center h-fit py-10 px-12 rounded-xl text-center leading-[40px] gap-5 text-xl font-medium ">
          <Image src={icons.quotationIcon} alt="icon" width={34} height={34} />
          <p>
            BhutanUpwardTravels stands out as the top-notch tour team I&apos;ve
            collaborated with. Their strategy in crafting designs that enhance
            engagement, coupled with a keen eye for the latest trends in travel
            aesthetics, truly distinguishes them. They don&apos;t merely adhere
            to specifications; instead, they exceed expectations by infusing
            innovation and expertise into each tour. Collaborating with them
            reveals that they are more than tour teams - they are visionary
            contributors to the travel industry and absolute stars in their
            craft.
          </p>
          <div>
            <h2 className="font-bold">- Manish Giri</h2>
            <p className="text-base text-gray-400">CEO</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="xl:w-[1200px]  mx-5 lg:m-0  flex border items-center lg:flex-row flex-col lg:text-start text-center gap-10 border-[#E5E5E5] p-10 rounded-3xl">
          <div className="flex-1 flex flex-col justify-between gap-7 lg:gap-0">
            <h1 className="font-bold text-3xl">Not sure if this is for you?</h1>
            <p className="font-medium text-lg">
              Join me for a brief 30-minute call to address all your queries and
              determine the perfect plan for your needs.
            </p>
          </div>
          <CustomButton>Book a call</CustomButton>
        </div>
      </div>

      <PricingComponent />

      <div className="flex justify-center my-[75px]">
        <div className="lg:w-[1200px] mx-5 lg:m-0 ">
          <h1 className="text-4xl font-bold border-b border-black pb-3">
            About Us
          </h1>
          <div className="flex mt-10 gap-10 flex-col-reverse lg:flex-row">
            <div className="flex-1">
              <div className="flex flex-col gap-2 text-lg font-semibold">
                <span>
                  Bhutan Upward Travels is a new company established in 2012
                  with an aim to do business in the right way. We want to deal
                  honestly with our guests and government.
                </span>
                <span>
                  We want to give full value for their money to our guests. Each
                  guest is unique and we want to serve our guests uniquely even
                  in a group. Please inform us about your specific needs. We
                  want our guests to come back again to Bhutan through us.
                </span>
                <span>
                  For this to happen, our guests would have to be at least
                  delighted by our services. We would like to give you an
                  authentic Bhutanese experience in Bhutan.
                </span>
                <span className="mt-5">
                  This would among others include:
                  <ol className="mt-3 text-base font-medium">
                    <div className="grid gap-4 ml-7 list-decimal">
                      <li>
                        Joining a Bhutanese community in their regular
                        activities; like paddy transplanting, apple and orange
                        plucking, paddy harvesting, etc.
                      </li>
                      <li>
                        Joining a nomadic family as they take care of their yaks
                        in the hills.
                      </li>
                      <li>Living in a farm house with very basic amenities.</li>
                      <li>
                        Joining the Bhutanese in their social activities like
                        festivals, archery and other nature treks like bird
                        watching.
                      </li>
                      <li>Short day hikes</li>
                      <li>Cultural tour (Both by car and/or on foot).</li>
                      <li>Bike tours</li>
                      <li>Rafting</li>
                    </div>
                  </ol>
                </span>
              </div>
            </div>
            <div className="lg:w-[400px] flex lg:inline justify-center">
              <div
                className="w-[90%] lg:w-full h-[500px] bg-center bg-cover rounded-3xl sticky top-[6rem]"
                style={{
                  backgroundImage: `url(${siteConfig.images.aboutuspic})`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
