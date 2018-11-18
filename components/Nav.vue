<template>
  <header>
    <div class="container">
      <nav>
        <nuxt-link to="/">About</nuxt-link>
        <nuxt-link to="/work">Work</nuxt-link>
        <nuxt-link to="/notes">Notes</nuxt-link>
        <a href="#contact">Contact</a>
      </nav>
    </div>
  </header>
</template>

<style lang="sass">
  header
    position: absolute
    width: 100%
    left: 0
    top: 0
    right: 0
    padding-top: 45px
    z-index: 10
    transition: all 200ms ease-out
    overflow: auto
    padding-bottom: 25px
    -webkit-mask-image: linear-gradient(90deg,transparent,#000 20px,#000 calc(100% - 20px),transparent)
    nav
      display: flex
      a
        text-decoration: none
        color: #F5F5F5
        font-size: 14px
        letter-spacing: 0.2em
        text-transform: uppercase
        padding: 0 16px
        font-weight: 700
        transition: all 250ms ease-in
        &.nuxt-link-exact-active
          color: #C8B382
        &:first-of-type
          padding-left: 0
        &:hover
          color: #C8B382
        @media(max-width: 479px)
          // font-size: 13.5px
          // padding: 0 14px

  .page-leave-active, .page-enter-active
    header
      transform: translateY(-20%)
      opacity: 0
</style>