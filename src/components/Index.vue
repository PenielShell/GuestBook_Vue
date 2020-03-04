// Index.vue


<template>
    <div>
        <h1>Guests</h1>

        <table class="table table-hover">
            <thead>
            <tr>
                <td>ID</td>
                <td>Guest Name</td>
                <td>Guest Phone Number</td>
                <td>Actions</td>
            </tr>
            </thead>

            <tbody>
                <tr v-for="guest in guests" :key="guest._id">
                    <td>{{ guest._id }}</td>
                    <td>{{ guest.name }}</td>
                    <td>{{ guest.phone }}</td>
                    <td><router-link :to="{name: 'Edit', params: { id: guest._id }}" class="btn btn-primary">Edit</router-link></td>
                    <td><button class="btn btn-danger" v-on:click="deleteGuest(guest._id)">Delete</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

    export default {
        data(){
            return{
                guests: []
            }
        },

        created: function()
        {
            this.fetchGuests();
        },

        methods: {
            fetchGuests()
            {
              let uri = 'http://localhost:8080/guests';
              this.axios.get(uri).then((response) => {
                  this.guests = response.data;
              });
            },
            deleteGuest(id)
            {
              let uri = 'http://localhost:8080/guests/delete/'+id;
              this.guests.splice(id, 1);
              this.axios.get(uri);
            }
        }
    }
</script>