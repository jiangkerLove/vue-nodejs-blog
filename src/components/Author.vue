<template>
  <div>
    <img :src="author.avatar_url" width="30px" height="30px" />
    {{ author.loginname }}
  </div>
</template>
<script>
export default {
  name: "Author",
  props: ["author"]
};
</script>
