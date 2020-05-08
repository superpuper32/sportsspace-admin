<template>
  <div>
    Форма {{ localTeam.title }}
    <p>Название команды {{ localTeam.title }}</p>
    <p>За какой город, область, край, пос - выступает команда {{ localTeam.address }}</p>

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
  model: {
    prop: 'team',
    event: 'ultrasave'
  },
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
      this.$emit('ultrasave', Object.assign({}, this.localTeam))
    }
  }
}
</script>
