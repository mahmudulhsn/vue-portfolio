<template>
  <div
    class="about flex justify-center h-screen text-white bg-no-repeat bg-cover"
  >
    <div>
      <h1>This is an about page</h1>
    </div>
  </div>
</template>

<style>
/* @media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
} */
.about {
  background: #000;
  width: 100%;
  height: 100%;
  min-width: 100%;
  min-height: 100%;
  position: relative;
  /* background: linear-gradient( 90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.8) 34.37%, rgba(0, 0, 0, 0.2) 100% ); */
  opacity: 0.99;
}

.about::before {
  background-image: url("../../src/assets/img/bg.png");
  background-size: cover;
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
}
</style>
