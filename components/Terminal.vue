<template>
    <div class="bg-base-200 font-medium rounded-lg my-3 px-2 py-1">
            <div class="flex items-center justify-between">
                <p class="text-base opacity-60">Bash</p>
                <div class="flex gap-2 items-center">
                  <button class="btn"><i class="fa-solid fa-minus"></i></button>
                  <button class="btn"><i class="fa-solid fa-expand"></i></button>
                  <button class="btn btn-error"><i class="fa-solid fa-xmark"></i></button>
                </div>
            </div>
            <hr class="my-2 opacity-15">
            <div class="p-3">
              <p class=" font-bold"><i class="fa-solid me-2 fa-terminal"></i><slot /></p>
            </div>
          </div>
</template>