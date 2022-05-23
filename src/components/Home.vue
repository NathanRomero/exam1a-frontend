<template>
  <div class="grid">
    <el-form ref="form" :model="form" label-width="120px" class="params">
      <el-form-item label="Ciudad">
        <el-select
          v-model="form.cityId"
          required
          placeholder="Selecciona una ciudad"
          filterable
          no-match-text="No se encontraron resultados"
        >
          <el-option
            v-for="item in cities"
            :key="item.id"
            :label="item.fullName"
            :value="item.id"
          >
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="Unidades">
        <el-select
          v-model="form.unitsType"
          required
          placeholder="Seleciona el tipo de unidades unidades"
        >
          <el-option
            v-for="item in unitsType"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="¿Cuántos días?">
        <el-input-number v-model="form.end" :step="1" :max="5"></el-input-number>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">Obtener pronostico</el-button>
      </el-form-item>
    </el-form>
    <div class="cards">
      <WeatherCard :key="data.date" :data="data" :city="currentCity" v-for="data in weatherData"></WeatherCard>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import WeatherCard from './WeatherCard.vue';
export default {
  name: "Home-Component",
  components: {
    WeatherCard
  },
  data() {
    return {
      form: {
        cityId: "",
        unitsType: "metric",
        end: 5
      },
      cities: [],
      unitsType: [
        {
          label: "Grados celcius",
          value: "metric",
        },
        {
          label: "Grados farenheit",
          value: "imperial",
        },
      ],
      weatherData : [],
      currentCity: "",
    };
  },
  mounted() {
    this.getCities();
  },
  methods: {
    getCities() {
      axios
        .get("/cities")
        .then((response) => {
          this.cities = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    onSubmit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          let range = "1"+"-"+this.form.end;
          axios.get(`/getWeather?cityId=${this.form.cityId}&unitsType=${this.form.unitsType}&range=${range}`).then((response) => {
            this.weatherData = response.data.data;
            this.currentCity = response.data.city.fullName;
          });
        }
      });
    }
  }
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
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 20px;
  align-items: center;
  justify-items: center;
}
.params {
  grid-column: 1/4;
  width: 100%;
}
.cards {
  grid-column: 4/13;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
}
</style>
