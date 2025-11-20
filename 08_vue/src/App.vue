<script>
  export default {
    data(){
      return {
        itemInput: "",
        itemPrice: "",
        shops: [],
        filterPredicate: item => true,
        pressedFilter: 1
      }
    },
    computed:{
      getTotal(){
        return this.shops.reduce((acc, item) => acc + (item.bought ? item.price : 0), 0)
      },
      getFiltered(){
        return this.shops.filter(item => this.filterPredicate(item));
      }
    },
    methods: {
      addItem(){
        this.shops.push({
          name: this.itemInput,
          bought: false,
          price: this.itemPrice,
          date: new Date()
        });
        this.itemInput = "";
        this.itemPrice = "";
      },
      checkItem(item){
        item.bought = true;
      },
      deleteItem(item){
        this.shops.splice(this.shops.findIndex(it => it === item), 1);
      },
      setPredicate(predicate, id){
        this.filterPredicate = predicate;
        this.pressedFilter = id;
      }
    }

  }

</script>

<template>

  <main>
    <div class="main">
      <input v-model="itemInput" placeholder="input name">
      <input v-model="itemPrice" type="number" placeholder="input price">
      <button @click="addItem">Add</button>
      <p>Total price: {{getTotal}}</p>
      <div style="display: flex">
        <button @click="setPredicate(item => true, 1)" :class="{pressed: pressedFilter === 1}">All</button>
        <button @click="setPredicate(item => item.bought, 2)" :class="{pressed: pressedFilter === 2}">Bought</button>
        <button @click="setPredicate(item => !item.bought, 3)" :class="{pressed: pressedFilter === 3}">Not bought</button>
      </div>
    </div>

    <div class="shop-list">
      <p v-if="getFiltered.length === 0">There is no products</p>
      <ul>
        <li v-for="(item, i) in getFiltered" :key="i">
          <div>
            <span :class="{item: getFiltered[i].bought}">
              Name: {{item.name}};<br>
              price: {{item.price}};<br>
              date: {{item.date}}<br>
            </span>
            <div style="display: flex; gap: 4px">
              <button @click="checkItem(getFiltered[i])">Check</button>
              <button @click="deleteItem(getFiltered[i])">Delete</button>
            </div>

          </div>
        </li>
      </ul>
    </div>

  </main>


</template>

<style>

.item {
  color: dimgrey;
  text-decoration: line-through;
}

.pressed {
  background-color: darkgray;
}

</style>