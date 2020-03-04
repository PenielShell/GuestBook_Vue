<template>
  <div class="container">
        <div class="card">
            <div class="card-header">
                <h3>Edit Guest</h3>
            </div>
            <div class="card-body">
                <form v-on:submit.prevent="updateGuest">
                    <div class="form-group">
                        <label>Guest Name:</label>
                        <input type="text" class="form-control" v-model="guest.name"/>
                    </div>
                    <div class="form-group">
                        <label>Guest Phone number:</label>
                        <input type="text" class="form-control" v-model="guest.phone" />
                    </div>
                    <div class="form-group">
                        <input type="submit" class="btn btn-primary" value="Update Guest"/>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
export default{
        data(){
            return{
                guest:{}
            
            }
        },

        created: function(){
            this.getGuest();
        },

        methods: {
            getGuest()
            {
              let uri = 'http://localhost:8080/guests/edit/' + this.$route.params.id;
                this.axios.get(uri).then((response) => {
                    this.guest = response.data;
                });
               
            },

            updateGuest()
            {
              let uri = 'http://localhost:8080/guests/update/' + this.$route.params.id;
                this.axios.post(uri, this.guest).then((response) => {
                  this.$router.push({name: 'Index'});
                });
               
            }
           
        }
    }
</script>