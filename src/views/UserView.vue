<template>
  <div class="flex gap-2">
    <div class="mt-4 ml-4 flex gap-2 items-center mb-4">
      <div>
        <UDrawer direction="top">
        <UChip size="2xl">
          <UButton
            color="neutral"
            variant="subtle"
            trailing-icon="i-lucide-bell"
          />
        </UChip>

        <template #content>
          <div class="mx-4">
            <div class="text-white text-end text-xl mt-8 m-4">اعلانات</div>
            <div
              class="flex justify-between p-2 rtl text-white border rounded-lg border-gray-700"
            >
              <div class="grid gap-2">
                <div>جشن روز دانشجو</div>
                <div class="flex gap-1 items-center">
                  <div class="text-sm text-gray-400">
                    تاریخ درخواست : ۱۴۰۳/۱۱/۲۰
                  </div>
                </div>
              </div>
              <div class="grid gap-2">
                <div class="text-end">تاریخ : ۱۴۰۳/۱۲/۲۰</div>
                <div class="flex gap-2">
                  <UBadge variant="soft" label="درخواست شما تایید شد"></UBadge>
                </div>
              </div>
            </div>
          </div>
        </template>
      </UDrawer>
      </div>
      <div>
        <UDrawer direction="top">
        <UButton
          color="neutral"
          label="راهنما"
          variant="subtle"
          trailing-icon="i-lucide-info"
        />

        <template #content>
          <div class="mx-4">
            <div class="text-white text-end text-xl mt-8 m-4">راهنما</div>
            <div
              class="flex justify-between my-2 p-2 rtl text-white border rounded-lg border-gray-700"
            >
              <div class="grid items-center">آیین نامه انجمن علمی</div>
              <div>
                <UButton
                  color="neutral"
                  variant="subtle"
                  trailing-icon="i-lucide-link"
                />
              </div>
            </div>
            <div
              class="flex justify-between my-2 p-2 rtl text-white border rounded-lg border-gray-700"
            >
              <div class="grid items-center">اساس نامه تشکل های دانشجویی</div>
              <div>
                <UButton
                  color="neutral"
                  variant="subtle"
                  trailing-icon="i-lucide-link"
                />
              </div>
            </div>
            <div
              class="flex justify-between my-2 p-2 rtl text-white border rounded-lg border-gray-700"
            >
              <div class="grid items-center">اساسنامه کانون های جهادی</div>
              <div>
                <UButton
                  color="neutral"
                  variant="subtle"
                  trailing-icon="i-lucide-link"
                />
              </div>
            </div>
            <div class="text-white text-end text-xl mt-8 m-4">
              سوالات پر تکرار
            </div>
            <div
              class="flex justify-between my-2 p-2 rtl text-white border rounded-lg border-gray-700"
            >
              <div class="grid items-center">
                چگونه می توانم مجوز یک نشریه را بگیرم؟
              </div>
              <div>
                <UButton
                  color="neutral"
                  variant="subtle"
                  trailing-icon="i-lucide-link"
                />
              </div>
            </div>
          </div>
        </template>
      </UDrawer>
      </div>
    </div>
    <USeparator class="my-8" label="داشبورد انجمن" />
  </div>
  <div class="rtl m-4">
    <UCard>
      <template #default>
        <div
          class="min-md:flex gap-4 grid justify-between items-center text-white"
        >
          <div class="flex gap-4 items-center">
            <UAvatar src="https://github.com/benjamincanac.png" size="xl" />
            <div>علی احمدی</div>
          </div>

          <div>تاریخ تأسیس : ۱۳۸۴/۳/۱۵</div>
          <div>آخرین انتخابات : ۱۴۰۳/۱۰/۲۵</div>
          <div class="flex gap-1">
            <div>دبیر انجمن کامپیوتر</div>
            <div>دانشگاه اصفهان</div>
          </div>
        </div>
      </template>
    </UCard>
    <div class="min-md:flex min-md:justify-between mt-8 gap-4">
      <div class="text-white text-xl flex items-center">
        نمودار مشارکت دانشجویان
      </div>
      <apexchart type="area" :options="chartOptions" :series="series" />
      <div class="text-white text-xl flex items-center">نمودار درخواست ها</div>
      <apexchart type="bar" :options="chartOptions2" :series="series2" />
    </div>
  </div>
  <div class="grid rtl grid-cols-1 gap-4 md:grid-cols-2 mx-4">
    <UCard>
      <template #header>
        <div class="flex justify-between items-center text-white text-lg">
          <div>درخواست های انجمن</div>
          <UButton @click="openModal(1)">درخواست جدید</UButton>
        </div>
      </template>
      <template #default>
        <div
          class="flex justify-between p-2 text-white border rounded-lg border-gray-700"
        >
          <div class="grid gap-2">
            <div>جشن روز دانشجو</div>
            <div class="text-sm text-gray-400">تاریخ درخواست : ۱۴۰۳/۱۱/۲۰</div>
          </div>
          <div class="grid gap-2">
            <div class="text-end">تاریخ : ۱۴۰۳/۱۲/۲۰</div>
            <UButton color="error">حذف درخواست</UButton>
          </div>
        </div>
        <div
          class="flex justify-between p-2 my-2 text-white border rounded-lg border-gray-700"
        >
          <div class="grid gap-2">
            <div>شعر خوانی</div>
            <div class="text-sm text-gray-400">تاریخ درخواست : ۱۴۰۳/۱۰/۱۶</div>
          </div>
          <div>
            <div class="text-end mb-2">تاریخ : ۱۴۰۳/۱۱/۰۸</div>
            <div class="flex justify-end">
              <UBadge variant="subtle" color="success">تایید شده</UBadge>
            </div>
          </div>
        </div>
        <div
          class="flex justify-between p-2 text-white border rounded-lg border-gray-700"
        >
          <div class="grid gap-2">
            <div>بازی مافیا</div>
            <div class="text-sm text-gray-400">تاریخ درخواست : ۱۴۰۳/۶/۰۱</div>
          </div>
          <div>
            <div class="text-end mb-2">تاریخ : ۱۴۰۳/۷/۱۰</div>
            <div class="flex justify-end">
              <UBadge variant="subtle" color="error"
                >رد شده : محتوای نا مناسب</UBadge
              >
            </div>
          </div>
        </div>
      </template>
    </UCard>
    <UCard>
      <template #header>
        <div class="flex justify-between items-center text-white text-lg">
          <div class="flex gap-1">
            <div>اعضای انجمن</div>
            <UBadge color="neutral" variant="soft" label="۸۰ نفر"></UBadge>
          </div>
          <UButton @click="openModal(2)">کاربر جدید</UButton>
        </div>
      </template>
      <template #default>
        <div
          class="flex justify-between p-2 text-white border rounded-lg border-gray-700"
        >
          <div class="grid gap-2">
            <div>رادمان واحد</div>
            <div class="text-sm text-gray-400">تاریخ عضویت : ۱۴۰۳/۱۱/۲۰</div>
          </div>
          <div class="grid gap-2">
            <div class="text-end">کارشناس فنی</div>
            <UButton color="error">حذف کاربر</UButton>
          </div>
        </div>
        <div
          class="flex justify-between p-2 mt-2 text-white border rounded-lg border-gray-700"
        >
          <div class="grid gap-2">
            <div>علی اکبری</div>
            <div class="text-sm text-gray-400">تاریخ درخواست : ۱۴۰۳/۱۱/۲۵</div>
          </div>
          <div class="grid gap-2">
            <div class="text-end">مهندسی کامپیوتر</div>
            <UButton>تایید درخواست</UButton>
          </div>
        </div>
      </template>
    </UCard>
    <UCard>
      <template #header>
        <div class="flex justify-between items-center text-white text-lg">
          <div>گالری انجمن</div>
          <UButton>فایل جدید</UButton>
        </div>
      </template>
      <template #default>
        <div class="mb-12" dir="ltr">
          <UCarousel
            v-slot="{ item }"
            dots
            :align="'center'"
            :items="pics"
            class="w-full max-w-xs mx-auto"
          >
            <img :src="item" width="320" height="320" class="rounded-lg" />
          </UCarousel>
        </div>
      </template>
    </UCard>
    <UCard>
      <template #header>
        <div class="flex justify-between items-center text-white text-lg">
          <div>تقویم رویداد ها</div>
          <UBadge variant="soft" label="۱۵ برنامه"></UBadge>
        </div>
      </template>
      <template #default>
        <div>
          <div class="flex justify-between">
            <div class="flex gap-1">
              <UInput :value="'1403'" />

              <UInput :value="'بهمن'" />
            </div>
            <div class="flex gap-2 items-end">
              <UButton icon="i-lucide-chevron-right"></UButton>
              <UButton icon="i-lucide-chevron-left"></UButton>
            </div>
          </div>
          <div
            class="flex justify-between my-2 p-2 rtl text-white border rounded-lg border-gray-700"
          >
            <div class="grid items-center">شنبه : ۱۱/۷</div>
            <div>
              <UBadge
                variant="soft"
                size="lg"
                color="neutral"
                label="بدون برنامه"
              ></UBadge>
            </div>
          </div>
          <div
            class="flex justify-between my-2 p-2 rtl text-white border rounded-lg border-gray-700"
          >
            <div class="grid items-center">یک شنبه : ۱۱/۸</div>
            <div>
              <UBadge size="lg" label="شعر خوانی"></UBadge>
            </div>
          </div>
          <div
            class="flex justify-between my-2 p-2 rtl text-white border rounded-lg border-gray-700"
          >
            <div class="grid items-center">دو شنبه : ۱۱/۹</div>
            <div>
              <UBadge
                variant="soft"
                size="lg"
                color="neutral"
                label="بدون برنامه"
              ></UBadge>
            </div>
          </div>
          <div
            class="flex justify-between my-2 p-2 rtl text-white border rounded-lg border-gray-700"
          >
            <div class="grid items-center">سه شنبه : ۱۱/۱۰</div>
            <div>
              <UBadge
                variant="soft"
                size="lg"
                color="neutral"
                label="بدون برنامه"
              ></UBadge>
            </div>
          </div>
          <div
            class="flex justify-between my-2 p-2 rtl text-white border rounded-lg border-gray-700"
          >
            <div class="grid items-center">چهار شنبه : ۱۱/۱۱</div>
            <div>
              <UBadge
                variant="soft"
                size="lg"
                color="neutral"
                label="بدون برنامه"
              ></UBadge>
            </div>
          </div>
          <div
            class="flex justify-between my-2 p-2 rtl text-white border rounded-lg border-gray-700"
          >
            <div class="grid items-center">پنج شنبه : ۱۱/۱۲</div>
            <div>
              <UBadge
                variant="soft"
                size="lg"
                color="neutral"
                label="بدون برنامه"
              ></UBadge>
            </div>
          </div>
          <div
            class="flex justify-between my-2 p-2 rtl text-white border rounded-lg border-gray-700"
          >
            <div class="grid items-center">جمعه : ۱۱/۱۳</div>
            <div>
              <UBadge
                variant="soft"
                size="lg"
                color="neutral"
                label="بدون برنامه"
              ></UBadge>
            </div>
          </div>
        </div>
      </template>
    </UCard>
  </div>
  <div class="mb-16 p-8"></div>
  <UModal
    class="rtl"
    :open="open"
    :title="modalId === 1 ? 'درخواست جدید' : 'کاربر جدید'"
    :close="{
      size: 'md',
      color: 'neutral',
      variant: 'ghost',
      onClick(event) {
        open = false;
      },
    }"
  >
    <template #body>
      <div v-if="modalId == 1">
        <UForm dir="rtl" :state="state">
          <UFormField label="عنوان" name="title">
            <UInput class="w-full mb-2" v-model="state.title" />
          </UFormField>

          <div class="flex justify-between gap-2 mb-2">
            <UFormField class="w-full" label="قالب برنامه" name="template">
              <USelectMenu
                v-model="state.template"
                :items="items"
                class="w-full"
              />
            </UFormField>
            <UFormField class="w-full" label="تاریخ اجرا" name="date">
              <UPopover>
                <UButton
                  block
                  color="neutral"
                  variant="subtle"
                  icon="i-lucide-calendar"
                >
                  {{
                    modelValue
                      ? df.format(modelValue.toDate(getLocalTimeZone()))
                      : "Select a date"
                  }}
                </UButton>

                <template #content>
                  <UCalendar v-model="modelValue" class="p-2" />
                </template>
              </UPopover>
            </UFormField>
          </div>
          <UFormField label="بودجه (تومان)">
            <UInput type="number" class="w-full" />
          </UFormField>
          <div class="flex justify-between gap-2 my-2">
            <UFormField class="w-full" label="مجری (کد ملی)">
              <UInput class="w-full" />
            </UFormField>
            <UFormField class="w-full" label="مهمان (کد ملی)">
              <UInput class="w-full" />
            </UFormField>
          </div>
          <UFormField class="mb-2" label="درخواست به">
            <USelectMenu :items="items2" class="w-full" />
          </UFormField>
          <UFormField label="توضیحات">
            <UTextarea class="w-full" />
          </UFormField>
        </UForm>
      </div>
      <div v-if="modalId == 2">
        <UForm dir="rtl" :state="state2">
          <UFormField label="نام کاربری" name="u">
            <UInput class="w-full mb-2" v-model="state2.username" />
          </UFormField>
          <UFormField label="نام و نام خانوادگی" name="name">
            <UInput class="w-full" />
          </UFormField>
          <UFormField class="w-full my-2" label="نقش" name="role">
            <USelectMenu :items="items3" class="w-full" />
          </UFormField>
          <UFormField label="رمز عبور">
            <UInput class="w-full" v-model="state2.password" type="password" />
          </UFormField>
        </UForm>
      </div>
    </template>
    <template #footer>
      <UButton @click="submit(modalId)" type="submit" block>
        {{ modalId === 1 ? "ثبت درخواست" : "ثبت کاربر" }}
      </UButton>
    </template>
  </UModal>
</template>
<script setup lang="ts">
import { computed, ref, shallowRef } from "vue";
import VueApexCharts from "vue3-apexcharts";
import type { ApexOptions } from "apexcharts";
import {
  CalendarDate,
  DateFormatter,
  getLocalTimeZone,
} from "@internationalized/date";
const open = ref(false);
const modalId = ref(1);
const df = new DateFormatter("fa-IR", {
  dateStyle: "medium",
});
const pics = [
  "https://picsum.photos/640/640?random=1",
  "https://picsum.photos/640/640?random=2",
  "https://picsum.photos/640/640?random=3",
  "https://picsum.photos/640/640?random=4",
  "https://picsum.photos/640/640?random=5",
  "https://picsum.photos/640/640?random=6",
];
const modelValue = shallowRef(new CalendarDate(2025, 2, 20));
const chartOptions = ref<ApexOptions>({
  chart: {
    type: "area",
    toolbar: { show: false },
    selection: { enabled: false },
    zoom: { enabled: false },
    foreColor: "#ccc",
  },
  xaxis: {
    categories: ["1399", "1400", "1401", "1402", "1403", "1404"],
  },
  legend: {
    show: false,
  },
  tooltip: {
    enabled: false,
  },
  colors: ["#00BAEC"],
  stroke: {
    width: 3,
  },
  grid: {
    borderColor: "#555",
    yaxis: {
      lines: {
        show: false,
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  fill: {
    gradient: {
      opacityFrom: 0.55,
      opacityTo: 0,
    },
  },
  markers: {
    size: 5,
    colors: ["#000524"],
    strokeColors: "#00BAEC",
    strokeWidth: 3,
  },
});
const series = ref([
  {
    name: "Sales",
    data: [30, 40, 35, 50, 49, 60],
  },
]);
const chartOptions2 = ref<ApexOptions>({
  chart: {
    type: "bar",
    toolbar: { show: false },
    selection: { enabled: false },
    zoom: { enabled: false },
    foreColor: "#ccc",
  },
  xaxis: {
    categories: [" تایید شده ", " در انتظار ", " رد شده "],
    labels: {
      style: {
        colors: ["#fff", "#fff", "#fff"],
        fontFamily: "IRANSansFaNum",
      },
    },
  },
  legend: {
    show: false,
  },
  tooltip: {
    enabled: false,
  },
  colors: ["#28a745", "#ffc107", "#dc3545"],
  stroke: {
    width: 3,
  },
  grid: {
    borderColor: "#555",
    yaxis: {
      lines: {
        show: false,
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    bar: {
      columnWidth: "50%",
      distributed: true,
    },
  },
});
const series2 = ref([
  {
    name: "تعداد",
    data: [10, 1, 4],
  },
]);
const items = ref(["جشن", "شعر", "بازی", "کرسی ازاد اندیشی", "کنفرانس"]);
const items2 = ref([
  "کمیته ناظر انجمن",
  "کمیته اجرایی انجمن",
  "کمیته مالی انجمن",
  "مدیر فرهنگی",
  "مدیر اجرایی",
  "شورای فرهنگی",
]);
const items3 = ref([
  "کارشناس فنی",
  "کارشناس مالی",
  "مدیر اجرایی",
  "مدیر فرهنگی",
  "منشی",
]);
const state = ref({
  title: "",
  template: "",
});
const state2 = ref({
  username: "",
  password: "",
});
const toast = useToast();
function openModal(id: number) {
  modalId.value = id;
  open.value = true;
}
function submit(id: number) {
  if (id === 1) {
    toast.add({
      title: "ثبت شد",
      description: "درخواست شما با موفقیت ثبت شد",
      color: "success",
    });
  } else {
    toast.add({
      title: "ثبت شد",
      description: "کاربر جدید با موفقیت ثبت شد",
      color: "success",
    });
  }
  open.value = false;
}
</script>
