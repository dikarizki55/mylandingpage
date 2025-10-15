import Categories from "./components/Categories";
import Header from "./components/Header";
import ProductShowcase from "./components/ProductShowcase";
import { newArrivals, topSelling } from "./data";
import Comment from "./components/Comment";

export default function Home() {
  return (
    <div className="">
      <Header />
      <ProductShowcase title="New Arrivals" showAllUrl="#" data={newArrivals} />
      <div className=" w-full px-5 lg:px-20">
        <div className=" w-full border-b lg:border-b-2 border-b-[rgba(0,0,0,0.2)]"></div>
      </div>
      <ProductShowcase title="Top Selling" showAllUrl="#" data={topSelling} />
      <Categories />
      <Comment />
    </div>
  );
}
