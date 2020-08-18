<template>
  <div>
    <h1>{{ msg }}</h1>
    <p>Some introduction to Test Of the Day.</p>
    <br/>
    <div class="winner" v-for="winner in winners" :key="winner.name">
      <ul>
        <li>Name: {{ winner.name }}</li>
        <li>Note: {{ winner.note }}</li>
        <li>Date: {{ winner.date }}</li>
        <li>Twitter: <a :href="winner.twitter">{{ winner.twitter }}</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
import winners from "../../winners/testers-of-the-day.json";
export default {
  data() {
    return {
      winners,
    };
  },
  name: "HallOfFame",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: list-item;
  text-align: left;
  padding: 5px;
  margin-left: 5px;
}
a {
  color: #42b983;
}
.winner {
  margin: 10px;
  max-width: 600px;
  width: 100%;
  max-height: 300px;
  min-height: 100px;
  background-color: #006080;
  color: white;
  display: inline-block;
  padding-block: 5px;
}
</style>
