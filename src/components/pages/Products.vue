<template>
  <div>
    <div class="text-roght mt-3">
      建立新產品
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th>分類</th>
          <th>產品名稱</th>
          <th>產品價格</th>
          <th>原價</th>
          <th>特價</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for='item in products'
          :key='item.id'
        >
          <td>{{item.category}}</td>
          <td>{{item.title}}</td>
          <td class="text-right">
            {{item.origin_price}}
          </td>
          <td class="text-right">
            {{item.price}}
          </td>
          <td>
            <span
              v-if='item.is_enabled'
              class="text-success"
            >啟用</span>
            <span
              v-else
              class="text-primary"
            >未啟用</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      products: []
    }
  },
  created() {
    this.getProducts()
  },
  methods: {
    getProducts() {
      const api = `${process.env.APIPATH}/api/${process.env.MYPATH}/products`
      this.$http.get(api).then((response) => {
        console.log(response.data)
        this.products = response.data.products
      })
    }
  }
}
</script>