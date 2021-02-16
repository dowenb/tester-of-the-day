<template>
  <div class="hall">
    <a href="https://testeroftheday.fullsnacktester.com"
      ><img
        class="logo"
        src="../assets/hall-of-fame-header-2021.png"
        alt="Tester of the day hall of fame"
      />
    </a>
    <p>Celebrating the Software Testing Community, every day.</p>
    <p>
      To Nominate someone please contact Ben Dowen on
      <img src="../assets/twitter.svg" class="icon" alt="Twitter logo" />
      <a href="https://twitter.com/fullsnacktester">@FullSnackTester</a>
    </p>
    <p class="bigLink">Find the full list of 2020 winners here: <a href="https://totd-2020.fullsnacktester.com/">https://totd-2020.fullsnacktester.com</a></p>
    <br />
    <label for="search" class="hidden">Find a winner by name</label>
    <input
      type="text"
      id="search"
      class="search"
      v-model="search"
      placeholder="Find winner by name"
    />
    <div
      class="winner"
      v-for="winner in filteredWinners"
      v-bind:key="winner.date"
    >
      <ul>
        <li class="name">
          <h2>
            <img
              src="../assets/trophy.svg"
              class="trophy"
              alt="Winners Trophy"
            />
            {{ winner.name }}
            <img
              src="../assets/trophy.svg"
              class="trophy"
              alt="Winners Trophy"
            />
          </h2>
        </li>
        <li class="note">{{ winner.note }}</li>
        <li class="windate">
          Tester of the day:
          <img
            src="../assets/calendar.svg"
            class="icon"
            alt="calender icon"
          />{{ winner.date }}
        </li>
        <li class="twitter social" v-if="winner.twitter">
          <img src="../assets/twitter.svg" class="icon" alt="Twitter logo" />
          <a :href="winner.twitter" target="_blank">{{ winner.twitter }}</a>
        </li>
        <li class="linkedin social" v-if="winner.linkedin">
          <img src="../assets/linkedin.svg" class="icon" alt="Linkedin logo" />
          <a :href="winner.linkedin" target="_blank">{{ winner.linkedin }}</a>
        </li>
        <li
          class="weblinks social"
          v-for="weblink in winner.weblinks"
          :key="weblink.name"
        >
          <img src="../assets/web.svg" class="icon" alt="Web link logo" />
          <a :href="weblink.url" target="_blank">{{ weblink.name }}</a>
        </li>
      </ul>
    </div>
    <br />
    <p>
      This project is run by Ben Dowen the Full Snack Test Engineer. I can be
      found in various places on the internet, start here:
      <a href="https://linktr.ee/dowenb">https://linktr.ee/dowenb</a>
    </p>
    <a href="https://twitter.com/fullsnacktester">
      <img
        class="fullSnack"
        src="../assets/ben-2021.png"
        alt="Full Snack Test Engineer Ben Dowen"
      />
    </a>
  </div>
</template>

<script>
import winnersList from "../../winners/2021-hall-of-fame.json";
export default {
  data() {
    return {
      search: "",
      winnersList,
    };
  },
  computed: {
    filteredWinners() {
      return this.winnersList.filter((winner) => {
        return winner.name.toLowerCase().includes(this.search.toLowerCase());
      });
    },
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
  padding: 0px;
  margin: 0px;
}
li {
  display: list-item;
  text-align: left;
  padding: 5px;
}
a {
  color: black;
  word-wrap: break-word;
}
.winner {
  margin: auto;
  width: 100%;
  display: block;
  border-style: solid;
  border-color: black;
  margin-bottom: 5px;
  margin-top: 5px;
  margin-left: 0px;
  margin-right: 0px;
  position: relative;
}
.winner:nth-child(odd) {
  background-color: #00aad4ff;
  color: black;
}
.winner:nth-child(even) {
  background-color: #ff0066ff;
  color: black;
}
.social {
  background-color: snow;
}
.icon {
  max-width: 20px;
  max-height: 20px;
  vertical-align: bottom;
  margin-right: 5px;
}
.hall {
  max-width: 620px;
  margin: auto;
  color: black;
  background-color: white;
}
#app > div > div:nth-child(odd) > ul > li.name > h2 {
  color: black;
  font-size: 1.7em;
}
#app > div > div:nth-child(even) > ul > li.name > h2 {
  color: black;
  font-size: 1.7em;
}

.note {
  font-size: 1.2em;
}
h1{
  color: black;
}
h2 {
  text-align: center;
}
p {
  color: black;
}
.logo {
  margin: auto;
}
img.fullSnack {
  max-height: 100px;
}
img {
  max-width: 100%;
}
.search {
  margin: auto;
  width: 95%;
  display: block;
  font-size: 1.6em;
  border-radius: 25px;
}
.linkedin {
  fill: yellow;
}
.trophy {
  max-width: 25px;
  max-height: 25px;
  vertical-align: middle;
  margin-right: 5px;
  margin-left: 5px;
}
.bigLink {
  background-color: #00aad4ff;
  padding: 5px;
  margin: 5px;
  font-size: 1.1em;
}
.hidden {
  display:none;
}
</style>
