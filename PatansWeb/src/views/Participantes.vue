<template>
  <div class="participantes">
    <h1 class="subheading grey--text">Participantes</h1>

  <v-container class="my-5">
     <v-card flat class="pa-3" v-for="participante in participantes" :key="participante.nombre+participante.apPat">
        <v-layout row wrap :class="`pa-3 participante ${participante.nickEquipo}`">

          <v-flex xs12 md6>
            <div class="caption grey--text">Nombre del participante</div>
            <div>{{ participante.nombre + ' ' + participante.apPat + ' ' + participante.apMat }}</div>
          </v-flex>

          <v-flex xs4 sm4 md2>
            <div class="caption grey--text">Celular</div>
            <div>{{ participante.celular }}</div>
          </v-flex>

          <v-flex xs4 sm4 md2>
            <div class="caption grey--text">Correo</div>
            <div>{{ participante.email }}</div>
          </v-flex>

          <v-flex xs4 sm4 md2>
            <div class="caption grey--text">Equipo</div>
            <div>{{ participante.equipo }}</div>
          </v-flex>
          
        </v-layout>

      </v-card>


  </v-container>

    
  </div>
</template>

<script>

export default {
  data(){
    return{
      participantes: [
        {nombre: 'Manuel', apPat: 'Delgado', apMat: 'Alba', celular: '922410150', email: 'mjdelgado@pucp.pe', equipo: 'Debuggers', nickEquipo: 'Debuggers'},
        {nombre: 'Martin', apPat: 'Ramirez', apMat: 'Benitez', celular: '999363527', email: 'mramirez@pucp.pe', equipo: 'Moves Like Java', nickEquipo: 'Java'},
        {nombre: 'Daniel', apPat: 'Alpiste', apMat: 'Sarmiento', celular: '987654321', email: 'dalpiste@pucp.pe', equipo: 'Debuggers', nickEquipo: 'Debuggers'},
        {nombre: 'Camille', apPat: 'Castañeda', apMat: 'Castañeda', celular: '985647123', email: 'ccastaneda@pucp.pe', equipo: 'Blue Screen of Death', nickEquipo: 'Blues'},
        {nombre: 'Manuel', apPat: 'Chapilliquen', apMat: 'Egas', celular: '951236478', email: 'mchapilliquen@pucp.pe', equipo: 'Blue Screen of Death', nickEquipo: 'Blues'}
      ]
    }
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
