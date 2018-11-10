<template>
	<main>
		<Nav/>
		<section class="hero">
		  <div class="container">
		    <div class="row">
		      <div class="col-md-5">
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
				  <div class="col-md-6">
				    <span class="sectionContent__preH">Featured note</span>
				    <h3 class="sectionContent__h">It's always someone else's fault, I'm just a perfect designer</h3>
				    <nuxt-link to="" class="btn">Read note</nuxt-link>
				  </div>
				  <div class="col-md-5 offset-md-1">
				    <img src="~assets/images/notes/perfect-designer.jpg" class="img-responsive" alt="Vendexa - Ecommerce">
				  </div>  
				</div>
			</div>
		</section>
		<section class="section">
			<div class="container">
				<span class="sectionContent__preH">The rest</span>
				<h3 class="sectionContent__h">All my notes</h3>
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
	.notes__ft
		.sectionContent__h
			font-size: 34.852px
</style>