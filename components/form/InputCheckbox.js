import React from "react";

function InputCheckbox() {
  return (
    <div class="md:flex md:items-center mb-6">
      <div class="md:w-1/3"></div>
      <label class="md:w-2/3 block text-gray-500 font-bold">
        <input class="mr-2 leading-tight" type="checkbox" />
        <span className="text-sm">Send me your newsletter!</span>
      </label>
    </div>
  );
}

export default InputCheckbox;
