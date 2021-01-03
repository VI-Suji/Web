import React from 'react'

const About = () => {
    return (
        <section id="about" className="about">
        <div className="container">
            <div className="section-title">
                <h2>About Us</h2>
            </div>
            <div className="row">
          <div className="col-lg-6" data-aos="fade-right">
            <div className="image">
              <img src="assets/img/about.gif" className="img-fluid" alt="" />
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-left">
            <div className="content pt-4 pt-lg-0 pl-0 pl-lg-3 ">
              <h3>Indian Society for Technical Education</h3>
              <ul>
                <li><i className="bx bx-check-double"></i> Since 1998</li>
              </ul>
              <p className="font-italic">
                ISTE Students’ Chapter assists and contributes in the production and development of top quality professional engineers and technicians needed by the industry and other organizations and also provides guidance and training to students to develop better learning skills and personality.
              </p>
              <p>
              </p>
            </div>
          </div>
        </div>
        </div>
        </section>
    )
}

export default About
