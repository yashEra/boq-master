import React, { useState } from 'react';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import '../style_portfolio/ArchiPortfolio.css';
import image_a1 from './assest/image_a1.jpg';
import image_a2 from './assest/image_a2.jpg';
import image_a3 from './assest/image_a3.jpg';
import image_a4 from './assest/image_a4.jpg';
import image_a5 from './assest/image_a5.jpg';
import image_a6 from './assest/image_a6.jpg';

function App() {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    mobile: '',
    email_subject: '',
    messages: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (
      formData.fullname.trim() === '' ||
      formData.email.trim() === '' ||
      formData.mobile.trim() === '' ||
      formData.email_subject.trim() === '' ||
      formData.messages.trim() === ''
    ) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please fill in all fields!',
      });
      return; 
    }

    
    setTimeout(() => {
      Swal.fire({
        icon: 'success',
        title: 'Message Sent Successfully!',
        text: 'Thank you for contacting us.',
      });
      
      setFormData({
        fullname: '',
        email: '',
        mobile: '',
        email_subject: '',
        messages: '',
      });
    }, 2000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <div>

      <header className='headportfolio_a'>
        <section className='portfolio_a'>
          <h2 className='heading_a'>Latest <span>Project</span></h2>

	<div className='portfolio-container_a'>
		<div className ='portfolio-box_a'>
    <img src={image_a1} alt=""  ></img>
    <div className='portfolio-layer_a'>
      <h4>Landscape Architecture</h4>
      <p>Landscape architecture is a multifaceted field that involves the planning, design, and management 
        of outdoor spaces, with a focus on creating functional, aesthetically pleasing, and sustainable environments </p>
        {/* <a href="#">
      <FaExternalLinkAlt className="bx bx-link-external" />
    </a> */}
      </div> 
          </div>

          <div className ='portfolio-box_a'>
    <img src={image_a2} alt="" ></img>
    <div className='portfolio-layer_a'>
      <h4>Interior Design</h4>
      <p> Interior design architecture is a specialized discipline within the broader field of architecture that focuses on the detailed planning, 
        design, and enhancement of interior spaces. It marries the principles of architectural design with a keen understanding of human behavior, aesthetics, and functionality to create captivating indoor environments. </p>
        {/* <a href="#">
      <FaExternalLinkAlt className="bx bx-link-external" />
    </a> */}
      </div> 
          </div>

          <div className ='portfolio-box_a'>
    <img src={image_a3} alt="" ></img>
    <div className='portfolio-layer_a'>
      <h4>Cultural and Religious Buildings</h4>
      <p>Cultural and religious buildings architecture is a testament to the power of architecture to foster a sense of community, spirituality, and cultural identity. Architects in this field have the unique privilege 
        of shaping spaces that resonate with the beliefs and values of diverse societies while leaving a lasting architectural legacy that transcends time. </p>
        {/* <a href="#">
      <FaExternalLinkAlt className="bx bx-link-external" />
    </a> */}
      </div> 
          </div>

          <div className ='portfolio-box_a'>
    <img src={image_a4} alt="" ></img>
    <div className='portfolio-layer_a'>
      <h4>Parks and recreational areas Architecture</h4>
      <p>Modular construction is a modern and efficient approach to building structures by assembling pre-manufactured modules or components in a controlled factory environment. QA (Quality Assurance) engineers play a critical role in ensuring the quality, 
        safety, and compliance of modular construction projects. </p>
        {/* <a href="#">
      <FaExternalLinkAlt className="bx bx-link-external" />
    </a> */}
      </div> 
          </div>

          <div className ='portfolio-box_a'>
    <img src={image_a5} alt="" ></img>
    <div className='portfolio-layer_a'>
      <h4>Hotels and resorts Architecture</h4>
      <p>Hotels and resorts architecture is a dynamic field that evolves with changing travel trends and guest expectations. Whether it's a cozy boutique hotel in a bustling city or a luxurious beachfront resort, 
        the architecture of these establishments plays a pivotal role in shaping the overall guest experience. </p>
        {/* <a href="#">
      <FaExternalLinkAlt className="bx bx-link-external" />
    </a> */}
      </div> 
          </div>

          <div className ='portfolio-box_a'>
    <img src={image_a6} alt="" ></img>
    <div className='portfolio-layer_a'>
      <h4>Single-family homes Architecture</h4>
      <p>Single-family homes architecture celebrates the diversity of residential design, ranging from cozy cottages to spacious estates. These homes are the embodiment of a family's dreams and aspirations, 
        and architects play a vital role in bringing those dreams to life through thoughtful and personalized design. </p>
        {/* <a href="#">
      <FaExternalLinkAlt className="bx bx-link-external" />
    </a> */}
      </div> 
          </div>

          
          </div>

          {/* Contact section */}
          <section className='contact_a' id='contact_a'>
            <h2 className='heading_a'>Contact <span>Me!</span></h2>

            <form onSubmit={handleSubmit}>
              <div className='input-box_a'>
                <input
                  type="text"
                  name="fullname"
                  placeholder="Full Name"
                  value={formData.fullname}
                  onChange={handleChange}
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className='input-box_a'>
                <input
                  type="number"
                  name="mobile"
                  placeholder="Mobile Number"
                  value={formData.mobile}
                  onChange={handleChange}
                />

                <input
                  type="text"
                  name="email_subject"
                  placeholder="Email Subject"
                  value={formData.email_subject}
                  onChange={handleChange}
                />
              </div>

              <textarea
                name="messages"
                id=""
                cols={30}
                rows={10}
                placeholder="Your Message"
                value={formData.messages}
                onChange={handleChange}
              />

              <input
                type='submit'
                value='Send Message'
                name="send"
                className='btn_a'
              />
            </form>
          </section>
        </section>
      </header>
    </div> );
}

export default App;
