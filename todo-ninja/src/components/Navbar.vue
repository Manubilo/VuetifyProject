<template>
    <nav>
        <v-app-bar flat app color="green" >
            <v-app-bar-nav-icon class="white--text" @click="drawer = !drawer"></v-app-bar-nav-icon>

            <v-toolbar-title class="text-uppercase white--text">
                <span class="font-weight-light">Patans</span>
                <span>Web</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn text color="white"> Cerrar Sesión
                <v-icon right>mdi-exit-to-app</v-icon>
            </v-btn>
        </v-app-bar>

        <v-navigation-drawer app v-model="drawer" temporary class="indigo">
            <v-list>
                <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
                    <v-list-item-icon>
                        <v-icon class="white--text">{{ link.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title class="white--text">{{ link.text }}</v-list-item-title> 
                    </v-list-item-content>
                </v-list-item>

            </v-list>
        </v-navigation-drawer>


    </nav>
</template>

<script>
export default {
    data(){
        return{
            drawer: false,
            links: [
            { icon: 'mdi-book-open-page-variant', text: 'Historia', route: '/historia' },
            { icon: 'mdi-account-group', text: 'Equipos', route: '/equipos' },
            { icon: 'mdi-account-box', text: 'Participantes', route: '/participantes'},
            { icon: 'mdi-basketball', text: 'Disciplinas', route: '/disciplinas'},
            ]
        }
    }
}
</script>