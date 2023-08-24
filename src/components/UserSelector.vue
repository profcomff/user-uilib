<script setup lang="ts">
import { VAutocomplete } from 'vuetify/components';
</script>

<template>
  <v-autocomplete
    label="Autocomplete"
    :items="[
      'dyakovri',
      'grigoriev-semen',
      'physphile',
    ]"
  ></v-autocomplete>
</template>
