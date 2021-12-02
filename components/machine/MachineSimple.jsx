import React from "react";

function MachineSimple({machine}) {
  return (
    <div className="">
      <p>
        {machine.serial}: {machine.machine_type?.name}
      </p>
      <p>{machine.details}</p>
      <p>{machine.status}</p>
    </div>
  );
}

export default MachineSimple;
