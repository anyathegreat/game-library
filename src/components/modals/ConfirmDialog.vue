<script setup>
import BaseButton from "../BaseButton.vue";
import BaseModal from "../BaseModal.vue";

const emit = defineEmits(["onCancel", "onSubmit"]);

function handleCancel() {
  emit("onCancel");
}

function handleSubmit() {
  emit("onSubmit");
}
console.log(emit);
</script>

<template>
  <BaseModal>
    <template #header>
      <div class="v-modal-header">
        <button @click="handleCancel">X</button>
      </div>
    </template>
    <template #content>
      <div class="v-modal-content">Are you sure?</div>
    </template>
    <template #footer>
      <div class="v-modal-footer">
        <BaseButton vType="secondary" class="v-modal-button" @click="handleCancel">No</BaseButton>
        <BaseButton vType="primary" class="v-modal-button" @click="handleSubmit">Yes</BaseButton>
      </div>
    </template>
  </BaseModal>
</template>

<style scoped lang="scss">
.v-modal-header {
  display: flex;
  justify-content: end;
  align-items: center;
  width: 100%;
  height: 3rem;
  padding: 8px 4px;
  background-color: var(--surfaceContainer);
}
.v-modal-content {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 8px 4px;
  min-height: 3rem;
  text-align: center;
}
.v-modal-footer {
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 12px;
  width: 100%;
  height: 3rem;
  padding: 8px 4px;
  background-color: var(--surfaceContainer);
}
.v-modal-button {
  width: 60px;
}
</style>
