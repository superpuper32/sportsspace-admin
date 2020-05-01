<template>
  <div class="container practice">
    <h1 class="text-left">График занятий</h1>

    <table class="table">
      <thead>
        <tr>
          <th scope="col">Пн</th>
          <th scope="col">Вт</th>
          <th scope="col">Ср</th>
          <th scope="col">Чт</th>
          <th scope="col">Пт</th>
          <th scope="col">Сб</th>
          <th scope="col">Вс</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>27</th>
          <td>28</td>
          <td>29</td>
          <td>30</td>
          <td>1</td>
          <td>2</td>
          <td>3</td>
        </tr>
        <tr>
          <th scope="row">4</th>
          <td>5</td>
          <td>6</td>
          <td>7</td>
          <td>8</td>
          <td>9</td>
          <td>10</td>
        </tr>
        <tr>
          <th>11</th>
          <td>12</td>
          <td>13</td>
          <td>14</td>
          <td>15</td>
          <td>16</td>
          <td>17</td>
        </tr>
        <tr>
          <th>18</th>
          <td>19</td>
          <td>20</td>
          <td>21</td>
          <td>22</td>
          <td>23</td>
          <td>24</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'PracticeSchedule',
  props: {
    msg: String,
    // eslint-disable-next-line vue/require-prop-type-constructor
    required: true
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
table {
  color: #fff;
}
</style>
