<template>
  <div class="card">
    <div class="card-title">
      <h3>{{ cardTitle }}</h3>
    </div>
    <div class="card-body">
      <p>{{ cardMsg }}</p>
      <button>Click Me</button>
    <a href="/" class="btn-info">click me</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardBox',
  props: ['title', 'msg'],
  data() {
    return {
      cardTitle: this.title,
      cardMsg: this.msg,
    };
  },
};
</script>

<style scoped lang="scss">
@import '@/styles/components/cards.scss';
</style>
