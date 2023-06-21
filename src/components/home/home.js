import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Helmet } from "react-helmet";
import Slider from "react-slick";
export default function Home() {

    var settings = {
        infinite: true,
        autoplay: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };

    var testimonial_slidder = {
        infinite: true,
        autoplay: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };

    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [phone, setphone] = useState("")
    const [message, setmessage] = useState("")

    const handlename = (e) => {

        setname(e.target.value)
    }

    const handleemail = (e) => {

        setemail(e.target.value)
    }

    const handlephone = (e) => {

        setphone(e.target.value)
    }

    const handlemessage = (e) => {

        setmessage(e.target.value)
    }

    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
          let res = await fetch("https://be33-43-249-54-66.in.ngrok.io/api/addcontact", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              name: name,
              email: email,
              phone: phone,
              message: message
            }),
          });
          let resJson = await res.json();

          console.log(resJson)
          if (res.status === 200) {
            setname("");
            setemail("");
            console.log("user created successfully")
          } else {
            console.log("Some error occured");
          }
        } catch (err) {
          console.log(err);
        }
      };

    
    return (
        <div>

            <section className="silder-section-wrappre">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center gap">
                        <div className="first-section width50">
                            <div className="we-section-content">
                                <div className="here-heading"><h3>we are here</h3></div>
                                <div className="technology-business"><h1>Where technology meets business</h1></div>
                                <div className="view-button"><button>Get In Touch</button></div>
                            </div>
                        </div>
                        <div className="section-im age-wrapper width50">
                            <div className="image-wrapper"><img src="assets/images/section-img.png" /></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- ABOUT US SECTION START --> */}
            <section className="about-section-wrapper">
                <div className="container">
                    <div className="d-flex justify-content-between gap31">
                        <div className="image-silder-wrapper width50">
                            <Slider {...settings}>
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
                            <div className="title-heading"><h3>About us</h3></div>
                            <div className="main-heading"><h1>One of the Fastest Way to Business Growth</h1></div>
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
                                    <div className="professional-advice"><h1>Get Instant Professional Advice</h1></div>
                                    <div className="readt-help"><p>ready to help</p><span>+91 6356357989</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- ABOUT US SECTION END -->

<!--  OUR Process SECTION START --> */}
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

<!-- OUR WORK SECTION START --> */}
            <section className="about-section-wrapper">
                <div className="container">
                    <div className="d-flex justify-content-between gap31">
                        <div className="image-silder-wrapper width50">
                            <Slider {...settings}>
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
                            <div className="title-heading"><h3>What We Do </h3></div>
                            <div className="main-heading"><h1>We Develope Product That
                                People Love to Use.</h1></div>
                            <div className="about-company-content">
                                <p>It is a long established fact that a reader will be distracted by the
                                    readable content of a page when looking at its layout. The point of
                                    using Lorem Ipsum is that it has a more-or-less normal distribution
                                    of letters, as opposed, Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed</p>
                            </div>
                            <div className="wrapper-vision d-flex justify-content-between">
                                <div className="inner-wrapper d-flex">
                                    <div className="wrapper-vision">
                                        <div className="vision-image"><img src="assets/images/vision.png" /></div>
                                    </div>
                                    <div className="vision-content-wrapper">
                                        <div className="our-vision"><h1>Our Vision</h1></div>
                                        <div className="vision-content"><p>It is a long esta-blished fact that</p></div>
                                    </div>
                                </div>
                                <div className="inner-wrapper d-flex">
                                    <div className="wrapper-vision">
                                        <div className="vision-image"><img src="assets/images/vision.png" /></div>
                                    </div>
                                    <div className="vision-content-wrapper">
                                        <div className="our-vision"><h1>Our Goal</h1></div>
                                        <div className="vision-content"><p>It is a long esta
                                            -blished fact that</p></div>
                                    </div>
                                </div>
                            </div>

                            <div className="viewmorebutton">
						
												<span className="button-in-touch"><a href="contact-us.html">View More</a></span>
						
						</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- OUR WORK SECTION END   --> */}

            {/* <!-- SERVICES SECTION START  --> */}
            <section className="plaining-section-wrapper">
                <div className="container">
                    <div className="plainong-heading-wrapper">
                        <div className="plaining-heaing"><h3>Services </h3></div>
                        <div className="Process-heading"><h1>Our Expertice</h1></div>
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
                        <div className="plain-and-Process-wrapper width33.33">
                            <div className="d-flex justify-content-between">
                                <div className="black-img-wrappere">
                                    <div className="black-img"><img src="assets/images/appdevelopment.png" alt="not found" /></div>
                                </div>

                            </div>
                            <div className="web-heading leftafter"><h3>App Development</h3></div>
                            <div className="Process-content"><p>It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout</p></div>
                        </div>
                        <div className="plain-and-Process-wrapper width33.33">
                            <div className="d-flex justify-content-between">
                                <div className="black-img-wrappere">
                                    <div className="black-img"><img src="assets/images/hubspot.png" alt="not found" /></div>
                                </div>

                            </div>
                            <div className="web-heading leftafter"><h3>HubSpot Integration</h3></div>
                            <div className="Process-content"><p>It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout</p></div>
                        </div>
                        <div className="plain-and-Process-wrapper width33.33">
                            <div className="d-flex justify-content-between">
                                <div className="black-img-wrappere">
                                    <div className="black-img"><img src="assets/images/mailmarketing.png" alt="not found" /></div>
                                </div>

                            </div>
                            <div className="web-heading leftafter"><h3>Email Marketing</h3></div>
                            <div className="Process-content"><p>It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout</p></div>
                        </div></div>
                </div>







            </section >
            {/* // <!-- SERVICES SECTION END -->

// <!-- our team section start  --> */}
            <section className="our-team-section-wrapper">
                <div className="container paddingleftright">
                    <div className="main-heading-wrapper-team">
                        <div className="our-team-main-heading"><h3>team</h3></div>
                        <div className="title-our-heading"><h1>Our Leaders</h1></div>
                    </div>
                    <div className="d-flex justify-content-between gap30">
                        <div className="inner-wrapper-our-team width">
                            <div className="postion-realative">	<div className="team-image"><img src="assets/images/team1.png" /></div></div>

                            {/* {/* <!-- on hover effect start  --> */}
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


            {/* // <!-- our team section end  -->

// <!-- Testimonials section START  --> */}
            <section className="Testimonials-section-wrapper">
                <div className="container">
                    <div className="main-heading-wrapper-team">
                        <div className="our-team-main-heading"><h3>From our Customers</h3></div>
                        <div className="title-our-heading"><h1 className="color">Testimonials</h1></div>
                    </div>
                    <div className="Testimonials-wrapper">
                        <Slider {...testimonial_slidder}>
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
            {/* // <!-- Testimonials section end  -->

// <!-- Get In Touch section start --> */}
            <section className="conatct-us-section-wrapper">
                <div className="container">
                    <div className="conact-contnet-wrappere">
                        <div className="gat-in-touch"><h3>Get In Touch</h3></div>
                        <div className="content-for-help"><h1>Hey! Let’s Talk</h1></div>
                    </div>
                    <div className="d-flex justify-content-between gapcontact">
                        <div className="contact-form-inner-wrapper">
                            <div className="inner-wrapper-content">
                                <form method='POST' className="contact-form" onSubmit={(e) => {handleSubmit(e)}}>
                                    <div className="input-field">
                                        <input type="text" autoComplete="off" placeholder="name" required={true} className="form-control fleidclassName" onChange={handlename} />
                                    </div>
                                    <div className="input-field">
                                        <input type="email" autoComplete="off" placeholder="email" required={true} className="form-control fleidclassName" onChange={handleemail} />
                                    </div>
                                    <div className="input-field">
                                        <input type="number" autoComplete="off" maxLength={10} placeholder="phone" required={true} className="form-control fleidclassName" onChange={handlephone} />
                                    </div>
                                    <div className="input-field">
                                        <textarea className="form-control fleidclassName" rows="5" required={true} id="comment" name="text" placeholder="message" onChange={handlemessage}></textarea>
                                    </div>
                                    <div className="sumbit-button-wrapper">
                                        <div className="button-submit"><button type="Submit">Get In Touch</button></div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="help-for-information-wrapper">
                            <div className="inner-wrapper-information">
                                <div className="d-flex align-items-center content-wrapper">
                                    <div className="call-image-wrapper">
                                        <div className="call-image"><img src="assets/images/ring.png" />
                                        </div>
                                    </div>
                                    <div className="call-inormation">
                                        <div className="call-anytime"><h2>Call Anytime</h2></div>
                                        <div className="information"><p><a href="tel:+ 9123678 27867">+ 91 23658 78965</a></p>
                                            <p><a href="tel:+ 9167678 92878">+ 91 67678 92878</a></p></div>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center content-wrapper">
                                    <div className="call-image-wrapper">
                                        <div className="call-image"><img src="assets/images/mail.png" /></div>
                                    </div>
                                    <div className="call-inormation">
                                        <div className="call-anytime"><h2>Send Email</h2></div>
                                        <div className="information"><p><a href="mailto:connect@quarecit.com">connect@gmail.com</a></p>
                                            <p><a href="mailto:hello@quarecit.com">xyz@gmail.com</a></p></div>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center content-wrapper">
                                    <div className="call-image-wrapper">

                                        <div className="call-image"><img src="assets/images/GoogleMap.png" /></div>
                                    </div>
                                    <div className="call-inormation">
                                        <div className="call-anytime"><h2>Visit Us</h2></div>
                                        <div className="information"><p>123 xyx, Near abcd, pqr Road ,opnde 780001</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="follow-us-wrapper">
                                    <div className="folow-us"><h2>Follow us</h2></div>
                                    <ul className="social-icon">
                                        <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            {/* // <!-- Get In Touch section end -->
        // <!-- BLOG SECTION START  --> */}
            <section className="blog-section-wrapper">
                <div className="container paddingleftright">
                    <div className="blog-title-wrapper">
                        <div className="blog-main-headinf"><h3>our blog</h3></div>
                        <div className="blog-sub-heading"><h1>Latest Post</h1></div>
                    </div>
                    <div className="d-flex justify-content-between gap30">
                        <div className="blog-inner-wrapper">
                            <div className="blog-image-wrapper">
                                <div className="blog-image">
                                    <img src="assets/images/blog1.png" />
                                </div>
                            </div>
                            <div className="blog-title-wrapper-inner">
                                <div className="blog-title-inner"><h1>The most Popular Business Of the Year</h1></div>
                            </div>
                            <div className="blog d-flex justify-content-between align-items-center">
                                <div className="blog-small-iamge-wtrapper">
                                    <div className="blog-samll-image"><img src="assets/images/blogsmall.png" alt="not found" /><span>Ranold Jeff.</span></div>
                                </div>
                                <div className=" blog-release-information-wrapper">
                                    <div className="blog-information"><p>May 4th, 2022</p></div>
                                </div>
                            </div>
                        </div>
                        <div className="blog-inner-wrapper">
                            <div className="blog-image-wrapper">
                                <div className="blog-image">
                                    <img src="assets/images/blog2.png" />
                                </div>
                            </div>
                            <div className="blog-title-wrapper-inner">
                                <div className="blog-title-inner"><h1>How does writing influence your personal brand?</h1></div>
                            </div>
                            <div className="blog d-flex justify-content-between align-items-center">
                                <div className="blog-small-iamge-wtrapper">
                                    <div className="blog-samll-image"><img src="assets/images/blogsmall1.png" alt="not found" /><span>Ranold Jeff.</span></div>
                                </div>
                                <div className=" blog-release-information-wrapper">
                                    <div className="blog-information"><p>24 May, 2020</p></div>
                                </div>
                            </div>
                        </div>
                        <div className="blog-inner-wrapper">
                            <div className="blog-image-wrapper">
                                <div className="blog-image">
                                    <img src="assets/images/blog3.png" />
                                </div>
                            </div>
                            <div className="blog-title-wrapper-inner">
                                <div className="blog-title-inner"><h1>How to choose the right customer for your photo </h1></div>
                            </div>
                            <div className="blog d-flex justify-content-between align-items-center ">
                                <div className="blog-small-iamge-wtrapper">
                                    <div className="blog-samll-image"><img src="assets/images/blogsmall2.png" alt="not found" /><span>Ranold Jeff.</span></div>
                                </div>
                                <div className=" blog-release-information-wrapper">
                                    <div className="blog-information"><p>21 Sep, 2020</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* // <!-- BLOG SECTION END --> */}

        </div >
    )

}