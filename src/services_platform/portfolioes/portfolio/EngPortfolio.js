import React, { useState } from 'react';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import '../style_portfolio/EngiPortfolio.css';
import image_e1 from './assest/image_e1.jpg';
import image_e2 from './assest/image_e2.jpg';
import image_e3 from './assest/image_e3.jpg';
import image_e4 from './assest/image_e4.jpg';
import image_e5 from './assest/image_e5.jpg';
import image_e6 from './assest/image_e6.jpg';

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
return ( <div>
      <header className='headportfolio_e'>
        <section className='portfolio_e'>
          <h2 className='heading_e'>Latest <span>Project</span></h2>

          <div className='portfolio-container_e'>
		<div className ='portfolio-box_e'>
    <img src={image_e1} alt=""  ></img>
    <div className='portfolio-layer_e'>
      <h4>Residential Housing Development</h4>
      <p>residential housing development is a multifaceted process that aims to create livable, sustainable, and safe communities for 
        individuals and families. It involves a combination of architectural design, infrastructure development, 
        and community planning to provide residents with comfortable and well-functioning homes. </p>
        {/* <a href="#">
      <FaExternalLinkAlt className="bx bx-link-external" />
    </a> */}
      </div> 
          </div>

          <div className ='portfolio-box_e'>
    <img src={image_e2} alt="" ></img>
    <div className='portfolio-layer_e'>
      <h4>Commercial Building Construction</h4>
      <p> commercial building construction involves a complex and collaborative effort among architects, engineers, construction professionals, and business owners. It aims to create functional, safe, 
        and aesthetically pleasing spaces that meet the diverse needs of businesses and their customers. </p>
        {/* <a href="#">
      <FaExternalLinkAlt className="bx bx-link-external" />
    </a> */}
      </div> 
          </div>

          <div className ='portfolio-box_e'>
    <img src={image_e3} alt="" ></img>
    <div className='portfolio-layer_e'>
      <h4>Mall and Shopping Center Development</h4>
      <p>mall and shopping center development is a multidisciplinary effort that relies on engineering expertise to create functional,
         safe, and sustainable spaces for retail and leisure activities. Engineers contribute to every stage of development, 
        from site selection and design to construction, maintenance, and future adaptability. </p>
        {/* <a href="#">
      <FaExternalLinkAlt className="bx bx-link-external" />
    </a> */}
      </div> 
          </div>

          <div className ='portfolio-box_e'>
    <img src={image_e4} alt="" ></img>
    <div className='portfolio-layer_e'>
      <h4>Modular Construction</h4>
      <p>Modular construction is a modern building technique that offers speed, efficiency, quality control, and sustainability benefits. It's an increasingly popular choice in the construction industry, 
        particularly for projects where time, cost, and quality are critical considerations. </p>
        {/* <a href="#">
      <FaExternalLinkAlt className="bx bx-link-external" />
    </a> */}
      </div> 
          </div>

          <div className ='portfolio-box_e'>
    <img src={image_e5} alt="" ></img>
    <div className='portfolio-layer_e'>
      <h4>Educational Institutions</h4>
      <p>educational institution construction is a complex and multifaceted process that aims to create safe, efficient, and inspiring learning environments. These projects require
         collaboration between architects, engineers, educators, and administrators to ensure that the facilities meet the educational institution's objectives and provide students with the 
         resources they need for a successful learning experience. </p>
        {/* <a href="#">
      <FaExternalLinkAlt className="bx bx-link-external" />
    </a> */}
      </div> 
          </div>

          <div className ='portfolio-box_e'>
    <img src={image_e6} alt="" ></img>
    <div className='portfolio-layer_e'>
      <h4>Green Building and Sustainability Projects</h4>
      <p>Green Building Technology is an ever expanding world of new green building products and procedures that enable us to utilize natural resources and provide power and heating to our homes. 
        By using these green building technologies one can reduce the carbon footprint and along with energy-efficient products, can make the scheme 
        or building, Carbon Neutral.. </p>
        {/* <a href="#">
      <FaExternalLinkAlt className="bx bx-link-external" />
    </a> */}
      </div> 
          </div>

          
          </div>

          {/* Contact section */}
          <section className='contact_e' id='contact_e'>
            <h2 className='heading_e'>Contact <span>Me!</span></h2>

            <form onSubmit={handleSubmit}>
              <div className='input-box_e'>
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

              <div className='input-box_e'>
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
                className='btn_e'
              />
            </form>
          </section>
        </section>
      </header>
    </div>);
}

export default App;
