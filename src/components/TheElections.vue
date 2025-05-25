<template>
    <div>
        <div class="m-8">
            <UCard>
                <template #header>
                    <div class="flex justify-between items-start">
                        <div class="flex gap-2">
                            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                                انتخابات جدید
                            </h3>
                        </div>
                    </div>
                </template>

                <div class="space-y-4 mt-2 grid grid-cols-2 gap-2">
                    <UFormField label="عنوان انتخابات">
                        <UInput class="w-full"></UInput>
                    </UFormField>
                    <UFormField label="درخواست دهنده و برگزار کننده">
                        <UInput class="w-full"></UInput>
                    </UFormField>

                    <UFormField label="ناظر">
                        <UInput class="w-full"></UInput>
                    </UFormField>
                    <UFormField label="تاریخ برگزاری">
                        <UPopover>
                            <UButton block color="neutral" variant="subtle" icon="i-lucide-calendar">
                            </UButton>
                            <template #content>
                                <UCalendar />
                            </template>
                        </UPopover>
                    </UFormField>
                    <UFormField label="تعداد منتخبین اصلی">
                        <UInput class="w-full" type="number"></UInput>
                    </UFormField>
                    <UFormField label="تعداد علی البدل">
                        <UInput class="w-full" type="number"></UInput>
                    </UFormField>
                    <UFormField label="کاندیدای شماره ۱">
                        <UInput class="w-full"></UInput>
                    </UFormField>
                    <UFormField class="flex items-center">
                        <UButton color="success" icon="i-lucide-plus" variant="soft" class="mt-2">افزودن کاندیدا
                        </UButton>
                    </UFormField>
                </div>

                <template #footer>
                    <div class="flex justify-end">
                        <UButton>ثبت نظرسنجی</UButton>
                    </div>

                </template>
            </UCard>
        </div>
        <div class="m-8 grid grid-cols-2 gap-4">
            <UCard class="hover:shadow-lg transition-shadow duration-200">
                <template #header>
                    <div class="flex justify-between items-start">
                        <div class="flex gap-2">
                            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                                انتخابات شورای ناظر بر نشریات دانشگاه علوم پزشکی شیراز
                            </h3>
                        </div>
                        <UBadge variant="subtle" class="mt-1" color="info">
                            خاتمه یافته
                        </UBadge>
                    </div>
                </template>
                <div class="space-y-4 grid">
                    <div class="flex gap-2">
                        <UBadge class="w-full" variant="soft" color="neutral"> تاریخ برگزاری : ۱۴۰۴/۱/۲۰</UBadge>
                        <UBadge class="w-full" variant="soft" color="neutral">ساعت برگزاری : ۸ تا ۱۲</UBadge>
                    </div>
                    <div class="flex gap-2">
                        <UBadge class="w-full" variant="soft" color="neutral">دوره انتخابات : ۳ ام</UBadge>
                        <UBadge class="w-full" variant="soft" color="neutral">تعداد کاندید ها : ۱۰ نفر</UBadge>
                    </div>
                    <div class="flex gap-2">
                        <UBadge class="w-full" variant="soft" color="neutral">تعداد منتخبین اصلی : ۴ نفر</UBadge>
                        <UBadge class="w-full" variant="soft" color="neutral">تعداد علی البدل : ۲ نفر</UBadge>
                    </div>
                    <UBadge variant="soft" color="neutral">درخواست کننده و برگزار کننده : مدیریت فرهنگی دانشگاه</UBadge>
                    <UBadge variant="soft" color="neutral">ناظر : معاون فرهنگی دانشجویی</UBadge>
                </div>

            </UCard>
            <UCard class="hover:shadow-lg transition-shadow duration-200">
                <template #header>
                    <div class="flex justify-between items-start">
                        <div class="flex gap-2">
                            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                                انتخابات انجمن هنر و ادبیات
                            </h3>
                        </div>
                        <UBadge variant="subtle" class="mt-1" color="warning">
                            درحال اجرا
                        </UBadge>
                    </div>
                </template>

                <div class="space-y-4 grid">
                    <div class="flex gap-2">
                        <UBadge class="w-full" variant="soft" color="neutral"> تاریخ برگزاری : ۱۴۰۴/۳/۱۰</UBadge>
                        <UBadge class="w-full" variant="soft" color="neutral">ساعت برگزاری : ۸ تا ۱۲</UBadge>
                    </div>
                    <div class="flex gap-2">
                        <UBadge class="w-full" variant="soft" color="neutral">دوره انتخابات : ۶ ام</UBadge>
                        <UBadge class="w-full" variant="soft" color="neutral">تعداد کاندید ها : ۶ نفر</UBadge>
                    </div>
                    <div class="flex gap-2">
                        <UBadge class="w-full" variant="soft" color="neutral">تعداد منتخبین اصلی : ۲ نفر</UBadge>
                        <UBadge class="w-full" variant="soft" color="neutral">تعداد علی البدل : ۱ نفر</UBadge>
                    </div>
                    <UBadge variant="soft" color="neutral">درخواست کننده و برگزار کننده : مدیریت فرهنگی دانشگاه</UBadge>
                    <UBadge variant="soft" color="neutral">ناظر : معاون فرهنگی دانشجویی</UBadge>
                </div>

            </UCard>
        </div>
    </div>
</template>
<script setup lang="ts">
import UBadge from '@nuxt/ui/runtime/components/Badge.vue'
</script>