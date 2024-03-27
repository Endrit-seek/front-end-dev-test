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
      class="w-full -mt-[80px] bg-background-pattern bg-cover bg-vectors py-24"
    >
      <div class="container mx-auto pt-20 px-6">
        <div
          class="bg-gray-800 bg-opacity-90 p-14 rounded-2xl shadow-lg mb-8 flex"
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

        <div class="flex items-center justify-between pt-16 p-10">
          <NuxtImg
            v-for="key in 6"
            :key="key"
            src="svg/GoogleLogo.svg"
            alt="Google Logo"
            class="h-12 mx-4"
          />
        </div>

        <div class="pt-48 mb-8 flex justify-around">
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

    <section
      class="h-auto w-full mt-24 pt-5 bg-no-repeat bg-[url('/svg/Background3.svg'),_url('/svg/Background4.svg')] bg-[position:50%_-20%,_bottom_-180px_center] bg-[size:cover,_100%]"
    >
      <div class="flex justify-center text-center">
        <div class="max-w-auto">
          <p class="text-5xl font-extrabold text-white leading-snug">
            Discounted
            <span
              class="bg-gradient-to-r from-cyan-400 from-50% via-green-400 via-70% to-cyan-400 to-80% text-transparent bg-clip-text"
            >
              Corporate <br />
              Training
            </span>
            Bundles
          </p>
        </div>
      </div>

      <div class="container mx-auto flex justify-center mt-12">
        <div
          class="h-full max-w-md w-96 rounded-2xl opacity-90 overflow-hidden shadow-lg bg-gray-800 text-white mx-4"
        >
          <div class="px-6 pt-8 pb-5">
            <div class="flex text-2xl font-bold mb-7">
              <NuxtImg
                src="svg/icons/LeafIcon.svg"
                alt="Leaf Icon"
                height="24"
                width="24"
                class="mr-5"
              />
              Basic
            </div>
            <p class="text-green-400 mb-4">Includes 1 year access to:</p>
            <ul class="text-sm mb-6">
              <li class="flex items-center justify-between mb-3">
                <div class="flex items-center">
                  <NuxtImg
                    src="svg/icons/CheckMarkIcon.svg"
                    alt="Check Mark Icon"
                    height="18"
                    width="18"
                    class="mr-3"
                  />
                  All Video Courses
                </div>
                <div class="flex justify-end items-end">
                  <NuxtImg
                    src="svg/icons/InfoIcon.svg"
                    alt="Info Icon"
                    height="18"
                    width="18"
                    class="flex justify-end"
                  />
                </div>
              </li>

              <li class="flex items-center justify-between mb-3">
                <div class="flex items-center">
                  <NuxtImg
                    src="svg/icons/CheckMarkIcon.svg"
                    alt="Check Mark Icon"
                    height="18"
                    width="18"
                    class="mr-3"
                  />
                  Vue.Js Master class
                </div>
                <div class="flex justify-end items-end">
                  <NuxtImg
                    src="svg/icons/InfoIcon.svg"
                    alt="Info Icon"
                    height="18"
                    width="18"
                    class="flex justify-end"
                  />
                </div>
              </li>

              <li class="flex items-center justify-between mb-3">
                <div class="flex items-center">
                  <NuxtImg
                    src="svg/icons/CheckMarkIcon.svg"
                    alt="Check Mark Icon"
                    height="18"
                    width="18"
                    class="mr-3"
                  />
                  Developer assist Slack channel
                </div>
                <div class="flex justify-end items-end">
                  <NuxtImg
                    src="svg/icons/InfoIcon.svg"
                    alt="Info Icon"
                    height="18"
                    width="18"
                    class="flex justify-end"
                  />
                </div>
              </li>
              <li class="flex items-center opacity-30 mb-3">
                <NuxtImg
                  src="svg/icons/ErrorIcon.svg"
                  alt="Error Icon"
                  height="18"
                  width="18"
                  class="mr-3"
                />
                Live Weekly QnA
              </li>
              <li class="flex items-center opacity-30 mb-3">
                <NuxtImg
                  src="svg/icons/ErrorIcon.svg"
                  alt="Error Icon"
                  height="18"
                  width="18"
                  class="mr-3"
                />
                1 x ws ticket per license
              </li>
            </ul>
            <div class="bg-gray-900 rounded-lg mt-8 py-4 px-6">
              <div class="flex items-center mb-4">
                <span class="text-3xl font-bold text-white mr-2">$50</span>
                <span class="font-light text-gray-400">/ seat / month</span>
              </div>
              <p class="text-white mb-4">How many licenses do you need?</p>
              <div class="flex items-center justify-between">
                <input
                  v-model="basicSeat"
                  type="range"
                  min="5"
                  max="20"
                  class="accent-green-400 h-1 w-full mb-2"
                />
              </div>
              <div class="flex justify-between mb-4">
                <span class="text-white">5</span>
                <span class="text-white">20</span>
              </div>
              <div class="flex justify-between items-center text-white">
                <p
                  class="flex justify-between items-center border bg-gray-950 border-gray-950 rounded-lg px-3 py-1"
                >
                  <NuxtImg
                    src="svg/icons/SeatIcon.svg"
                    alt="Seat Icon"
                    height="18"
                    width="18"
                    class="mr-2 inline-block"
                  />
                  <span id="seatCount" class="text-2xl font-bold mr-2">
                    {{ basicSeat }}
                  </span>
                  seats
                </p>
                <p class="text-green-400">26% discount</p>
              </div>
            </div>
            <div class="flex justify-center mt-8">
              <NuxtLink
                to="/"
                class="flex h-14 w-full max-w-sm rounded-lg bg-green-400 p-0.5 shadow-lg"
              >
                <button
                  class="flex-1 font-semibold text-l px-6 py-3 rounded-lg text-black"
                >
                  Start Learning
                </button>
              </NuxtLink>
            </div>
            <div class="flex justify-center mt-3">
              <NuxtLink to="/" class="flex h-14 w-full max-w-sm p-0.5">
                <button
                  class="flex-1 font-semibold text-l px-6 py-3 rounded-lg text-green-400"
                >
                  Refer your manager
                </button>
              </NuxtLink>
            </div>
          </div>
        </div>

        <div
          class="h-full max-w-md w-96 rounded-2xl opacity-90 overflow-hidden shadow-lg bg-gray-800 text-white mx-4"
        >
          <div class="px-6 pt-8 pb-5">
            <div class="flex text-2xl font-bold mb-7">
              <NuxtImg
                src="svg/icons/RocketLaunchIcon.svg"
                alt="Rocket Launch Icon"
                height="24"
                width="24"
                class="mr-5"
              />
              Professional
            </div>
            <p class="text-green-400 mb-4">Includes 1 year access to:</p>
            <ul class="text-sm mb-6">
              <li class="flex items-center justify-between mb-3">
                <div class="flex items-center">
                  <NuxtImg
                    src="svg/icons/CheckMarkIcon.svg"
                    alt="Check Mark Icon"
                    height="18"
                    width="18"
                    class="mr-3"
                  />
                  All Video Courses
                </div>
                <div class="flex justify-end items-end">
                  <NuxtImg
                    src="svg/icons/InfoIcon.svg"
                    alt="Info Icon"
                    height="18"
                    width="18"
                    class="flex justify-end"
                  />
                </div>
              </li>

              <li class="flex items-center justify-between mb-3">
                <div class="flex items-center">
                  <NuxtImg
                    src="svg/icons/CheckMarkIcon.svg"
                    alt="Check Mark Icon"
                    height="18"
                    width="18"
                    class="mr-3"
                  />
                  Vue.Js Master class
                </div>
                <div class="flex justify-end items-end">
                  <NuxtImg
                    src="svg/icons/InfoIcon.svg"
                    alt="Info Icon"
                    height="18"
                    width="18"
                    class="flex justify-end"
                  />
                </div>
              </li>

              <li class="flex items-center justify-between mb-3">
                <div class="flex items-center">
                  <NuxtImg
                    src="svg/icons/CheckMarkIcon.svg"
                    alt="Check Mark Icon"
                    height="18"
                    width="18"
                    class="mr-3"
                  />
                  Developer assist Slack channel
                </div>
                <div class="flex justify-end items-end">
                  <NuxtImg
                    src="svg/icons/InfoIcon.svg"
                    alt="Info Icon"
                    height="18"
                    width="18"
                    class="flex justify-end"
                  />
                </div>
              </li>
              <li class="flex items-center justify-between mb-3">
                <div class="flex items-center font-bold">
                  <NuxtImg
                    src="svg/icons/CheckMarkIcon.svg"
                    alt="Check Mark Icon"
                    height="18"
                    width="18"
                    class="mr-3"
                  />
                  Live Weekly QnA
                </div>
                <div class="flex justify-end items-end">
                  <NuxtImg
                    src="svg/icons/InfoIcon.svg"
                    alt="Info Icon"
                    height="18"
                    width="18"
                    class="flex justify-end"
                  />
                </div>
              </li>
              <li class="flex items-center justify-between mb-3">
                <div class="flex items-center font-bold">
                  <NuxtImg
                    src="svg/icons/CheckMarkIcon.svg"
                    alt="Check Mark Icon"
                    height="18"
                    width="18"
                    class="mr-3"
                  />
                  1 x ws ticket per license
                </div>
                <div class="flex justify-end items-end">
                  <NuxtImg
                    src="svg/icons/InfoIcon.svg"
                    alt="Info Icon"
                    height="18"
                    width="18"
                    class="flex justify-end"
                  />
                </div>
              </li>
            </ul>
            <div
              class="flex bg-green-400 bg-opacity-40 overflow-hidden text-white rounded-lg mt-8 py-4 px-6"
            >
              <div class="flex items-center justify-center">
                <div class="flex items-center justify-center">
                  <NuxtImg
                    src="/svg/icons/VueIllustration.svg"
                    alt="Vue Illustration Icon"
                    width="48"
                    height="48"
                  />
                </div>
              </div>

              <div class="flex flex-col justify-around ml-4">
                <h3 class="text-gray-400">Enough time to watch:</h3>

                <p class="text-xl font-bold text-white">
                  The Vue 3 Masterclass
                </p>
              </div>
            </div>
            <div class="bg-gray-900 rounded-lg mt-8 py-4 px-6">
              <div class="flex items-center mb-4">
                <span class="text-3xl font-bold text-white mr-2">$50</span>
                <span class="font-light text-gray-400">/ seat / month</span>
              </div>
              <p class="text-white mb-4">How many licenses do you need?</p>
              <div class="flex items-center justify-between">
                <input
                  v-model="professionalSeat"
                  type="range"
                  min="5"
                  max="20"
                  class="accent-green-400 h-1 w-full mb-2"
                />
              </div>
              <div class="flex justify-between mb-4">
                <span class="text-white">5</span>
                <span class="text-white">20</span>
              </div>
              <div class="flex justify-between items-center text-white">
                <p
                  class="flex justify-between items-center border bg-gray-950 border-gray-950 rounded-lg px-3 py-1"
                >
                  <NuxtImg
                    src="svg/icons/SeatIcon.svg"
                    alt="Seat Icon"
                    height="18"
                    width="18"
                    class="mr-2 inline-block"
                  />
                  <span id="seatCount" class="text-2xl font-bold mr-2">
                    {{ professionalSeat }}
                  </span>
                  seats
                </p>
                <p class="text-green-400">26% discount</p>
              </div>
            </div>
            <div class="flex justify-center mt-8">
              <NuxtLink
                to="/"
                class="flex h-14 w-full max-w-sm rounded-lg bg-green-400 p-0.5 shadow-lg"
              >
                <button
                  class="flex-1 font-semibold text-l px-6 py-3 rounded-lg text-black"
                >
                  Start Learning
                </button>
              </NuxtLink>
            </div>
            <div class="flex justify-center mt-3">
              <NuxtLink to="/" class="flex h-14 w-full max-w-sm p-0.5">
                <button
                  class="flex-1 font-semibold text-l px-6 py-3 rounded-lg text-green-400"
                >
                  Refer your manager
                </button>
              </NuxtLink>
            </div>
          </div>
        </div>

        <div
          class="h-full max-w-md w-96 rounded-2xl opacity-90 overflow-hidden shadow-lg bg-gray-800 text-white mx-4"
        >
          <div class="px-6 pt-8 pb-5">
            <div class="flex text-2xl font-bold mb-7">
              <NuxtImg
                src="svg/icons/BoltIcon.svg"
                alt="Bolt Icon"
                height="24"
                width="24"
                class="mr-5"
              />
              Basic
            </div>
            <p class="text-green-400 mb-4">Includes 1 year access to:</p>
            <ul class="text-sm mb-6">
              <li class="flex items-center justify-between mb-3">
                <div class="flex items-center">
                  <NuxtImg
                    src="svg/icons/CheckMarkIcon.svg"
                    alt="Check Mark Icon"
                    height="18"
                    width="18"
                    class="mr-3"
                  />
                  All Video Courses
                </div>
                <div class="flex justify-end items-end">
                  <NuxtImg
                    src="svg/icons/InfoIcon.svg"
                    alt="Info Icon"
                    height="18"
                    width="18"
                    class="flex justify-end"
                  />
                </div>
              </li>

              <li class="flex items-center justify-between mb-3">
                <div class="flex items-center">
                  <NuxtImg
                    src="svg/icons/CheckMarkIcon.svg"
                    alt="Check Mark Icon"
                    height="18"
                    width="18"
                    class="mr-3"
                  />
                  Vue.Js Master class
                </div>
                <div class="flex justify-end items-end">
                  <NuxtImg
                    src="svg/icons/InfoIcon.svg"
                    alt="Info Icon"
                    height="18"
                    width="18"
                    class="flex justify-end"
                  />
                </div>
              </li>

              <li class="flex items-center justify-between mb-3">
                <div class="flex items-center">
                  <NuxtImg
                    src="svg/icons/CheckMarkIcon.svg"
                    alt="Check Mark Icon"
                    height="18"
                    width="18"
                    class="mr-3"
                  />
                  Developer assist Slack channel
                </div>
                <div class="flex justify-end items-end">
                  <NuxtImg
                    src="svg/icons/InfoIcon.svg"
                    alt="Info Icon"
                    height="18"
                    width="18"
                    class="flex justify-end"
                  />
                </div>
              </li>
              <li class="flex items-center justify-between mb-3">
                <div class="flex items-center">
                  <NuxtImg
                    src="svg/icons/CheckMarkIcon.svg"
                    alt="Check Mark Icon"
                    height="18"
                    width="18"
                    class="mr-3"
                  />
                  Live Weekly QnA
                </div>
                <div class="flex justify-end items-end">
                  <NuxtImg
                    src="svg/icons/InfoIcon.svg"
                    alt="Info Icon"
                    height="18"
                    width="18"
                    class="flex justify-end"
                  />
                </div>
              </li>
              <li class="flex items-center justify-between mb-3">
                <div class="flex items-center font-bold">
                  <NuxtImg
                    src="svg/icons/CheckMarkIcon.svg"
                    alt="Check Mark Icon"
                    height="18"
                    width="18"
                    class="mr-3"
                  />
                  4 x ws ticket per license
                </div>
                <div class="flex justify-end items-end">
                  <NuxtImg
                    src="svg/icons/InfoIcon.svg"
                    alt="Info Icon"
                    height="18"
                    width="18"
                    class="flex justify-end"
                  />
                </div>
              </li>
            </ul>
            <div class="bg-gray-900 rounded-lg mt-8 py-4 px-6">
              <div class="flex items-center mb-4">
                <span class="text-3xl font-bold text-white mr-2">$50</span>
                <span class="font-light text-gray-400">/ seat / month</span>
              </div>
              <p class="text-white mb-4">How many licenses do you need?</p>
              <div class="flex items-center justify-between">
                <input
                  v-model="secondBasicSeat"
                  type="range"
                  min="5"
                  max="20"
                  class="accent-green-400 h-1 w-full mb-2"
                />
              </div>
              <div class="flex justify-between mb-4">
                <span class="text-white">5</span>
                <span class="text-white">20</span>
              </div>
              <div class="flex justify-between items-center text-white">
                <p
                  class="flex justify-between items-center border bg-gray-950 border-gray-950 rounded-lg px-3 py-1"
                >
                  <NuxtImg
                    src="svg/icons/SeatIcon.svg"
                    alt="Seat Icon"
                    height="18"
                    width="18"
                    class="mr-2 inline-block"
                  />
                  <span id="seatCount" class="text-2xl font-bold mr-2">
                    {{ secondBasicSeat }}
                  </span>
                  seats
                </p>
                <p class="text-green-400">26% discount</p>
              </div>
            </div>
            <div class="flex justify-center mt-8">
              <NuxtLink
                to="/"
                class="flex h-14 w-full max-w-sm rounded-lg bg-green-400 p-0.5 shadow-lg"
              >
                <button
                  class="flex-1 font-semibold text-l px-6 py-3 rounded-lg text-black"
                >
                  Start Learning
                </button>
              </NuxtLink>
            </div>
            <div class="flex justify-center mt-3">
              <NuxtLink to="/" class="flex h-14 w-full max-w-sm p-0.5">
                <button
                  class="flex-1 font-semibold text-l px-6 py-3 rounded-lg text-green-400"
                >
                  Refer your manager
                </button>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
const basicSeat = ref(12);
const professionalSeat = ref(12);
const secondBasicSeat = ref(12);
</script>

<style scoped>
.bg-vectors {
  background-image: url("/svg/Background1.svg"), url("/svg/Background2.svg");
}
</style>
