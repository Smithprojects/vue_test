<template>
    <div class="search">
        <form class="search__form" @submit.prevent="onSubmit" >
            <div class="search__form__wrapper">
                <input v-model="searchFormValue" class="search__form__input" type="saerch" placeholder="search">
                <button class="search__form__batton ">send</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            searchFormValue: '',
        };
    },
    watch: {
        searchFormValue(value){
            console.log(value);
        }
    },
    methods: {
        onSubmit() {
            this.$emit('on-submit', this.searchFormValue)
            this.searchFormValue = ''
        }
    }
}
</script>

<style>
.search {
    text-align: right;
    margin: 20px 0px;
    position: relative;
    min-height: 35px;
}

.search__form__wrapper {
    display: flex;
    justify-content: space-between;
    width: 50%;
    margin: 0px 20px;
    flex-wrap: wrap;
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

.search__form__batton {
    border: 1px solid #CA97C0;
    background-color: #CA97C0;
    color: #AD66D5;
    border-radius: 5px;
    padding: 0 40px;
    text-transform: uppercase;
    position: relative;
    cursor: pointer;
}

.search__form__btn-on {
    color: #CA97C0;
    font-size: 25px;
    position: absolute;
    top: 12%;
    right: 46%;
    text-align: center;
    animation: filterOpacity 2s linear;
}

.search__form__btn-on:hover, .search__form__batton:hover {
  color: #fff;
}

</style>