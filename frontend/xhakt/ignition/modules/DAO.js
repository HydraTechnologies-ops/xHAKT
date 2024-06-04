import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";



export default buildModule("DaoModule", (m) => {

  const dao = m.contract("DAO", {
    value: lockedAmount,
  });

  return { lock };
});
