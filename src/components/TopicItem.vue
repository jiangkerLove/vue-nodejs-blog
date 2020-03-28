<template>
  <div class="topicitem">
    <router-link :to="{ path: '/Home/' + item.id }">
      {{ item.title }}
    </router-link>
    <div class="content">{{ item.content }}</div>
    <Author class="author" :author="item.author"></Author>
    <span class="reply_visit">
      {{ item.reply_count }}/{{ item.visit_count }}
    </span>
  </div>
</template>

<script>
import Author from "@/components/Author.vue";

export default {
  name: "TopicItem",
  props: ["item"],
  components: {
    Author
  }
};
</script>

<style scoped>
* {
  position: relative;
  text-align: left;
}
.topicitem {
  position: relative;
  left: 0%;
  margin-left: 20%;
  margin-right: 20%;
  background-color: aliceblue;
  padding: 1em;
}
.author {
  position: relative;
  display: inline;
}
.content {
  white-space: nowrap;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
}
.reply_visit {
  position: relative;
  float: right;
  margin-right: 1em;
}
</style>
