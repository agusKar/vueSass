<template>
    <nav class="navbar navbar-purple text-white mb-4">
        <div class="container">
            <h2 class="site-title">{{ title }}</h2>
            <p>{{ subtitle }}</p>
        </div>
    </nav>
</template>
<script>
export default {
  name: 'NavBar',
  props: ['title', 'subtitle'],
};
</script>
<style scoped lang="scss">
    @import '@/styles/components/navbar';
</style>
