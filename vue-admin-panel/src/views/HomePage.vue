<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12" class="mt-16 mb-5">
        <v-img
          :src="logo.length > 0 ? logo : require('../assets/logo.svg')"
          contain
          height="140"
        />
      </v-col>

      <v-col cols="12">
        <h1
          class="text-h4 font-weight-bold mb-3"
          v-text="`${$t('message.11')}, ${username}.`"
        ></h1>
        <p
          class="text-h5 font-weight-regular orange--text"
          v-text="$t('message.12')"
        ></p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "HomePage",

  computed: {
    ...mapState(["logo", "username"]),
  },
};
</script>
