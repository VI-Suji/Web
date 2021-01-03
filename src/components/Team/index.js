import React from 'react'

const Team = () => {
    return (
        <section id="team" class="team">
      <div class="container">

        <div class="section-title">
          <h2>Team</h2>
        </div>

        <div class="row">
          <div class="col-lg-4 col-md-4 d-flex align-items-stretch">
            <div class="member" data-aos="zoom-in" data-aos-delay="100">
              <div class="member-img">
                <img src="assets/img/bhagyasree.jpg" class="img-fluid" alt="" />
                <div class="social">
                  <i>ELECTRONICS DEPT</i>
                </div>
              </div>
              <div class="member-info">
                <h4>BHAGYASREE V.S</h4>
                <span>CHAIR PERSON</span>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 d-flex align-items-stretch">
            <div class="member" data-aos="zoom-in" data-aos-delay="100">
              <div class="member-img">
                <img src="assets/img/reshmi.jpg" class="img-fluid" alt="" />
                <div class="social">
                    <i>MECHANICAL DEPT</i>
                </div>
              </div>
              <div class="member-info">
                <h4>RESHMI </h4>
                <span>FACULTY IN CHARGE</span>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 d-flex align-items-stretch">
            <div class="member" data-aos="zoom-in" data-aos-delay="200">
              <div class="member-img">
                <img src="assets/img/vishnu b vinod.jpg" class="img-fluid" alt="" />
                <div class="social">
                  <i>ELECTRONICS DEPT</i>
                </div>
              </div>
              <div class="member-info">
                <h4>VISHNU B VINOD</h4>
                <span>VICE CHAIR</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
    )
}

export default Team
