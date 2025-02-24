<template>
  <div class="flex justify-center bg-sky-50 p-8 rounded-xl mt-8">
    <div class="w-[80%] mx-auto">
      <div class="text-center w-full flex flex-col items-center">
        <!-- Заголовок -->
        <h1 class="text-slate-700 text-4xl font-semibold">Find what you need on svoi.es</h1>
        <h2 class="text-slate-500 mt-2 mb-5 text-lg">
          A welcoming community for Ukrainian and Russian speakers to connect, share, and support
          each other
        </h2>

        <!-- Блок с полем ввода поиска -->
        <div
          class="mt-8 flex flex-col sm:flex-row w-full max-w-lg items-center justify-center gap-4"
        >
          <input
            type="text"
            placeholder="What are you looking for?"
            class="w-full sm:w-96 px-4 py-2 text-lg rounded-md bg-white text-black placeholder:text-gray-400 focus:ring-2 focus:ring-sky-500 transition-all duration-200"
          />

          <!-- Кнопка поиска -->
          <button
            class="w-full sm:w-40 px-4 py-2 text-white rounded-md bg-sky-900 hover:bg-sky-800 active:bg-sky-900 transition-all duration-200 focus:outline-none cursor-pointer"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
