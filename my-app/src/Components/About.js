import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var contactmessage = this.props.data.contactmessage;
    }

    return (
      <section id="about">
      <div className="row">
         <span className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Caroline Profile Pic" />
         </span>
         <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>{bio}</p>
            <h2>Get in touch?</h2>
            <p>{contactmessage} <a className="smoothscroll" href="#contact"><strong> by clicking here</strong></a> or use my contact details below to reach me:</p>
            <div className="row">
               <div className="columns contact-details">
                  <p className="address">
						   <span>{name}</span><br />
						   <span>{street}<br />
						         {zip}, {city}
                   </span><br />
						   <span>{phone}</span><br />
                     <span>{email}</span>
					   </p>
               </div>
               
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
