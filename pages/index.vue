<script setup lang="ts">
import datasources from '~/assets/json/datasources';

useHead({
  title: 'Llana :: API Wrapper for Databases :: JuicyLlama',
  meta: [
    { name: 'description', content: 'Llana is a no-code API wrapper that exposes a REST API for any database within minutes. No longer spend time building APIs, just connect your database and start using the API. Open source, free to use, and no vendor lock-in.' }
  ],
})

</script>

<template>
	 <UContainer>
    <UPage>

        <div class="grid lg:grid-cols-2 grid-cols-1 gap-8 lg:pt-16 pt-8">
          
            <div class="text-center">
    
              <h1 class="text-5xl font-bold tracking-tight sm:text-7xl">  
                Database REST API in <span class="text-primary">minutes</span>
              </h1>

              <p class="mt-6 text-lg tracking-tight"> 
                Llana is a no-code API wrapper that exposes a REST API for any database within minutes. Stop wasting time building endpoints, just connect your database and start playing. Open source, free to use, and no vendor lock-in.</p>
              <div class="mt-10 flex flex-wrap gap-x-6 gap-y-3 justify-center">
                <NuxtLink type="button"
                  class="button-secondary"
                  to="/install"
                  >
                  <Icon name="ph:book-duotone" class="flex-shrink-0 h-6 w-6" /> Documentation
                </NuxtLink>
                
                <a type="button"
                  class="button-primary"
                  href="https://github.com/juicyllama/llana"
                  target="_blank"
                  >
                  <Icon name="ph:github-logo-duotone" class="flex-shrink-0 h-6 w-6" /> Github
                </a>
                
              </div>
                    
            </div>
			

          <div>
            
            <img src="/assets/images/postman.png" alt="Llana Postman Example" />

          </div>


        </div>
  
			
         
        <div class="m-4 grid grid-cols-5 md:grid-cols-8 lg:grid-cols-10 gap-4 sm:gap-5 lg:gap-8">
        <template v-for="link in datasources" :key="link">
          <NuxtLink v-if="link.url" :href="link.url" target="_blank" class="block lg:hover:scale-110 transition">
            <img :src="`/assets/images/datasources/${link.key}.png`" :alt="link.key" loading="lazy" class="rounded-xl">
          </NuxtLink>
          <div v-else class="block lg:hover:scale-110 transition">
            <img :src="`/assets/images/datasources/${link.key}.png`" :alt="link.key" loading="lazy" class="rounded-xl">
          </div>
        </template>
      </div>

    </UPage>
  </UContainer>
</template>