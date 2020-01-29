<template>
  <div class="users__info info" v-if="showUsersDescription">
                <div class="info__wrapper" 
                    v-for="(user, i) of usersDescription"
                    v-bind:key="i"
                    >
                    <div class="info__description">
                        <p>Description</p> <hr>
                        <p>{{user.description}}</p>
                    </div>
                    <div class="info__address">
                        <p>Address</p> <hr>
                        <p>streetAddress: {{user.address.streetAddress}}</p>
                        <p>city: {{user.address.city}}</p>
                        <p>state: {{user.address.state}}</p>
                        <p>zip: {{user.address.zip}}</p>
                    </div>
                </div>
                <div class="info__cls-btn"  v-on:click="$emit('disable-description')">&times;</div>
            </div>
</template>

<script>

export default {
    name: 'UsersDescription',
    props: ['showUsersDescription','usersDescription'],
    components: {},
    data() {
        return {
           
        };
    },
    
}
</script>

<style>
.info {
    width: 90%;
    margin: 0 auto;
    position: relative;
    display: flex;
    padding: 0 20px;
    justify-content: center;
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