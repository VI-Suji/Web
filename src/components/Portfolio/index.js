import React from 'react'

const Portfolio = () => {
    return (
        <section id="portfolio" class="portfolio">
      <div class="container">
        <div class="section-title">
          <h2>Events</h2>
        </div>

        <div class="row" data-aos-delay="100">
          <div class="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter=".filter-previous">Previous</li>
              <li data-filter="*" class="filter-active">All</li>
              <li data-filter=".filter-upcoming">Upcoming</li>
            </ul>
          </div>
        </div>

        <div class="row portfolio-container" data-aos-delay="200">

          <div class="col-lg-4 col-md-6 portfolio-item filter-upcoming">
            <div class="portfolio-wrap">
              <img src="assets/img/car1.jpg" class="img-fluid" alt="" />
              <div class="portfolio-info">
                <h4>previous 1</h4>
                <p>previous</p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-previous">
            <div class="portfolio-wrap">
              <img src="assets/img/car2.jpg" class="img-fluid" alt="" />
              <div class="portfolio-info">
                <h4>EXPLORE THE</h4>
                <p>MINARATES</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
    )
}

export default Portfolio
