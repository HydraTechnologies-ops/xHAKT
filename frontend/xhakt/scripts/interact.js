import dotenv from "dotenv";
dotenv.config();

async function main() {
  const hre = await import("hardhat");
  const { ethers } = hre.default;
  const provider = new ethers.JsonRpcProvider(process.env.TESTNET_ENDPOINT);
  const privateKey = process.env.TESTNET_OPERATOR_PRIVATE_KEY;

  if (!privateKey) {
    throw new Error(
      "TESTNET_OPERATOR_PRIVATE_KEY is not defined in the .env file"
    );
  }

  const wallet = new ethers.Wallet(privateKey, provider);

  console.log("Using account:", wallet.address);

  // Replace with your deployed contract address
  const daoAddress = "0x607bc417533f21387732eEF75e16d265f80bDcfB";
  const DAO = await ethers.getContractFactory("DAO");
  const dao = DAO.attach(daoAddress).connect(wallet);

  // Add a member (replace with a valid address)
  const memberAddress = "0xb08718e4f45438b63837b5bbace964696d023fd1";
  const addMemberTx = await dao.addMember(memberAddress);
  await addMemberTx.wait();
  console.log(`Member added: ${memberAddress}`);

  // Create a proposal
  const description = "Proposal to fund project X";
  const createProposalTx = await dao.createProposal(description);
  await createProposalTx.wait();
  console.log(`Proposal created: ${description}`);

  // Listen for events
  dao.on("ProposalCreated", (id, description, proposer) => {
    console.log(
      `ProposalCreated event received: ID=${id}, Description=${description}, Proposer=${proposer}`
    );
  });

  dao.on("Voted", (proposalId, voter) => {
    console.log(
      `Voted event received: Proposal ID=${proposalId}, Voter=${voter}`
    );
  });

  dao.on("Funded", (proposalId, funder) => {
    console.log(
      `Funded event received: Proposal ID=${proposalId}, Funder=${funder}`
    );
  });

  // Vote on a proposal
  const proposalId = 1; // Assuming the proposal ID is 1
  const voteTx = await dao.vote(proposalId);
  await voteTx.wait();
  console.log(`Voted on proposal ID: ${proposalId}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
