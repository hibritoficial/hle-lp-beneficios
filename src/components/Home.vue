<template>
  <div class="d-flex">

    <div :class="smAndDown ? 'w-50' : 'w-50'">
      <v-img cover src="/public/fotobloco1.png" />
    </div>

    <div align="center" :class="smAndDown ? 'w-50 pt-16' : 'w-50 mt-16 pt-16'">
      <h1 class="fontinter text-senario text-sm-h5 text-md-h4" :class="smAndDown ? '' : 'pt-16 mt-16'"
        style="font-size: 8px; font-weight: 900;">Viaje com economia,
        segurança
        <p /> <span class="fontinter text-secondary text-sm-h5 text-md-h4" style="font-size: 10px; font-weight: 900;">e
          ainda mais
          beneficios</span>!
      </h1>

      <div>
        <v-btn size="x-small" class="bg-terciary rounded-lg d-sm-none mt-2 mb-1">
          <h6 class="font-weight-light">QUERO CONHECER</h6>
        </v-btn>


        <v-btn size="x-large" class="bg-terciary rounded-lg d-sm-block d-none"
          :class="smAndDown ? 'mt-8 mb-4 w-50' : 'mt-16'">
          <h5 class="font-weight-regular text-md-h6" :class="smAndDown ? '' : ' font-weight-regular'">QUERO CONHECER</h5>
        </v-btn>


        <p class="text-quintenary d-sm-none" :class="smAndDown ? 'pt-1 px-4' : ''" style="font-size: 6px;">Ainda tem
          dúvidas? <a href="https://viajehole.com.br/" target="_blank">Clique aqui</a> e fale com um de nossos atendentes
          pelo
          WhatsApp.</p>

        <p class="text-quintenary d-sm-block d-none" :class="smAndDown ? 'pt-1 px-10' : 'pt-8'" style="font-size: 10px;">
          Ainda
          tem dúvidas? <a href="https://viajehole.com.br/" target="_blank">Clique aqui</a> e fale com um de nossos
          atendentes pelo
          WhatsApp.</p>


      </div>
    </div>
  </div>

  <div :class="smAndDown ? 'pt-16 pb-16' : 'pt-16 pb-16'" class="bg-quartiary" align="center">
    <h5 class="fontinter text-terciary font-weight-bold text-sm-h5 text-md-h3">Aproveite Beneficios
      <p /> Extras Exclusivos
    </h5>

    <div class="d-flex justify-space-between" :class="smAndDown ? 'pt-10 mx-3' : 'pt-16 mt-16 w-75'">

      <div :class="smAndDown ? 'w-50 pa-1 pb-5' : 'w-25 pb-16'" class="bg-terciary rounded-lg">
        <v-img src="/public/assistencia.png" :class="smAndDown ? 'w-75' : 'w-75'" />
        <h6 style="font-size: 10px;" class="font-weight-light text-sm-h6 text-md-h5">Assistência Viagem</h6>

        <div>
          <v-btn class="bg-transparent mt-6 rounded-xl d-sm-none" style="border-width: 1px; border-color: white;"
            size="x-small">
            <h6 class="font-weight-light">Saiba Mais</h6>
          </v-btn>

          <v-btn class="bg-transparent mt-11 rounded-xl d-sm-block d-none mt-16 w-75"
            style="border-width: 1px; border-color: white;" size="large">
            <h6 class="font-weight-light">Saiba Mais</h6>
          </v-btn>
        </div>
      </div>

      <div :class="smAndDown ? 'w-50 pa-1 mx-2 pb-5' : 'w-25 pb-16'" class="bg-terciary rounded-lg">
        <v-img src="/public/telemedicina.png" :class="smAndDown ? 'w-75' : 'w-75'" />
        <h6 style="font-size: 10px;" class="font-weight-light text-sm-h6 text-md-h5">Telemedicina</h6>

        <div>
          <v-btn class="bg-transparent mt-6 rounded-xl d-sm-none" style="border-width: 1px; border-color: white;"
            size="x-small">
            <h6 class="font-weight-light">Saiba Mais</h6>
          </v-btn>

          <v-btn class="bg-transparent mt-11 rounded-xl d-sm-block d-none mt-16 w-75"
            style="border-width: 1px; border-color: white;" size="large">
            <h6 class="font-weight-light">Saiba Mais</h6>
          </v-btn>
        </div>
      </div>

      <div :class="smAndDown ? 'w-50 pa-1 pb-5' : 'w-25 pb-16'" class="bg-terciary rounded-lg">
        <v-img src="/public/descontos.png" :class="smAndDown ? 'w-75' : 'w-75'" />
        <h6 class="text-sm-h6 text-md-h5" :class="smAndDown ? '' : 'px-8'" style="font-size: 9px;">Descontos <span
            class="font-weight-light">na</span> Rede de
          Parceiros</h6>

        <div>
          <v-btn class="bg-transparent mt-3 rounded-xl d-sm-none" style="border-width: 1px; border-color: white;"
            size="x-small">
            <h6 class="font-weight-light">Saiba Mais</h6>
          </v-btn>

          <v-btn class="bg-transparent mt-3 rounded-xl d-sm-block d-none mt-8 w-75"
            style="border-width: 1px; border-color: white;" size="large">
            <h6 class="font-weight-light">Saiba Mais</h6>
          </v-btn>
        </div>
      </div>
    </div>
  </div>

  <div class="d-flex" align="center" :class="smAndDown ? 'pb-4' : 'pb-16'">

    <div :class="smAndDown ? 'w-50 pt-2 px-4' : 'w-50'">
      <h5 class="fontinter text-terciary d-sm-none">Assistência Viagem</h5>
      <h3 class="fontinter font-weight-bold text-terciary d-sm-block d-none text-md-h3"
        :class="smAndDown ? 'pt-10' : 'pt-16 mt-10'">Assistência Viagem</h3>


      <h6 class="d-sm-none text-senario" style="font-size: 7px;" :class="smAndDown ? 'pt-1' : ''">Fique tranquilo em suas
        viagens
        nacionais com o serviço
        de auxílio em situaçoes de
        emergências, tais como:
      </h6>

      <h6 class="d-sm-block d-none text-md-h5 text-senario" style="font-size: 11px;"
        :class="smAndDown ? 'pt-1 px-3' : 'pt-4 px-16'">Fique tranquilo em suas
        viagens nacionais com o serviço
        de auxílio em situaçoes de
        emergências, tais como:
      </h6>

      <div align="left">
        <ul class="text-senario d-sm-none" style="font-size: 6px;" :class="smAndDown ? 'px-5 ml-5 pt-2' : ''">
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

        <ul class="text-senario d-sm-block d-none text-md-h6" style="font-size: 12px;"
          :class="smAndDown ? 'pr-8 pt-5 pl-14 ml-16' : 'ml-16 pt-10 pl-16 pr-16'">
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
        <v-btn size="x-small" class="bg-terciary rounded-lg mt-2 d-sm-none">
          <h6>COMO UTILIZAR</h6>
        </v-btn>

        <v-btn size="large" class="bg-terciary rounded-lg mt-2 d-sm-block d-none"
          :class="smAndDown ? 'w-50 mt-8' : 'mt-16 w-50'">
          <h6 class="text-md-h6">COMO UTILIZAR</h6>
        </v-btn>
      </div>
    </div>

    <div :class="smAndDown ? 'w-50' : 'w-50'" class="bg-secondary">
      <v-img cover src="/public/telemkt1.png" :class="smAndDown ? 'w-100 pb-5' : 'w-100'" />
    </div>
  </div>

  <div class="d-flex" align="center" :class="smAndDown ? 'pb-8' : ''">

    <div :class="smAndDown ? 'w-50' : 'w-50'" class="bg-terciary">
      <v-img cover src="/public/telemkt2.png" :class="smAndDown ? 'w-100 pb-10' : 'w-100'" />
    </div>

    <div :class="smAndDown ? 'w-50' : 'w-50'">

      <div :class="smAndDown ? 'w-75 pt-2' : ''">
        <h5 class="fontinter text-terciary d-sm-none">Telemedicina</h5>
        <h3 class="fontinter font-weight-bold text-terciary d-sm-block d-none text-md-h3"
          :class="smAndDown ? 'pt-10' : 'pt-16 mt-10'">Telemedicina</h3>

        <h6 class="text-senario d-sm-none" style="font-size: 7px;" :class="smAndDown ? 'pt-1' : ''">O titular dos planos
          Individual e Família tem direito
          a até 4 (quatro) consultas virtuais com médico clínico geral, em menos de 30 segundos, de qualquer lugar do
          mundo e a qualquer momento por meio da plataforma web e mobile. O objetivo é atender o cliente em situações que
          exigem atendimento médico de forma imediata.
        </h6>

        <h6 class="text-senario d-sm-block d-none text-md-h5" style="font-size: 10px;"
          :class="smAndDown ? 'pt-1 px-3' : 'pt-4 px-16'">O titular dos planos
          Individual e Família tem direito
          a até 4 (quatro) consultas virtuais com médico clínico geral, em menos de 30 segundos, de qualquer lugar do
          mundo e a qualquer momento por meio da plataforma web e mobile. O objetivo é atender o cliente em situações que
          exigem atendimento médico de forma imediata.
        </h6>

        <div align="left">
          <ul class="text-senario d-sm-none" style="font-size: 6px;" :class="smAndDown ? 'pt-2 pl-5' : ''">
            <li>Plano individual;</li>
            <li>Sem período de carência;</li>
            <li>Sem coparticipação;</li>
            <li>Limite de 4 (quatro) consultas por ano;</li>
            <li>Estão excluídos pacientes de urgência e emergência, síndrome do abdômen agudo, portadores de doenças
              cardiovasculares ou neurológicas e pacientes pediátricos menores de 2 anos;</li>
          </ul>

          <ul class="text-senario d-sm-block d-none text-md-h6" style="font-size: 11px;"
            :class="smAndDown ? 'pr-6 pt-3 pl-7 ml-16' : 'ml-16 pt-10 pl-16 pr-16'">
            <li>Plano individual;</li>
            <li>Sem período de carência;</li>
            <li>Sem coparticipação;</li>
            <li>Limite de 4 (quatro) consultas por ano;</li>
            <li>Estão excluídos pacientes de urgência e emergência, síndrome do abdômen agudo, portadores de doenças
              cardiovasculares ou neurológicas e pacientes pediátricos menores de 2 anos;</li>
          </ul>
        </div>

        <div>
          <v-btn size="x-small" class="bg-terciary rounded-lg mt-2 d-sm-none">
            <h6>COMO UTILIZAR</h6>
          </v-btn>

          <v-btn size="large" class="bg-terciary rounded-lg mt-2 d-sm-block d-none" :class="smAndDown ? 'w-50 mt-4' : 'mt-10 w-50'">
            <h6 class="text-md-h6">COMO UTILIZAR</h6>
          </v-btn>
        </div>
      </div>
    </div>
  </div>

  <div align="center" :class="smAndDown ? 'pt-5 pb-4' : 'pt-16 mt-16 pb-16'">
    <h4 class="fontinter text-terciary font-weight-bold d-sm-none">Descontos na Rede de Parceiros</h4>
    <h2 class="fontinter text-terciary font-weight-bold d-sm-block d-none text-md-h3" :class="smAndDown ? 'pt-10 pb-10' : 'pt-16 pb-16'">Descontos na Rede de Parceiros
    </h2>
  </div>

  <div class="d-flex justify-space-between" :class="smAndDown ? 'pt-4 px-1' : 'px-16'">

    <div class="degrade1 rounded-lg text-white" :class="smAndDown ? 'w-50 pb-1 pl-3 pr-2 pt-1' : 'w-50 pl-10 pr-10 pt-2 pb-2'">

      <h6 class="font-weight-light text-sm-h6 text-md-h5" :class="smAndDown ? '' : 'pb-1'">VAI DE PROMO
        <p class="font-weight-bold d-md-none" style="font-size: 8px; line-height: 7px;" :class="smAndDown ? '' : 'pt-1 text-h6'">Passagens Aéreas</p>

        <p class="font-weight-bold d-none d-md-block mt-1" style="font-size: 12px; line-height: 7px;">Passagens Aéreas</p>
      </h6>

      <p class="font-weight-light d-sm-none" style="font-size: 6px;" :class="smAndDown ? 'pt-2' : ''">Garanta sua passagem
        aérea com
        até <span class="font-weight-bold">40% de desconto</span> para
        destinos nacionais e internacionais.</p>

      <p class="font-weight-light d-sm-block d-none" style="font-size: 9px;" :class="smAndDown ? 'pt-2' : 'text-h6 pt-2'">Garanta sua
        passagem aérea com
        até <span class="font-weight-bold">40% de desconto</span> para
        destinos nacionais e internacionais.</p>


      <div align="right">
        <v-btn size="x-small" class="d-md-none bg-transparent mr-1 rounded-pill mt-2 mb-1"
          style="border-width: 1px; border-color: white; font-size: 8px;">
          <h6 class="text-white">Vai de promo <v-icon>mdi-arrow-right</v-icon></h6>
        </v-btn>

        <v-btn size="large" class="d-none d-md-block bg-transparent rounded-pill mt-2 mb-1 w-25"
          style="border-width: 1px; border-color: white; font-size: 18px;">
          <h6 class="text-white">Vai de promo <v-icon>mdi-arrow-right</v-icon></h6>
        </v-btn>
      </div>
    </div>

    <div align="center" :class="smAndDown ? 'w-50 pt-5' : 'w-50'">
      <v-img src="/public/vaidepromo.png" :class="smAndDown ? 'w-75' : 'w-50'" />
    </div>
  </div>


  <div class="d-flex justify-space-between" :class="smAndDown ? 'pt-3 px-1' : 'px-16 pt-8'">

    <div align="center" :class="smAndDown ? 'w-50 pt-5' : 'w-50'">
      <v-img src="/public/gipssy.png" :class="smAndDown ? 'w-75' : 'w-50'" />
    </div>

    <div class="degrade2 rounded-lg text-white" :class="smAndDown ? 'w-50 pb-1 pl-3 pr-2 pt-1' : 'w-50 pl-10 pr-10 pt-2 pb-2'">

      <h6 class="font-weight-light text-sm-h6 text-md-h5">GIPSYY
        <p class="font-weight-bold d-md-none" style="font-size: 8px; line-height: 7px;">Passagens Rodoviárias</p>

        <p class="font-weight-bold d-none d-md-block mt-1" style="font-size: 12px; line-height: 7px;">Passagens Rodoviárias</p>
      </h6>

      <p class="font-weight-light d-sm-none" style="font-size: 6px;" :class="smAndDown ? 'pt-2 pr-2' : ''">Compre suas
        passagens
        rodoviárias online para todo o Brasil, com os melhores preços, e ainda ganhe mais <span
          class="font-weight-bold">10% de desconto</span> com o nosso
        cupom.</p>

      <p class="font-weight-light d-sm-block d-none" style="font-size: 9px;" :class="smAndDown ? 'pt-2 pr-2' : 'text-h6 pt-2'">Compre
        suas passagens
        rodoviárias online para todo o Brasil, com os melhores preços, e ainda ganhe mais <span
          class="font-weight-bold">10% de desconto</span> com o nosso
        cupom.</p>


      <p class="font-weight-bold d-sm-none" style="font-size: 6px;" :class="smAndDown ? 'pt-1' : ''">Use o cupom: HOLE10
      </p>
      <p class="font-weight-bold d-sm-block d-none" style="font-size: 9px;" :class="smAndDown ? 'pt-1' : 'text-h6 pt-2'">Use o cupom:
        HOLE10</p>



      <div align="right">
        <v-btn size="x-small" class="d-md-none bg-transparent mr-1 rounded-pill mt-2 mb-1"
          style="border-width: 1px; border-color: white; font-size: 8px;">
          <h6 class="text-white">Gipssy <v-icon>mdi-arrow-right</v-icon></h6>
        </v-btn>

        <v-btn size="large" class="d-none d-md-block bg-transparent rounded-pill mt-2 mb-1 w-25"
          style="border-width: 1px; border-color: white; font-size: 18px;">
          <h6 class="text-white">Gipssy <v-icon>mdi-arrow-right</v-icon></h6>
        </v-btn>
      </div>
    </div>
  </div>


  <div class="d-flex justify-space-between" :class="smAndDown ? 'pt-3 px-1' : 'px-16 pt-8'">

    <div class="degrade1 rounded-lg text-white" :class="smAndDown ? 'w-50 pb-1 pl-3 pr-2 pt-1' : 'w-50 pl-10 pr-10 pt-2 pb-2'">

      <h6 class="font-weight-light text-sm-h6 text-md-h5">SEGUROS PROMO
        <p class="font-weight-bold d-md-none" style="font-size: 8px; line-height: 7px;">Passagens Aéreas</p>

        
        <p class="font-weight-bold d-none d-md-block mt-1" style="font-size: 12px; line-height: 7px;">Passagens Aéreas</p>
      </h6>

      <p class="font-weight-light d-sm-none" style="font-size: 6px;" :class="smAndDown ? 'pt-2 pr-5' : ''">Compare e
        encontre o
        melhor
        seguro viagem nacional ou internacional e ganhe
        <span class="font-weight-bold">15% de desconto </span> na compra online.</p>

      <p class="font-weight-light d-sm-block d-none" style="font-size: 9px;" :class="smAndDown ? 'pt-2 pr-5' : 'text-h6 pt-2'">Compare
        e encontre o
        melhor
        seguro viagem nacional ou internacional e ganhe
        <span class="font-weight-bold">15% de desconto </span> na compra online.</p>

      <p class="font-weight-bold d-sm-none" style="font-size: 6px;" :class="smAndDown ? 'pt-1' : ''">Use o cupom: HOLE15
      </p>
      <p class="font-weight-bold d-sm-block d-none" style="font-size: 9px;" :class="smAndDown ? 'pt-1' : 'text-h6 pt-2'">Use o cupom:
        HOLE15</p>


      <div align="right">
        <v-btn size="x-small" class="d-md-none bg-transparent mr-1 rounded-pill mt-2 mb-1"
          style="border-width: 1px; border-color: white; font-size: 8px;">
          <h6 class="text-white">Seguros Promo <v-icon>mdi-arrow-right</v-icon></h6>
        </v-btn>

        <v-btn size="large" class="d-none d-md-block bg-transparent mr-1 rounded-pill mt-2 mb-1 w-50"
        style="border-width: 1px; border-color: white; font-size: 18px;">
        <h6 class="text-white">Seguros Promo <v-icon>mdi-arrow-right</v-icon></h6>
      </v-btn>
      </div>
    </div>

    <div align="center" :class="smAndDown ? 'w-50 pt-5' : 'w-50'">
      <v-img src="/public/segurospromo.png" :class="smAndDown ? 'w-75' : 'w-50'"/>
    </div>
  </div>


  <div class="d-flex justify-space-between" :class="smAndDown ? 'pt-3 px-1' : 'px-16 pt-8'">

    <div align="center" :class="smAndDown ? 'w-50 pt-5' : 'w-50'">
      <v-img src="/public/rentcars.png" :class="smAndDown ? 'w-75 mt-2' : 'w-50'" />
    </div>

    <div class="degrade2 rounded-lg text-white" :class="smAndDown ? 'w-50 pb-1 pl-3 pr-2 pt-1' : 'w-50 pl-10 pr-10 pt-2 pb-2'">

      <h6 class="font-weight-light text-sm-h6 text-md-h5">RENTCARS
        <p class="font-weight-bold d-md-none" style="font-size: 8px; line-height: 7px;">Aluguel de Carros</p>

        <p class="font-weight-bold d-none d-md-block mt-1" style="font-size: 12px; line-height: 7px;">Aluguel de Carros</p>
      </h6>

      <p class="font-weight-light d-sm-none" style="font-size: 6px;" :class="smAndDown ? 'pt-2 pr-2' : ''">Com a Rentcars,
        você
        aluga carros com os melhores preços em mais de 200 locadoras de veículos tanto em destinos nacionais como
        internacionais.</p>

      <p class="font-weight-light d-sm-block d-none" style="font-size: 9px;" :class="smAndDown ? 'pt-2 pr-2' : 'text-h6 pt-2'">Com a
        Rentcars, você
        aluga carros com os melhores preços em mais de 200 locadoras de veículos tanto em destinos nacionais como
        internacionais.</p>

      <div align="right">
        <v-btn size="x-small" class="d-md-none bg-transparent mr-1 rounded-pill mt-2 mb-1"
          style="border-width: 1px; border-color: white; font-size: 8px;">
          <h6 class="text-white">RentCars <v-icon>mdi-arrow-right</v-icon></h6>
        </v-btn>

        <v-btn size="large" class="d-none d-md-block bg-transparent mr-1 rounded-pill mt-2 mb-1 w-25"
        style="border-width: 1px; border-color: white; font-size: 18px;">
        <h6 class="text-white">RentCars <v-icon>mdi-arrow-right</v-icon></h6>
      </v-btn>
      </div>
    </div>
  </div>


  <div class="d-flex justify-space-between" :class="smAndDown ? 'pt-3 px-1' : 'px-16 pt-8'">

    <div class="degrade1 rounded-lg text-white" :class="smAndDown ? 'w-50 pb-1 pl-3 pr-2 pt-1' : 'w-50 pl-10 pr-10 pt-2 pb-2'">

      <h6 class="font-weight-light text-sm-h6 text-md-h5">THE IFRIEND
        <p class="font-weight-bold d-md-none" style="font-size: 8px; line-height: 7px;">Guias, experiências turísticas e tickets</p>

        <p class="font-weight-bold d-none d-md-block mt-1" style="font-size: 12px; line-height: 7px;">Guias, experiências turísticas e tickets</p>
      </h6>

      <p class="font-weight-light d-sm-none" style="font-size: 6px;" :class="smAndDown ? 'pt-2 pr-5' : ''">Com a Holé,
        você terá
        <span class="font-weight-bold"> 8%
          de desconto</span> para contratar guias locais experientes, nos principais destinos turísticos pelo mundo, que
        falam
        português e podem mostrar o melhor de cada local visitado.
      </p>

      <p class="font-weight-light d-sm-block d-none" style="font-size: 9px;" :class="smAndDown ? 'pt-2 pr-5' : 'text-h6 pt-2'">Com a
        Holé, você terá
        <span class="font-weight-bold"> 8%
          de desconto</span> para contratar guias locais experientes, nos principais destinos turísticos pelo mundo, que
        falam
        português e podem mostrar o melhor de cada local visitado.
      </p>

      <p class="font-weight-bold d-sm-none" style="font-size: 6px;" :class="smAndDown ? 'pt-1' : ''">Use o cupom: HOLE8
      </p>
      <p class="font-weight-bold d-sm-block d-none" style="font-size: 9px;" :class="smAndDown ? 'pt-1' : 'text-h6 pt-2'">Use o cupom:
        HOLE8</p>


      <div align="right">
        <v-btn size="x-small" class="d-md-none bg-transparent mr-1 rounded-pill mt-2 mb-1"
          style="border-width: 1px; border-color: white; font-size: 8px;">
          <h6 class="text-white">The Ifriend <v-icon>mdi-arrow-right</v-icon></h6>
        </v-btn>

        <v-btn size="large" class="d-none d-md-block bg-transparent mr-1 rounded-pill mt-2 mb-1 w-25"
          style="border-width: 1px; border-color: white; font-size: 18px;">
          <h6 class="text-white">The Ifriend <v-icon>mdi-arrow-right</v-icon></h6>
        </v-btn>
      </div>
    </div>

    <div align="center" :class="smAndDown ? 'w-50 pt-5' : 'w-50'">
      <v-img src="/public/ifriend.png" :class="smAndDown ? 'w-75 mt-4' : 'w-50'" />
    </div>
  </div>


  <div class="d-flex justify-space-between" :class="smAndDown ? 'pt-3 px-1' : 'px-16 pt-8'">

    <div align="center" :class="smAndDown ? 'w-50 pt-5' : 'w-50'">
      <v-img src="/public/airalo.png" :class="smAndDown ? 'w-75 mt-2' : 'w-50'" />
    </div>

    <div class="degrade2 rounded-lg text-white" :class="smAndDown ? 'w-50 pb-1 pl-3 pr-2 pt-1' : 'w-50 pl-10 pr-10 pt-2 pb-2'">

      <h6 class="font-weight-light text-sm-h6 text-md-h5">AIRALO
        <p class="font-weight-bold d-md-none" style="font-size: 8px; line-height: 7px;">eSIM (Chip virtual)</p>

        <p class="font-weight-bold d-none d-md-block mt-1" style="font-size: 12px; line-height: 7px;">eSIM (Chip virtual)</p>
      </h6>

      <p class="font-weight-light d-sm-none" style="font-size: 6px;" :class="smAndDown ? 'pt-2 pl-3' : ''">
      <ul>
        <li>Desconto de 15%</li>
        <li>Usuários novos e existentes</li>
        <li>Sem compra mínima</li>
      </ul>
      </p>

      <p class="font-weight-light d-sm-block d-none" style="font-size: 9px;" :class="smAndDown ? 'pt-2 pl-3' : 'pl-5 pb-2 text-h6 pt-2'">
      <ul>
        <li>Desconto de 15%</li>
        <li>Usuários novos e existentes</li>
        <li>Sem compra mínima</li>
      </ul>
      </p>

      <p class="font-weight-bold d-sm-none" style="font-size: 6px;" :class="smAndDown ? 'pt-1 pl-1' : ''">Use o cupom:
        HOLE15</p>
      <p class="font-weight-bold d-sm-block d-none" style="font-size: 9px;" :class="smAndDown ? 'pt-1 pl-1' : 'text-h6 pt-2'">Use o
        cupom: HOLE15</p>

      <div align="right">
        <v-btn size="x-small" class="d-md-none bg-transparent mr-1 rounded-pill mt-2 mb-1"
          style="border-width: 1px; border-color: white; font-size: 8px;">
          <h6 class="text-white">Airalo <v-icon>mdi-arrow-right</v-icon></h6>
        </v-btn>

        <v-btn size="large" class="d-none d-md-block bg-transparent mr-1 rounded-pill mt-2 mb-1 w-25"
        style="border-width: 1px; border-color: white; font-size: 18px;">
        <h6 class="text-white">Airalo <v-icon>mdi-arrow-right</v-icon></h6>
      </v-btn>
      </div>
    </div>
  </div>


  <div class="d-flex justify-space-between" :class="smAndDown ? 'pt-3 px-1' : 'px-16 pt-8'">

    <div class="degrade1 rounded-lg text-white" :class="smAndDown ? 'w-50 pb-1 pl-3 pr-2 pt-1' : 'w-50 pl-10 pr-10 pt-2 pb-2'">

      <h6 class="font-weight-light text-sm-h6 text-md-h5">AMERICA CHIP
        <p class="font-weight-bold d-md-none" style="font-size: 8px; line-height: 7px;">Chip internacional</p>

        <p class="font-weight-bold d-none d-md-block mt-1" style="font-size: 12px; line-height: 7px;">Chip internacional</p>
      </h6>

      <p class="font-weight-light d-sm-none" style="font-size: 6px;" :class="smAndDown ? 'pt-2 pr-5' : ''">A America Chip
        oferece o
        melhor chip internacional do mercado com cobertura para mais de 200 países. Viaje com a liberdade e segurança de
        poder se comunicar mesmo estando no exterior. Aproveite <span class="font-weight-bold">10% de desconto </span> na
        compra do seu chip online e receba-o em
        sua casa.</p>

      <p class="font-weight-light d-sm-block d-none" style="font-size: 9px;" :class="smAndDown ? 'pt-2 pr-5' : 'text-h6 pt-2'">A
        America Chip oferece o
        melhor chip internacional do mercado com cobertura para mais de 200 países. Viaje com a liberdade e segurança de
        poder se comunicar mesmo estando no exterior. Aproveite <span class="font-weight-bold">10% de desconto </span> na
        compra do seu chip online e receba-o em
        sua casa.</p>

      <p class="font-weight-bold d-sm-none" style="font-size: 6px;" :class="smAndDown ? 'pt-1' : ''">Use o cupom:
        AMERICA10</p>
      <p class="font-weight-bold d-sm-block d-none" style="font-size: 9px;" :class="smAndDown ? 'pt-1' : 'text-h6 pt-2'">Use o cupom:
        AMERICA10</p>

      <div align="right">
        <v-btn size="x-small" class="d-md-none bg-transparent mr-1 rounded-pill mt-2 mb-1"
          style="border-width: 1px; border-color: white; font-size: 8px;">
          <h6 class="text-white">America Chip <v-icon>mdi-arrow-right</v-icon></h6>
        </v-btn>

        <v-btn size="large" class="d-none d-md-block bg-transparent mr-1 rounded-pill mt-2 mb-1 w-25"
        style="border-width: 1px; border-color: white; font-size: 18px;">
        <h6 class="text-white">America Chip <v-icon>mdi-arrow-right</v-icon></h6>
      </v-btn>
      </div>
    </div>

    <div align="center" :class="smAndDown ? 'w-50 pt-5' : 'w-50'">
      <v-img src="/public/americachip.png" :class="smAndDown ? 'w-75 mt-6' : 'w-50'" />
    </div>
  </div>


  <div class="d-flex justify-space-between" :class="smAndDown ? 'pt-3 px-1' : 'px-16 pt-8 pb-16 mb-16'">

    <div align="center" :class="smAndDown ? 'w-50 pt-5' : 'w-50'">
      <v-img src="/public/getmalas.png" :class="smAndDown ? 'w-75' : 'w-50'" />
    </div>

    <div class="degrade2 rounded-lg text-white" :class="smAndDown ? 'w-50 pb-1 pl-3 pr-2 pt-1' : 'w-50 pl-10 pr-10 pt-2 pb-2'">

      <h6 class="font-weight-light text-sm-h6 text-md-h5">GETMALAS
        <p class="font-weight-bold d-md-none" style="font-size: 8px; line-height: 7px;">Aluguel de malas de viagem</p>

        <p class="font-weight-bold d-none d-md-block mt-1" style="font-size: 12px; line-height: 7px;">Aluguel de malas de viagem</p>
      </h6>

      <p class="font-weight-light d-sm-none" style="font-size: 6px;" :class="smAndDown ? 'pt-2 pr-2' : ''">
        Viaje a lazer ou a trabalho com malas premium de forma simples, segura, econômica e descomplicada.
      </p>

      <p class="font-weight-light d-sm-block d-none" style="font-size: 9px;" :class="smAndDown ? 'pt-2 pr-2' : 'text-h6 pt-2'">
        Viaje a lazer ou a trabalho com malas premium de forma simples, segura, econômica e descomplicada.
      </p>

      <div align="right">
        <v-btn size="x-small" class="d-md-none bg-transparent mr-1 rounded-pill mt-2 mb-1"
          style="border-width: 1px; border-color: white; font-size: 8px;">
          <h6 class="text-white">GetMalas <v-icon>mdi-arrow-right</v-icon></h6>
        </v-btn>

        <v-btn size="large" class="d-none d-md-block bg-transparent mr-1 rounded-pill mt-2 mb-1 w-25"
          style="border-width: 1px; border-color: white; font-size: 18px;">
          <h6 class="text-white">GetMalas <v-icon>mdi-arrow-right</v-icon></h6>
        </v-btn>
      </div>
    </div>
  </div>


  <div class="bg-secondary d-flex" :class="smAndDown ? 'mt-3' : 'pl-8 pt-16'">

    <div :class="smAndDown ? 'pl-3 pt-5 w-50' : 'w-50'">
      <h4 class="fontinter text-quartiary font-weight-bold d-sm-none">Viva o extraordinário!</h4>

      <h4 class="fontinter text-quartiary font-weight-bold d-sm-block d-none text-sm-h4 text-md-h2"
        :class="smAndDown ? 'mt-10 ml-2' : ''">Viva o extraordinário!</h4>

      <p class="fontinter text-white font-weight-bold d-sm-none" style="font-size: 8px;">Explore nossos hotéis e resorts
        de classe
        mundial
        e transforme suas férias em momentos inesquecíveis.</p>

      <p class="fontinter text-white font-weight-bold d-sm-block d-none" style="font-size: 14px;"
        :class="smAndDown ? 'ml-2' : 'text-h5 pr-5 mt-3'">Explore nossos hotéis e resorts de classe
        mundial
        e transforme suas férias em momentos inesquecíveis.</p>

      <div>
        <v-btn size="x-small" class="bg-terciary mt-3 rounded d-sm-none">
          <h6 class="font-weight-light">VER HOTÉIS E RESORTS</h6>
        </v-btn>

        <v-btn size="large" class="bg-terciary mt-3 rounded-lg d-sm-block d-none" :class="smAndDown ? 'mt-10 ml-2' : 'mt-16 w-50'">
          <h5 class="font-weight-light">VER HOTÉIS E RESORTS</h5>
        </v-btn>
      </div>
    </div>

    <div align="center" :class="smAndDown ? 'w-50' : 'w-50'">
      <v-img src="/public/imgaviao.png" :class="smAndDown ? 'w-75 mt-5' : 'w-50'" />
    </div>
  </div>

  <div class="bg-quartiary d-flex" :class="smAndDown ? 'pb-8' : 'pt-16 pb-16'">

    <div :class="smAndDown ? 'w-50 pt-5 pl-3' : 'w-50'">
      <h5 class="fontinter text-senario font-weight-bold text-sm-h5 d-sm-none">Somos uma plataforma que traz uma <span
          class="text-terciary">nova forma de
          economizar </span> em suas hospedagens.</h5>

      <h5 class="fontinter text-senario font-weight-bold text-sm-h5 d-sm-block d-none text-md-h2" :class="smAndDown ? 'ml-2' : 'ml-8 mt-10 pr-16'">Somos uma
        plataforma que traz uma <span class="text-terciary">nova forma de
          economizar </span> em suas hospedagens.</h5>

      <p class="fontinter font-weight-regular mt-2 d-sm-none" style="font-size: 8px;">Escolha um dos nossos planos e tenha
        acesso a
        mais
        de <span class="text-terciary font-weight-bold">1.5 milhão de hotéis </span> ao redor do mundo com as melhores
        ofertas e tarifas.</p>

      <p class="fontinter font-weight-light d-sm-block d-none" style="font-size: 12px;"
        :class="smAndDown ? 'pr-16 mt-4 ml-2' : 'ml-8 mt-8 text-h5 pr-16 mr-16'">Escolha um dos nossos planos e tenha acesso a
      mais
      de <span class="text-terciary font-weight-bold">1.5 milhão de hotéis </span> ao redor do mundo com as melhores
      ofertas e tarifas.</p>
  </div>

  <div align="right" :class="smAndDown ? 'w-50' : 'w-50'">
    <v-img src="/public/fotomala.png" :class="smAndDown ? 'w-75 mt-10' : 'w-75 mt-16 pt-10'"/>
  </div>
</div>


<v-footer align="center" class="bg-secondary">
  <div align="center" :class="smAndDown ? 'w-100' : 'w-100'">
    <v-img src="/public/logobranca.png" class="d-sm-none" width="40" />

    <v-img src="/public/logobranca.png" class="d-sm-block d-none" width="80" :class="smAndDown ? '' : ''" />
  </div>
</v-footer></template>

<style scoped>.degrade1 {
  background: linear-gradient(to left, #ff4f00, #ffffff);
  background-size: 300% 100%;
  background-position: 250% 100%;
}

.degrade2 {
  background: linear-gradient(to right, #ff4f00, #ffffff);
  background-size: 200% 100%;
  background-position: 200% 100%;
}

.fontinter {
  font-family: "Inter", sans-serif;
}</style>

<script setup>
import { useDisplay } from 'vuetify';


const { smAndDown } = useDisplay()
</script>
