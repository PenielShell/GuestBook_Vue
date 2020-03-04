<template>
      <div class="container">
            <div class="btn-success">{{log}}</div>
        <div class="card">
            <div class="card-header">
                <h3>Add Guests</h3>
            </div>
            <div class="card-body">
                <form v-on:submit.prevent="addGuest">
                    <div class="form-group">
                        <label>Guest Name:</label>
                        <input type="text" name="name" class="form-control"  v-model.trim="guest.name"/>
                    </div>
                    <div class="form-group">
                        <label>Guest Phone Number:</label>
                        <input type="number" name="phone" class="form-control"  v-model.number="guest.phone"/>
                    </div>
                    <div class="form-group">
                        <input type="submit" class="btn btn-primary" value="Add Guests"/>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {
      name: 'AddItem'
  },
  data() {
      return {
          guest: {},
          log: ""
      }
  },
  methods: {
      addGuest() {
           let uri = 'http://localhost:8080/guests/add';
            this.axios.post(uri, this.guest).then((response) => {
               //console.log(response.data);
                 this.log = "Guest Added Successfully";
                event.preventDefault();
            });
        }
    }
}
</script>