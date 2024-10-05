<template>
  <div class="container">
    <div class="row mt-2 mb-3">
      <div class="col">
        <div>ขนาด</div>
      </div>
    </div>
    <div class="row">
      <div class="col-4" align="center">
        <div
          class="card option-card"
          @click="toggleActiveSize('vertical')"
          :class="{ active: activeSize === 'vertical' }"
        >
          <div class="card-body d-flex align-items-center">
            <img src="../public/img/vertical.png" class="image" alt="" />
            <p class="card-text">แนวตั้ง</p>
          </div>
        </div>
      </div>

      <div class="col-4" align="center">
        <div
          class="card option-card"
          @click="toggleActiveSize('horizontal')"
          :class="{ active: activeSize === 'horizontal' }"
        >
          <div class="card-body d-flex align-items-center">
            <img src="../public/img/vertical.png" class="image" alt="" />
            <p class="card-text">แนวนอน</p>
          </div>
        </div>
      </div>

      <div class="col-4" align="center">
        <div
          class="card option-card"
          @click="toggleActiveSize('square')"
          :class="{ active: activeSize === 'square' }"
        >
          <div class="card-body d-flex align-items-center">
            <img src="../public/img/vertical.png" class="image" alt="" />
            <p class="card-text">จัตุรัส</p>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col mt-3 mb-3">
        <div>โทนสี</div>
      </div>
    </div>

    <div class="row mt-2">
      <div class="col-12 d-flex justify-content-around">
        <div
          class="color-circle color1"
          @click="toggleActiveColor('color1')"
          :class="{ active: activeColors.includes('color1') }"
        >
          มงคล
          <div class="checkmark" v-if="activeColors.includes('color1')">
            <i class="bi bi-check"></i>
          </div>
        </div>
        <div
          class="color-circle color2"
          @click="toggleActiveColor('color2')"
          :class="{ active: activeColors.includes('color2') }"
        >
          มงคล
          <div class="checkmark" v-if="activeColors.includes('color2')">
            <i class="bi bi-check"></i>
          </div>
        </div>
        <div
          class="color-circle color3"
          @click="toggleActiveColor('color3')"
          :class="{ active: activeColors.includes('color3') }"
        >
          มงคล
          <div class="checkmark" v-if="activeColors.includes('color3')">
            <i class="bi bi-check"></i>
          </div>
        </div>
        <div
          class="color-circle color4"
          @click="toggleActiveColor('color4')"
          :class="{ active: activeColors.includes('color4') }"
        >
          <div class="checkmark" v-if="activeColors.includes('color4')">
            <i class="bi bi-check"></i>
          </div>
        </div>
        <div
          class="color-circle color5"
          @click="toggleActiveColor('color5')"
          :class="{ active: activeColors.includes('color5') }"
        >
          <div class="checkmark" v-if="activeColors.includes('color5')">
            <i class="bi bi-check"></i>
          </div>
        </div>
      </div>
      <div class="col-12 d-flex justify-content-around mt-2">
        <div
          class="color-circle color6"
          @click="toggleActiveColor('color6')"
          :class="{ active: activeColors.includes('color6') }"
        >
          <div class="checkmark" v-if="activeColors.includes('color6')">
            <i class="bi bi-check"></i>
          </div>
        </div>
        <div
          class="color-circle color7"
          @click="toggleActiveColor('color7')"
          :class="{ active: activeColors.includes('color7') }"
        >
          <div class="checkmark" v-if="activeColors.includes('color7')">
            <i class="bi bi-check"></i>
          </div>
        </div>
        <div
          class="color-circle color8"
          @click="toggleActiveColor('color8')"
          :class="{ active: activeColors.includes('color8') }"
        >
          <div class="checkmark" v-if="activeColors.includes('color8')">
            <i class="bi bi-check"></i>
          </div>
        </div>
        <div
          class="color-circle color9"
          @click="toggleActiveColor('color9')"
          :class="{ active: activeColors.includes('color9') }"
        >
          <div class="checkmark" v-if="activeColors.includes('color9')">
            <i class="bi bi-check"></i>
          </div>
        </div>
        <div
          class="color-circle color10"
          @click="toggleActiveColor('color10')"
          :class="{ active: activeColors.includes('color10') }"
        >
          <div class="checkmark" v-if="activeColors.includes('color10')">
            <i class="bi bi-check"></i>
          </div>
        </div>
      </div>
      <div class="col-12 d-flex justify-content-around mt-2">
        <div
          class="color-circle color11"
          @click="toggleActiveColor('color11')"
          :class="{ active: activeColors.includes('color11') }"
        >
          <div class="checkmark" v-if="activeColors.includes('color11')">
            <i class="bi bi-check"></i>
          </div>
        </div>
        <div
          class="color-circle color12"
          @click="toggleActiveColor('color12')"
          :class="{ active: activeColors.includes('color12') }"
        >
          <div class="checkmark" v-if="activeColors.includes('color12')">
            <i class="bi bi-check"></i>
          </div>
        </div>
        <div
          class="color-circle color13"
          @click="toggleActiveColor('color13')"
          :class="{ active: activeColors.includes('color13') }"
        >
          <div class="checkmark" v-if="activeColors.includes('color13')">
            <i class="bi bi-check"></i>
          </div>
        </div>
        <div
          class="color-circle color14"
          @click="toggleActiveColor('color14')"
          :class="{ active: activeColors.includes('color14') }"
        >
          <div class="checkmark" v-if="activeColors.includes('color14')">
            <i class="bi bi-check"></i>
          </div>
        </div>
        <div
          class="color-circle color15"
          @click="toggleActiveColor('color15')"
          :class="{ active: activeColors.includes('color15') }"
        >
          <div class="checkmark" v-if="activeColors.includes('color15')">
            <i class="bi bi-check"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col mt-3 mb-3">
        <div>สไตล์ภาพ</div>
      </div>
    </div>
    <div class="row g-3">
      <transition-group name="list" tag="div" class="row g-3">
        <div
          class="col-4 col-sm-4 col-md-3 d-flex justify-content-center"
          v-for="(image, index) in visibleImages"
          :key="index"
        >
          <div
            class="custom-card"
            @click="toggleActiveImage(index)"
            :class="{ active: activeImages.includes(index) }"
          >
            <img :src="image.src" :alt="image.alt" class="img-fluid" />
            <div class="custom-card-text">{{ image.text }}</div>
            <div class="checkmark" v-if="activeImages.includes(index)">
              <i class="bi bi-check"></i>
            </div>
          </div>
        </div>
      </transition-group>
    </div>
    <div class="row mt-3">
      <div class="col text-center">
        <button
          @click="loadMore"
          class="btn"
          style="color: #c13dff; font-size: 20px"
        >
          โหลดเพิ่ม
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

onMounted(async () => {
  await useNuxtApp().$notiflix.loadingData("กำลังโหลด");
  activeColors.value = ["color1", "color2"];
  activeImages.value = [0, 2];
  activeSize.value = "horizontal";
});

const images = ref([
  { src: "/img/Vintage.jpg", alt: "Vintage Image", text: "Vintage" },
  { src: "/img/Modern.jpg", alt: "Modern Image", text: "Modern" },
  { src: "/img/Romantic.jpg", alt: "Romantic Image", text: "Romantic" },
  { src: "/img/Medieval.jpg", alt: "Medieval Image", text: "Medieval" },
  {
    src: "/img/Renaissance.jpg",
    alt: "Renaissance Image",
    text: "Renaissance",
  },
  { src: "/img/Greek.jpg", alt: "Greek Image", text: "Greek" },
  { src: "/img/3D.jpg", alt: "3D Image", text: "3D" },
  { src: "/img/Anime.jpg", alt: "Anime Image", text: "Anime" },
  { src: "/img/PixelArt.jpg", alt: "Pixel Art Image", text: "Pixel Art" },
  { src: "/img/Fantasy.jpg", alt: "Fantasy Image", text: "Fantasy" },
  { src: "/img/SciFi.jpg", alt: "Sci-Fi Image", text: "Sci-Fi" },
  { src: "/img/Street.jpg", alt: "Street Image", text: "Street" },
]);

const activeSize = ref(null);
const toggleActiveSize = (size) => {
  activeSize.value = size;
};

const activeColors = ref([]);
const toggleActiveColor = (color) => {
  const index = activeColors.value.indexOf(color);
  if (index > -1) {
    activeColors.value.splice(index, 1);
  } else {
    activeColors.value.push(color);
  }
};

const activeImages = ref([]);
const toggleActiveImage = (index) => {
  const idx = activeImages.value.indexOf(index);
  if (idx > -1) {
    activeImages.value.splice(idx, 1);
  } else {
    activeImages.value.push(index);
  }
};

const visibleImages = ref([...images.value]);

const loadMore = async () => {
  await useNuxtApp().$notiflix.loadingData("กำลังโหลด");
  visibleImages.value = visibleImages.value.concat(images.value);

  nextTick(() => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth"
    });
  });
};
</script>

<style scoped>
.image {
  width: 30px;
  height: auto;
  margin-right: 10px;
}
.option-card {
  height: 50px;
  cursor: pointer;
  border: 1px solid #ccc;
  border-radius: 7px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px;
}

.option-card.active {
  border-color: #0d6efd;
  background-color: #e7f1ff;
}

.color-circle {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 12px;
  font-weight: bold;
  position: relative;
  cursor: pointer;
}

.color1 {
  background-color: #ff5733;
}

.color2 {
  background-color: #33ff57;
}

.color3 {
  background-color: #3357ff;
}

.color4 {
  background-color: #ff33a6;
}

.color5 {
  background-color: #ff8f33;
}

.color6 {
  background-color: #eb6a4d;
}

.color7 {
  background-color: #4dd366;
}

.color8 {
  background-color: #3d5bdd;
}

.color9 {
  background-color: #ca3d8d;
}

.color10 {
  background-color: #e0a676;
}

.color11 {
  background-color: #daaf78;
}

.color12 {
  background-color: #aae2b5;
}

.color13 {
  background-color: #98a5e0;
}

.color14 {
  background-color: #f099ca;
}

.color15 {
  background-color: #e4aa9c;
}

.color-circle.active {
  border: 3px solid #0d6efd;
}

.checkmark {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: #0d6efd;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: calc(50% - 12.5px);
  left: calc(50% - 12.5px);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.checkmark i {
  color: white;
  font-size: 14px;
}

.color-circle.active .checkmark,
.custom-card.active .checkmark {
  opacity: 1;
}

.custom-card {
  position: relative;
  width: 100%;
  height: 150px;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #f0f0f0;
  margin-bottom: 20px;
  transition: border-color 0.3s;
}

.custom-card.active {
  border: 3px solid #0d6efd;
}

.custom-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.custom-card-text {
  position: absolute;
  bottom: 5px;
  width: 90%;
  left: 5%;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.5);
  color: black;
  padding: 5px 0;
  font-size: 16px;
  font-weight: bold;
  border-radius: 10px;
}
</style>