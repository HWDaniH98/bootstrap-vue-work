<template>
  <div id="app" class="card">
    <!--<b-card
      title = "B-card Page"
    >
      <b-card-text>
        This a page with a b-card
      </b-card-text>
    </b-card>-->

    <div id = "nav">
      <top-header></top-header>
      <!-- <router-link to = "/">Home</router-link>
      <router-link to = "/about">About</router-link>
      <router-view/> -->
    </div>
    
    <!--<b-container>
      <b-row align-v="center">
        <job-card v-for="job in displayJobs" :key="job.id" :name="job.name"></job-card>
      </b-row>
    </b-container>

    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      first-text="First"
      prev-text="Prev"
      next-text="Next"
      last-text="Last"
      @input ="paginate(currentPage)"
    ></b-pagination>-->

    <router-view></router-view>
  </div>
</template>

<script>
  //import JobCard from "@/components/JobCard.vue";
  import TopHeader from "@/components/TopHeader.vue";
  //import Form from "@/components/Form.vue";

  export default
  {
    name: "home",
    components:
    {
      //"job-card" : JobCard,
      "top-header" : TopHeader
    },
    /*mounted()
    {
      this.fetchData();
    },
    data()
    {
      return {
        jobs: [],
        displayJobs: [],
        currentPage: 1,
        rows: 1,
        perPage: 3
      }
    },
    methods:
    {
      async fetchData()
      {
        const res = await fetch("jobs.json");
        const val = await res.json();
        this.jobs = val;
        this.displayJobs = val.slice(0, 3);
        this.rows = this.jobs.length;
        console.log(val);
      },
      paginate(currentPage)
      {
        alert(currentPage);
        const start = (currentPage - 1) * this.perPage;
        this.displayJobs = this.jobs.slice(start, start + 3);
      }
    }*/
  };
</script>

<style>
  #app
  {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
