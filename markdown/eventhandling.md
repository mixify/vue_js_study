#Event Handling

v-on directive를 사용하면 JavaScript 의 이벤트에 대해서 작동하는 listener 나 로직을 등록할 수 있다.
v-on directive를 사용하지 않고도 *@event* 로 좀더 간결하게 표현 가능하다. 
listner의 경우 Vue Component 내의 methods에 등록된 함수도 사용가능 하다.

```HTML
<script src="https://npmcdn.com/vue/dist/vue.js"></script>

<div id="exercise">
    <div>
    <!-- 간단한 로직도 가능하다 -->
        <button v-on:click="value++">add value</button>
        <p>{{ value }}</p>
    </div>
    <div>
    <!-- Vue Component의 methods 호출 -->
        <input type="text" v-on:keydown="changeVal">
        <p>{{ str }}</p>
    </div>
    <div>
    <!-- Vue Component의 methods 호출 -->
        <input type="text" @keydown.enter="changeVal">
        <p>{{ str }}</p>
    </div>
</div>
<script src="app.js"></script>

```

```vuejs
new Vue({
    el: '#exercise',
    data: {
        value: 0,
        str: ''
    },
    methods: {
        changeVal : function (event) {
            //해당 event의 param을 자동으로 전달한다.

            this.value = event.target.value
        }
    }
});
```
