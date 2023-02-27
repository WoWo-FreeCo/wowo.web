<script setup>
import { useMessage } from 'naive-ui';

const inputFiled = ref({
  name: '',
  email: '',
  brief: '',
  content: ''
});

function resetInputs() {
  inputFiled.value = {
    name: '',
    email: '',
    brief: '',
    content: ''
  };
}
</script>
<template>
  <div>
    <section class="page-header">
      <div class="container">
        <h1>聯絡我們</h1>
        <ol class="breadcrumb">
          <li><a href="/">Home</a></li>
          <li class="active">
            聯絡我們
          </li>
        </ol>
      </div>
    </section>
    <section class="page-wrapper full_height">
      <div class="container">
        <div class="row">
          <!-- Contact Form -->
          <div class="contact-form">
            <form id="contact-form-child" action="javascript:;" role="form">
              <div class="form-group">
                <label>姓名*</label>
                <input
                  id="contact-name"
                  v-model="inputFiled.name"
                  type="text"
                  placeholder="姓名*"
                  class="form-control"
                  name=""
                  required
                >
              </div>

              <div class="form-group">
                <label>Email*</label>
                <input
                  id="contact-email"
                  v-model="inputFiled.email"
                  type="email"
                  placeholder="Email*"
                  class="form-control"
                  name=""
                  required
                >
              </div>

              <div class="form-group">
                <label>主旨*</label>
                <input
                  id="contact-brief"
                  v-model="inputFiled.brief"
                  type="text"
                  placeholder="主旨*"
                  class="form-control"
                  name=""
                  required
                >
              </div>

              <div class="form-group">
                <label>內容*</label>
                <textarea
                  id="contact-content"
                  v-model="inputFiled.content"
                  rows="6"
                  placeholder="內容*"
                  class="form-control"
                  name=""
                  required
                />
              </div>

              <div class="text-center">
                <button type="reset" class="btn btn-main btn-default" @click="resetInputs">
                  取消重填
                </button>
                <input id="" type="submit" class="btn btn-main btn-bag" value="確認送出">
              </div>
            </form>
          </div>
          <!-- ./End Contact Form -->
        </div>
      </div>
    </section>
  </div>
</template>
<style lang="scss" scoped>
.page-header {
  background:url('@/assets/images/banner/1.jpg');
  background-size:cover;
}
</style>
