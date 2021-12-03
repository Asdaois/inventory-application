import React from "react";

function ButtonSubmit({value}) {
  return (
    <div class="md:flex md:items-center">
      <div class="md:w-1/3"></div>
      <div class="md:w-2/3">
        <button
          class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          {value}
        </button>
      </div>
    </div>
  );
}

export default ButtonSubmit;
