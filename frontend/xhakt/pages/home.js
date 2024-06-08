const Home = (element) => {
  return (element.innerHTML = `
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
                    <h3>Global Phytoplankton Distribution Slideshow</h3>
                    <div class="slideshow-container">
                        <div class="slideshow">
                            <img class="slide" src="https://eoimages.gsfc.nasa.gov/images/globalmaps/data/MY1DMM_CHLORA/MY1DMM_CHLORA_2002-07.JPEG" alt="Global Map Chlorophyll Image 1" data-value="1">
                            <img class="slide" src="https://eoimages.gsfc.nasa.gov/images/globalmaps/data/MY1DMM_CHLORA/MY1DMM_CHLORA_2002-08.JPEG" alt="Global Map Chlorophyll Image 2" data-value="2">
                            <img class="slide" src="https://eoimages.gsfc.nasa.gov/images/globalmaps/data/MY1DMM_CHLORA/MY1DMM_CHLORA_2002-09.JPEG" alt="Global Map Chlorophyll Image 3" data-value="3">
                        </div>
                        <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
                        <a class="next" onclick="plusSlides(1)">&#10095;</a>
                    </div>
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
                `);
};

export default Home;
