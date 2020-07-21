<template>
  <section>
    <h2>Согласование команд участников</h2>

    <div class="card-agreement">
      <div class="card-agreement__header">
        <div class="card-agreement__title">
          <div class="card-agreement__img">
            <img src="../../../assets/tournament_icon.svg" alt class="card-agreement__img" />
          </div>

          <div class="card-agreement__title">
            <h4>Любительская Волебольная Лига 2 круга ЮВ</h4>
            <span>Заявки | Москва, п. Коммунарка</span>
          </div>
        </div>

        <div class="card-agreement__button">
          <div class="dashboard-card__status dashboard-card__status_success">Новые</div>
        </div>
      </div>

      <div class="card-agreement__content">
        <div class="card-agreement__team">
          <div>
            <div class="card-agreement__img">
              <img src="../../../assets/agreement_team.svg" alt class="card-agreement__img" />
            </div>

            <div class="card-agreement__title">
              <h5>Меззище</h5>
              <span>г. Сочи</span>
            </div>

            <div class="card-agreement__title">
              12 / 12
              <span>Участников</span>
            </div>
          </div>

          <div>Статус</div>
        </div>

        <div class="card-agreement__team">
          <h5>Меззище</h5>
          <span>г. Сочи</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AgreementTournament'
}
</script>

<style lang="sass" scoped>
.card-agreement
  background-color: #fff
  box-shadow: 0px 2px 16px rgba(153, 155, 168, 0.12)
  border-radius: 4px

  &__header
    padding: 22px 24px 25px 30px
    display: flex
    justify-content: space-between
    align-items: center
    border-bottom: 1px solid #F8FAFB

  &__title
    display: inline-block

  &__content
    padding: 24px 30px 0 24px

  &__team
    padding: 24px 0px 30px
    display: flex
    justify-content: space-between
    align-items: center
    border-bottom: 1px solid #F8FAFB
    border-radius: 1px

    &:first-child
      padding-top: 0px

  &__img
    display: inline-block
    margin-right: 24px
</style>
