<template layout="admin">
  <Head title="Sweet Alert" />

  <PageSection header="Sweet Alert Page">
    <PageTitle>Sweet Alert</PageTitle>
    <PageDescription>Sweet Alert usage example.</PageDescription>

    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <h4>Sweet Alert</h4>
          </div>
          <div class="card-body">
            <BaseButton
              class="mr-2"
              variant="primary"
              @click="defaultAlert"
            >
              Default
            </BaseButton>
            <BaseButton class="mr-2" variant="success" @click="success">
              Success
            </BaseButton>
            <BaseButton class="mr-2" variant="warning" @click="warning">Warning</BaseButton>
            <BaseButton class="mr-2" variant="danger" @click="error">Error</BaseButton>
            <BaseButton class="mr-2" variant="info" @click="info">Info</BaseButton>
          </div>
        </div>
      </div>
    </div>
  </PageSection>
</template>

<script setup lang="ts">
import { useSweetAlert } from "@/scripts/composables/ui/alert/useSweetAlert";
import PageDescription from "@/views/components/admin/layout/Page/PageDescription.vue";
import PageSection from "@/views/components/admin/layout/Page/PageSection.vue";
import PageTitle from "@/views/components/admin/layout/Page/PageTitle.vue";
import BaseButton from "@/views/components/admin/ui/Button/BaseButton.vue";
import { Head } from "@inertiajs/vue3";

const {
  successAlert,
  warningAlert,
  errorAlert,
  infoAlert,
  sweetAlert
} = useSweetAlert();

const success = () => {
  successAlert({
    title: "Success!",
    text: "You clicked the button!",
  });
};

const warning = () => {
  warningAlert({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
  });
};

const error = () => {
  errorAlert({
    title: "Oops...",
    text: "Something went wrong!",
  });
};

const info = () => {
  infoAlert({
    title: "Info",
    text: "You clicked the button!",
  });
};

const defaultAlert = () => {
  sweetAlert({
    title: "Default",
    text: "You clicked the button!",
  });
};
</script>
