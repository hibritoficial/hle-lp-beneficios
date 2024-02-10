<template>
    <v-app-bar flat height="5" class="bg-terciary" />

    <v-app-bar flat class="bg-primary">
        <div :class="smAndDown ? 'w-25 pl-1' : ''">
            <v-img class="d-sm-none" src="/public/logocolorida.png" />
            <v-img class="d-sm-block d-none ml-5" width="100" src="/public/logocolorida.png" />
        </div>

        <v-app-bar-title />

        <div :class="smAndDown ? 'pt-1' : ''">
            <h6 class="text-quintenary font-weight-regular d-sm-none pt-1">Cadastro Gratuito</h6>
            <h5 class="text-quintenary font-weight-regular d-sm-block d-none mr-2">Cadastro Gratuito</h5>

        </div>

        <div>
            <v-btn href="https://viajehole.com.br/login" target="_blank" :class="smAndDown ? 'mt-4' : ''" size="x-small"
                class="bg-primary text-quintenary d-md-none d-sm-none ma-2"
                style="border-width: 1px; border-color: #555555;">
                <h6>Acesso à Plataforma</h6>
            </v-btn>

            <v-btn href="https://viajehole.com.br/login" target="_blank" size="large"
                class="rounded-lg bg-primary text-quintenary d-sm-block d-none mr-8 ml-2"
                style="border-width: 1px; border-color: #555555;">
                <h6 style="margin-top: 14px;">Acesso à Plataforma</h6>
            </v-btn>
        </div>
    </v-app-bar>
</template>

<script setup>
import { useDisplay } from 'vuetify';


const { smAndDown } = useDisplay()
</script>