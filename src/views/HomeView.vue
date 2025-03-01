<template>
  <div class="grid items-center h-full">
    <div class="flex justify-center">
      <UCard class="min-lg:w-1/3 w-full mx-4">
        <template #header>
          <span class="flex justify-center"
            >سامانه فرایند های فرهنگی وزارت بهداشت</span
          >
        </template>

        <UForm
        dir="rtl"
          :schema="v.safeParser(schema)"
          :state="state"
        >
          <UFormField label="نام کاربری" name="username">
            <UInput class="w-full mb-2" v-model="state.username" />
          </UFormField>

          <UFormField label="رمز عبور" name="password">
            <UInput class="w-full" v-model="state.password" type="password" />
          </UFormField>
        </UForm>

        <template #footer>
          <UButton @click="onSubmit()" type="submit" block> ورود </UButton>
        </template>
      </UCard>
    </div>
  </div>
</template>
<script setup lang="ts">
import * as v from "valibot";
import type { FormSubmitEvent } from "@nuxt/ui";
import { reactive } from "vue";
import router from "@/router";

const schema = v.required(
  v.object({
    username: v.pipe(v.string("نام کاربری معتبر نیست"),),
    password: v.pipe(v.string("رمز عبور معتبر نیست")),
  })
);
const state = reactive({
  username: "",
  password: "",
});

const toast = useToast();
async function onSubmit() {
  if (state.username == 'admin' && state.password == 'admin') {
    router.push('/admin')
  }
  else if(state.username == 'user' && state.password == 'user') {
    router.push('/user')
  } else if (state.username == 'vip' && state.password == 'vip') {
    router.push('/vip')
  }
  else {
    toast.add({
    title: "نامعتبر",
    description: "نام کاربری یا رمز عبور نادرست است",
    color: "error",
  });
  }
 
}
</script>
