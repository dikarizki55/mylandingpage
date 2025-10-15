import Banner from "./components/Banner";
import ItemSection from "./components/ItemSection";

export default function Home() {
  return (
    <>
      <Banner />
      <div className=" w-full flex flex-col gap-10">
        <ItemSection
          title={"New Year Selection"}
          data={[
            {
              title: "Leader Bag",
              price: "$943",
              discountPrice: "$532",
              src: "/portfolio/bag/picture/bag1.png",
            },
            {
              title: "Hermes Birkin Bag",
              price: "$768",
              discountPrice: "$654",
              src: "/portfolio/bag/picture/bag4.png",
            },
            {
              title: "Hiks Premium Bag",
              price: "$943",
              discountPrice: "$532",
              src: "/portfolio/bag/picture/bag7.png",
            },
          ]}
        />
        <ItemSection
          title={"All Collection"}
          data={[
            {
              title: "Leader Bag",
              price: "$943",
              discountPrice: "$532",
              src: "/portfolio/bag/picture/bag1.png",
            },
            {
              title: "Hermes Birkin Bag",
              price: "$768",
              discountPrice: "$654",
              src: "/portfolio/bag/picture/bag4.png",
            },
            {
              title: "Hiks Premium Bag",
              price: "$943",
              discountPrice: "$532",
              src: "/portfolio/bag/picture/bag7.png",
            },
          ]}
        />
      </div>
    </>
  );
}
