import { ethers } from "ethers";
import {
  Client,
  ContractCallQuery,
  ContractExecuteTransaction,
  PrivateKey,
} from "@hashgraph/sdk";
import DAO from "./artifacts/contracts/DAO.sol/DAO.json";
import Home from "./pages/home.js";

const privateKey = import.meta.env.VITE_TESTNET_OPERATOR_PRIVATE_KEY;
const testnetEndPoint = import.meta.env.VITE_TESTNET_ENDPOINT;
const hederaAccountId = import.meta.env.VITE_HEDERA_ACCOUNT_ID;
const derPrivateKey = import.meta.env.VITE_DER_ENCODED_PRIVATE_KEY;
const contractId = "0.0.4410158";

const Dashboard = () => {
  const container = document.createElement("div");
  container.className = "dashboard-container";

  const header = document.createElement("header");
  header.className = "dashboard-header";
  header.textContent = "xHAKT Dashboard";

  const main = document.createElement("main");
  main.className = "dashboard-main";

  const sidebar = document.createElement("aside");
  sidebar.className = "dashboard-sidebar";

  const content = document.createElement("section");
  content.className = "dashboard-content";
  Home(content);

  const uploadForm = document.createElement("form");
  uploadForm.id = "upload-form";
  uploadForm.innerHTML = `
    <h2 class="section-title">Upload Files</h2>
    <label for="filepicker">Select files:</label>
    <input type="file" id="filepicker" multiple>
    <button type="submit">Upload</button>
    <div id="output"></div>
  `;

  sidebar.innerHTML = `
    <nav>
      <ul>
        <li><a href="#" id="home-link">Home</a></li>
        <li><a href="#" id="data-link">Data</a></li>
        <li><a href="#" id="settings-link">Settings</a></li>
        <li><a href="#" id="upload-link">Upload</a></li>
        <li><a href="#" id="dao-link">DAO</a></li>
      </ul>
    </nav>
    <footer class="footer">
      <ul>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Privacy Policy</a></li>
      </ul>
      <p>&copy; 2024 xHAKT</p>
    </footer>
  `;

  sidebar.addEventListener("click", (event) => {
    event.preventDefault();
    if (event.target.tagName === "A") {
      const id = event.target.id;
      updateContent(id, content);
    }
  });

  const updateContent = (id, content) => {
    switch (id) {
      case "home-link":
        Home(content);
        break;
      case "dao-link":
        content.innerHTML = `
          <h2 class="section-title">DAO Voting</h2>
          <div id="dao-content">
            <h3 class="section-subtitle">Create a Proposal</h3>
            <form id="create-proposal-form">
              <input type="text" id="proposal-description" placeholder="Proposal Description" required>
              <button type="submit">Create Proposal</button>
            </form>
            <h3 class="section-subtitle">Proposals</h3>
            <div id="proposals"></div>
          </div>
        `;
        initDAO();
        break;
      case "data-link":
        content.innerHTML = `
          <h2 class="section-title">Phytoplankton Facts</h2>
          <ul>
            <li>Phytoplankton are microscopic marine algae.</li>
            <li>They form the foundation of the aquatic food web.</li>
            <li>Phytoplankton produce about half of the oxygen we breathe.</li>
            <li>They play a crucial role in carbon sequestration by absorbing CO2 during photosynthesis.</li>
          </ul>
          <h3 class="section-title">Importance of Phytoplankton</h3>
          <p>Phytoplankton are vital for life on Earth. They form the basis of the marine food web, supporting fish, whales, and other marine life. By producing oxygen and absorbing CO2, they help regulate our climate and sustain marine ecosystems.</p>
          <h3 class="section-title">Global Phytoplankton Distribution Slideshow</h3>
          <div class="slideshow-container">
            <div class="slideshow">
              <img class="slide" src="https://eoimages.gsfc.nasa.gov/images/globalmaps/data/MY1DMM_CHLORA/MY1DMM_CHLORA_2002-07.JPEG" alt="Global Map Chlorophyll Image 1" data-value="1">
              <img class="slide" src="https://eoimages.gsfc.nasa.gov/images/globalmaps/data/MY1DMM_CHLORA/MY1DMM_CHLORA_2002-08.JPEG" alt="Global Map Chlorophyll Image 2" data-value="2">
              <img class="slide" src="https://eoimages.gsfc.nasa.gov/images/globalmaps/data/MY1DMM_CHLORA/MY1DMM_CHLORA_2002-09.JPEG" alt="Global Map Chlorophyll Image 3" data-value="3">
            </div>
            <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
            <a class="next" onclick="plusSlides(1)">&#10095;</a>
          </div>
          <h3 class="section-title">Helpful Resources</h3>
          <ul class="resources">
            <li><a href="https://oceanservice.noaa.gov/facts/phyto.html" target="_blank">Phytoplankton Overview | NOAA</a></li>
            <li><a href="https://earthobservatory.nasa.gov/features/Phytoplankton" target="_blank">Phytoplankton | NASA Earth Observatory</a></li>
            <li><a href="https://www.usgs.gov/centers/wetland-and-aquatic-research-center/science/carbon-sequestration" target="_blank">Carbon Sequestration | USGS</a></li>
            <li><a href="https://www.noaa.gov/education/resource-collections/climate/carbon-sequestration" target="_blank">What is Carbon Sequestration? | NOAA</a></li>
            <li><a href="https://www.nationalgeographic.org/encyclopedia/marine-ecosystem/" target="_blank">Marine Ecosystem | National Geographic</a></li>
            <li><a href="https://www.marinebio.org/creatures/phytoplankton/" target="_blank">Phytoplankton and the Marine Food Web | MarineBio</a></li>
            <li><a href="https://academic.oup.com/plankt" target="_blank">Journal of Plankton Research</a></li>
            <li><a href="https://agupubs.onlinelibrary.wiley.com/journal/19449224" target="_blank">Global Biogeochemical Cycles Journal</a></li>
            <li><a href="https://www.springer.com/gp/book/9783030057434" target="_blank">Phytoplankton Ecology: Basics and Applications</a></li>
            <li><a href="https://www.amazon.com/Introduction-Marine-Biology-George-Karleskint/dp/1305254289" target="_blank">Introduction to Marine Biology</a></li>
            <li><a href="https://www.coursera.org/courses?query=marine%20biology" target="_blank">Coursera: Marine Biology Courses</a></li>
            <li><a href="https://www.edx.org/course/climate-change-the-ocean" target="_blank">edX: Climate Change and the Ocean</a></li>
            <li><a href="https://mynasadata.larc.nasa.gov/basic-page/global-phytoplankton-distribution" target="_blank">Global Phytoplankton Distribution | My NASA Data</a></li>
          </ul>
        `;
        initSlideshow();
        break;
      case "settings-link":
        content.innerHTML = `
          <h2 class="section-title">Settings</h2>
          <p>Manage your account settings and preferences here.</p>
        `;
        break;
      case "upload-link":
        content.innerHTML = "";
        content.appendChild(uploadForm);
        break;
      default:
        Home(content);
        break;
    }
  };

  // Set default content to home on initial load
  main.appendChild(sidebar);
  main.appendChild(content);

  container.appendChild(header);
  container.appendChild(main);

  // Initialize event polling
  pollEvents();

  return container;
};

const initDAO = async () => {
  const client = Client.forTestnet();
  client.setOperator(hederaAccountId, PrivateKey.fromStringDer(derPrivateKey));

  const abi = DAO.abi;

  document
    .getElementById("create-proposal-form")
    .addEventListener("submit", async (event) => {
      event.preventDefault();
      const description = document.getElementById("proposal-description").value;

      const functionCall = new ethers.utils.Interface(abi).encodeFunctionData(
        "createProposal",
        [description]
      );
      const tx = new ContractExecuteTransaction()
        .setContractId(contractId)
        .setGas(100000)
        .setFunctionParameters(functionCall)
        .freezeWith(client);

      const signTx = await tx.sign(PrivateKey.fromStringDer(derPrivateKey));
      const txResponse = await signTx.execute(client);
      await txResponse.getReceipt(client);
      loadProposals();
    });

  loadProposals();
};

const loadProposals = async () => {
  const client = Client.forTestnet();
  client.setOperator(hederaAccountId, PrivateKey.fromStringDer(derPrivateKey));

  const abi = DAO.abi;

  const proposalsContainer = document.getElementById("proposals");
  proposalsContainer.innerHTML = "";

  const functionCall = new ethers.utils.Interface(abi).encodeFunctionData(
    "getProposals",
    []
  );
  const query = new ContractCallQuery()
    .setContractId(contractId)
    .setFunctionParameters(functionCall)
    .setGas(100000);

  const result = await query.execute(client);
  const proposals = new ethers.utils.Interface(abi).decodeFunctionResult(
    "getProposals",
    result.asBytes()
  );

  proposals.forEach((proposal, index) => {
    const proposalElement = document.createElement("div");
    proposalElement.className = "proposal";
    proposalElement.innerHTML = `
      <p><strong>Proposal ID:</strong> ${proposal.id}</p>
      <p><strong>Description:</strong> ${proposal.description}</p>
      <p><strong>Proposer:</strong> ${proposal.proposer}</p>
      <p><strong>Votes:</strong> ${proposal.voteCount}</p>
      <button class="vote-button" onclick="vote(${proposal.id})">Vote</button>
    `;
    proposalsContainer.appendChild(proposalElement);
  });
};

const initSlideshow = () => {
  let slideIndex = 1;
  showSlides(slideIndex);

  window.plusSlides = function (n) {
    showSlides((slideIndex += n));
  };

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
  }
};

const pollEvents = async () => {
  const provider = new ethers.JsonRpcProvider(testnetEndPoint);

  const abi = DAO.abi;

  let lastBlock = await provider.getBlockNumber();

  setInterval(async () => {
    const currentBlock = await provider.getBlockNumber();
    for (let i = lastBlock + 1; i <= currentBlock; i++) {
      const block = await provider.getBlockWithTransactions(i);
      block.transactions.forEach(async (tx) => {
        try {
          const receipt = await provider.getTransactionReceipt(tx.hash);
          receipt.logs.forEach((log) => {
            try {
              const parsedLog = new ethers.utils.Interface(abi).parseLog(log);
              if (parsedLog.name === "ProposalCreated") {
                const { id, description, proposer } = parsedLog.args;
                const proposalsContainer = document.getElementById("proposals");
                const proposalElement = document.createElement("div");
                proposalElement.className = "proposal";
                proposalElement.innerHTML = `
                  <p><strong>Proposal ID:</strong> ${id}</p>
                  <p><strong>Description:</strong> ${description}</p>
                  <p><strong>Proposer:</strong> ${proposer}</p>
                  <button class="vote-button" onclick="vote(${id})">Vote</button>
                `;
                proposalsContainer.appendChild(proposalElement);
              } else if (parsedLog.name === "Voted") {
                const { proposalId, voter } = parsedLog.args;
                const proposalsContainer = document.getElementById("proposals");
                const proposalElement = document.createElement("div");
                proposalElement.className = "proposal";
                proposalElement.innerHTML = `
                  <p><strong>Vote cast on Proposal ID:</strong> ${proposalId} by ${voter}</p>
                `;
                proposalsContainer.appendChild(proposalElement);
              } else if (parsedLog.name === "Funded") {
                const { proposalId, funder } = parsedLog.args;
                const proposalsContainer = document.getElementById("proposals");
                const proposalElement = document.createElement("div");
                proposalElement.className = "proposal";
                proposalElement.innerHTML = `
                  <p><strong>Proposal ID:</strong> ${proposalId} funded by ${funder}</p>
                `;
                proposalsContainer.appendChild(proposalElement);
              }
            } catch (err) {
              console.error("Error parsing log:", err);
            }
          });
        } catch (err) {
          console.error("Error getting transaction receipt:", err);
        }
      });
    }
    lastBlock = currentBlock;
  }, 60000); // Poll every 60 seconds
};

window.vote = async (id) => {
  const client = Client.forTestnet();
  client.setOperator(hederaAccountId, PrivateKey.fromStringDer(derPrivateKey));

  const abi = DAO.abi;
  const ethersProvider = new ethers.JsonRpcProvider(testnetEndPoint);
  const contract = new ethers.Contract(
    contractId.toString(),
    abi,
    ethersProvider
  );

  const functionCall = new ethers.utils.Interface(abi).encodeFunctionData(
    "vote",
    [id]
  );
  const tx = new ContractExecuteTransaction()
    .setContractId(contractId)
    .setGas(100000)
    .setFunctionParameters(functionCall)
    .freezeWith(client);

  const signTx = await tx.sign(PrivateKey.fromString(privateKey));
  const txResponse = await signTx.execute(client);
  await txResponse.getReceipt(client);
  loadProposals();
};

export default Dashboard;
