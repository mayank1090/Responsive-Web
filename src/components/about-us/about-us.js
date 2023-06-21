import React from 'react'
import Slider from 'react-slick'

export default function About_us() {

  var testimonial_slidder = {
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
  };

  var settings = {
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className='about-us-main'>
      <section className="vitgram-wrapper-section">
        <div className="vitgram-image-wrapper">
          <div className="contact-us-content-wrapper">
            <div className="contact-us left38"><h1>About Us</h1></div>
          </div>
        </div>

      </section>

      <section className="about-section-wrapper padding-top30">
        <div className="container">
          <div className="d-flex justify-content-between gap31">
            <div className="image-silder-wrapper width50">
              <Slider {...settings} >
                <div className="silder-img-wrapper">
                  <img src="assets/images/sliderimg1.png" />
                </div>
                <div className="silder-img-wrapper">
                  <img src="assets/images/sliderimg2.png" />
                </div>
                <div className="silder-img-wrapper">
                  <img src="assets/images/sliderimg3.png" />
                </div>
                <div className="silder-img-wrapper">
                  <img src="assets/images/sliderimg4.png" />
                </div>
                <div className="silder-img-wrapper">
                  <img src="assets/images/sliderimg5.png" />
                </div>

              </Slider>
            </div>
            <div className="about-content-wrapper width50">
              <div className="title-heading"><h3>Who We Are ?</h3></div>
              <div className="main-heading"><h1>One of the Fastest Way to
                Business Growth</h1></div>
              <div className="about-company-content">
                <p>It is a long established fact that a reader will be distracted by the
                  readable content of a page when looking at its layout. The point of
                  using Lorem Ipsum is that it has a more-or-less normal distribution
                  of letters, as opposed</p>
              </div>
              <div className="d-flex inner-flex-wrapper">
                <div className="content-imge-wrapper">
                  <div className="content-img"><img src="assets/images/sidecontentimg.png" /></div>
                </div>
                <div className="content-wrapper">
                  <div className="professional-advice color"><h1>Get Instant Professional Advice</h1></div>
                  <div className="readt-help"><p>ready to help</p><span>+91 6356357989</span></div>
                </div>
              </div>
            </div>
          </div>
          <div className="discribe-about-company">
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution  of letters, as opposed It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution  of letters, as opposed It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed</p>
          </div>
          <div className="d-flex justify-content-between align-items-center gap20">
            <div className="plain-and-Process-wrapper width33.33">
              <div className="d-flex justify-content-between">
                <div className="black-img-wrappere">
                  <div className="black-img"><img src="assets/images/webdesign.png" alt="not found" /></div>
                </div>

              </div>
              <div className="web-heading leftafter"><h3>Web Design / Development</h3></div>
              <div className="Process-content"><p>It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout</p></div>
            </div>
            <div className="plain-and-Process-wrapper width33.33">
              <div className="d-flex justify-content-between">
                <div className="black-img-wrappere">
                  <div className="black-img"><img src="assets/images/uidesign.png" alt="not found" /></div>
                </div>

              </div>
              <div className="web-heading leftafter"><h3>UI/UX Design</h3></div>
              <div className="Process-content"><p>It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout</p></div>
            </div>
            <div className="plain-and-Process-wrapper width33.33">
              <div className="d-flex justify-content-between">
                <div className="black-img-wrappere">
                  <div className="black-img"><img src="assets/images/website.png" alt="not found" /></div>
                </div>

              </div>
              <div className="web-heading leftafter"><h3>Website Migration</h3></div>
              <div className="Process-content"><p>It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout</p></div>
            </div>


          </div>
          <div className="about-us-page-slider">
            <div className="d-flex justify-content-between gap31">
              <div className="about-content-wrapper width50">
                <div className="title-heading"><h3>What We Do </h3></div>
                <div className="main-heading"><h1>We Develope Product That
                  People Love to Use.</h1></div>
                <div className="about-company-content">
                  <p>It is a long established fact that a reader will be distracted by the
                    readable content of a page when looking at its layout. The point of
                    using Lorem Ipsum is that it has a more-or-less normal distribution
                    of letters, as opposed, Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed using Lorem Ipsum is that it has a more-or-less normal distribution
                    of letters, as opposed, Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposedusing Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>
                </div>

              </div>
              <div className="image-silder-wrapper width50">
                <Slider {...settings} >
                  <div className="silder-img-wrapper">
                    <img src="assets/images/sliderimg1.png" />
                  </div>
                  <div className="silder-img-wrapper">
                    <img src="assets/images/sliderimg2.png" />
                  </div>
                  <div className="silder-img-wrapper">
                    <img src="assets/images/sliderimg3.png" />
                  </div>
                  <div className="silder-img-wrapper">
                    <img src="assets/images/sliderimg4.png" />
                  </div>
                  <div className="silder-img-wrapper">
                    <img src="assets/images/sliderimg5.png" />
                  </div>

                </Slider>
              </div>

            </div>
          </div>
        </div>


      </section>

      {/* <!--  OUR Process SECTION START --> */}
      <section className="plaining-section-wrapper">
        <div className="container">
          <div className="plainong-heading-wrapper">
            <div className="plaining-heaing"><h3>Planning </h3></div>
            <div className="Process-heading"><h1>Our Process</h1></div>
          </div>
          <div className="d-flex justify-content-between align-items-center gap20">
            <div className="plain-and-Process-wrapper width25">
              <div className="d-flex justify-content-between">
                <div className="black-img-wrappere">
                  <div className="black-img"><img src="assets/images/black.png" alt="not found" /></div>
                </div>
                <div className="sideimage-wrapper">
                  <div className="sideimg"><img src="assets/images/one.png" alt="not found" /></div>
                </div>
              </div>
              <div className="research-heading"><h3>Research</h3></div>
              <div className="Process-content"><p>It is a long established fact that a reader will be distra by the readable content of a page.</p></div>
            </div>
            <div className="plain-and-Process-wrapper width25">
              <div className="d-flex justify-content-between">
                <div className="black-img-wrappere">
                  <div className="black-img"><img src="assets/images/pencil.png" alt="not found" /></div>
                </div>
                <div className="sideimage-wrapper">
                  <div className="sideimg"><img src="assets/images/two.png" alt="not found" /></div>
                </div>
              </div>
              <div className="research-heading"><h3>Design</h3></div>
              <div className="Process-content"><p>It is a long established fact that a reader will be distra by the readable content of a page.</p></div>
            </div>
            <div className="plain-and-Process-wrapper width25">
              <div className="d-flex justify-content-between">
                <div className="black-img-wrappere">
                  <div className="black-img"><img src="assets/images/bookpencil.png" alt="not found" /></div>
                </div>
                <div className="sideimage-wrapper">
                  <div className="sideimg"><img src="assets/images/three.png" alt="not found" /></div>
                </div>
              </div>
              <div className="research-heading"><h3>Develop</h3></div>
              <div className="Process-content"><p>It is a long established fact that a reader will be distra by the readable content of a page.</p></div>
            </div>
            <div className="plain-and-Process-wrapper width25">
              <div className="d-flex justify-content-between">
                <div className="black-img-wrappere">
                  <div className="black-img"><img src="assets/images/bookpencil.png" alt="not found" /></div>
                </div>
                <div className="sideimage-wrapper">
                  <div className="sideimg"><img src="assets/images/four.png" alt="not found" /></div>
                </div>
              </div>
              <div className="research-heading"><h3>Test</h3></div>
              <div className="Process-content"><p>It is a long established fact that a reader will be distra by the readable content of a page..</p></div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--  OUR Process SECTION END -->


      <!-- our team section start  --> */}
      <section className="our-team-section-wrapper passing-top0">
        <div className="container paddingleftright">
          <div className="main-heading-wrapper-team">
            <div className="our-team-main-heading"><h3>team</h3></div>
            <div className="title-our-heading"><h1>Our Leaders</h1></div>
          </div>
          <div className="d-flex justify-content-between gap30 flex-wrap">
            <div className="inner-wrapper-our-team width">
              <div className="postion-realative">	<div className="team-image"><img src="assets/images/team1.png" /></div></div>
              {/* <!-- on hover effect start  --> */}
				<div className="team-social-wrapper">
					<div className="social-meaida">
						<ul className="media-links">
							<li><a href="#"><img src="assets/images/facebook.png"/></a></li>
							<li><a href="#"><img src="assets/images/instragram.png"/></a></li>
							<li><a href="#"><img src="assets/images/linkdeen.png"/></a></li>
						</ul>
					</div>
				</div>
				{/* <!-- on hover-effect end --> */}

              {/* <!-- on hover effect start  --> */}
              {/* <div className="team-social-wrapper">
                <div className="social-meaida">
                  <ul className="media-links">
                    <li><a href="#"><img src="assets/images/facebook.png" /></a></li>
                    <li><a href="#"><img src="assets/images/instragram.png" /></a></li>
                    <li><a href="#"><img src="assets/images/linkdeen.png" /></a></li>
                  </ul>
                </div>
              </div> */}
              {/* <!-- on hover-effect end --> */}
              <div className="team-details-wrapper">
                <div className="team-name"><h2>Larry F. Burnett</h2></div>
                <div className="postion-team"><h3>CEO</h3></div>
              </div>


            </div>
            <div className="inner-wrapper-our-team width">
              <div className="team-image"><img src="assets/images/team1.png" /></div>
              <div className="team-details-wrapper">
                <div className="team-name"><h2>Larry F. Burnett</h2></div>
                <div className="postion-team"><h3>CEO</h3></div>
              </div>
            </div>
            <div className="inner-wrapper-our-team width">
              <div className="team-image"><img src="assets/images/team1.png" /></div>
              {/* <!-- on hover effect start  --> */}
				<div className="team-social-wrapper">
					<div className="social-meaida">
						<ul className="media-links">
							<li><a href="#"><img src="assets/images/facebook.png"/></a></li>
							<li><a href="#"><img src="assets/images/instragram.png"/></a></li>
							<li><a href="#"><img src="assets/images/linkdeen.png"/></a></li>
						</ul>
					</div>
				</div>
				{/* <!-- on hover-effect end --> */}
              <div className="team-details-wrapper">
                <div className="team-name"><h2>Larry F. Burnett</h2></div>
                <div className="postion-team"><h3>CEO</h3></div>
              </div>
            </div>
            <div className="inner-wrapper-our-team width">
              <div className="team-image"><img src="assets/images/team1.png" /></div>
              {/* <!-- on hover effect start  --> */}
				<div className="team-social-wrapper">
					<div className="social-meaida">
						<ul className="media-links">
							<li><a href="#"><img src="assets/images/facebook.png"/></a></li>
							<li><a href="#"><img src="assets/images/instragram.png"/></a></li>
							<li><a href="#"><img src="assets/images/linkdeen.png"/></a></li>
						</ul>
					</div>
				</div>
				{/* <!-- on hover-effect end --> */}
              <div className="team-details-wrapper">
                <div className="team-name"><h2>Larry F. Burnett</h2></div>
                <div className="postion-team"><h3>CEO</h3></div>
              </div>
            </div>
            <div className="inner-wrapper-our-team width">
              <div className="team-image"><img src="assets/images/team1.png" /></div>
              {/* <!-- on hover effect start  --> */}
				<div className="team-social-wrapper">
					<div className="social-meaida">
						<ul className="media-links">
							<li><a href="#"><img src="assets/images/facebook.png"/></a></li>
							<li><a href="#"><img src="assets/images/instragram.png"/></a></li>
							<li><a href="#"><img src="assets/images/linkdeen.png"/></a></li>
						</ul>
					</div>
				</div>
				{/* <!-- on hover-effect end --> */}
              <div className="team-details-wrapper">
                <div className="team-name"><h2>Larry F. Burnett</h2></div>
                <div className="postion-team"><h3>CEO</h3></div>
              </div>
            </div>
            <div className="inner-wrapper-our-team width">
              <div className="team-image"><img src="assets/images/team1.png" /></div>
              {/* <!-- on hover effect start  --> */}
				<div className="team-social-wrapper">
					<div className="social-meaida">
						<ul className="media-links">
							<li><a href="#"><img src="assets/images/facebook.png"/></a></li>
							<li><a href="#"><img src="assets/images/instragram.png"/></a></li>
							<li><a href="#"><img src="assets/images/linkdeen.png"/></a></li>
						</ul>
					</div>
				</div>
				{/* <!-- on hover-effect end --> */}
              <div className="team-details-wrapper">
                <div className="team-name"><h2>Larry F. Burnett</h2></div>
                <div className="postion-team"><h3>CEO</h3></div>
              </div>
            </div>
            <div className="inner-wrapper-our-team width">
              <div className="team-image"><img src="assets/images/team1.png" /></div>
              {/* <!-- on hover effect start  --> */}
				<div className="team-social-wrapper">
					<div className="social-meaida">
						<ul className="media-links">
							<li><a href="#"><img src="assets/images/facebook.png"/></a></li>
							<li><a href="#"><img src="assets/images/instragram.png"/></a></li>
							<li><a href="#"><img src="assets/images/linkdeen.png"/></a></li>
						</ul>
					</div>
				</div>
				{/* <!-- on hover-effect end --> */}
              <div className="team-details-wrapper">
                <div className="team-name"><h2>Larry F. Burnett</h2></div>
                <div className="postion-team"><h3>CEO</h3></div>
              </div>
            </div>
            <div className="inner-wrapper-our-team width">
              <div className="team-image"><img src="assets/images/team1.png" /></div>
              {/* <!-- on hover effect start  --> */}
				<div className="team-social-wrapper">
					<div className="social-meaida">
						<ul className="media-links">
							<li><a href="#"><img src="assets/images/facebook.png"/></a></li>
							<li><a href="#"><img src="assets/images/instragram.png"/></a></li>
							<li><a href="#"><img src="assets/images/linkdeen.png"/></a></li>
						</ul>
					</div>
				</div>
				{/* <!-- on hover-effect end --> */}
              <div className="team-details-wrapper">
                <div className="team-name"><h2>Larry F. Burnett</h2></div>
                <div className="postion-team"><h3>CEO</h3></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
      <!-- our team section end  -->

      <!-- Testimonials section START  --> */}
      <section className="Testimonials-section-wrapper">
        <div className="container">
          <div className="main-heading-wrapper-team">
            <div className="our-team-main-heading"><h3>From our Customers</h3></div>
            <div className="title-our-heading"><h1 className="color">Testimonials</h1></div>
          </div>
          <div className="Testimonials-wrapper">
            <Slider {...testimonial_slidder} >
              <div className="inner-wrapper-Testimonials">
                <div className="Testimonials-image-wrapper">
                  <div className="clinet-image"><img src="assets/images/clientreiew.png" alt="not found" /></div>
                </div>


                <div className="review-content-wrapper">
                  <div className="rreview-content"><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed.</p></div>
                </div>
                <div className="infoemation-wrapper">
                  <div className="name-client"><h2>John Cena</h2></div>
                  <div className="postion"><h3>CEO</h3></div>
                </div>
              </div>
              <div className="inner-wrapper-Testimonials">
                <div className="Testimonials-image-wrapper">
                  <div className="clinet-image"><img src="assets/images/clientreiew.png" alt="not found" /></div>
                </div>
                <div className="review-content-wrapper">
                  <div className="rreview-content"><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed.</p></div>
                </div>
                <div className="infoemation-wrapper">
                  <div className="name-client"><h2>John Cena</h2></div>
                  <div className="postion"><h3>CEO</h3></div>
                </div>
              </div>
            </Slider>


          </div>
          <div className="loader">
            <div className="loader__element"></div>
          </div>
        </div>
      </section>
    </div>
  )

}
