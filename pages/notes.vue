<template>
	<main>
		<Nav/>
		<section class="hero">
		  <div class="container">
		    <div class="row">
		      <div class="col-xl-5 col-lg-6 col-md-8" data-aos="fade">
		        <h1 class="hero__h">
		          Notes<small>.</small>
		        </h1>
		        <h2 class="hero__sub">Writing is part of my daily routine. I'm not a blogger, but I ocassionaly put together a few words.</h2>
		      </div>
		    </div>
		  </div>
		</section>
		<section class="section notes__ft">
			<div class="container">
				<div class="row align-items-center">
				  <div class="order-md-2 col-md-5 offset-md-1">
			  		<img data-aos="fade" src="~assets/images/notes/perfect-designer?v1.jpg" class="img-responsive" alt="It's always someone else's fault, I'm just a perfect designer">
				  </div> 
				  <div class="col-md-6" data-aos="fade">
				    <span class="sectionContent__preH">Featured note</span>
				    <h3 class="sectionContent__h">It's always someone else's fault, I'm just a perfect designer</h3>
				    <a href="https://medium.com/@imgermi/its-always-someone-else-s-fault-i-m-just-a-perfect-designer-14c37d615102" target="_blank" class="btn">Read on Medium</a>
				  </div> 
				</div>
			</div>
		</section>
		<section class="section">
			<div class="container">
				<span class="sectionContent__preH" data-aos="fade">The rest</span>
				<h3 class="sectionContent__h" data-aos="fade">All my notes</h3>
				<div class="row">
					<div class="col-md-6 col-lg-4">
						<article class="notelink" data-aos="fade">
							<a href="https://medium.com/@imgermi/how-i-got-my-first-clients-as-a-junior-freelance-designer-d621a753ada8" target="_blank">
								<img src="~assets/images/notes/first-clients-designer.jpg?v1" class="img-responsive" alt="How I got my first clients as a junior freelance designer">
								<h6 class="notelink__h">How I got my first clients as a junior freelance designer</h6>
								<a class="notelink__btn">Read on medium</a>
							</a>
						</article>
					</div>
					<div class="col-md-6 col-lg-4">
						<article class="notelink" data-aos="fade">
							<a href="https://medium.com/weland-agency/learning-by-doing-acquiring-skills-when-the-situation-demands-it-5f4f2cbc7bb0" target="_blank">
								<img src="~assets/images/notes/learning-by-doing.jpg?v1" class="img-responsive" alt="Learning by doing: acquiring skills when the situation demands it">
								<h6 class="notelink__h">Learning by doing: acquiring skills when the situation demands it</h6>
								<a class="notelink__btn">Read on medium</a>
							</a>
						</article>
					</div>
					<div class="col-md-6 col-lg-4">
						<article class="notelink" data-aos="fade">
							<a href="https://medium.com/@imgermi/fuck-the-tools-time-to-start-focusing-on-solutions-cbd955030d7e" target="_blank">
								<img src="~assets/images/notes/let-tools-go.jpg?v1" class="img-responsive" alt="Let the tools go: time to start focusing on solutions">
								<h6 class="notelink__h">Let the tools go: time to start focusing on solutions</h6>
								<a class="notelink__btn">Read on medium</a>
							</a>
						</article>
					</div>
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
  head () {
    return {
      title: 'Notes | Juan Martín Germano',
      meta: [
        { hid: 'description', name: 'description', content: 'Writing is part of my daily routine. I\'m not a blogger, but I ocassionaly put together a few words.' }
      ]
    }
  },
  components: {
    Nav,
    Contact
  },
};
</script>

<style lang="sass">
	.notes__ft
		@media(max-width: 767px)
			img
				margin-bottom: 20px
		.sectionContent__h
			font-size: 34.852px
			@media(max-width: 991px)
				font-size: 28px
</style>