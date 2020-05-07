<template>
  <div>
    Форма {{ team.title }}
    <p>Название команды {{ team.title }}</p>
    <p>За какой город, область, край, пос - выступает команда {{ team.address }}</p>

    <div class="form-group">
      <label>Имя капитана</label>
      <input type="text" class="form-control" v-model="localTeam.captainName.first" />
    </div>
    <!-- {{ team }} -->
    <!-- {{ localTeam }} -->
  </div>
</template>

<script>
export default {
  name: 'TeamForm',
  props: {
    team: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    localTeam: null
  }),
  watch: {
    // team: {
    //   deep: true,
    //   handler() {
    // if (deepEqual(this.user, this.localUser)) {
    //   return
    // }
    //     this.localTeam = Object.assign({}, this.team)
    //   }
    // },
    localTeam: {
      deep: true,
      handler: 'updateTeam'
    }
  },
  created() {
    this.localTeam = Object.assign({}, this.team)
  },
  methods: {
    updateTeam() {
      this.$emit('update', Object.assign({}, this.team))
    }
  }
}
</script>
