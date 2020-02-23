<template>
    <div id="app">
        <div class="users">
                        
            <div class="users__title">
                <p>Users</p>
            </div>
            
            <UsersSearch @on-submit="onSubmit" />
            
            <UsersPreloader v-if="showPreloader"/>
                        
            <UsersTable
                v-else-if="usersFilter.length" 
                v-bind:usersFilter="usersFilter"
                v-on:enable-description="enableDescription"
            />
            <span v-else>No users</span>

            <UsersDescription 
                v-bind:usersDescription="usersDescription"
                v-bind:showUsersDescription="showUsersDescription"
                v-on:disable-description="disableDescription"
            />
            
        </div>
    </div>
</template>

<script>
import UsersTable from '@/components/UsersTable';
import UsersPreloader from '@/components/UsersPreloader';
import UsersSearch from '@/components/UsersSearch';
import UsersDescription from '@/components/UsersDescription';
export default {
    name: 'app',
    components: {
        UsersTable: UsersTable,
        UsersPreloader: UsersPreloader,
        UsersSearch: UsersSearch,
        UsersDescription: UsersDescription
    },
    methods: {
        
        enableDescription(id) {
           this.usersDescription = this.usersFilter.filter(user => user.id == id)
           this.showUsersDescription = true
           console.log(this.usersDescription);
        },
        disableDescription() {
            this.showUsersDescription = false
        },

        onSubmit(value) {
            
            if (+value) {
                this.usersFilter = this.usersFilter.filter(user => user.id == value)
            } else if (value) {
                this.usersFilter = this.usersFilter.filter(user => user.firstName.concat(user.lastName).toLowerCase().includes(value.toLowerCase()))
            } else {
                this.usersFilter = this.usersAll.sort((prev, next) => prev.id - next.id);
            }
        }
    },
    data() {
        return {
            usersAll: [],
            usersFilter: [],
            usersDescription: [],
            showUsersDescription: false,
            showPreloader: true,
            
        };
    },
    mounted() {

        fetch('http://www.filltext.com/?rows=200&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}')
        .then(response => response.json())
        .then(json => {
            this.usersFilter = json
            this.usersAll = json
            this.usersFilter.sort((prev, next) => prev.id - next.id);
            this.showPreloader = false
        })
        .catch((err) => {
            alert(err.name)
        })
    },
}
</script>

<style>
body {
    margin: 0 auto;
    background-color: black;
}

#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #fff;
    margin-top: 50px;
}

.users {
    background-color: #AD66D5;
    margin: 0px 30px;
    border-radius: 20px;
    height: 1000px;
    display: flex;
    flex-direction: column;
}

.users__title {
    font-size: 30px;
}

</style>
