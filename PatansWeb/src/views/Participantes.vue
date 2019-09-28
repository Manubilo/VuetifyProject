<template>
  <div class="participantes">
    <h1 class="subheading grey--text">Participantes</h1>

    <v-container class="my-5">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="participante in participantes" :key="participante.apPat">
          <v-card class="text-center ma-3">
            <v-responsive class="pt-4">imagen va aqui</v-responsive>
            <v-card-text class="black--text">
              <div>{{participante.nombre + ' ' + participante.apPat + ' ' + participante.apMat}}</div>
              <div class="grey--text">{{participante.equipo}}</div>
            </v-card-text>
            <v-card-actions>
              <div class="flex-grow-1"></div>
              <v-btn text color="grey">
                <v-icon small left>mdi-message</v-icon>
                <span>Message</span>
              </v-btn>
            </v-card-actions>
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
      participantes: [
        {
          nombre: "Manuel",
          apPat: "Delgado",
          apMat: "Alba",
          celular: "922410150",
          email: "mjdelgado@pucp.pe",
          equipo: "Debuggers",
          nickEquipo: "Debuggers"
        },
        {
          nombre: "Martin",
          apPat: "Ramirez",
          apMat: "Benitez",
          celular: "999363527",
          email: "mramirez@pucp.pe",
          equipo: "Moves Like Java",
          nickEquipo: "Java"
        },
        {
          nombre: "Daniel",
          apPat: "Alpiste",
          apMat: "Sarmiento",
          celular: "987654321",
          email: "dalpiste@pucp.pe",
          equipo: "Debuggers",
          nickEquipo: "Debuggers"
        },
        {
          nombre: "Eli",
          apPat: "Chaveta",
          apMat: "de Comas",
          celular: "985647123",
          email: "eli@pucp.pe",
          equipo: "Blue Screen of Death",
          nickEquipo: "Blues"
        },
        {
          nombre: "Manuel",
          apPat: "Chapilliquen",
          apMat: "Egas",
          celular: "951236478",
          email: "mchapilliquen@pucp.pe",
          equipo: "Blue Screen of Death",
          nickEquipo: "Blues"
        }
      ]
    };
  }
};
</script> 

<style >
.participante.Debuggers {
  border-left: 8px solid grey;
}
.participante.Java {
  border-left: 8px solid red;
}
.participante.Blues {
  border-left: 8px solid blue;
}
</style>
