<template>
  <USeparator class="my-8" label="داشبورد مدیریت" />
  <div class="flex justify-center">
    <UCard class="mx-4 w-full min-md:w-3/5">
      <UTable dir="rtl" :data="data" :columns="columns" class="flex-1" />
    </UCard>
  </div>
  <div class="min-md:flex m-4 justify-between min-md:mx-8">
    <div>
      <div class="text-white text-end text-xl mt-8">
        تعداد برنامه های حوزه موسیقی
      </div>
      <apexchart type="bar" :options="chartOptions3" :series="series3" />
    </div>
    <div>
      <div class="text-white text-end text-xl mt-8">نمودار درخواست ها</div>
      <apexchart type="bar" :options="chartOptions2" :series="series2" />
    </div>
    <div>
      <div class="text-white text-end text-xl mt-8">
        تعداد برنامه های تشکل ها
      </div>
      <apexchart type="bar" :options="chartOptions3" :series="series3" />
    </div>
    <div>
      <div class="text-white text-end text-xl mt-8">
        نمودار مشارکت دانشجویان
      </div>
      <apexchart type="area" :options="chartOptions" :series="series" />
    </div>
  </div>
  <div dir="rtl">
    <UModal
      class="rtl"
      :open="open"
      :title="modalId === 1 ? 'اطلاعات بیشتر' : 'درخواست ها'"
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
        <div v-if="modalId === 1">
          <div class="my-2">نام دانشگاه: {{ modalData?.name }}</div>
          <div>نام دبیر انجمن: {{ modalData?.leader }}</div>
          <div class="text-white text-xl mt-8">نمودار مشارکت دانشجویان</div>
          <apexchart type="area" :options="chartOptions" :series="series" />
          <div class="text-white text-xl mt-8">نمودار درخواست ها</div>
          <apexchart type="bar" :options="chartOptions2" :series="series2" />
        </div>
        <div v-else-if="modalId === 2">
          <UTabs v-model="active" :items="items" class="w-full rtl">
            <template #content="{ item }">
              <div v-if="item.id == 1">
                <div
                  class="flex justify-between p-2 text-white border rounded-lg border-gray-700"
                >
                  <div class="grid gap-2">
                    <div>جشن روز دانشجو</div>
                    <div class="text-sm text-gray-400">
                      تاریخ درخواست : ۱۴۰۳/۱۱/۲۰
                    </div>
                  </div>
                  <div class="grid gap-2">
                    <div class="text-end">تاریخ : ۱۴۰۳/۱۲/۲۰</div>
                    <div class="flex gap-2">
                      <UButton @click="submit(1)" color="success"
                        >تایید</UButton
                      >
                      <UButton @click="submit(2)" color="error"
                        >رد درخواست</UButton
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div v-if="item.id == 2">
                <div
                  class="flex justify-between p-2 text-white border rounded-lg border-gray-700"
                >
                  <div class="grid gap-2">
                    <div>شعر خوانی</div>
                    <div class="text-sm text-gray-400">
                      تاریخ درخواست : ۱۴۰۳/۱۰/۱۶
                    </div>
                  </div>
                  <div>
                    <div class="text-end mb-2">تاریخ : ۱۴۰۳/۱۱/۰۲</div>
                    <div class="flex justify-end">
                      <UBadge variant="subtle" color="success"
                        >تایید شده</UBadge
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div v-if="item.id == 3">
                <div
                  class="flex justify-between p-2 text-white border rounded-lg border-gray-700"
                >
                  <div class="grid gap-2">
                    <div>بازی مافیا</div>
                    <div class="text-sm text-gray-400">
                      تاریخ درخواست : ۱۴۰۳/۶/۰۱
                    </div>
                  </div>
                  <div>
                    <div class="text-end mb-2">تاریخ : ۱۴۰۳/۷/۱۰</div>
                    <div class="flex justify-end">
                      <UBadge variant="subtle" color="error">رد شده</UBadge>
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
</template>
<script setup lang="ts">
import { h, ref } from "vue";
import type { TableColumn } from "@nuxt/ui";
import type { Row } from "@tanstack/vue-table";
import UButton from "@nuxt/ui/runtime/components/Button.vue";
import UBadge from "@nuxt/ui/runtime/components/Badge.vue";
import EDropdown from "@/components/EDropdown.vue";
import type { ApexOptions } from "apexcharts";
const active = ref("2");
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
    categories: ["دانشگاه تهران", "دانشگاه اصفهان"],
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

const data = ref<Payment[]>([
  {
    id: "1",
    name: "دانشگاه تهران",
    leader: "محمدرضا محمدی",
    status: "درخواست جدید",
  },
  {
    id: "2",
    name: "دانشگاه اصفهان",
    leader: "علی احمدی",
    status: "برسی شده",
  },
]);

const columns: TableColumn<Payment>[] = [
  {
    accessorKey: "name",
    header: "نام دانشگاه",
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

