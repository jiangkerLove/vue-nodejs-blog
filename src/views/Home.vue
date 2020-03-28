<template>
  <div class="topiccontent">
    <h1 style="text-align: center">{{ resp.data.title }}</h1>
    <div v-html="resp.data.content"></div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      resp: {
        data: {
          id: "22222"
        }
      }
    };
  },
  created() {
    let url = `https://cnodejs.org/api/v1/topic/${this.$route.params.id}`;
    console.log(url);
    axios.get(url).then(response => {
      this.resp = response.data;
    });
  }
};
</script>
<style lang="scss">
.topiccontent {
  margin-left: 20%;
  margin-right: 20%;
  text-align: left;
  img {
    width: 100%;
  }
}
</style>
