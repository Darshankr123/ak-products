import React from "react";

const Btns = ({ filteredBtns, filterBtnFun }) => {
  return (
    <div className="mb-6">
      <section className="flex gap-4">
        {filteredBtns.map((prod, index) => {
          return (
            <div key={index}>
              <button
                className="transition ease-in-out delay-150 bg-lime-500 hover:scale-110 hover:bg-lime-700 duration-300 px-4 py-1 rounded-lg text-white capitalize"
                onClick={() => filterBtnFun(prod)}
              >
                {prod}
              </button>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Btns;
