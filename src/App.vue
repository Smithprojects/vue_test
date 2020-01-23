<template>
    <div id="app">
        <div class="users">
            
            <!-- блок заголовок -->
            <div class="users__title">
                <p>Users</p>
            </div>
            
            <!-- блок поиск -->
            <Search @on-submit="onSubmit" />
            
            <!-- блок loader -->
            <Loader v-if="loading"/>
                        
            <!-- блок табица -->
            <UsersTable
                v-else-if="users.length" 
                v-bind:users="users"
                v-on:activ-info="activInfo"
            />
            <span v-else>No users</span>

            <!-- блок c доп инфой -->
            <!-- <Info v-bind:users_info="users_info" /> -->
            <div class="users__info info" v-if="btnInfo">
                <div class="info__wrapper" 
                    v-for="(user, i) of users_info"
                    v-bind:key="i"
                    >
                    <div class="info__description">
                        <p>Description:</p> <hr>
                        <p>{{user.description}}</p>
                    </div>
                    <div class="info__address">
                        <p>Address:</p> <hr>
                        <p>streetAddress: {{user.address.streetAddress}}</p>
                        <p>city: {{user.address.city}}</p>
                        <p>state: {{user.address.state}}</p>
                        <p>zip: {{user.address.zip}}</p>
                    </div>
                </div>
                <div class="info__cls-btn" v-on:click="btnInfo = faulse">&times;</div>
            </div>
        </div>
    </div>
</template>

<script>
import UsersTable from '@/components/UsersTable';
import Loader from '@/components/Loader';
import Search from '@/components/Search';
import Info from '@/components/Info';
export default {
    name: 'app',
    components: {
        UsersTable: UsersTable,
        Loader: Loader,
        Search: Search,
        Info: Info
    },
    methods: {
        //активации окна с дополнительной информацией
        activInfo(id) {
           this.users_info = this.users.filter(t => t.id == id)
           this.btnInfo = true
           console.log(this.users_info);
        },

        //поиска данных по таблице  
        onSubmit(value) {
            console.log('submit in app',value)
            if (value == '') {
                this.users = this.user_fetch.sort((prev, next) => prev.id - next.id);
                //window.location.reload()
                console.log(this.users)
            }

            if (+value) {
                
                console.log(this.users.filter(t => t.id == value))
                this.users = this.users.filter(t => t.id == value)
            
            } else if (value) {
                //console.log(this.users.filter(t => t.firstName.toLowerCase() == value.toLowerCase()))
                this.users.forEach((user)=>{
                    
                    if (user.firstName.toLowerCase() == value.toLowerCase() || user.lastName.toLowerCase() == value.toLowerCase()) {
                        //this.users.push(user)
                        this.users.splice(0, this.users.length, user)
                    }
                })
            } 
        }
    },
    data() {
        return {
            users_info: [],
            users: [],
            user_fetch: [],
            loading: true,
            searchVal: '',
            btnInfo: false
        };
    },
    mounted() {
        
        fetch('http://www.filltext.com/?rows=200&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}')
        .then(response => response.json())
        .then(json => {
            this.users = json
            this.user_fetch = json
            this.users.sort((prev, next) => prev.id - next.id);
            this.loading = false
        })
    },
    
    }
</script>

<style>
body {
    /* max-width: 1200px; */
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
    /* background: linear-gradient(#AD66D5, #5F2580); */
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

.info {
    width: 90%;
    margin: 0 auto;
    position: relative;
    display: flex;
    padding: 0 20px;
}

.info__wrapper {
    padding: 0 10px;
}

.info__cls-btn {
    position: absolute;
    top: 0;
    right: -30px;
    border: 1px solid white;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    cursor: pointer;
}

</style>
