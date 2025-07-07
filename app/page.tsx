import Desktop from "./(Desktop)/Desktop";
import Mobile from "./(Mobile)/Mobile";

const page = () => {
  return (
    <div>
      <div className=" block xl:hidden">
        <Mobile></Mobile>
      </div>
      <div className=" hidden xl:block">
        <Desktop></Desktop>
      </div>
    </div>
  );
};

export default page;
