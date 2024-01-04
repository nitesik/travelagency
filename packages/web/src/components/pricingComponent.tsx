import icons from "@/utils/icons";
import Image from "next/image";

export default function PricingComponent() {
  return (
    <div className="flex flex-col gap-10 items-center my-10 font-medium">
      <div className="xl:w-[1200px]">
        <div className="text-center w-full">
          <h1 className="text-5xl font-bold">Pricing</h1>
          <h1 className="text-3xl font-bold mt-7">Inbound</h1>
        </div>
        <div className="flex flex-col items-center lg:flex-row gap-5 lg:gap-0 lg:justify-between mt-[50px] [&>div]:border lg:[&>div]:w-[30%] [&>div]:p-7 [&>div]:rounded-3xl">
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-bold">Premium</h2>
            <p>Great way to taste the Place with one-time tour.</p>
            <h1 className="my-3 text-4xl font-bold">$1000/day</h1>
            <div>
              <p>Per day payment.</p>
              <p>FREE 3-day trial. No credit card required.</p>
            </div>
            <button className="w-full bg-primary py-4 font-bold rounded-full">
              Choose this
            </button>
            <div className="mt-5 grid gap-3">
              <span className="flex gap-3">
                <Image src={icons.tickIcon} alt="tick" width={17} height={17} />
                <p>Luxurious Hotels</p>
              </span>
              <span className="flex gap-3">
                <Image src={icons.tickIcon} alt="tick" width={17} height={17} />
                <p>Luxurious Foods</p>
              </span>
              <span className="flex gap-3">
                <Image src={icons.tickIcon} alt="tick" width={17} height={17} />
                <p>Luxurious Tours</p>
              </span>
              <span className="flex gap-3">
                <Image src={icons.tickIcon} alt="tick" width={17} height={17} />
                <p>Fun Times</p>
              </span>
              <span className="flex gap-3">
                <Image src={icons.tickIcon} alt="tick" width={17} height={17} />
                <p>And other things!</p>
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-3 lg:scale-110 border-primary">
            <div className="flex gap-4 items-center">
              <h2 className="text-2xl font-bold">Intermediate</h2>
              <p className="text-xs px-3 py-1 font-bold bg-primary rounded-xl">
                MOST POPULAR
              </p>
            </div>
            <p>Great way to taste the Place with one-time tour.</p>
            <h1 className="my-3 text-4xl font-bold">$350/day</h1>
            <div>
              <p>Per day payment.</p>
              <p>FREE 3-day trial. No credit card required.</p>
            </div>
            <button className="w-full bg-primary py-4 font-bold rounded-full">
              Choose this
            </button>
            <div className="mt-5 grid gap-3">
              <span className="flex gap-3">
                <Image src={icons.tickIcon} alt="tick" width={17} height={17} />
                <p>Luxurious Hotels</p>
              </span>
              <span className="flex gap-3">
                <Image src={icons.tickIcon} alt="tick" width={17} height={17} />
                <p>Luxurious Foods</p>
              </span>
              <span className="flex gap-3">
                <Image src={icons.tickIcon} alt="tick" width={17} height={17} />
                <p>Luxurious Tours</p>
              </span>
              <span className="flex gap-3">
                <Image src={icons.tickIcon} alt="tick" width={17} height={17} />
                <p>Fun Times</p>
              </span>
              <span className="flex gap-3">
                <Image src={icons.tickIcon} alt="tick" width={17} height={17} />
                <p>And other things!</p>
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-bold">Budget</h2>
            <p>Great way to taste the Place with one-time tour.</p>
            <h1 className="my-3 text-4xl font-bold">$200/day</h1>
            <div>
              <p>Per day payment.</p>
              <p>FREE 3-day trial. No credit card required.</p>
            </div>
            <button className="w-full bg-primary py-4 font-bold rounded-full">
              Choose this
            </button>
            <div className="mt-5 grid gap-3">
              <span className="flex gap-3">
                <Image src={icons.tickIcon} alt="tick" width={17} height={17} />
                <p>Luxurious Hotels</p>
              </span>
              <span className="flex gap-3">
                <Image src={icons.tickIcon} alt="tick" width={17} height={17} />
                <p>Luxurious Foods</p>
              </span>
              <span className="flex gap-3">
                <Image src={icons.tickIcon} alt="tick" width={17} height={17} />
                <p>Luxurious Tours</p>
              </span>
              <span className="flex gap-3">
                <Image src={icons.tickIcon} alt="tick" width={17} height={17} />
                <p>Fun Times</p>
              </span>
              <span className="flex gap-3">
                <Image src={icons.tickIcon} alt="tick" width={17} height={17} />
                <p>And other things!</p>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-[1200px]">
        <div className="text-center w-full">
          <h1 className="text-3xl font-bold mt-7">Outbound</h1>
        </div>
        <div className="flex flex-col items-center lg:flex-row gap-5 lg:gap-0 lg:justify-between mt-[50px] [&>div]:border lg:[&>div]:w-[30%] [&>div]:p-7 [&>div]:rounded-3xl">
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-bold">Premium</h2>
            <p>Great way to taste the Place with one-time tour.</p>
            <h1 className="my-3 text-4xl font-bold">Nu.35,000/month</h1>
            <div>
              <p>Per day payment.</p>
              <p>FREE 3-day trial. No credit card required.</p>
            </div>
            <button className="w-full bg-primary py-4 font-bold rounded-full">
              Choose this
            </button>
            <div className="mt-5 grid gap-3">
              <span className="flex gap-3">
                <Image src={icons.tickIcon} alt="tick" width={17} height={17} />
                <p>Luxurious Hotels</p>
              </span>
              <span className="flex gap-3">
                <Image src={icons.tickIcon} alt="tick" width={17} height={17} />
                <p>Luxurious Foods</p>
              </span>
              <span className="flex gap-3">
                <Image src={icons.tickIcon} alt="tick" width={17} height={17} />
                <p>Luxurious Tours</p>
              </span>
              <span className="flex gap-3">
                <Image src={icons.tickIcon} alt="tick" width={17} height={17} />
                <p>Fun Times</p>
              </span>
              <span className="flex gap-3">
                <Image src={icons.tickIcon} alt="tick" width={17} height={17} />
                <p>And other things!</p>
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-3 lg:scale-110 border-primary">
            <div className="flex gap-4 items-center">
              <h2 className="text-2xl font-bold">Intermediate</h2>
              <p className="text-xs px-3 py-1 font-bold bg-primary rounded-xl">
                MOST POPULAR
              </p>
            </div>
            <p>Great way to taste the Place with one-time tour.</p>
            <h1 className="my-3 text-4xl font-bold">Nu.15,000/week</h1>
            <div>
              <p>Per day payment.</p>
              <p>FREE 3-day trial. No credit card required.</p>
            </div>
            <button className="w-full bg-primary py-4 font-bold rounded-full">
              Choose this
            </button>
            <div className="mt-5 grid gap-3">
              <span className="flex gap-3">
                <Image src={icons.tickIcon} alt="tick" width={17} height={17} />
                <p>Luxurious Hotels</p>
              </span>
              <span className="flex gap-3">
                <Image src={icons.tickIcon} alt="tick" width={17} height={17} />
                <p>Luxurious Foods</p>
              </span>
              <span className="flex gap-3">
                <Image src={icons.tickIcon} alt="tick" width={17} height={17} />
                <p>Luxurious Tours</p>
              </span>
              <span className="flex gap-3">
                <Image src={icons.tickIcon} alt="tick" width={17} height={17} />
                <p>Fun Times</p>
              </span>
              <span className="flex gap-3">
                <Image src={icons.tickIcon} alt="tick" width={17} height={17} />
                <p>And other things!</p>
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-bold">Budget</h2>
            <p>Great way to taste the Place with one-time tour.</p>
            <h1 className="my-3 text-4xl font-bold">Nu.10,000/week</h1>
            <div>
              <p>Per day payment.</p>
              <p>FREE 3-day trial. No credit card required.</p>
            </div>
            <button className="w-full bg-primary py-4 font-bold rounded-full">
              Choose this
            </button>
            <div className="mt-5 grid gap-3">
              <span className="flex gap-3">
                <Image src={icons.tickIcon} alt="tick" width={17} height={17} />
                <p>Luxurious Hotels</p>
              </span>
              <span className="flex gap-3">
                <Image src={icons.tickIcon} alt="tick" width={17} height={17} />
                <p>Luxurious Foods</p>
              </span>
              <span className="flex gap-3">
                <Image src={icons.tickIcon} alt="tick" width={17} height={17} />
                <p>Luxurious Tours</p>
              </span>
              <span className="flex gap-3">
                <Image src={icons.tickIcon} alt="tick" width={17} height={17} />
                <p>Fun Times</p>
              </span>
              <span className="flex gap-3">
                <Image src={icons.tickIcon} alt="tick" width={17} height={17} />
                <p>And other things!</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
