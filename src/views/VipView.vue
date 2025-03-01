<template>
  <USeparator class="my-8" label="داشبورد کشوری" />
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
</template>
<script setup lang="ts">
import { ref } from 'vue';
import type { ApexOptions } from "apexcharts";
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
</script>