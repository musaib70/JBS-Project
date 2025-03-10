import HeroSectionVid from "@/components/OurServices/common/HeroSectionVid";
import OurTeamPageSection from "@/components/OurTeamPage";


const OurTeam = () => {
  return (
    <>
      <HeroSectionVid
        backgroundVideo="/assets/AboutUs/banner.mp4"
        heading="Our Teams"
        isRounded={true}
      />
      <OurTeamPageSection />

    </>
  );
};

export default OurTeam;
