<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{on}">
        <v-btn color="teal lighten-2" height="50" dark v-on="on">Crear Nuevo Equipo</v-btn>
      </template>
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>Nuevo equipo</v-card-title>
        <v-card-text>
          <v-form class="px-3">
            <v-text-field label="Nombre" v-model="nomEquipo" prepend-icon="mdi-account-group"></v-text-field>
            <v-menu>
              <template v-slot:activator="{on}">
                <v-text-field :value="formattedDate" v-on="on" label="Fecha de Creacion"></v-text-field>
              </template>
              <v-date-picker v-model="fCreacion"></v-date-picker>
            </v-menu>
            <v-btn color="primary" text @click="dialog = false">Crear</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>



<script>
import format from 'date-fns/format'
export default {
  data() {
    return {
      nomEquipo: '',
      fCreacion: null
    };
  },
  methods:{
      submit(){
          console.log(this.nomEquipo + ' ' + this.fCreacion)
      }
  },
  computed: {
      formattedDate(){
          return this.fCreacion ? format(Date.parse(this.fCreacion), 'd MM yyyy') : ''
          
      }
  }
};
</script>