<template>
  <div>

    <Navbar />
    <div class="container-fluid">
      <div class="row">
        <nav class="col-md-2 d-none d-md-block bg-light sidebar">
          <Siderbar />
        </nav>

        <main
          role="main"
          class="col-md-9 ml-sm-auto col-lg-10 px-4"
        >
          <router-view></router-view>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './Navbar'
import Siderbar from './Siderbar'

export default {
  components: {
    Navbar,
    Siderbar
  }
}
</script>