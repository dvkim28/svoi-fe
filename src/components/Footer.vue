<template>
  <footer class="bg-sky-900 text-white py-8 mt-10">
    <div
      class="w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center sm:text-left"
    >
      <!-- Логотип и описание -->
      <div>
        <h2 class="text-xl font-bold uppercase">SVOI.ES</h2>
        <p class="text-gray-300 mt-2">Be strong together</p>
      </div>

      <!-- Быстрые ссылки -->
      <div>
        <h3 class="text-lg font-semibold">Quick Links</h3>
        <ul class="mt-2 space-y-2">
          <li><a href="#" class="hover:underline">Home</a></li>
          <li><a href="#" class="hover:underline">Categories</a></li>
          <li><a href="#" class="hover:underline">New Ad</a></li>
          <li><a href="#" class="hover:underline">Contact</a></li>
        </ul>
      </div>

      <!-- Контакты -->
      <div>
        <h3 class="text-lg font-semibold">Contact Us</h3>
        <ul class="mt-2 space-y-2">
          <li>
            Email: <a href="mailto:support@svoi.es" class="hover:underline">support@svoi.es</a>
          </li>
          <li>Phone: <a href="tel:+34123456789" class="hover:underline">+34 123 456 789</a></li>
          <li>Address: Valencia, Spain</li>
        </ul>
      </div>

      <!-- Соцсети -->
      <div>
        <h3 class="text-lg font-semibold">Follow Us</h3>
        <div class="flex justify-center sm:justify-start mt-2 gap-4">
          <a href="#" class="hover:text-gray-400"
            ><img src="../assets/icons/facebook.svg" alt="Facebook" class="w-6"
          /></a>
          <a href="#" class="hover:text-gray-400"
            ><img src="../assets/icons/ins.svg" alt="Instagram" class="w-6"
          /></a>
        </div>
      </div>
    </div>

    <!-- Копирайт -->
    <div class="mt-8 border-t border-gray-700 text-center pt-4 text-sm text-gray-400">
      © 2025 SVOI.ES. All rights reserved.
    </div>
  </footer>
</template>
