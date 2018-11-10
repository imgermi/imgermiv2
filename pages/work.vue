<template>
	<main>
		<Nav/>
		<section class="hero">
		  <div class="container">
		    <div class="row">
		      <div class="col-md-6">
		        <h1 class="hero__h">
		          Work<small>.</small>
		        </h1>
		        <h2 class="hero__sub">A few pieces of work I've been putting together throughout the entire 2018.</h2>
		      </div>
		    </div>
		  </div>
		</section>
		<section class="section work">
		  <div class="container">
		    <div class="row align-items-center">
		      <div class="col-md-5">
		        <span class="sectionContent__preH">Ecommerce</span>
		        <h3 class="sectionContent__h">Vendexa</h3>
		        <p class="sectionContent__p">Bringing a new company to life, a story told on Behance.</p>
		        <nuxt-link to="" class="btn">Read case study</nuxt-link>
		      </div>
		      <div class="col-md-7">
		        <img src="~assets/images/work/vendexa/vendexa-mock.png" alt="Vendexa - Ecommerce">
		      </div>  
		    </div>
		  </div>
		</section>
		<section class="section work">
		  <div class="container">
		    <div class="row align-items-center">
		      <div class="col-md-5">
		        <span class="sectionContent__preH">Mobile app</span>
		        <h3 class="sectionContent__h">Legister</h3>
		        <p class="sectionContent__p">From basic idea to concept. From challenge, all the way to a store.</p>
		        <nuxt-link to="" class="btn">Read case study</nuxt-link>
		      </div>
		      <div class="col-md-7">
		        <img src="~assets/images/work/legister/legister-mock.png" alt="Legister - Mobile App">
		      </div>  
		    </div>
		  </div>
		</section>
		<section class="section">
			<div class="container">
				<span class="sectionContent__preH">The rest</span>
				<h3 class="sectionContent__h">All my work</h3>
				<div class="allwork">
					<article class="allwork__item">
						<a href="">
							<img src="~assets/images/work/all/adigitalboy.jpg" alt="">
							<div class="overlay">
								<h6 class="overlay__h">A personal website, for <br> a personal friend</h6>
								<span class="overlay__sub">View on Dribbble</span>
							</div>
						</a>
					</article>
					<article class="allwork__item">
						<a href="">
							<img src="~assets/images/work/all/faq.jpg" alt="">
							<div class="overlay">
								<h6 class="overlay__h">FAQ page for <br> a mobile app</h6>
								<span class="overlay__sub">View on Dribbble</span>
							</div>
						</a>
					</article>
					<article class="allwork__item">
						<a href="">
							<img src="~assets/images/work/all/vendexa.jpg" alt="">
							<div class="overlay">
								<h6 class="overlay__h">Launching an <br> Online Store</h6>
								<span class="overlay__sub">View on Dribbble</span>
							</div>
						</a>
					</article>
					<article class="allwork__item">
						<a href="">
							<img src="~assets/images/work/all/biffi.jpg" alt="">
							<div class="overlay">
								<h6 class="overlay__h">Online course & <br> landing page</h6>
								<span class="overlay__sub">View on Dribbble</span>
							</div>
						</a>
					</article>
					<article class="allwork__item">
						<a href="">
							<img src="~assets/images/work/all/palm.jpg" alt="">
							<div class="overlay">
								<h6 class="overlay__h">Local online <br> store rethinking</h6>
								<span class="overlay__sub">View on Behance</span>
							</div>
						</a>
					</article>
					<article class="allwork__item">
						<a href="">
							<img src="~assets/images/work/all/diphot.jpg" alt="">
							<div class="overlay">
								<h6 class="overlay__h">Institutional website for <br> a local company</h6>
								<span class="overlay__sub">View on Dribbble</span>
							</div>
						</a>
					</article>
				</div>
			</div>
		</section>
		<Contact/>
	</main>
</template>

<script>
import Nav from '~/components/Nav.vue'
import Contact from '~/components/Contact.vue'

export default {
  components: {
    Nav,
    Contact
  }
};
</script>

<style lang="sass">
	.allwork
		display: flex
		flex-wrap: wrap
		&__item
			width: 33.3%
			position: relative
			&:hover
				.overlay
					opacity: 1
			img
				width: 100%
				display: block
			.overlay
				width: 100%
				height: 100%
				background: rgba(56, 67, 79, 0.92)
				padding: 30px 25px
				position: absolute
				left: 0
				top: 0
				opacity: 0
				transition: all 200ms ease-in
				&__h
					font-family: 'Lora', serif
					font-weight: 700
					line-height: normal
					font-size: 20px
					color: rgba(245, 245, 245, 0.9)
					margin: 0 0 5px
				&__sub
					font-weight: 300
					line-height: 17px
					font-size: 14px
					letter-spacing: 0.05em
					color: #C8B382
					text-transform: uppercase
</style>