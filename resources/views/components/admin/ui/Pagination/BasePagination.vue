<!-- eslint-disable vue/no-v-html -->
<template>
  <nav v-if="links.length > 3">
    <ul class="pagination">
      <li
        v-for="(link, index) in links"
        :key="index"
        class="page-item"
        :class="{ active: link.active, disabled: link.url === null }"
      >
        <Link class="page-link" :preserve-scroll="preserveScroll" :preserve-state="preserveState" :href="link.url ?? '#'">
          <span v-html="link.label" />
        </Link>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { PaginationLink } from "@/scripts/types/ui";
import { Link } from "@inertiajs/vue3";

withDefaults(defineProps<{
  links: PaginationLink[];
  preserveScroll?: boolean;
  preserveState?: boolean;
}>(), {
  preserveScroll: true,
  preserveState: true,
});
</script>
