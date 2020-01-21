<template>
  <div>
    <div class="container">
      <form class="d-flex justify-content-center align-items-center">
        <input
          class="input-bordered"
          type="text"
          v-model="search"
          @keyup.enter="getData"
          placeholder="What would you like?"
        />
        <button class="btn bg-purple" @click.prevent="getData">Search</button>
      </form>
    </div>
    <!-- images -->
    <div class>
      <section v-if="errored">
        <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
      </section>
      <div class="row grid">
        <div class="content-area card" v-for="image in images" :key="image.id">
          <div class="card-innr">
            <div class="card-head" v-if="image.urls">
              <img :src="image.urls.regular" alt />
            </div>
            <!-- .card-innr -->
          </div>
          <!-- .card -->
        </div>
        <!-- .col -->
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Home",
  data() {
    return {
      search: "",
      images: [],
      errored: false
    };
  },
  methods: {
    getData() {
      axios
        .get(
          `https://api.unsplash.com/search/photos/?client_id=ac09458f491a0498c337e07b419b1a8b34cbc8170785e7642e95cf41dda93b1f&query=${this.search}`
        )
        .then(response => {
          console.log(response);
          this.search = ""
          this.images = response.data.results
          console.log(this.images);
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  created() {
    axios
      .get(
        "https://api.unsplash.com/photos/?client_id=ac09458f491a0498c337e07b419b1a8b34cbc8170785e7642e95cf41dda93b1f"
      )
      .then(response => {
        // console.log(response);
        this.images = response.data;
      })
      .catch(error => {
        console.log(error);
        this.errored = true;
      });
  }
};
</script

// <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.grid {
  margin: 2em;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
</style>
