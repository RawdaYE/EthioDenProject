import React from 'react';

import './App.css'


function App() {

  return (
    <>
    <header>
    <div class="horizontal">
      <div class="logo">
        <img src="/images/logo of nav bar.jpg" alt="logo"/>
      </div>
          <div class="link-wrapper">
            <nav>
              <ul>
                <li><a href="#Home">Home</a></li>
                <li><a href="#About">About</a></li>
                <li><a href="#Blog">Blog</a></li>
                <li><a href="#footer">Contact</a></li>
            </ul>
          </nav>
            </div> 
    </div>
  </header>

  <section id="Home">
    <div class="content-wrapper" >
      <div class="text-block">
        <p>Savor the Calm. <br/> Sip The Green.</p></div>
      <div class="buttons">
        <a href="#"class="button">Buy</a>
      </div>
   </div>
 </section>

      <section id="About">
        <div class="about-container">
          <h2>What is Matcha?</h2>
          <div class="matcha">
            <p>
              Matcha for health – explore its benefits and discover how this vibrant green tea can enhance your well-being.</p>
            </div>
            <div class="buttons">
              <a href="#" class="button explore-button">Explore </a>
            </div>
            </div>
      </section>


 <section id="Blog">
    <div class="blog-heading">
      <h1 class="text-center section-heading"> Blog </h1>
    </div>

  <div class="blog-container">
      <div class="swiper tranding-slider">
        <div class="swiper-wrapper">
        
    <div class="swiper-slide tranding-slide">

      <div class="blog-img">
        <img src="/images/Стеклянная чашка зеленого чая с жасмином и мятой _ A cup of green tea with jasmine and mint.jpg" alt=""/>
      </div>

      <div class="blog-text">
        <a href="#" class="blog-title"> Green Tea vs. Matcha</a>
        <p> Matcha is a powdered form of specially grown green tea leaves, 
          giving you the full benefit of the leaf and a rich, smooth flavor. Green tea, on the other hand, 
          is made by steeping the leaves in hot water and removing them afterward, resulting in a lighter
           taste and lower caffeine content. While green tea is packed with health benefits, matcha stands out for those
             seeking focused energy and antioxidants in one calming cup.</p>
      <a href="#">Read more</a>
      </div>
    </div>

    <div class="swiper-slide tranding-slide">

      <div class="blog-img">
        <img src="/images/Feuille De Matcha Verte PNG , Thé, Aliments, Herbe Image PNG pour le téléchargement libre.jpg" alt=""/>
      </div>

      <div class="blog-text">
        <a href="#" class="blog-title"> Why Everyone’s Talking About Matcha Powder in 2025</a>
        <p>From wellness enthusiasts to foodies, matcha powder continues to make headlines—and
           for good reason. Packed with antioxidants and known for its calming focus, 
           matcha is more than just a trendy green drink. Whether it’s whisked into a latte or blended into smoothies,
            this vibrant powder brings a clean energy boost and earthy flavor that people love.
             Explore how matcha is redefining modern wellness.</p>
      <a href="#">Read more</a>
      </div>
    </div>

    <div class="swiper-slide tranding-slide">

      <div class="blog-img">
        <img src="/images/greenTEA.jpg" alt=""/>
      </div>

      <div class="blog-text">
        <a href="#" class="blog-title">Matcha Latte: The Creamy Green Sip Everyone's Craving</a>
        <p>Smooth, vibrant, and full of calm energy—matcha lattes are taking over morning routines. Combining rich plant-based milk with finely ground green tea leaves, this drink offers a perfect balance of flavor and focus. With its detoxifying properties and gentle caffeine kick, the matcha latte isn’t just a treat—it’s a ritual. Discover why it's become a staple for mindful mornings.</p>
      <a href="#">Read more</a>
      </div>
    </div>
  </div>

  <div class="tranding-slider-control">
    <div class="swiper-button-prev slider-arrow">
      <ion-icon name="arrow-back-outline"></ion-icon>
    </div>
    <div class="swiper-button-next slider-arrow">
      <ion-icon name="arrow-forward-outline"></ion-icon>
    </div>
    <div class="swiper-pagination"></div>
  </div>

    </div>
  </div>
 </section>

  <footer id="footer">
    <div class="centering-div">
     <div class="footer-links-wrapper">
          <div class="link-wrapper1">
            <h3>Available products</h3>
            <ul>
              <li><a href="#">machiato</a></li>
              <li><a href="#">green tea</a></li>
              <li><a href="#">matcha powder</a></li>
              <li><a href="#">moringa</a></li>
            </ul>
          </div>
          <div class="link-wrapper2">
            <h3>Services</h3>
            <ul>
              <li><a href="#">matcha news</a></li>
              <li><a href="#">explore</a></li>
              <li><a href="#">juice</a></li>
              <li><a href="#">latte</a></li>
            </ul>
          </div>
          <div class="link-wrapper3">
            <h3>Matcha Stores</h3>
            <ul>
              <li><a href="#">find a store</a></li>
              <li><a href="#">Today at matcha house</a></li>
              <li><a href="#">financing</a></li>
              <li><a href="#">restuarant</a></li>
            </ul>
          </div>
     </div>
     <div class="copyright-wrapper">
      copyright @ 2025 matcha Inc. All right reserved.
    </div>
    <div class="footer-country">
      <div class="footer-country-name">Ethiopia</div>
    </div>
    </div>
 </footer>
 </>
  )
}

export default App
