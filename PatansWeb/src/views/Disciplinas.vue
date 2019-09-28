<template>
  <div class="disciplinas">
    <h1 class="subheading grey--text">Disciplinas</h1>

    <v-container class="my-5">
      <v-layout row wrap class="pa-3">
        <v-flex xs12 sm6 md4 lg3 class="pa-3" v-for="disciplina in disciplinas" :key="disciplina.nombre">
          <v-card text class="pa-2" >
            <v-img class="white--text" aspect-ratio="1" :src="disciplina.link">
              <v-card-title class="align-end fill-height">{{ disciplina.nombre }}</v-card-title>
            </v-img>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      disciplinas: [
        {
          nombre: "Fútbol",
          fechaInicio: "25 Set 2019",
          horaInicio: " 08:00",
          fechaFin: "25 Set 2019",
          horaFin: "10:00",
          link:
            "https://www.mundodeportivo.com/r/GODO/MD/p5/ContraPortada/Imagenes/2018/07/17/Recortada/img_jagsirvent_20170424-211745_imagenes_md_propias_jagsirvent_b14_4_5_301990616-kA9-U45948366953eQF-980x554@MundoDeportivo-Web.jpg"
        },
        {
          nombre: "Básket",
          fechaInicio: "26 Set 2019",
          horaInicio: "09:00",
          fechaFin: "26 Set 2019",
          horaFin: "11:00",
          link:
            "https://www.mundodeportivo.com/r/GODO/MD/p5/ContraPortada/Imagenes/2018/11/30/Recortada/20181202-636793745751623947_20181202191253191-k5d-U453242464006o3-980x554@MundoDeportivo-Web.jpg"
        },
        {
          nombre: "Vóley",
          fechaInicio: "30 Set 2019",
          horaInicio: "15:00",
          fechaFin: "30 Set 2019",
          horaFin: "18:00",
          link:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Europei_di_pallavolo_2005_-_Italia-Russia.jpg/800px-Europei_di_pallavolo_2005_-_Italia-Russia.jpg"
        }
      ]
    };
  }
};
</script>