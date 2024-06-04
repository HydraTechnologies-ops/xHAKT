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

  const uploadForm = document.createElement("form");
  uploadForm.id = "upload-form";
  uploadForm.innerHTML = `
        <h2>Upload Files</h2>
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
            </ul>
        </nav>
        <footer>
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
        content.innerHTML = `
                    <h2>Welcome to xHAKT</h2>
                    <p>Select an option from the sidebar to get started.</p>
                    <h3>Phytoplankton Facts</h3>
                    <ul>
                        <li>Phytoplankton are microscopic marine algae.</li>
                        <li>They form the foundation of the aquatic food web.</li>
                        <li>Phytoplankton produce about half of the oxygen we breathe.</li>
                        <li>They play a crucial role in carbon sequestration by absorbing CO2 during photosynthesis.</li>
                    </ul>
                    <h3>Importance of Phytoplankton</h3>
                    <p>Phytoplankton are vital for life on Earth. They form the basis of the marine food web, supporting fish, whales, and other marine life. By producing oxygen and absorbing CO2, they help regulate our climate and sustain marine ecosystems.</p>
                    <h3>Global Phytoplankton Distribution Image</h3>
                    <img class="panel-slideshow-image active" src="https://eoimages.gsfc.nasa.gov/images/globalmaps/data/MY1DMM_CHLORA/MY1DMM_CHLORA_2002-07.JPEG" alt="Global Map Chlorophyll Image 1" data-value="1">
                    <h3>Helpful Resources</h3>
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
        break;
      case "data-link":
        content.innerHTML = `
                    <h2>Data</h2>
                    <p>Here you can view and manage your data related to phytoplankton and carbon sequestration.</p>
                `;
        break;
      case "settings-link":
        content.innerHTML = `
                    <h2>Settings</h2>
                    <p>Manage your account settings and preferences here.</p>
                `;
        break;
      case "upload-link":
        content.innerHTML = "";
        content.appendChild(uploadForm);
        break;
      default:
        content.innerHTML = `
                    <h2>Welcome to xHAKT</h2>
                    <p>Select an option from the sidebar to get started.</p>
                `;
        break;
    }
  };

  main.appendChild(sidebar);
  main.appendChild(content);

  container.appendChild(header);
  container.appendChild(main);

  return container;
};

export default Dashboard;