<template>
     <div class="users__table table">
        <table class="table__wrapper">
            <thead>
                <tr class="table__head" >
                    <th v-for="(thead, i) in tableHeader(users)"
                        v-bind:key="i"
                        >
                        {{thead}}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="tr_hover" 
                    v-for="(user, i) of users"
                    v-bind:key="i"
                    v-on:click="$emit('activ-info', user.id)"
                    >
                    <td>{{user.id}}</td>
                    <td>{{user.firstName}}</td>
                    <td>{{user.lastName}}</td>
                    <td>{{user.email}}</td>
                    <td>{{user.phone}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

export default {
    name: 'UsersTable',
    props: ['users'],
    components: {},
    data() {
        return {
           
        };
    },
    methods: {
        //метод для формирования заголовка таблицы
        tableHeader(users) {
            var result = []
            Object.keys(users[0]).forEach((val, key)=>{
                if (key < 5) {
                    result.push(val)
                }
            })
            console.log(result)
            return result
        }
    },
    
}
</script>

<style>
.users__table {
    margin: 0 20px 20px 20px;
    overflow: hidden;
}

.table__wrapper {
    background: #0000005d;
    /* padding-top: 20px; */
    padding: 40px;
    display: block;
    /* width: 100%;
    height: 100%; */
    border-radius: 20px;
    border-collapse: collapse;
    overflow-y: auto;
    max-height: 100%;
}

.table__wrapper th {
    font-size: 20px;
    padding-bottom: 10px;
    text-align: center;
    /* font-weight: lighter; */
    border-bottom: 1px solid #ffffff49;
    width: 7%;
    
}

.table__wrapper tr {
    border-bottom: 1px solid #ffffff49;
    text-align: center;
    cursor: pointer;
}

.table__wrapper td {
    padding: 25px 0px;
}

.tr_hover:hover {
    background: rgba(148, 0, 211, 0.589);
    border-bottom: 2px solid rgb(243, 17, 205);
}
</style>