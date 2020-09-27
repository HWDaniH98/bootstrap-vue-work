<template>
    <div>
        <b-container>
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
        ></b-pagination>
    </div>
</template>

<script>
import JobCard from "./JobCard.vue"

export default
{
    name: "home",
    components:
    {
      "job-card" : JobCard,
      //"top-header" : TopHeader
    },
    mounted()
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
    }
}
</script>

<style lang = "scss" scoped>
 #nav a.router-link-exact-active
 {
     color: white;
 }
</style>