<template>
  <div>
    <nuxt/>
  </div>
</template>

<style lang="sass">
  ::-moz-selection
    background: #C8B382
  ::selection
    background: #C8B382
  *
    box-sizing: border-box
    margin: 0
    padding: 0
  html
    background: #27272F
    font-family: 'Montserrat', sans-serif
    transition: all 200ms ease-in
    overflow-x: hidden

  .page-enter-active, .page-leave-active 
    transition: all .35s .20s ease-out
    html
      opacity: 0
  .page-enter, .page-leave-active
    opacity: 0
    transform-origin: 50% 50%
  

  .btn
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.06)
    background: #C8B382
    padding: 15px 30px
    color: #F5F5F5
    font-weight: 700
    text-decoration: none
    display: inline-block
    transition: all 200ms ease-in
    position: relative
    cursor: pointer
    border: 0
    border-radius: 0
    &:hover
      background: #F5F5F5
      color: #C8B382
      box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.06)
    &.disabled
      cursor: default
      opacity: 0.6
      &:hover
        background: #C8B382
        color: #F5F5F5
        
    &.btn__xl
      text-transform: uppercase
      letter-spacing: 0.1em
      display: block
      text-align: center

  .hero__h, .hero__h small
    font-size: 84.9986px
    color: #f5f5f5
    line-height: 66px
    font-family: 'Lora', serif
    @media(max-width: 991px)
      font-size: 72px
      line-height: 60px
    @media(max-width: 479px)
      font-size: 60px
      line-height: 48px
  .hero__h
    margin: 0 0 25px
    small
      color: #C8B382
    span
      display: block
      font-size: 0.5em

  .hero__sub
    font-weight: 300
    line-height: 37px
    font-size: 25.3691px
    color: rgba(245, 245, 245, 0.5)
    @media(max-width: 991px)
      font-size: 24px
      line-height: 35px
    @media(max-width: 479px)
      font-size: 20px
      line-height: 30px

  .sectionContent__preH
    display: block
    margin-bottom: 5px
    font-weight: 700
    line-height: normal
    font-size: 14.48px
    letter-spacing: 0.3em
    color: #C8B382
    text-transform: uppercase

  .sectionContent__h
    color: rgba(245, 245, 245, 0.9)
    font-family: 'Lora', serif
    font-size: 53px
    font-weight: 600
    line-height: normal
    margin: 0 0 25px
    @media(max-width: 991px)
      margin-bottom: 20px
      font-size: 48px
    @media(max-width: 479px)
      font-size: 38px

  .sectionContent__p
    color: rgba(245, 245, 245, 0.5)
    font-size: 21.72px
    font-weight: 300
    line-height: 36px
    margin: 0 0 25px
    @media(max-width: 479px)
      font-size: 18px
      line-height: 28px
    strong
      display: block
      font-weight: 700
      @media(max-width: 991px)
        font-size: 18px
        line-height: 28px

  .sectionContent_read
    font-size: 18px
    font-weight: 300
    line-height: 27px
    color: rgba(245, 245, 245, 0.5)
    & + .sectionContent_read
      margin-top: 15px

  .hero 
    background: #38434F
    padding: 275px 0 80px
    margin-bottom: 50px
    @media(max-width: 479px)
      padding-bottom: 50px

  .section
    padding: 50px 0

  .notelink
    margin-bottom: 30px
    @media(max-width: 767px)
      margin-bottom: 40px
    > a
      display: block
      text-decoration: none
    &:not(:last-child)
      margin-bottom: 30px
    &__h
      font-family: 'Lora', serif
      font-weight: 700
      line-height: 32px
      font-size: 23px
      color: rgba(245, 245, 245, 0.9)
      margin: 0 0 10px
      @media(max-width: 991px)
        font-size: 20px
        line-height: normal  
    &__btn
      font-weight: 300
      line-height: 22px
      font-size: 15px
      letter-spacing: 0.07em
      color: #596869
      text-transform: uppercase
      text-decoration: none
      position: relative
      padding-bottom: 7px
      transition: all 300ms ease-in-out
      text-decoration: none
      display: inline-block
      @media(max-width: 991px)
        font-size: 14px
      &:hover
        color: #C8B382
        &:after
          width: 100%
      &:before, &:after
        content: ''
        display: block
        height: 2px
        position: absolute
        left: 0
        bottom: 0
        transition: all 150ms ease-in
      &:before
        width: 100%
        background: #596869
      &:after
        width: 0
        background: #C8B382
    img
      display: block
      margin-bottom: 15px
  
  .section
    &.work
      overflow: hidden
      img
        max-width: 860px
        display: block
        position: relative
        right: -20%
        @media(min-width: 1300px)
          right: -30%
          max-width: 1000px
        @media(max-width: 767px)
          max-width: 500px
          right: -60%
          margin-top: -35px
      @media(max-width: 767px)
        .btn
          margin-bottom: 0px
    &.about
      .avatar
        max-width: 200px
</style>
