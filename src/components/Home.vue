<template>
  <div class="d-flex">

    <div :class="smAndDown ? 'w-50' : 'w-50'">
      <v-img cover src="/public/fotobloco1.png" />
    </div>

    <div align="center" :class="smAndDown ? 'w-50 pt-16' : 'w-50'">
      <h1 class="fontinter font-weight-bold text-black" style="font-size: 9px; font-family:">Viaje com economia, segurança
        <p /> <span class="text-secondary" style="font-size: 10px;">e ainda mais beneficios</span>!
      </h1>

      <div :class="smAndDown ? 'pt-2' : ''">
        <v-btn size="x-small" class="bg-terciary">
          <h6 class="font-weight-regular">QUERO CONHECER</h6>
        </v-btn>

        <p class="text-quintenary pt-1" style="font-size: 6px;">Ainda tem dúvidas? <a href="https://viajehole.com.br/"
            target="_blank">Clique aqui</a> e fale com um de nossos atendentes pelo WhatsApp.</p>
      </div>
    </div>
  </div>

  <div :class="smAndDown ? 'pt-16 pb-16' : ''" class="bg-quartiary" align="center">
    <h5 class="fontinter text-terciary font-weight-bold">Aproveite Beneficios
      <p /> Extras Exclusivos
    </h5>

    <div class="d-flex justify-space-between" :class="smAndDown ? 'pt-10 mx-3' : ''">

      <div :class="smAndDown ? 'w-50 pa-1 pb-5' : ''" class="bg-terciary rounded-lg">
        <v-img src="/public/assistencia.png" :class="smAndDown ? 'w-75' : ''" />
        <h6 style="font-size: 10px;" class="font-weight-light">Assistência Viagem</h6>

        <div>
          <v-btn class="bg-transparent mt-6 rounded-xl" style="border-width: 1px; border-color: white;" size="x-small">
            <h6 class="font-weight-light">Saiba Mais</h6>
          </v-btn>
        </div>
      </div>

      <div :class="smAndDown ? 'w-50 pa-1 mx-2 pb-5' : ''" class="bg-terciary rounded-lg">
        <v-img src="/public/telemedicina.png" :class="smAndDown ? 'w-75' : ''" />
        <h6 style="font-size: 10px;" class="font-weight-light">Telemedicina</h6>

        <div>
          <v-btn class="bg-transparent mt-6 rounded-xl" style="border-width: 1px; border-color: white;" size="x-small">
            <h6 class="font-weight-light">Saiba Mais</h6>
          </v-btn>
        </div>
      </div>

      <div :class="smAndDown ? 'w-50 pa-1 pb-5' : ''" class="bg-terciary rounded-lg">
        <v-img src="/public/descontos.png" :class="smAndDown ? 'w-75' : ''" />
        <h6 style="font-size: 9px;">Descontos <span class="font-weight-light">na</span> Rede de Parceiros</h6>

        <div>
          <v-btn class="bg-transparent mt-3 rounded-xl" style="border-width: 1px; border-color: white;" size="x-small">
            <h6 class="font-weight-light">Saiba Mais</h6>
          </v-btn>
        </div>
      </div>
    </div>
  </div>

  <div class="d-flex" align="center" :class="smAndDown ? 'pb-16' : ''">

    <div :class="smAndDown ? 'w-50 pt-2 px-4' : ''">
      <h5 class="text-terciary">Assistência Viagem</h5>

      <h6 style="font-size: 7px;" :class="smAndDown ? 'pt-1' : ''">Fique tranquilo em suas viagens nacionais com o serviço
        de auxílio em situaçoes de
        emergências, tais como:
      </h6>

      <div align="left">
        <ul style="font-size: 6px;" :class="smAndDown ? 'px-5 ml-5 pt-2' : ''">
          <li>Extravio de bagagens;</li>
          <li>Despesas médicas hospitalares, odontológicas e farmacêuticas;</li>
          <li>Regresso antecipado;</li>
          <li>Regresso sanitário;</li>
          <li>Traslado de corpo;</li>
          <li>Traslado médico;</li>
          <li>Atraso de voo a partir de 12h;</li>
          <li>Invalidez total e parcial por acidente;</li>
          <li>Morte acidental em viagem.</li>
        </ul>
      </div>

      <div>
        <v-btn size="x-small" class="bg-terciary rounded-lg mt-2"><h6>Como utilizar</h6></v-btn>
      </div>
    </div>



    <div :class="smAndDown ? 'w-50' : ''" class="bg-secondary">
      <v-img cover src="/public/telemkt1.png" :class="smAndDown ? 'w-100 pb-5' : ''" />
    </div>


  </div>
</template>

<style scoped>
.fontinter {
  font-family: "Inter", sans-serif;
}
</style>

<script setup>
import { useDisplay } from 'vuetify';


const { smAndDown } = useDisplay()
</script>
