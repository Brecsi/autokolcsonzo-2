<template>
  <div class="table-container table:hover">
    <table>
      <thead>
        <tr>
          <th>Year</th>
          <th>Model</th>
          <th>Color</th>
          <th>License</th>
          <th>Price/Day</th>
          <th>Availability</th>
        </tr>
      </thead>
      <tbody v-for="(car, index) in carsAvailability" :key="`car${index}`">
        <tr>
          <td>{{ car.year }}</td>
          <td>{{ car.type }}</td>
          <td>{{ car.color }}</td>
          <td>{{ car.license }}</td>
          <td>{{ car.dailyRate }}</td>
          <!-- <b-form-rating v-model="value"></b-form-rating> -->
          <!-- <td>{{ carsWithLoans.numberOfDays ? "Available" : "Not Available" }}</td> -->
          <td :style="{color: car.Available === 'Not available' ? 'red' : 'green',}">{{ car.Available }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
  
<script>
import * as bootstrap from "bootstrap";
import { useUrlStore } from "@/stores/url";
import { useLoginStore } from "@/stores/login";
const storeUrl = useUrlStore();
const storeLogin = useLoginStore();

export default {
  data() {
    return {
      storeUrl,
      storeLogin,
      cars: [],
      carsWithLoans: [],
      carsAvailability: [],
    };
  },
  mounted() {
    this.getCars();
    this.getCarsWithLoans();
    this.getCarsAvailability();
  },
  methods: {
    async getCarsAvailability() {
      let url = this.storeUrl.urlCarsAvailability;
      const config = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${this.storeLogin.accessToken}`,
        },
      };
      const response = await fetch(url, config);
      const data = await response.json();
      this.carsAvailability = data.data.sort((a, b) => a.year - b.year);
    },

    async getCars() {
      let url = this.storeUrl.urlCars;
      const config = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${this.storeLogin.accessToken}`,
        },
      };
      const response = await fetch(url, config);
      const data = await response.json();
      this.cars = data.data;
    },
    async getCarsWithLoans() {
      let url = this.storeUrl.urlCarsWithLoans;
      const config = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${this.storeLogin.accessToken}`,
        },
      };
      const response = await fetch(url, config);
      const data = await response.json();
      this.carsWithLoans = data.data;
    },
  },
  computed: {
    changeColor(time, num) {
      try {
        if (time !== 0) {
          return "yellow";
        } else {
          if (time < num) return "green";
          else {
            return "red";
          }
        }
      } catch (error) {
        return "yellow";
      }
    },
  },
};
</script>
  
<style>
.table-container {
  max-width: 800px;
  margin: auto;
}

body {
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  text-align: left;
  padding: 8px;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: #f2f2f2;
  cursor: pointer;
}

.yellow {
  color: yellow;
}

.green {
  color: green;
}

.red {
  color: red;
}
</style>
  