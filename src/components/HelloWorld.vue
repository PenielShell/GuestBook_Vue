<template>
  <table class="table table-striped mt-5">
                    <thead class="thead-dark">
                    <tr>
                        <th scope="col">Full Name</th>
                        <th scope="col">Phone Number</th>
                    </tr>
                    </thead>
                    <tbody> 
                    <tr v-for="guest in guests" v-bind:key="guest">
                        <td>{{ name}}</td>
                        <td>{{ phone }}</td>
                    </tr>
                    </tbody>
                </table>
</template>

<script>
export default {
  name: 'app',
  props: {
    name: String,
    phone: Number
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>
