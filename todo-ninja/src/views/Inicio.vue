<template>
  <div class="home">
    <h1>Página principal</h1>
    <p class="red--text">Esta es la pagina principal wii</p>

    <v-btn text color="orange">
        <v-icon left>mdi-book-open-page-variant</v-icon>
        <span>Historia</span>
    </v-btn>
    <v-btn color="indigo" dark>
        <v-icon left>mdi-account-group</v-icon>
        <span>Equipos</span>
    </v-btn>
    <v-btn depressed class="green white--text">
        <v-icon left>mdi-account-box</v-icon>
        <span>Participantes</span>
    </v-btn>

    <v-btn depressed class="blue white--text">
        <v-icon left>mdi-basketball</v-icon>
        <span>Disciplinas</span>
    </v-btn>


  </div>
</template>

<script>

export default {

};
</script>