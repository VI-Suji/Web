import React from 'react'

const Services = () => {
    return (
    <section id="services" class="services">
      <div class="container">
        <div class="section-title">
          <h2 class="head" >Services</h2>
        </div>
        <div class="row">
        <div class="col-lg-6 order-2 order-lg-1">
            <div class="icon-box mt-5 mt-lg-0">
              <i class="bx bx-receipt"/>
              <h4 class="head">NEWSLETTER</h4>
              <p>You can access exclusive links for short checklists to original articles and posts where you can study the subject in detail!</p>
            </div>
            <div class="icon-box mt-5" data-aos-delay="100">
              <i class="bx bx-cube-alt"/>
              <h4 class="head">ARTICLE</h4>
              <p>Principled research papers dealing with theoretical, methodological, empirical and previouslication-related aspects of technical education</p>
            </div>
          </div>
          <div class="col-lg-6 order-2 order-lg-1">
            <div class="icon-box mt-5 mt-lg-0">
              <i class="bx bx-images"/>
            <h4 class="head">PROJECT DEVELOPMENT</h4>
            <p>Students of who are doing project work involving product development,fabrication,model studies, etc.</p>
          </div>
          <div class="icon-box mt-5" data-aos-delay="300">
            <i class="bx bx-shield"/>
            <h4 class="head">SERVER ACCESS</h4>
            <p>Server access allows users to access and manage the actual system interfaces and files.</p>
          </div>
          </div>
      </div>
      </div>
    </section>
    )
}

export default Services
