<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero 
        .h3 1
      .h3 Endomarketing
    .row.align-items-center
      .col-lg-7
        p El endomarketing basa su estructura en el desarrollo de estrategias que permitan que los empleados de la empresa tengan sentido de pertenencia y que se conviertan en promotores de sus productos o servicios, aun estando en horarios no laborales o así sus obligaciones contractuales no tengan nada que ver con las ventas o la promoción. Esto se resume en una frase que el empresario Richard Branson tiene dentro de sus más célebres y que traza parte de su actuar como CEO de sus organizaciones:
      .col-lg-5.mt-4.mt-lg-0
        figure
          img(src='@/assets/curso/img1.svg', style="max-width: 60%; margin: auto;")
    .row.my-5
      .col-12
        .bloque-texto-b
          .row.p-4.bg-color1.align-items-center
            .col-lg-4
              figure
                img(src='@/assets/curso/img2.svg', style="max-width: 60%; margin: auto;")
            .col-lg-8.mt-4.mt-lg-0
              .bloque-texto-b__texto.h3.mb-0 “Siempre he creído que la forma en la que tratas a tus empleados es la forma en la que ellos tratarán a tus clientes y que las personas florecen cuando se les alaba. Cuando tratamos bien a otras personas, estas tenderán a tratarnos de la misma forma, sean clientes o empleados, un empleado además puede ser un futuro cliente”.
    .row.mb-5.align-items-center
      .col-lg-8
        p.mb-4 En una organización, la relación existente entre los miembros de ella, es el reflejo de lo que se hace con los clientes; pues un empleado satisfecho con el trato recibido, el salario y la buena relación con sus compañeros, recibirá a los clientes expresando esa satisfacción con una sonrisa y un trato amable; pero lo más importante, ese empleado va a hablar bien de su empresa, del producto que fabrican o del servicio que prestan y va a usar todos sus argumentos y conocimientos para ponerlos por encima de la competencia.
        p El endomarketing entonces, se puede definir como un conjunto de estrategias y tácticas que se desarrollan al interior de la empresa, con el fin de promover la marca y los productos de la misma entre los empleados y colaboradores, generando sentido de pertenencia y mayor efectividad en el proceso de comercialización y promoción de los productos y servicios.
      .col-lg-4
        figure.mt-4.mt-lg-0
          img(src='@/assets/curso/img3.svg', style="max-width: 55%; margin: auto;")
      .col-12
        p.mt-4 En el artículo de la revista Dinero del 25 de marzo de 2017, se menciona el endomarketing como una estrategia que es partícipe del mercadeo holístico de la organización y se hace referencia a que esta estrategia es originada en las empresas de servicios:
    .row.align-items-center.p-5.bg-color2
      .col-lg-4
        figure
          img(src='@/assets/curso/img4.svg', style="max-width: 100%; margin: auto;")
      .col-lg-8.mt-4.mt-lg-0
        figure.mt-5
          img(src='@/assets/curso/img5.svg', style="max-width: 60%;")
        .hr1
        p.txt-deco1 Sasser y Arbeit (1976)
        p.text-white.mt-4.fs-5.mb-5.mb-0 “el personal es el primer mercado de una empresa de servicios”.
        p.mt-4.fs-5.mb-3.mb-0(style="color: #eabb42; font-weight: bold;") Berry (1981)
        p.text-white.fs-5.mb-lg-5.mb-0 Sostiene que “el alcance del mercadeo tradicionalmente se ha restringido a las transacciones que tienen lugar entre clientes y empresas” pero que “también es aplicable a los intercambios que se dan entre el personal y estas mismas organizaciones”, y por lo tanto se puede considerar a los empleados como clientes.

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
