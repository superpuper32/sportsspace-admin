<template>
  <section class="calendar">
    <nav class="calendar__nav">
      <ul>
        <li>
          <a href="#">Занятия</a>
        </li>

        <li>
          <a href="#">Команды</a>
        </li>

        <li>
          <a href="#">Турниры</a>
        </li>

        <li>
          <a href="#">Площадки</a>
        </li>
      </ul>
    </nav>

    <div class="calendar__actions">
      <div class="actions__tasks">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.3975 8.295L11.6025 7.5L7.94249 11.16L6.35249 9.57L5.55749 10.365L7.94249 12.75L12.3975 8.295V8.295ZM14.25 2.25H13.5V0.75H12V2.25H6V0.75H4.5V2.25H3.75C2.9175 2.25 2.2575 2.925 2.2575 3.75L2.25 14.25C2.25 15.075 2.9175 15.75 3.75 15.75H14.25C15.075 15.75 15.75 15.075 15.75 14.25V3.75C15.75 2.925 15.075 2.25 14.25 2.25V2.25ZM14.25 14.25H3.75V6H14.25V14.25V14.25Z"
            fill="#008DFF"
          />
        </svg>
        <span>Сегодня</span>
      </div>
      <div class="actions__date">20 Май 2020</div>
    </div>

    <calendar-schedule msg="msg" />
  </section>
</template>

<script>
import axios from 'axios'
// 如果想要中文版 element-ui，按如下方式声明

export default {
  name: 'Calendar',
  components: {
    CalendarSchedule: () => import('@/components/CalendarSchedule.vue')
  },
  data: function() {
    return {
      practice: []
    }
  },
  mounted() {
    this.loadPractice()
  },
  methods: {
    loadPractice() {
      axios
        .get('http://localhost:3004/practice/0')
        .then(response => (this.practice = response.data))
        .catch(error => console.error(error))
    }
  }
}
</script>
