import ProductShowcase from "../../components/ProductShowcase";
import Price from "../../components/ProductShowcase/Price";
import Star from "../../components/ProductShowcase/Star";
import { commentReview, productDetail, topSelling } from "../../data";
import Carousel from "./components/Carousel";
import Color from "./components/Color";
import DetailsTab from "./components/DetailsTab";
import InputNumber from "./components/InputNumber";
import Path from "./components/Path";
import Size from "./components/Size";
import { DetailsProvider } from "./hooks/useDetails";

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const data = productDetail.find((item) => item.id === id);

  if (!data)
    return (
      <div className=" text-center text-2xl font-bold mt-10">
        Product Not Found! 404
      </div>
    );

  return (
    <div className=" px-5 lg:max-w-[1280px] lg:mx-auto">
      <DetailsProvider>
        <div className="w-full border-t border-t-black/10">
          <Path className="my-7" url={data.path} />
          <div className=" w-full lg:grid lg:grid-cols-2 flex flex-col gap-5">
            <Carousel data={data.data.image} />
            <div className=" flex flex-col">
              <h1 className=" font-montserrat uppercase text-3xl">
                {data.data.name.replace(/-/g, "\u2011")}
              </h1>
              <div className=" flex gap-3 items-center mt-3">
                <Star rate={data.data.rate} size={20} />
                {`${data.data.rate}/5`}
              </div>
              <Price
                className=" mt-3"
                textSize={24}
                price={data.data.price}
                discount={data.data.discount}
              />
              <p className=" text-black/60 mt-3">{data.data.description}</p>
              <hr className=" text-black/20 my-5" />
              <Color colorData={data.data.image.map((item) => item.color)} />
              <hr className=" text-black/20 my-5" />
              <Size data={data.data.size} />
              <hr className=" text-black/20 my-5" />
              <div className=" flex gap-3">
                <InputNumber />
                <button className=" bg-black text-white py-4 flex-1 rounded-full">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </DetailsProvider>
      <DetailsTab className={" mt-5"} review={commentReview} />
      <ProductShowcase
        title="you might also like"
        showAllUrl="#"
        data={topSelling}
      />
    </div>
  );
}
