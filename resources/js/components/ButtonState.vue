<template>
  <button class="custom-button" @click="handleClick">
    {{ label }}
  </button>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    onClick: {
      type: Function,
      required: true
    }
  },
  methods: {
    handleClick() {
      // Panggil fungsi onClick yang disediakan sebagai properti
      this.onClick();
      // console.log('clicked');
    }
  }
};
</script>

<style scoped>
.custom-button {
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  text-align: center;
  text-decoration: none;
  color: #fff;
  background-color: #D3242B;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;
}

.custom-button:hover {
  background-color: #f1444a;
}
</style>
