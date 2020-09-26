<template>
  <div class="hall">
    <img
      class="logo"
      src="../assets/totd_hall_banner.svg"
      alt="Tester of the day hall of fame"
    />
    <p>Tester of the day is recognition of awesomeness in Software Testing.</p>
    <p>
      The competition is run by Benjamin Dowen, The Full Snack Test Engineer. It
      is "for fun" and intended to be friendly for the purpose of encouraging
      excellent Software Testers.
    </p>
    <p>
      To Nominate someone please contact Ben on
      <img src="../assets/twitter.svg" class="icon" alt="Twitter logo" />
      <a href="https://twitter.com/dowenb">@dowenb</a>
    </p>
    <br />
      <input type="text" class="search" v-model="search" placeholder="Find winner by name" />
    <div class="winner" v-for="winner in filteredWinners" :key="winner.name">
      <ul>
        <li class="name">
          <h2>{{ winner.name }}</h2>
          Tester of the day:
          <img
            src="../assets/calendar.svg"
            class="icon"
            alt="calender icon"
          />{{ winner.date }}
        </li>
        <li class="note">{{ winner.note }}</li>
        <li class="twitter">
          <img src="../assets/twitter.svg" class="icon" alt="Twitter logo" />
          <a :href="winner.twitter">{{ winner.twitter }}</a>
        </li>
      </ul>
    </div>
    <br />
    <p>
      This project is run by Ben Dowen the Full Snack Test Engineer. I can be
      found in various places on the internet, start here:
      <a href="https://linktr.ee/dowenb">https://linktr.ee/dowenb</a>
    </p>
    <a href="https://twitter.com/dowenb">
      <img
        src="../assets/fullsnack.jpg"
        class="fullSnack"
        alt="Full Snack Test Engineer Ben Dowen"
      />
    </a>
  </div>
</template>

<script>
import winnersList from "../../winners/testers-of-the-day.json";
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
  padding: 0;
}
li {
  display: list-item;
  text-align: left;
  padding: 5px;
}
a {
  color: #34dbdb;
}
.winner {
  margin: auto;
  width: 100%;
  display: block;
}
.winner:nth-child(odd) {
  background-color: #022b38;
  color: #34dbdb;
}
.winner:nth-child(even) {
  background-color: #104a63;
  color: #34dbdb;
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
}
.name {
  color: white;
}
.note {
  font-size: 1.2em;
}
h1,
h2 {
  color: white;
}
p {
  color: white;
}
.logo {
  margin: auto;
}
.fullSnack {
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
}
</style>
