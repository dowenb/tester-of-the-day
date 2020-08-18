<template>
  <div>
    <h1>{{ msg }}</h1>
    <p>Some introduction to Test Of the Day.</p>
    <div class="winner" v-for="winner in winners" :key="winner.name">
      <ul>
        <li>{{ winner.name }}</li>
        <li>{{ winner.note }}</li>
        <li>{{ winner.date }}</li>
        <li>{{ winner.twitter }}</li>
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
  margin: 0 10px;
}
a {
  color: #42b983;
}
.winner {
  max-width: 250px;
  max-height: 250px;
  background-color: #006080;
  color: white;
  display: inline-block;
  padding: 10px;
}
</style>
