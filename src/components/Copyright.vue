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
  transform: rotate(270deg);
  width: 130px;
  margin: 0px 0 40px 0;
}
</style>