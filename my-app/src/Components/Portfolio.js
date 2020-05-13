import React, { Component } from 'react';

class Portfolio extends Component {
  render() {

    if(this.props.data){
      var testimonials = this.props.data.testimonials.map(function(testimonials){
        return  <li key={testimonials.user}>
            <blockquote>
               <p>{testimonials.text}</p>
               <cite>{testimonials.user}</cite>
            </blockquote>
         </li>
      })
    }

    return (
      <section id="testimonials">
      <div className="text-container">
         <div className="row">
         <div className="background-box">
            <h1>Current and previous projects</h1>
            <div>
               <h5>ParkHere</h5>
               <p>About ParkHere</p>
            </div>
            <div>
               <h5>Eat Well - Java + Flutter</h5>
               <p>About Eat well</p>
            </div>
            <div>
               <h5>Flutter apps</h5>
               <p>About apps</p>
            </div>
            <div>
               <h5>Lanterna game - Java</h5>
               <p>About game</p>
            </div>
         </div>

         </div>
         </div>
   </section>
    );
  }
}

export default Portfolio;