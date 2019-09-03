<template>
  <div class>
    courseList
    <div class="">
      <div class="" v-for="(course, idx) in courses" :key="idx">
        <div class="img" :style="imgStyle(course.img)">
          <div class="text">
            <router-link :to="`/courses/${course.id}`">
              {{ course.name }}
            </router-link>
          </div>
        </div>
        <!-- <router-link :to="`/courses/${course.id}`">
        <img :src="`./${course.img}`" alt="" >
        <img :src="course.img" alt="" >
          {{ course.name }}
        </router-link> -->
      </div>
    </div>
  </div>
</template>

<script>
// import img1 from "../imgs/lesson1.jpg";
// import img2 from "../imgs/lesson2.jpg";
// import img3 from "../imgs/lesson3.jpg";
import courses from "../courses";
export default {
  // data() {
  //   return {
  //     courses: [
  //       { id: 1,img: img1, name: "Basic Course" },
  //       { id: 2,img: img2, name: "Advanced Course" },
  //       { id: 3,img: img3, name: "Extreme Course" }
  //     ]
  //   };
  // },
  computed: {
    courses() {
      return courses;
    }
  },
  methods: {
    imgStyle(img) {
      return {
        backgroundImage: `url('${img}')`
      };
    }
  }
};
</script>

<style scoped></style>
