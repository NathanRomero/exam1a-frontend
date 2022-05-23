<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>
        <i class="el-icon-location"></i>
        <span>Pronostico para el día: {{ data.date }}</span>
      </span>
    </div>
    <div class="data-grid">
        <span><font-awesome-icon icon="fa-solid fa-city"/> Ciudad: {{ city }}</span>
        <span><font-awesome-icon icon="fa-solid fa-temperature-half"/> Temperatura: {{ data.temperature }}</span>
        <span><font-awesome-icon icon="fa-solid fa-temperature-arrow-up"/> Temperatura Máxima: {{ data.maxTemperature }}</span>
        <span><font-awesome-icon icon="fa-solid fa-temperature-arrow-down"/> Temperatura Mínima: {{ data.minTemperature }}</span>
        <span><font-awesome-icon icon="fa-solid fa-wind"/> Viento: {{ data.wind }}</span>
        <span><font-awesome-icon icon="fa-solid fa-droplet"/> Humedad: {{ data.humidity }}</span>
        <span><font-awesome-icon icon="fa-solid fa-down-left-and-up-right-to-center" />Presión: {{ data.pressure }}</span>
    </div>
  </el-card>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
.data-grid{
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    text-align: start;
}

.data-grid span{
    padding: 3px;
    font-size: 1.2em;
}
</style>