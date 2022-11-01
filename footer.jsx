import React from "react";

const Footer=()=>{
   return(
      <>
            <section class="contact" id="contact">

<h1 class="heading" id="contct"> <span > contact </span> us </h1>

<div class="row">

    
    <script type="text/javascript"
      src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
    
    <script type="text/javascript">
      emailjs.init('IMqwbBZS_5Xt3gJpn')
    </script>
    

   <div class="image">
      <img src="images/contact-img.svg" alt=""/>
   </div>

</div>

</section>



<section class="footer">

<div class="box-container">

   <div class="box">
      <h3>quick links</h3>
      <a href="">home</a>
      <a href="">about</a>
      <a href="">products</a>
      <a href="">review</a>
      <a href="">contact</a>
   </div>

   <div class="box">
      <h3>extra links</h3>
      <a href="">my account</a>
      <a href="">my order</a>
      <a href="">my favorite</a>
   </div>

   <div class="box">
      <h3>locations</h3>
      <a href="">india</a>
      <a href="">USA</a>
      <a href="">japan</a>
      <a href="">france</a>
   </div>

   <div class="box">
      <h3>contact info</h3>
      <a href="">+123-456-7890</a>
      <a href="">example@gmail.com</a>
      <a href="">mumbai, india - 400104</a>
      <img src="" alt=""/>
   </div>

</div>

<div class="credit"> created by <span> mr. web designer </span> | all rights reserved </div>

</section>
      </>
   )
}
export default Footer