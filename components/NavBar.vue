<template>
  <nav class="flex justify-between items-center h-24 py-2 px-10">
    <NuxtLink to="/" class="flex items-center w-36 h-16">
      <NuxtImg
        src="/logo.png"
        alt="Vue School Logo"
        width="50"
        height="50"
        class="mr-2"
      />
      <div class="text-xl font-semibold">
        <div class="-mb-1.5">Vue</div>
        <div>School.io</div>
      </div>
    </NuxtLink>

    <div class="flex space-x-6">
      <NuxtLink
        to="/courses"
        class="text-base font-normal hover:text-gray-300 flex items-center"
      >
        <span>Courses</span>
        <NuxtImg
          height="10"
          width="10"
          src="/svg/Vector.svg"
          class="ml-2 fill-current text-gray-300"
        />
      </NuxtLink>
      <NuxtLink
        to="/plans"
        class="text-base font-normal hover:text-gray-300 flex items-center"
      >
        Plans
      </NuxtLink>
      <NuxtLink
        to="/business-service"
        class="text-base font-normal hover:text-gray-300 flex items-center"
      >
        <span>Business Service</span>
        <NuxtImg
          height="10"
          width="10"
          src="/svg/Vector.svg"
          class="ml-2 fill-current text-gray-300"
        />
      </NuxtLink>
      <NuxtLink
        to="/learning-paths"
        class="text-base font-normal hover:text-gray-300 flex items-center"
      >
        Learning Paths
      </NuxtLink>
      <NuxtLink
        to="/hiring"
        class="text-base font-normal hover:text-gray-300 flex items-center"
      >
        Hiring
      </NuxtLink>
      <NuxtLink
        to="/articles"
        class="text-base font-normal hover:text-gray-300 flex items-center"
      >
        Articles
      </NuxtLink>
      <NuxtLink
        to="/events"
        class="text-base font-normal hover:text-gray-300 flex items-center"
      >
        <span>Events</span>
        <NuxtImg
          height="10"
          width="10"
          src="/svg/Vector.svg"
          class="ml-2 fill-current text-gray-300"
        />
      </NuxtLink>
      <NuxtLink
        to="/get-certified"
        class="text-base font-normal hover:text-gray-300 flex items-center"
      >
        Get Certified
      </NuxtLink>
    </div>

    <div class="flex items-center">
      <NuxtLink
        to="/login"
        class="text-base font-normal text-white py-2 px-4 mr-4"
      >
        Log In
      </NuxtLink>
      <NuxtLink
        to="/sign-up"
        class="flex h-14 w-36 max-w-sm rounded-lg bg-gradient-to-tr from-green-400 to-blue-500 p-0.5 shadow-lg"
      >
        <button
          class="flex-1 font-medium text-l bg-gray-800 px-6 py-3 rounded-lg text-green-400"
        >
          Sign up
        </button>
      </NuxtLink>
    </div>
  </nav>
</template>
