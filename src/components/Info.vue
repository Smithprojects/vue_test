<template>
  <div class="users__info info" v-if="btnInfo">
                <div class="info__wrapper" 
                    v-for="(user, i) of usersapi"
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
                <div class="info__cls-btn" v-on:click="btnInfo = faulse">&times;</div>
            </div>
</template>

<script>

export default {
    name: 'Info',
    props: ['usersapi', 'btnInfo'],
    components: {},
    data() {
        return {
           
        };
    },
    
}
</script>

<style>

</style>