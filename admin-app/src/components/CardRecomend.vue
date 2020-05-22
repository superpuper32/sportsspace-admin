<template>
  <a href="#" class="team-recomend">
    <div class="team-recomend__link-card">
      <div class="team-recomend__line"></div>
      <div class="team-recomend__content">
        <h3>Правила командных игр</h3>
        <p>Подробная инструкция и рекомендации описание данной карточки</p>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  name: 'TeamRecomend',
  props: {
    recomends: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
.team-recomend {
  text-decoration: none;
  border-top: 1px solid #2c9c98;

  &__link-card {
    height: 12.5rem;
    color: #fff;
    background: #2c3e50;
    border-radius: 2px;
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
    position: relative;
    transition: box-shadow 0.25s ease-in;
  }

  &__line {
    position: absolute;
    top: 0;
    left: 0;
    height: 0.5rem;
    width: 100%;
    background-color: rgb(44, 156, 152);
  }

  &__content {
    padding: 20px 10px;
    text-align: left;
  }
}
</style>
