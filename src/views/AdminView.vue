<template>


  <div class="flex rtl">
    <div class="border-l p-4 border-[var(--ui-border)] min-h-screen">
      <UNavigationMenu orientation="vertical" :items="nav" class="data-[orientation=vertical]:w-64 rtl mt-12" />
    </div>

    <div class="w-full">
      <div class="flex gap-2" dir="ltr">
        <div class="mt-4 ml-4 flex gap-2 items-center mb-4">
          <div>
            <UDrawer direction="top">
              <UChip size="2xl">
                <UButton color="neutral" variant="subtle" trailing-icon="i-lucide-bell" />
              </UChip>

              <template #content>
                <div class="mx-4 mb-2">
                  <div class="text-white text-end text-xl mt-8 m-4">اعلانات</div>
                  <div class="flex justify-between p-2 rtl text-white border rounded-lg border-gray-700">
                    <div class="grid gap-2">
                      <div>جشن روز دانشجو</div>
                      <div class="flex gap-1 items-center">
                        <div class="text-sm text-gray-400">
                          تاریخ درخواست : ۱۴۰۳/۱۱/۲۰
                        </div>
                        <UBadge color="warning" variant="soft" icon="i-lucide-clock" size="md" label="۳ روز"></UBadge>
                      </div>
                    </div>
                    <div class="grid gap-2">
                      <div class="text-end">تاریخ : ۱۴۰۳/۱۲/۲۰</div>
                      <div class="flex gap-2">
                        <UButton @click="submit(1)" color="success">تایید</UButton>
                        <!--<UButton @click="submit(2)" color="error">رد درخواست</UButton>-->
                        <UDropdownMenu class="rtl" dir="rtl" :items="items2" :content="{
                          align: 'start',
                          side: 'bottom',
                          sideOffset: 8,
                        }" :ui="{
                          content: 'w-48',
                        }">
                          <UButton label="رد درخواست" icon="i-lucide-chevron-down" color="error" />
                        </UDropdownMenu>
                      </div>
                    </div>
                  </div>
                </div>
              </template>
            </UDrawer>
          </div>
          <div>
            <UDrawer direction="top">
              <UButton color="neutral" label="راهنما" variant="subtle" trailing-icon="i-lucide-info" />

              <template #content>
                <div class="mx-4">
                  <div class="text-white text-end text-xl mt-8 m-4">راهنما</div>
                  <div class="flex justify-between my-2 p-2 rtl text-white border rounded-lg border-gray-700">
                    <div class="grid items-center">آیین نامه انجمن علمی</div>
                    <div>
                      <UButton color="neutral" variant="subtle" trailing-icon="i-lucide-link" />
                    </div>
                  </div>
                  <div class="flex justify-between my-2 p-2 rtl text-white border rounded-lg border-gray-700">
                    <div class="grid items-center">اساس نامه تشکل های دانشجویی</div>
                    <div>
                      <UButton color="neutral" variant="subtle" trailing-icon="i-lucide-link" />
                    </div>
                  </div>
                  <div class="flex justify-between my-2 p-2 rtl text-white border rounded-lg border-gray-700">
                    <div class="grid items-center">اساسنامه کانون های جهادی</div>
                    <div>
                      <UButton color="neutral" variant="subtle" trailing-icon="i-lucide-link" />
                    </div>
                  </div>
                  <div class="text-white text-end text-xl mt-8 m-4">
                    سوالات پر تکرار
                  </div>
                  <div class="flex justify-between my-2 p-2 rtl text-white border rounded-lg border-gray-700">
                    <div class="grid items-center">
                      چگونه می توانم مجوز یک نشریه را بگیرم؟
                    </div>
                    <div>
                      <UButton color="neutral" variant="subtle" trailing-icon="i-lucide-link" />
                    </div>
                  </div>
                </div>
              </template>
            </UDrawer>
          </div>
        </div>
        <USeparator class="my-8" label="پنل مدیر فرهنگی" />
      </div>

      <div v-if="selected == 'dashboard'">
        <div class="rtl m-4">
          <UCard>
            <template #default>
              <div class="flex gap-4 justify-between items-center text-white">
                <div class="flex gap-4 items-center">
                  <UAvatar src="https://github.com/benjamincanac.png" size="xl" />
                  <div>رادمان واحد</div>
                </div>
                <div class="flex gap-1">
                  <div>مدیر فرهنگی</div>
                  <div>دانشگاه اصفهان</div>
                </div>
              </div>
            </template>
          </UCard>
        </div>
        <div class="text-white text-xl mt-8 m-4">لیست انجمن ها</div>
        <div class="flex justify-center">
          <UCard class="mx-4 w-full min-md:w-3/5">
            <UTable dir="rtl" :data="data" :columns="columns" class="flex-1" />
          </UCard>
        </div>
        <div class="min-md:flex m-4 justify-between min-md:mx-8">
          <div>
            <div class="text-white text-xl mt-8">
              تعداد برنامه های حوزه موسیقی
            </div>
            <apexchart type="bar" :options="chartOptions3" :series="series3" />
          </div>
          <div>
            <div class="text-white text-xl mt-8">نمودار درخواست ها</div>
            <apexchart type="bar" :options="chartOptions2" :series="series2" />
          </div>
          <div>
            <div class="text-white text-xl mt-8">
              تعداد برنامه های تشکل ها
            </div>
            <apexchart type="bar" :options="chartOptions3" :series="series3" />
          </div>
          <div>
            <div class="text-white text-xl mt-8">
              نمودار مشارکت دانشجویان
            </div>
            <apexchart type="area" :options="chartOptions" :series="series" />
          </div>
        </div>
        <div dir="rtl">
          <UModal class="rtl" :open="open" :title="modalId === 1 ? 'اطلاعات بیشتر' : 'درخواست ها'" :close="{
            size: 'md',
            color: 'neutral',
            variant: 'ghost',
            onClick(event) {
              open = false;
            },
          }">
            <template #body>
              <div v-if="modalId === 1">
                <div class="mb-2">نام انجمن: {{ modalData?.name }}</div>
                <div>نام دبیر انجمن: {{ modalData?.leader }}</div>
                <div dir="ltr" class="my-12">
                  <div class="text-white text-xl mt-8 text-end mb-4">گالری انجمن</div>
                  <UCarousel v-slot="{ item }" dots :align="'center'" :items="pics" class="w-full max-w-xs mx-auto">
                    <img :src="item" width="320" height="320" class="rounded-lg" />
                  </UCarousel>
                </div>
                <div class="text-white text-xl mt-8">نمودار مشارکت دانشجویان</div>
                <apexchart type="area" :options="chartOptions" :series="series" />
                <div class="text-white text-xl mt-8">نمودار درخواست ها</div>
                <apexchart type="bar" :options="chartOptions2" :series="series2" />
              </div>
              <div v-else-if="modalId === 2">
                <UTabs v-model="active" :items="items" class="w-full rtl">
                  <template #content="{ item }">
                    <div v-if="item.id == 1">
                      <div class="flex justify-between p-2 text-white border rounded-lg border-gray-700">
                        <div class="grid gap-2">
                          <div>جشن روز دانشجو</div>
                          <div class="flex gap-1 items-center">
                            <div class="text-sm text-gray-400">
                              تاریخ درخواست : ۱۴۰۳/۱۱/۲۰
                            </div>
                            <UBadge color="warning" variant="soft" icon="i-lucide-clock" size="md" label="۳ روز">
                            </UBadge>
                          </div>
                        </div>
                        <div class="grid gap-2">
                          <div class="text-end">تاریخ : ۱۴۰۳/۱۲/۲۰</div>
                          <div class="flex gap-2">
                            <UButton @click="submit(1)" color="success">تایید</UButton>
                            <UDropdownMenu class="rtl" dir="rtl" :items="items2" :content="{
                              align: 'start',
                              side: 'bottom',
                              sideOffset: 8,
                            }" :ui="{
                              content: 'w-48',
                            }">
                              <UButton label="رد درخواست" icon="i-lucide-chevron-down" color="error" />
                            </UDropdownMenu>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div v-if="item.id == 2">
                      <div class="flex justify-between p-2 text-white border rounded-lg border-gray-700">
                        <div class="grid gap-2">
                          <div>شعر خوانی</div>
                          <div class="text-sm text-gray-400">
                            تاریخ درخواست : ۱۴۰۳/۱۰/۱۶
                          </div>
                        </div>
                        <div>
                          <div class="text-end mb-2">تاریخ : ۱۴۰۳/۱۱/۰۲</div>
                          <div class="flex justify-end">
                            <UBadge variant="subtle" color="success">تایید شده</UBadge>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div v-if="item.id == 3">
                      <div class="flex justify-between p-2 text-white border rounded-lg border-gray-700">
                        <div class="grid gap-2">
                          <div>بازی مافیا</div>
                          <div class="text-sm text-gray-400">
                            تاریخ درخواست : ۱۴۰۳/۶/۰۱
                          </div>
                        </div>
                        <div>
                          <div class="text-end mb-2">تاریخ : ۱۴۰۳/۷/۱۰</div>
                          <div class="flex justify-end">
                            <UBadge variant="subtle" color="error">رد شده : محتوای نا مناسب</UBadge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </template>
                </UTabs>
              </div>
            </template>
          </UModal>
        </div>
      </div>
      <div v-if="selected == 'authorize'">
        <div class="flex justify-center mt-16">
          <UCard class="mx-4 w-full min-md:w-4/5">
          <UTable dir="rtl" :data="data2" :columns="columns2" class="flex-1" />
        </UCard>
        </div>
      </div>
      <div v-if="selected == 'processes'">
        <TheProcesses />
      </div>
      <div v-if="selected == 'elections'">
        <TheElections />
      </div>
      <div v-if="selected == 'surveys'">
        <TheSurveys />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, h, ref } from "vue";
import type { NavigationMenuItem, TableColumn } from "@nuxt/ui";
import type { Row } from "@tanstack/vue-table";
import UButton from "@nuxt/ui/runtime/components/Button.vue";
import UBadge from "@nuxt/ui/runtime/components/Badge.vue";
import EDropdown from "@/components/EDropdown.vue";
import type { ApexOptions } from "apexcharts";
const selected = ref('dashboard')
const nav = computed<NavigationMenuItem[][]>(() => [
  [
    {
      label: 'داشبورد',
      icon: 'i-lucide-layout-dashboard',
      active: selected.value === 'dashboard',
      onSelect() {
        selected.value = 'dashboard'
      },
    },
    {
      label: 'تعیین دسترسی ها',
      icon: 'i-lucide-scan-eye',
      active: selected.value === 'authorize',
      onSelect() {
        selected.value = 'authorize'
      },
    },
    {
      label: 'تعریف فرایند ها',
      icon: 'i-lucide-route',
      active: selected.value === 'processes',
      onSelect() {
        selected.value = 'processes'
      },
    },
    {
      label: 'انتخابات انلاین',
      icon: 'i-lucide-award',
      active: selected.value === 'elections',
      onSelect() {
        selected.value = 'elections'
      },
    },
    {
      label: 'نظرسنجی ها',
      icon: 'i-lucide-list-check',
      active: selected.value === 'surveys',
      onSelect() {
        selected.value = 'surveys'
      },
    }
  ],
  [
    {
      label: 'خروج از حساب کاربری',
      icon: 'i-lucide-log-out',
      to: '/',
    },
  ]
])
const active = ref("2");
const pics = [
  "https://picsum.photos/640/640?random=1",
  "https://picsum.photos/640/640?random=2",
  "https://picsum.photos/640/640?random=3",
  "https://picsum.photos/640/640?random=4",
  "https://picsum.photos/640/640?random=5",
  "https://picsum.photos/640/640?random=6",
];
const items2 = ref([
  {
    label: "محتوای نا مناسب",
    onSelect(e: Event) {
      submit(2);
    },
  },
  {
    label: "عدم تطابق با قانون",
    onSelect(e: Event) {
      submit(2);
    },
  },
  {
    label: "رد استعلام امنیتی",
    onSelect(e: Event) {
      submit(2);
    },
  },
  {
    label: "سایر",
    onSelect(e: Event) {
      submit(2);
    },
  },
]);
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
const chartOptions3 = ref<ApexOptions>({
  chart: {
    type: "bar",
    toolbar: { show: false },
    selection: { enabled: false },
    zoom: { enabled: false },
    foreColor: "#ccc",
  },
  legend: {
    show: false,
  },
  xaxis: {
    categories: ["انجمن ریاضی", "انجمن کامپیوتر"],
    labels: {
      style: {
        colors: ["#fff", "#fff", "#fff"],
        fontFamily: "IRANSansFaNum",
      },
    },
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
  plotOptions: {
    bar: {
      columnWidth: "50%",
      distributed: true,
    },
  },
});
const series3 = ref([
  {
    name: "تعداد",
    data: [4, 7],
  },
]);
const items = [
  { label: "رد شده", icon: "i-iconoir-xmark-circle", id: 3 },
  {
    label: "تایید شده",
    icon: "i-iconoir-check-circle",
    id: 2,
  },
  {
    label: "درحال برسی",
    icon: "i-mdi-clock-outline",
    id: 1,
  },
];
const toast = useToast();
const open = ref(false);
const modalId = ref(1);
const modalData = ref<Payment>();
type Payment = {
  id: string;
  name: string;
  leader: string;
  status: "درخواست جدید" | "برسی شده";
};
type Users = { 
   id: string;
  name: string;
  role: 'دبیر' | 'معاون' | 'کارشناس';
  association:string;
}
const data = ref<Payment[]>([
  {
    id: "1",
    name: "انجمن ریاضی",
    leader: "محمدرضا محمدی",
    status: "درخواست جدید",
  },
  {
    id: "2",
    name: "انجمن کامپیوتر",
    leader: "علی احمدی",
    status: "برسی شده",
  },
]);
const data2 = ref<Users[]>([
  {
    id: "1",
    name: "رادمان واحد",
    role: "دبیر",
    association:'انجمن کامپیوتر'
  },
  {
    id: "2",
    name: "امیر حقی",
    role: "معاون",
    association:'انجمن کامپیوتر'
  },
  {
    id: "3",
    name: "علی احمدی",
    role: "دبیر",
    association: 'انجمن ریاضی',
  },
  {
    id: "4",
    name: "فاطمه حسینی",
    role: "معاون",
    association:'انجمن ریاضی'
  },
]);
const columns: TableColumn<Payment>[] = [
  {
    accessorKey: "name",
    header: "نام انجمن",
  },
  {
    accessorKey: "status",
    header: "وضعیت درخواست",
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      const colorMap: Record<string, "warning" | "success"> = {
        "درخواست جدید": "warning",
        "برسی شده": "success",
      };
      const color = colorMap[status] || "neutral";
      return h(UBadge, { class: "capitalize", variant: "subtle", color }, () =>
        row.getValue("status")
      );
    },
  },

  {
    id: "actions",
    cell: ({ row }) => {
      debugger;
      return h(
        "div",
        { class: "text-right" },
        h(
          EDropdown,
          {
            items: getRowItems(row),
          },
          () =>
            h(UButton, {
              icon: "i-lucide-ellipsis-vertical",
              color: "neutral",
              variant: "ghost",
              class: "ml-auto",
            })
        )
      );
    },
  },
];
const columns2: TableColumn<Users>[] = [
  {
    accessorKey: "name",
    header: "نام و نام خانوادگی",
  },
   {
    accessorKey: "association",
    header: "نام انجمن",
  },
  {
    accessorKey: "role",
    header: "سطح دسترسی",
    cell: ({ row }) => {
      const role = row.getValue("role") as string;
      const colorMap: Record<string, "warning" | "success"> = {
        "درخواست جدید": "warning",
        "برسی شده": "success",
      };
      const color = colorMap[role] || "neutral";
      return h(UBadge, { class: "capitalize", variant: "subtle", color }, () =>
        row.getValue("role")
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      return  h(UButton, {
              label:'تغییر دسترسی',
              icon:"i-lucide-chevron-down",
              color:'neutral',
              variant:'outline',
              class: "ml-auto",
            })
    },
  },
];

function getRowItems(row: Row<Payment>) {
  return [
    {
      class: "rtl",
      label: "اطلاعات بیشتر",
      onSelect() {
        modalData.value = row.original;
        modalId.value = 1;
        open.value = true;
      },
    },
    {
      type: "separator",
    },
    {
      class: "rtl",
      label: "درخواست ها",
      onSelect() {
        modalData.value = row.original;
        modalId.value = 2;
        open.value = true;
      },
    },
  ];
}
function submit(status: number) {
  if (status == 1) {
    toast.add({
      title: "تایید شد",
      description: "درخواست با موفقیت تایید شد",
      color: "success",
    });
  } else {
    toast.add({
      title: "رد شد",
      description: "درخواست با موفقیت رد شد",
      color: "error",
    });
  }
}
</script>
