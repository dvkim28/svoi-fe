<template>
  <div class="w-[80%] mx-auto mt-10">
    <h2 class="text-4xl text-slate-700 text-center">Categories</h2>

    <!-- Контейнер для категорий -->
    <div class="mt-8 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6 gap-6">
      <div v-for="i in 10" :key="i" class="w-full">
        <a href="" class="flex flex-col items-center">
          <img src="../assets/icons/job.webp" class="w-40" alt="" />
          <p class="mt-5 text-slate-700 mb-10">Category name</p>
        </a>
      </div>
    </div>
  </div>
</template>
