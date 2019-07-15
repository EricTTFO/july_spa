<template>
  <div class>
    CourseList
    <div class="">
      <div class="" v-for="(course, idx) in courses" :key="idx">
        <router-link :to="`/courses/${course.id}`">
          {{ course.name }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      courses: [
        { id: 1, name: "Basic Course" },
        { id: 2, name: "Advanced Course" },
        { id: 3, name: "Extreme Course" }
      ]
    };
  }
};
</script>

<style></style>
