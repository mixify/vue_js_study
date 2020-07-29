# Component

Component는 Vue js에서 핵심적인 영역으로 **재사용 가능한** 객체를 만드는데 이용된다고 볼 수 있다.
기본적으로는 Vue Instance 와 동일한 속성을 지닌다. (methods, computed 등 사용가능..)

### index.html
```HTML
<script src="https://npmcdn.com/vue/dist/vue.js"></script>

<div id="app">
<my-cmp></my-cmp>
<hr>
<my-cmp></my-cmp>
</div>
```

### app.js
```vuejs
Vue.component('my-cmp', {
// data를 쓰는게 아니라 function으로 해서 각 객체별로 independent함을 보장한다 중요
    data: function () {
        return {
        status: 'Critical'
        }
    },
    template: `<p>Server Status: {{ status}}</p>`
});
new Vue({
    el: '#app',
})
```


component로 객체를 분리해서 선언해서 활용해보자, Vue 인스턴스 내에서 사용가능

### main.js
```javascript
import Vue from 'vue'
import App from './App.vue'

new Vue({
  el: '#app',
  render: h => h(App) // App.vue(vue instance 를 렌더링한다.)
})
```

### App.vue
```Vue
<template>
  <div class="container">
    <app-header></app-header>
    <app-server></app-server>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Server from './components/Server.vue'

export default {
  components: {
    'app-header' : Header,
    'app-server' : Server,
  }

}
</script>

<style>

</style>
```

### Header.vue
```vue
<template>
  <div>
    <h1>Server Status</h1>
    <hr>
  </div>
</template>

<script>
export default {
name: "Header.vue"
}
</script>

<style scoped>

</style>
```

### Server.vue
```vue
<template>
  <div>
    <li v-for="index in 5">Server #{{index}}</li>
  </div>
</template>

<script>
export default {
  name: "Server.vue",
}
</script>
```

local / global 활용 방식 좀더 생각