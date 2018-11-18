<template>
	<footer id="contact">
		<div class="container">
			<article class="footerContact">
				<div class="row align-items-end">
					<div class="col-lg-6 col-xl-5">
						<span class="sectionContent__preH">I'm reachable</span>
						<h3 class="sectionContent__h">Contact</h3>
						<p class="sectionContent__p">You can reach out through any medium you prefer. If you don't want to reach out, visit my Dribbble so I can get more views. That's what this is all about, right?</p>
					</div>
					<div class="col-md-5 col-lg-4 offset-lg-2 col-xl-3 offset-xl-4">
						<a href="https://dribbble.com/imgermi" target="_blank" class="btn btn__xl">Give me views</a>
					</div>
				</div>
			</article>
			<article class="footerSocial">
				<a class="footerSocial__email" href="mailto:juanmartingermano@gmail.com">juanmartingermano@gmail.com</a>
				<ul class="footerSocial__items">
					<li><a href="https://twitter.com/imgermi" target="_blank">Twitter</a></li>
					<li><a href="https://instagram.com/imgermi" target="_blank">Instagram</a></li>
					<li><a href="https://medium.com/@imgermi" target="_blank">Medium</a></li>
					<li><a href="https://linkedin.com/in/imgermi" target="_blank">Linkedin</a></li>
					<li><a href="https://behance.net/imgermi" target="_blank">Behance</a></li>
				</ul>
			</article>
		</div>
	</footer>
</template>

<style lang="sass">
	footer
		background: #596869
		padding: 70px 0 45px
		position: relative
		margin-top: 200px
		@media(max-width: 991px)
			padding-bottom: 50px
			margin-top: 150px
		&:before
			content: ''
			display: block
			height: 150px
			width: 2px
			background: #C8B382
			position: absolute
			left: 50%
			transform: translateX(-50%)
			top: -150px

	.footerContact
		.sectionContent__p
			margin: 0
			@media(max-width: 991px)
				margin-bottom: 25px

	.footerSocial
		padding-top: 55px
		display: flex
		justify-content: space-between
		@media(max-width: 991px)
			display: block
			padding-top: 35px
		@media(max-width: 767px)
			text-align: center
		&__email
			font-family: 'Lora', serif
			font-size: 16px
			color: rgba(245, 245, 245, 0.9)
			font-weight: 700
			text-decoration: none
			transition: all 250ms ease-in
			&:hover
				color: #C8B382
		&__items
			display: flex
			list-style: none
			@media(max-width: 991px)
				padding-top: 15px
			@media(max-width: 767px)
				display: block
			li
				margin: 0 20px
				@media(max-width: 991px)
					margin: 0 16px
					&:first-of-type
						margin-left: 0
				@media(max-width: 767px)
					margin: 10px 0
				&:last-of-type
					margin-right: 0
				a
					text-decoration: none
					color: #C8B382
					font-weight: 700
					letter-spacing: 0.12em
					font-size: 13px
					text-transform: uppercase
					transition: all 250ms ease-in
					&:hover
						color: #f5f5f5
</style>