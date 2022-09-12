<template>
  <p class="copyright text-white">Copyright &copy; {{ currentYear }}</p>
</template>

<script>
export default {
  data() {
    return {
      currentYear: "",
    };
  },
  created() {
    const date = new Date();
    this.currentYear = date.getFullYear();
  },
};
</script>

<style scoped>
.copyright {
  position: relative;
  transform: rotate(270deg);
  bottom: 60px;
  width: 130px;
  right: 20px;
}

@media (max-height: 625px) and (max-width: 1370px) {
  .copyright {
    position: relative;
    transform: rotate(270deg);
    bottom: -16px;
    width: 130px;
    right: 20px;
    font-size: 14px;
  }
}
</style>