import { profileData } from "@/constant/data";
import { Button } from "../ui/button";
import ShinyText from "./shinyText";
import { Separator } from "../ui/separator";


const HeroSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center h-screen">
      <div className="col-span-1 space-y-8">
        <div>
          <ShinyText
            text="Hi I am"
            disabled={false}
            speed={3}
            className="text-lg font-medium"
          />
          <div className="text-2xl font-medium text-gray-300">
            {profileData.name}
          </div>
        </div>

        <div className="text-6xl font-semibold text-orange-500">
          {profileData.role}
        </div>
        <div className="flex gap-6">
          <profileData.insta />
          <profileData.linked_in />
          <profileData.github />
        </div>
        <div className="flex gap-6">
          <Button
            variant="outline"
            size={"lg"}
            className="text-lg hover:bg-orange-500 focus:border-orange-500"
          >
            Hire Me
          </Button>
          <Button
            variant="outline"
            size={"lg"}
            className="text-lg hover:bg-orange-500 focus:border-orange-500"
          >
            Download CV
          </Button>
        </div>
        <div className="pt-8">
          <ExpCard />
        </div>
      </div>
      <img src="./dp.jpeg" className="h-[450px] w-[450px]"/> {/* <BackgroundBeams /> */}
    </div>
  );
};

export default HeroSection;

const ExpCard = () => {
  return (
    <div className="bg-[#1b1b1b] rounded flex justify-center items-center gap-8 px-8 py-5">
      <div className="space-y-1">
        <div className="text-orange-500 font-semibold text-xl">5+</div>
        <div className="font-bold text-sm">Experiences</div>
      </div>
      <Separator
        orientation="vertical"
        className="border border-white py-6 opacity-30"
      />

      <div className="space-y-1">
        <div className="text-orange-500 font-semibold text-xl">20+</div>
        <div className="font-bold text-sm">Project done</div>
      </div>
      <Separator
        orientation="vertical"
        className="border border-white py-6 opacity-30"
      />

      <div className="space-y-1">
        <div className="text-orange-500 font-semibold text-xl">80+</div>
        <div className="font-bold text-sm">Happy Clients</div>
      </div>
    </div>
  );
};
