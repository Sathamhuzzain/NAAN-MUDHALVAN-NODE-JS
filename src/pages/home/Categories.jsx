import React from "react";

const categoryItems = [
  {
    id: 1,
    title: "Main Dish",
    despriction: "(15 items )",
    image: "/images/home/homefood.jpg",
  },
  {
    id: 2,
    title: "Spicy",
    despriction: "(5  items)",
    image: "/images/home/keema.jpg",
  },
  {
    id: 3,
    title: "Newari",
    despriction: "(10 items)",
    image: "/images/home/newari.jpg",
  },
  {
    id: 4,
    title: "Browse All",
    despriction: "(30 Items)",
    image: "/images/home/momo2.jpg",
  },
];

const Categories = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 py-16">
      <div className="text-center">
        <p className=" text-red uppercase tracking-wide font-semibold text-xl">
          Customer Favorites
        </p>
        <h2 className="text-4xl md:text-5xl md:leading-snug font-bold my-2">
          Popular Categories
        </h2>
      </div>

      {/* category cards */}
      <div className="flex flex-col sm:flex-row flex-wrap gap-8 justify-around items-center mt-12 ">
        {categoryItems.map((item, i) => (
          <div
            key={i}
            className="shadow-lg rounded-md bg-white py-6 px-5 w-72 mx-auto text-center cursor-pointer hover:-translate-y-4 transition-all duration-300 z-10"
          >
            <div className="w-full mx-auto flex items-center justify-center">
              <img
                src={item.image}
                alt=""
                className="bg-[#eeaa94] p-5 rounded-full w-28 h-28"
              />
            </div>
            <div className="mt-5 space-y-1">
              <h5 className="text-[#1E1E1E] font-semibold">{item.title}</h5>
              <p className="text-secondary text-sm">{item.despriction}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
