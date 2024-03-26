<template>
  <div class="pt-10">
    <section class="md:flex items-center justify-center">
      <div class="container mx-auto">
        <div class="md:flex items-center justify-around">
          <div class="md:w-1/3">
            <h2 class="text-6xl font-bold text-white pb-9">
              Complete
              <span class="text-green-400">Vue.js training</span> solution
              <br />
              for companies
            </h2>

            <p class="text-lg font-light text-white pb-7">
              Training solutions designed for companies, agencies <br />
              and organisations with developers using or who are considering
              using the Vue.js framework
            </p>

            <NuxtLink
              to="/"
              class="flex h-14 w-36 max-w-sm rounded-lg bg-green-400 p-0.5 shadow-lg"
            >
              <button
                class="flex-1 font-medium text-l px-6 py-3 rounded-lg text-black"
              >
                Talk to sales
              </button>
            </NuxtLink>
          </div>

          <div class="flex justify-end mt-5">
            <NuxtImg
              src="/svg/Illustration1.svg"
              alt="Illustration"
              width="550"
              height="500"
            />
          </div>
        </div>
      </div>
    </section>

    <section
      class="w-full -mt-[80px] bg-background-pattern bg-cover bg-vectors bg-vectors-cover py-24"
    >
      <div class="container mx-auto pt-20 px-6">
        <div
          class="bg-gray-800 bg-opacity-90 p-14 rounded-lg shadow-lg mb-8 flex"
        >
          <div class="w-1/3 flex items-center justify-center">
            <div class="w-40 h-44 flex items-center justify-center">
              <NuxtImg
                src="/svg/logo.svg"
                alt="Vue School Logo"
                width="135"
                height="152"
              />
            </div>
          </div>

          <div class="flex flex-col justify-around w-2/3 ml-4">
            <h3 class="text-3xl font-bold text-white">
              About Vue School corporate training
            </h3>

            <p class="text-lg text-white">
              School is the #1 training resource for Vue.js and has provided the
              most comprehensive Vue.js video library in the world to over
              140,000 developers. Private individuals and small to enterprise
              companies have used our services to develop their skills since
              2016.
            </p>
          </div>
        </div>

        <div class="flex items-center justify-between p-10">
          <NuxtImg
            v-for="key in 6"
            :key="key"
            src="svg/GoogleLogo.svg"
            alt="Google Logo"
            class="h-12 mx-4"
          />
        </div>

        <div class="pt-32 rounded-lg mb-8 flex justify-around">
          <div class="w-1/3 flex flex-col items-center justify-center ml-4">
            <div class="ml-4">
              <h3
                class="text-xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 text-transparent bg-clip-text inline-block"
              >
                YOUR #1 SOURCE OF VUE.JS COURSES
              </h3>

              <p class="text-5xl font-extrabold text-white">
                Full Stack
                <span
                  class="bg-gradient-to-r from-cyan-400 from-30% via-green-400 via-30% to-cyan-400 text-transparent bg-clip-text"
                >
                  Vue Training
                </span>
                Solutions
              </p>
            </div>
          </div>

          <div class="grid grid-cols-3 gap-4 gap-x-10 mt-5">
            <div class="text-center items-center justify-center">
              <p
                class="text-6xl font-semibold bg-gradient-to-r from-green-400 to-cyan-400 text-transparent bg-clip-text mb-5"
              >
                763
              </p>

              <div class="flex items-center justify-center text-white text-sm">
                <NuxtImg
                  src="svg/icons/PlayIcon.svg"
                  alt="Play Icon"
                  height="18"
                  width="18"
                  class="mr-3"
                />
                Video lessons
              </div>
            </div>

            <div class="text-center">
              <p
                class="text-6xl font-semibold bg-gradient-to-r from-green-400 to-cyan-400 text-transparent bg-clip-text mb-5"
              >
                40
              </p>

              <div class="flex items-center justify-center text-white text-sm">
                <NuxtImg
                  src="svg/icons/BookIcon.svg"
                  alt="Book Icon"
                  height="18"
                  width="18"
                  class="mr-3"
                />
                Courses
              </div>
            </div>

            <div class="text-center">
              <p
                class="text-6xl font-semibold bg-gradient-to-r from-green-400 to-cyan-400 text-transparent bg-clip-text mb-5"
              >
                64
              </p>

              <div class="flex items-center justify-center text-white text-sm">
                <NuxtImg
                  src="svg/icons/TimeIcon.svg"
                  alt="TimeIcon"
                  height="18"
                  width="18"
                  class="mr-3"
                />
                15 hours
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.bg-vectors {
  background-image: url("/svg/Background1.svg"), url("/svg/Background2.svg");
}
</style>
