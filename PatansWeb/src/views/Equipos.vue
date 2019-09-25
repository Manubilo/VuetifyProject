<template>
  <div class="equipos">
    <h1 class="subheading grey--text">Equipos</h1>

    <v-container class="my-5">

      <v-card flat class="pa-3" v-for="equipo in equipos" :key="equipo.nick ">
        <v-layout row wrap :class="`pa-3 equipo ${equipo.nick}`">
          <v-flex xs12 md6>
            <div class="caption grey--text">Nombre del equipo</div>
            <div>{{ equipo.nombre }}</div>
          </v-flex>

          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Fecha de Creación</div>
            <div>{{ equipo.fechaCreacion }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>

          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Estado</div>
            <div>{{ equipo.estado }}</div>
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
      equipos: [
        {nombre: 'Debuggers', fechaCreacion: '25 Set 2019', descripcion: 'Team Debuggers', nick:'Debuggers', estado: 'Activo'},
        {nombre: 'Moves like Java', fechaCreacion: '31 Ago 2018', descripcion: 'Team Java', nick: 'Java', estado: 'Activo'},
        {nombre: 'Blue Screen of Death', fechaCreacion: '01 Ene 2016', descripcion: 'Team Blue', nick: 'Blues',   estado: 'Inactivo'}
      ]
    }
  }
};
</script>

<style>
.equipo.Debuggers {
  border-left: 8px solid grey;
  }
  .equipo.Java {
  border-left: 8px solid red;
  }
  .equipo.Blues {
  border-left: 8px solid blue;
  }
</style>