import React from 'react'

const Footer = () => {
    return (
        <section id="footer">
            <div class="footer-top">

<div class="container">

  <div class="row justify-content-center">
    <div class="col-lg-6">
      <a href="#header" class="scrollto footer-logo"><img src="assets/img/hero-logo.png" alt="" /></a>
      <h3>ISTE</h3>
    </div>
  </div>

  <div class="row footer-newsletter justify-content-center">
    <div class="col-lg-6">
      <form action="" method="post">
        <input type="email" name="email" placeholder="Enter your Email" /><input type="submit" value="Subscribe" />
      </form>
    </div>
  </div>

  <div class="social-links">
    <a href="#header" class="facebook"><i class="bx bxl-facebook"></i></a>
    <a href="#header" class="instagram"><i class="bx bxl-instagram"></i></a>
    <a href="#header" class="google-plus"><i class="bx bxl-youtube"></i></a>
  </div>

</div>
</div>

<div class="container footer-bottom clearfix">
<div class="copyright">
  &copy; Copyright <strong><span>404-ISTE</span></strong>. All Rights Reserved
</div>
<div class="credits">
</div>
</div>
        </section>
    )
}

export default Footer
