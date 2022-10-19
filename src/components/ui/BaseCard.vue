<template>
  <div class="card border-0">
    <div class="card-body">
      <div class="card-title">
        <slot name="icon"></slot>
      </div>
      <h3 class="card-subtitle">
        <slot name="title"></slot>
      </h3>
      <div class="card-text text-secondary">
        <slot name="text"></slot>
      </div>
    </div>
  </div>
</template>
<style scoped>
.card-subtitle {
  /* height: 64.25px; */
}
</style>
