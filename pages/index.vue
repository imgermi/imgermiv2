<template>
  <main>
    <Nav/>
    <section class="hero big">
      <div class="container">
        <div class="row">
          <div class="col-xl-5 col-lg-6 col-md-8">
            <h1 class="hero__h">
              <span>Hello,</span>
              I'm Germi<small>.</small>
            </h1>
            <h2 class="hero__sub">I help startups and entrepreneurs scaling visibility through Product Design and Strategy.</h2>
          </div>
        </div>
      </div>
    </section>
    <section class="section work" data-delighter>
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6 col-lg-5">
            <span class="sectionContent__preH">Featured work</span>
            <h3 class="sectionContent__h">Legister</h3>
            <p class="sectionContent__p">From basic idea to concept. From challenge, all the way to a store.</p>
            <nuxt-link to="" class="btn disabled">Coming soon</nuxt-link>
          </div>
          <div class="col-md-6 col-lg-7">
            <img src="~assets/images/work/legister/legister-mock.png" alt="Legister - Mobile App">
          </div>  
        </div>
      </div>
    </section>
    <section class="section about">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6">
            <span class="sectionContent__preH">I'm person</span>
            <h3 class="sectionContent__h">About me</h3>
            <p class="sectionContent__p">
              Dear reader,
              <strong>My name is Juan Martín Germano. I'm a designer based in Buenos Aires, and for the past 3 years I've been focused on building a business, designing interfaces, building products, and helping clients achieving a solution. Well, that actually sounds way too cool. I'm just a person having fun while learning.</strong>
            </p>
          </div>
          <div class="col-md-5 offset-md-1">
            <p class="sectionContent_read">The day I saved my first .html file everything changed. It sounds stupid, but as soon as I realised that I could make a website myself, and I could make it look just like I wanted to, I became really exited.</p>
            <p class="sectionContent_read">It didn't take me long to fall in love with web & overall interface design. Anyway, lately I've been mostly focusing on reading books, so I'll probably just stop writing ego-things about me and get to learn a bit more.</p>
          </div>
          <div class="col-12 text-center">
            <img src="~assets/images/juan-martin-germano-avatar.png" class="avatar" alt="Juan Martín Germano - Product Designer">
          </div>
        </div>
      </div>
    </section>
    <section class="section notes">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 col-xl-5">
            <span class="sectionContent__preH">I'm try writer</span>
            <h3 class="sectionContent__h">Notes</h3>
            <p class="sectionContent__p">Yes, that's right. I don't consider myself a writer, that would be kind of too much. But I just enjoy writing a lot. It's part of my daily routine, and ocassionaly I like writing a piece of blog in which I share a few thoughts on a specific subject.</p>
            <nuxt-link to="/notes" class="btn">See more</nuxt-link>
          </div>
          <div class="col-lg-5 offset-lg-1 col-xl-4 offset-xl-2">
            <article class="notelink">
              <a href="https://medium.com/@imgermi/fuck-the-tools-time-to-start-focusing-on-solutions-cbd955030d7e" target="_blank">
                <h6 class="notelink__h">Let the tools go: time to start focusing on solutions</h6>
                <a class="notelink__btn">Read on medium</a>
              </a>
            </article>
            <article class="notelink">
              <a href="https://medium.com/weland-agency/learning-by-doing-acquiring-skills-when-the-situation-demands-it-5f4f2cbc7bb0" target="_blank">
                <h6 class="notelink__h">Learning by doing: acquiring skills when the situation demands it</h6>
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
      title: 'Juan Martín Germano - Product Designer',
      meta: [
        { hid: 'description', name: 'description', content: 'About our company Nuxt.js ' }
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
  .hero
    &.big
      height: 100vh
      max-height: 850px
      min-height: 650px
      background-size: cover
      background-position: center center
      background-repeat: no-repeat
      background-image: url('~assets/images/hero-v2.jpg')
      -webkit-appearance: none
      box-shadow: inset 0 0 0 955px rgba(39,39,47,0.8)
      position: relative
      padding-bottom: 240px
      @media(max-width: 479px)
        padding-top: 300px
        padding-bottom: 200px
        background-image: url('~assets/images/hero-v2-mobile.jpg')
      &:before
        content: ''
        display: block
        width: 2px
        height: 150px
        background: #C8B382
        position: absolute
        left: 50%
        transform: translateX(-50%)
        top: calc(100% - 150px)
        transition: all 350ms 100ms ease-in
        @media(max-width: 991px)
          height: 100px
          top: calc(100% - 100px)

  .page-leave-active, .page-enter-active
    .hero
      &.big
        &:before
          height: 0

  .section.notes
    @media(max-width: 991px)
      .btn
        margin-bottom: 35px
</style>
