<template>
    <div class="search">
        <form class="search__form" @submit.prevent="onSubmit" >
            <div class="search__form__wrapper">
                <input v-model="searchVal" class="search__form__input" type="saerch" placeholder="search">
                <button v-on:click="btn = !btn" class="search__form__batton fa fa-search">search</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            searchVal: '',
            btn: true
        };
    },
    watch: {
        searchVal(value){
            console.log(value);
        }
    },
    methods: {
        //метод передачи данных из формы в app компонент
        onSubmit() {
            // console.log('Submit', this.searchVal)
            this.$emit('on-submit', this.searchVal)
            this.searchVal = ''
        }
    }
}
</script>

<style>
.search {
    text-align: right;
    margin: 20px;
}

.search__form__wrapper {
/* position: relative; */
    display: flex;
    justify-content: space-around;
    width: 50%;
}

.search__form__input {
    border: 1px solid #CA97C0;
    background-color: #CA97C0;
    color: #AD66D5;
    border-radius: 5px;
    padding: 10px 20px;
    box-sizing: border-box;
    width: 80%;
}

.search__form__input:hover, .search__form__batton:hover {
    border: 1px solid #fff;
    transition: all 0.5s ease;
    color: #fff;
}

.search__form__batton::before {
    content: '\f002';
    right: 8px;
    position: absolute;
}

.search__form__batton {
    border: 1px solid #CA97C0;
    background-color: #CA97C0;
    color: #AD66D5;
    border-radius: 5px;
    padding: 0 30px;
    text-transform: uppercase;
    position: relative;
    cursor: pointer;
}

.search__form__cursor {
    color: #CA97C0;
}

.search__form__cursor:hover, .search__form__batton:hover {
  color: #fff;
}

</style>