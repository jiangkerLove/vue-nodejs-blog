<template>
  <div>
    <a-button type="primary" @click="get('ask', askNum++)">sak</a-button>
    <a-button type="primary" @click="get('share', shareNum++)">share</a-button>
    <a-button type="primary" @click="get('job', jobNum++)">job</a-button>
    <a-button type="primary" @click="get('good', goodNum++)">good</a-button>
    <div v-for="item in listData" :key="item.id">
      <br />
      <TopicItem :item="item"></TopicItem>
    </div>
    <div @click="addmore" class="showmore">show more</div>
  </div>
</template>
<script>
import TopicItem from "../components/TopicItem";
export default {
  name: "about",
  components: {
    TopicItem
  },
  computed: {
    listData() {
      return this.$store.getters["topics/getDataByType"](this.topicType);
    }
  },
  data: function() {
    return {
      topicType: "ask",
      askNum: 1,
      shareNum: 1,
      jobNum: 1,
      goodNum: 1
    };
  },
  methods: {
    get(type, num) {
      this.topicType = type;
      this.$store.dispatch("topics/getDataByUrl", { type, num });
    },
    addmore() {
      let type = this.topicType;
      let num;
      switch (type) {
        case "ask":
          num = this.askNum;
          break;
        case "share":
          num = this.shareNum;
          break;
        case "job":
          num = this.jobNum;
          break;
        case "good":
          num = this.goodNum;
          break;
      }
      this.$store.dispatch("topics/getDataByUrl", { type, num });
    }
  },
  created() {
    // eslint-disable-next-line no-undef
    this.get(this.topicType, this.askNum);
    this.askNum++;
  }
};
</script>

<style scoped>
.showmore {
  margin-top: 1em;
  background-color: aqua;
  margin-left: 20%;
  padding: 1em;
  margin-right: 20%;
}
</style>
