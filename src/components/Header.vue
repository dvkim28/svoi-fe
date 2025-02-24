<template>
  <header class="flex justify-between items-center border-b border-slate-300 py-3">
    <div class="w-[80%] mx-auto flex justify-between">
      <div class="flex items-center gap-4">
        <div>
          <h2 class="text-xl font-bold uppercase">SVOI.ES</h2>
          <p class="text-slate-400">Be strong together</p>
        </div>
      </div>
      <ul class="flex justify-between gap-10 w-2/5">
        <li class="flex items-center gap-3 cursor-pointer text-slate-500 hover:text-black">
          <img src="../assets/icons/message.svg" alt="Cart" />
          <span>Messages</span>
        </li>
        <li class="flex items-center gap-3 cursor-pointer text-slate-500 hover:text-black">
          <img src="../assets/icons/profile.svg" alt="heart" />
          <span>Profile</span>
        </li>
        <li
          class="flex items-center justify-center gap-3 cursor-pointer text-white bg-sky-900 hover:bg-sky-800 active:bg-sky-900 w-2/4 text-center px-4 py-2 rounded-md"
        >
          <span class="flex justify-center items-center">New ad</span>
        </li>
      </ul>
    </div>
  </header>
</template>

<style scoped>
@media (max-width: 768px) {
  header {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  ul {
    flex-direction: column;
    gap: 5px;
    margin-top: 10px;
  }

  .flex.items-center {
    justify-content: center;
  }

  h2 {
    font-size: 1.2rem;
  }

  p {
    font-size: 0.9rem;
  }
}
</style>
