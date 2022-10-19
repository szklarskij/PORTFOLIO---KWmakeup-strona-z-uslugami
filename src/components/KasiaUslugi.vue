<template>
  <section id="uslugi">
    <div class="container reveal">
      <h2 class="text-center text-uppercase pb-2">Usługi</h2>
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 gy-2">
        <div class="col">
          <base-card>
            <template #icon>
              <ion-icon
                size="large"
                class="icon text-primary"
                name="brush-outline"
              ></ion-icon
            ></template>
            <template #title> Makijaż ślubny</template>
            <template #text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
              consectetur sunt similique dignissimos. Vel doloribus totam
              nesciunt! Quidem nisi qui cumque.
            </template>
          </base-card>
        </div>
        <div class="col">
          <base-card>
            <template #icon>
              <ion-icon
                size="large"
                class="icon text-primary"
                name="diamond-outline"
              ></ion-icon
            ></template>
            <template #title> Makijaż okazjonalny</template>
            <template #text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
              consectetur sunt similique dignissimos. Vel doloribus totam
              nesciunt! Quidem nisi qui cumque.
            </template>
          </base-card>
        </div>
        <div class="col">
          <base-card>
            <template #icon>
              <ion-icon
                size="large"
                class="icon text-primary"
                name="camera-outline"
              ></ion-icon
            ></template>
            <template #title>Sesja zdjęciowa</template>
            <template #text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
              consectetur sunt similique dignissimos. Vel doloribus totam
              nesciunt! Quidem nisi qui cumque.
            </template></base-card
          >
        </div>
        <div class="col">
          <base-card>
            <template #icon>
              <ion-icon
                size="large"
                class="icon text-primary"
                name="pencil-outline"
              ></ion-icon
            ></template>
            <template #title>Stylizacja brwi</template>
            <template #text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
              consectetur sunt similique dignissimos. Vel doloribus totam
              nesciunt! Quidem nisi qui cumque.
            </template></base-card
          >
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
h2 {
  font-family: "Oswald", sans-serif;
}
</style>
