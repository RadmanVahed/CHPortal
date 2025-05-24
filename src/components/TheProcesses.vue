<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <div class="mx-8">
        <UCard>
        <template #header>
          <h3 class="text-lg font-semibold">
            ایجاد فرایند جدید
          </h3>
        </template>

        <UForm :state="form" @submit="saveProcess" class="space-y-6">
          <div class="grid grid-cols-2 gap-2">
            <UFormField class="w-full" label="نام فرایند">
              <UInput v-model="form.name" class="w-full" placeholder="نام فرایند را وارد کنید" />
            </UFormField>

            <UFormField  label="دسته‌بندی">
              <USelect
              class="w-full rtl"
                v-model="form.category"
                :options="categoryOptions"
                placeholder="انتخاب دسته‌بندی"
              />
            </UFormField>

            <UFormField label="وضعیت">
              <USelect
              class="w-full rtl"
                v-model="form.status"
                :options="statusOptions"
                placeholder="انتخاب وضعیت"
              />
            </UFormField>

            <UFormField label="اولویت">
              <USelect
              class="w-full rtl"
                v-model="form.priority"
                :options="priorityOptions"
                placeholder="انتخاب اولویت"
              />
            </UFormField>

            <UFormField label="مدت زمان (روز)">
              <UInput
              class="w-full rtl"
                v-model.number="form.duration"
                type="number"
                placeholder="تعداد روز"
              />
            </UFormField>

            <UFormField label="مسئولان">
              <USelectMenu
              class="w-full rtl"
                v-model="form.assignees"
                :options="userOptions"
                multiple
                placeholder="انتخاب مسئولان"
                option-attribute="name"
                value-attribute="id"
              />
            </UFormField>
          </div>

          <UFormField label="توضیحات">
            <UTextarea
            class="w-full rtl"
              v-model="form.description"
              placeholder="توضیحات فرایند را وارد کنید"
              :rows="3"
            />
          </UFormField>

          <!-- Process Steps -->
          <div class="mt-4">
            <div class="flex justify-between items-center mb-4">
              <h4 class="text-md font-medium">مراحل فرایند</h4>
              <UButton
                @click="addStep"
                variant="outline"
                size="xs"
                icon="i-heroicons-plus"
              >
                افزودن مرحله
              </UButton>
            </div>

            <div class="space-y-3">
              <div
                v-for="(step, index) in form.steps"
                :key="index"
                class="flex items-center gap-3 p-3 border rounded-lg"
              >
                <div class="flex-shrink-0 w-8 h-8 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-sm font-medium">
                  {{ index + 1 }}
                </div>
                <UInput
                  v-model="step.title"
                  placeholder="عنوان مرحله"
                  class="flex-1"
                />
                <UInput
                  v-model.number="step.duration"
                  type="number"
                  placeholder="مدت (روز)"
                  class="w-24"
                />
                <UButton
                  @click="removeStep(index)"
                  color="error"
                  variant="ghost"
                  icon="i-heroicons-trash"
                  size="xs"
                />
              </div>
            </div>
          </div>
        </UForm>

        <template #footer>
          <div class="flex justify-end gap-3">
            <UButton @click="showModal = false" variant="ghost">
              انصراف
            </UButton>
            <UButton @click="saveProcess" :loading="loading">
              {{ selectedProcess ? 'بروزرسانی' : 'ایجاد' }}
            </UButton>
          </div>
        </template>
      </UCard>
    </div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        <div class="text-white text-xl my-8 m-4">لیست فرایند ها</div>
      <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        
        <UCard
          v-for="process in filteredProcesses"
          :key="process.id"
          class="hover:shadow-lg transition-shadow duration-200"
        >
          <template #header>
            <div class="flex justify-between items-start">
              <div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                  {{ process.name }}
                </h3>
               
              </div>
               <UBadge
                  variant="subtle"
                  class="mt-1"
                  :color="process.category == 'آموزش' ? 'success' : 'warning'"
                >
                  {{ process.category }}
                </UBadge>
            </div>
          </template>

          <div class="space-y-4">
            <p class="text-sm text-gray-600 dark:text-gray-300">
              {{ process.description }}
            </p>

            <div class="flex justify-between items-center">
              <UBadge
                :label="process.status"
              />
              <UBadge
                :label="process.priority"
                variant="outline"
              />
            </div>

            <div class="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span class="text-gray-500 dark:text-gray-400">مدت زمان:</span>
                <span class="mr-2 font-medium">{{ process.duration }} روز</span>
              </div>
              <div>
                <span class="text-gray-500 dark:text-gray-400">مراحل:</span>
                <span class="mr-2 font-medium">{{ process.steps.length }}</span>
              </div>
            </div>

            <div class="flex items-center justify-between">
              <div class="flex -space-x-2">
              </div>
              <span class="text-xs text-gray-500 dark:text-gray-400">
                {{ formatDate(process.lastUpdated) }}
              </span>
            </div>
          </div>

          <template #footer>
            <div class="flex justify-between">
              <UButton
                @click="viewProcess(process)"
                variant="ghost"
                size="xs"
                icon="i-heroicons-eye"
              >
                مشاهده
              </UButton>
              <UButton
                @click="editProcess(process)"
                variant="ghost"
                size="xs"
                icon="i-heroicons-pencil"
              >
                ویرایش
              </UButton>
            </div>
          </template>
        </UCard>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

interface ProcessStep {
  title: string
  duration: number
  description?: string
}

interface User {
  id: string
  name: string
  avatar?: string
  email: string
}

interface Process {
  id: string
  name: string
  description: string
  category: string
  status: string
  priority: string
  duration: number
  steps: ProcessStep[]
  assignees: User[]
  createdAt: Date
  lastUpdated: Date
}

interface ProcessForm {
  name: string
  description: string
  category: string
  status: string
  priority: string
  duration: number
  steps: ProcessStep[]
  assignees: string[]
}

// Reactive data
const showModal = ref(false)
const loading = ref(false)
const selectedProcess = ref<Process | null>(null)
const processes = ref<Process[]>([
  {
    id: '1',
    name: 'برگزاری همایش فرهنگی',
    description: 'فرایند کامل برگزاری همایش‌های فرهنگی از برنامه‌ریزی تا اجرا',
    category: 'رویدادها',
    status: 'فعال',
    priority: 'بالا',
    duration: 30,
    steps: [
      { title: 'تعیین موضوع و هدف', duration: 3 },
      { title: 'تهیه بودجه', duration: 5 },
      { title: 'رزرو مکان', duration: 7 },
      { title: 'دعوت از سخنرانان', duration: 10 },
      { title: 'اجرای همایش', duration: 1 },
      { title: 'ارزیابی و گزارش‌گیری', duration: 4 }
    ],
    assignees: [
      { id: '1', name: 'احمد محمدی', avatar: '', email: 'ahmad@example.com' },
      { id: '2', name: 'فاطمه احمدی', avatar: '', email: 'fateme@example.com' }
    ],
    createdAt: new Date('2024-01-15'),
    lastUpdated: new Date('2024-01-20')
  },
  {
    id: '2',
    name: 'تولید محتوای آموزشی',
    description: 'فرایند تولید و انتشار محتوای آموزشی فرهنگی',
    category: 'آموزش',
    status: 'در حال بررسی',
    priority: 'متوسط',
    duration: 21,
    steps: [
      { title: 'شناسایی نیاز آموزشی', duration: 3 },
      { title: 'طراحی محتوا', duration: 7 },
      { title: 'تولید محتوا', duration: 10 },
      { title: 'بازبینی و تایید', duration: 1 }
    ],
    assignees: [
      { id: '3', name: 'علی رضایی', avatar: '', email: 'ali@example.com' }
    ],
    createdAt: new Date('2024-01-10'),
    lastUpdated: new Date('2024-01-18')
  }
])

// Form data
const form = ref<ProcessForm>({
  name: '',
  description: '',
  category: '',
  status: '',
  priority: '',
  duration: 0,
  steps: [],
  assignees: []
})

// Filters
const filters = ref({
  search: '',
  category: '',
  status: '',
  priority: ''
})

// Options
const categoryOptions = [
  { label: 'رویدادها', value: 'رویدادها' },
  { label: 'آموزش', value: 'آموزش' },
  { label: 'تبلیغات', value: 'تبلیغات' },
  { label: 'پژوهش', value: 'پژوهش' },
  { label: 'مشارکت اجتماعی', value: 'مشارکت اجتماعی' }
]

const statusOptions = [
  { label: 'فعال', value: 'فعال' },
  { label: 'در حال بررسی', value: 'در حال بررسی' },
  { label: 'متوقف شده', value: 'متوقف شده' },
  { label: 'تکمیل شده', value: 'تکمیل شده' }
]

const priorityOptions = [
  { label: 'بالا', value: 'بالا' },
  { label: 'متوسط', value: 'متوسط' },
  { label: 'پایین', value: 'پایین' }
]

const userOptions = [
  { id: '1', name: 'احمد محمدی', email: 'ahmad@example.com' },
  { id: '2', name: 'فاطمه احمدی', email: 'fateme@example.com' },
  { id: '3', name: 'علی رضایی', email: 'ali@example.com' },
  { id: '4', name: 'مریم حسینی', email: 'maryam@example.com' }
]

// Computed
const filteredProcesses = computed(() => {
  return processes.value.filter((process:any) => {
    const matchesSearch = !filters.value.search || 
      process.name.toLowerCase().includes(filters.value.search.toLowerCase()) ||
      process.description.toLowerCase().includes(filters.value.search.toLowerCase())
    
    const matchesCategory = !filters.value.category || process.category === filters.value.category
    const matchesStatus = !filters.value.status || process.status === filters.value.status
    const matchesPriority = !filters.value.priority || process.priority === filters.value.priority

    return matchesSearch && matchesCategory && matchesStatus && matchesPriority
  })
})

// Methods
const getCategoryColor = (category: string) => {
  const colors: Record<string, string> = {
    'رویدادها': 'warning',
    'آموزش': 'success',
    'تبلیغات': 'purple',
    'پژوهش': 'yellow',
    'مشارکت اجتماعی': 'pink'
  }
  return colors[category] || 'gray'
}

const getStatusColor = (status: string)  => {
  const colors: Record<string, string> = {
    'فعال': 'success',
    'در حال بررسی': 'warning',
    'متوقف شده': 'red',
    'تکمیل شده': 'blue'
  }
  return colors[status] || 'neutral'
}

const getPriorityColor = (priority: string) => {
  const colors: Record<string, string> = {
    'بالا': 'red',
    'متوسط': 'yellow',
    'پایین': 'green'
  }
  return colors[priority] || 'gray'
}

const getActionItems = (process: Process) => [
  [{
    label: 'مشاهده',
    icon: 'i-heroicons-eye',
    click: () => viewProcess(process)
  }],
  [{
    label: 'ویرایش',
    icon: 'i-heroicons-pencil',
    click: () => editProcess(process)
  }, {
    label: 'کپی',
    icon: 'i-heroicons-document-duplicate',
    click: () => duplicateProcess(process)
  }],
  [{
    label: 'حذف',
    icon: 'i-heroicons-trash',
    click: () => deleteProcess(process)
  }]
]

const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat('fa-IR').format(date)
}

const openCreateModal = () => {
  selectedProcess.value = null
  resetForm()
  showModal.value = true
}

const viewProcess = (process: Process) => {
  // Navigate to process detail page
  //navigateTo(`/processes/${process.id}`)
}

const editProcess = (process: Process) => {
  selectedProcess.value = process
  form.value = {
    name: process.name,
    description: process.description,
    category: process.category,
    status: process.status,
    priority: process.priority,
    duration: process.duration,
    steps: [...process.steps],
    assignees: process.assignees.map(a => a.id)
  }
  showModal.value = true
}

const duplicateProcess = (process: Process) => {
  selectedProcess.value = null
  form.value = {
    name: `کپی از ${process.name}`,
    description: process.description,
    category: process.category,
    status: 'در حال بررسی',
    priority: process.priority,
    duration: process.duration,
    steps: [...process.steps],
    assignees: process.assignees.map(a => a.id)
  }
  showModal.value = true
}

const deleteProcess = (process: Process) => {
  if (confirm('آیا از حذف این فرایند اطمینان دارید؟')) {
    processes.value = processes.value.filter((p:any) => p.id !== process.id)
  }
}

const addStep = () => {
  form.value.steps.push({
    title: '',
    duration: 1
  })
}

const removeStep = (index: number) => {
  form.value.steps.splice(index, 1)
}

const saveProcess = async () => {
  loading.value = true
  
  try {
    const selectedUsers = userOptions.filter(user => 
      form.value.assignees.includes(user.id)
    )

    if (selectedProcess.value) {
      // Update existing process
      const index = processes.value.findIndex((p:any) => p.id === selectedProcess.value!.id)
      if (index !== -1) {
        processes.value[index] = {
          ...selectedProcess.value,
          ...form.value,
          assignees: selectedUsers,
          lastUpdated: new Date()
        }
      }
    } else {
      // Create new process
      const newProcess: Process = {
        id: Date.now().toString(),
        ...form.value,
        assignees: selectedUsers,
        createdAt: new Date(),
        lastUpdated: new Date()
      }
      processes.value.push(newProcess)
    }

    showModal.value = false
    resetForm()
  } finally {
    loading.value = false
  }
}

const resetForm = () => {
  form.value = {
    name: '',
    description: '',
    category: '',
    status: 'در حال بررسی',
    priority: 'متوسط',
    duration: 0,
    steps: [],
    assignees: []
  }
}
</script>

