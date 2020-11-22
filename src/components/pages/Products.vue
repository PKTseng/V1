<template>
  <div>
    <div class="text-right mt-3">
      <button
        class="btn btn-outline-primary"
        @click='openModel'
      >
        建立新產品
      </button>
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
      <!-- Modal -->
      <div
        class="modal fade"
        id="productModel"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div
          class="modal-dialog"
          role="document"
        >
          <div class="modal-content">
            <div class="modal-header">
              <h5
                class="modal-title"
                id="exampleModalLabel"
              >Modal title</h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              ...
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >Close</button>
              <button
                type="button"
                class="btn btn-primary"
              >Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </table>
  </div>

</template>
<script>
import $ from 'jquery'
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
    },
    openModel() {
      $('#productModel').modal('show')
    }
  }
}
</script>