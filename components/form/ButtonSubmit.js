import React from "react";

function ButtonSubmit({ value }) {
  return (
    <tr className="md:flex md:items-center">
      <tr className="md:w-1/3"></tr>
      <tr className="md:w-2/3">
        <button
          className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded cursor-pointer"
          type="submit"
        >
          {value}
        </button>
      </tr>
    </tr>
  );
}

export default ButtonSubmit;
