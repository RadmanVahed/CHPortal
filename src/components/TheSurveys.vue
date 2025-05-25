<template>
    <div class="m-8">
        <UCard>
            <template #header>
                <div class="flex justify-between items-start">
                    <div class="flex gap-2">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                            نظرسنجی جدید
                        </h3>
                    </div>
                </div>
            </template>
            <UFormField label="عنوان">
                <UInput class="w-full"></UInput>
            </UFormField>
            <div class="space-y-4 mt-2 grid grid-cols-3 gap-2">

                <UFormField label="مخاطبین">
                    <UInput class="w-full"></UInput>
                </UFormField>

                <UFormField label="زمان">
                    <UInput class="w-full"></UInput>
                </UFormField>
                <UFormField label="تاریخ">
                    <UPopover>
                        <UButton block color="neutral" variant="subtle" icon="i-lucide-calendar">
                        </UButton>
                        <template #content>
                            <UCalendar />
                        </template>
                    </UPopover>
                </UFormField>
            </div>
            <UBadge>افزودن گزینه</UBadge>
            <template #footer>
                <div class="flex justify-end">
                    <UButton>ثبت نظرسنجی</UButton>
                </div>

            </template>
        </UCard>
    </div>
    <div class="m-8">
        <UCard class="hover:shadow-lg mb-4 transition-shadow duration-200">
            <template #header>
                <div class="flex justify-between items-start">
                    <div class="flex gap-2">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                            کیفیت جشن فارغ التحصیلی
                        </h3>
                        <UBadge variant="subtle" class="mt-1" color="neutral">
                            دانشجویان رشته دندان پزشکی
                        </UBadge>
                    </div>
                    <UBadge variant="subtle" class="mt-1" color="info">
                        خاتمه یافته
                    </UBadge>
                </div>
            </template>

            <div class="space-y-4">
                <div class="flex justify-between gap-2 text-lg text-white">
                    <div class="flex gap-2">
                        <UBadge class="rounded-full px-2" size="xs" icon="i-lucide-check"></UBadge>
                        <h3 class="w-fit">عالی</h3>
                        <span>({{ status1 }}%)</span>
                    </div>
                    <UProgress class="justify-center w-[80%]" v-model="status1" />
                </div>


                <div class="flex justify-between gap-2 text-lg text-white">
                    <div class="flex gap-2">
                        <UBadge class="rounded-full invisible px-2" size="xs" icon="i-lucide-check"></UBadge>
                        <h3 class="w-fit">خوب</h3>
                        <span>({{ status2 }}%)</span>
                    </div>

                    <UProgress class="justify-center w-[80%]" v-model="status2" />
                </div>
                <div class="flex justify-between gap-2 text-lg text-white">
                    <div class="flex gap-2">
                        <UBadge class="rounded-full invisible px-2" size="xs" icon="i-lucide-check"></UBadge>
                        <h3 class="w-fit">متوسط</h3>
                        <span>({{ status3 }}%)</span>
                    </div>

                    <UProgress class="justify-center w-[80%]" v-model="status3" />
                </div>
                <div class="flex justify-between gap-2 text-lg text-white">
                    <div class="flex gap-2">
                        <UBadge class="rounded-full invisible px-2" size="xs" icon="i-lucide-check"></UBadge>
                        <h3 class="w-fit">ضعیف</h3>
                        <span>({{ status4 }}%)</span>
                    </div>

                    <UProgress class="justify-center w-[80%]" v-model="status4" />
                </div>



                <div class="flex items-center justify-between">
                    <div class="flex -space-x-2">
                        <div>
                            <UBadge size="lg" variant="soft"><span>مدت زمان : </span>
                                <span class="font-medium">10 روز</span>
                            </UBadge>
                        </div>
                    </div>
                    <UBadge variant="soft" size="lg" color="warning"><span class="text-gray-500 dark:text-gray-400">
                            {{ formatDate(new Date()) }}
                        </span></UBadge>
                </div>
            </div>
        </UCard>
        <UCard class="hover:shadow-lg transition-shadow duration-200">
            <template #header>
                <div class="flex justify-between items-start">
                    <div class="flex gap-2">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                            تاریخ اجرای همایش فرهنگی
                        </h3>
                        <UBadge variant="subtle" class="mt-1" color="neutral">
                           کل دانشجویان
                        </UBadge>
                    </div>
                    <UBadge variant="subtle" class="mt-1" color="warning">
                        درحال اجرا 
                    </UBadge>
                </div>
            </template>

            <div class="space-y-4">
                <div class="flex justify-between gap-2 text-lg text-white">
                    <div class="flex gap-2">
                        <UBadge class="rounded-full invisible px-2" size="xs" icon="i-lucide-check"></UBadge>
                        <h3 class="w-fit">1404/4/10</h3>
                        <span>({{ status1 }}%)</span>
                    </div>
                    <UProgress class="justify-center w-[80%]" v-model="status1" />
                </div>


                <div class="flex justify-between gap-2 text-lg text-white">
                    <div class="flex gap-2">
                        <UBadge class="rounded-full invisible px-2" size="xs" icon="i-lucide-check"></UBadge>
                        <h3 class="w-fit">1404/4/11</h3>
                        <span>({{ status2 }}%)</span>
                    </div>

                    <UProgress class="justify-center w-[80%]" v-model="status2" />
                </div>
                <div class="flex justify-between gap-2 text-lg text-white">
                    <div class="flex gap-2">
                        <UBadge class="rounded-full px-2" size="xs" icon="i-lucide-check"></UBadge>
                        <h3 class="w-fit">1404/4/12</h3>
                        <span>({{ status3 }}%)</span>
                    </div>

                    <UProgress class="justify-center w-[80%]" v-model="status3" />
                </div>
                <div class="flex justify-between gap-2 text-lg text-white">
                    <div class="flex gap-2">
                        <UBadge class="rounded-full invisible px-2" size="xs" icon="i-lucide-check"></UBadge>
                        <h3 class="w-fit">1404/4/20</h3>
                        <span>({{ status4 }}%)</span>
                    </div>

                    <UProgress class="justify-center w-[80%]" v-model="status4" />
                </div>



                <div class="flex items-center justify-between">
                    <div class="flex -space-x-2">
                        <div>
                            <UBadge size="lg" variant="soft"><span>مدت زمان : </span>
                                <span class="font-medium">20 ساعت</span>
                            </UBadge>
                        </div>
                    </div>
                    <UBadge variant="soft" size="lg" color="warning"><span class="text-gray-500 dark:text-gray-400">
                            {{ formatDate(new Date()) }}
                        </span></UBadge>
                </div>
            </div>
        </UCard>
    </div>
</template>
<script setup lang="ts">
const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('fa-IR').format(date)
}
const status1 = 2
const status2 = 8
const status3 = 89
const status4 = 1
</script>