import React from "react";

const MenuImageGrid = ({ items }) => {
  const imagesCount = items.length;

  return (
    <div className="p-2 rounded-lg h-85 w-85">
      {imagesCount === 1 && (
        <div className="w-full h-full">
          <img
            src={items[0].image}
            alt={items[0].name}
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
      )}
      {imagesCount === 2 && (
        <div className="grid grid-cols-2 gap-2">
          {items.map((item) => (
            <div key={item.id} className="w-full h-82">
              <img
                src={item.image}
                alt={item.name}
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
          ))}
        </div>
      )}
      {imagesCount === 3 && (
        <div className="grid grid-rows-2 gap-2">
          <div className="row-span-2">
            <img
              src={items[0].image}
              alt={items[0].name}
              className="object-cover w-full h-40 rounded-lg"
            />
          </div>
          <div className="grid grid-cols-2 gap-2">
            {items.slice(1).map((item) => (
              <div key={item.id} className="">
                <img
                  src={item.image}
                  alt={item.name}
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      )}
      {imagesCount > 3 && (
        <div className="grid grid-flow-col grid-rows-2 gap-2">
          {items.slice(0, 4).map((item, index) => (
            <div
              key={item.id}
              className="relative w-full h-full overflow-hidden rounded-lg"
            >
              <img
                src={item.image}
                alt={item.name}
                className="object-cover w-full h-full"
              />
              {index === 3 && items.length > 4 && (
                <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-white">
                  +{items.length - 4}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuImageGrid;
