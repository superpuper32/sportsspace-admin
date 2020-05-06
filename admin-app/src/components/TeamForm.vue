<template>
  <div>Форма {{ team.title }}</div>
</template>

<script>
export default {
  name: 'TeamForm',
  props: {
    team: {
      type: Object,
      required: true
    }
  }
}
</script>
