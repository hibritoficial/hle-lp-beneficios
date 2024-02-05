<template>
    <v-app-bar flat class="bg-primary">
        <div :class="smAndDown ? 'w-25 pl-1' : ''">
            <v-img src="/public/logocolorida.png" />
        </div>

        <v-app-bar-title />

        <div :class="smAndDown ? 'pt-1' : ''">
            <h6 class="text-quintenary font-weight-regular">Cadastro Gratuito</h6>
        </div>

        <div>
            <v-btn :class="smAndDown ? 'mt-3' : ''" size="x-small" class="bg-primary text-quintenary ma-2" style="border-width: 1px; border-color: #555555;">
                <h6>Acesso à Plataforma</h6>
            </v-btn>
        </div>
    </v-app-bar>
</template>

<script setup>
import { useDisplay } from 'vuetify';


const { smAndDown } = useDisplay()
</script>