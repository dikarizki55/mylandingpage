// import Desktop from "./(Desktop)/Desktop";
// import Mobile from "./(Mobile)/Mobile";
import NewLanding from "./(NewLandingPage)/NewLanding";

const Page = () => {
  return (
    <div>
      <NewLanding />
      {/* <div className=" block xl:hidden">
        <Mobile {...pageProps}></Mobile>
      </div>
      <div className=" hidden xl:block">
        <Desktop {...pageProps}></Desktop>
      </div> */}
    </div>
  );
};

export default Page;
