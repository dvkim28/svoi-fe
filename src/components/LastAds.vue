<template>
  <div class="mt-4 pt-4 bg-sky-50">
    <div class="w-[80%] mx-auto">
      <h2 class="text-4xl text-slate-700 text-center">Categories</h2>

      <!-- Контейнер для категорий -->
      <div
        class="mt-8 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-4 gap-6 px-5 pb-10"
      >
        <div v-for="i in 8" :key="i" class="bg-white rounded-lg overflow-hidden">
          <a href="" class="flex flex-col">
            <!-- Картинка (занимает 2/3 карточки) -->
            <div class="h-2/3">
              <img src="../img/image.webp" alt="Image" class="w-full h-full object-cover" />
            </div>

            <!-- Контент -->
            <div class="p-4 flex flex-col flex-1">
              <p class="text-slate-700 mb-2 text-lg">Will sell these items</p>
              <div class="flex justify-between text-sm text-gray-500">
                <span>Valencia</span>
                <span class="text-gray-400 text-xs">28 January 1995</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
