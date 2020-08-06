# es6
vue js 에서 활용 가능한 ES6 내용들을 정리한다.

## 변수 타입

### var
기존 ES5 에서 사용하던 변수타입으로 변수 스코프가 함수 이다.

```javascript
for(var i = 0 ; i < 5; i++) {
    console.log(i)
}
    console.log(i)
```

### let
ES6에서 사용하는 변수타입으로  변수 스코프가 블록이다.
```javascript
for(let i = 0 ; i < 5; i++) {
    console.log(i)
}
    console.log(i) // => reference error 블록을 벗어남.
```

### const
ES6에서 사용하는 변수타입으로 let 처럼 블록 스코프이며, immutable 하다.
```javascript
const i = 1;
i = 2; // => error
```


## 화살표 함수

기존 자바 함수 선언
```javascript
let a = function() {
    return 10;
}
```

화살표 함수 사용 함수 선언

```javascript
let a = () => 10;
    
let a = () => {
   //insert logic here
};
```

vue js 에서 활용 하려면 다음과 같이 가능하다.

```vue
  methods: {
  	toggle: (todo) => todo.done = !todo.done
  }
```
개행의 수가 줄어들어 깔끔해 보일 수 있지만 취향차 인듯하다

또 arrow function을 사용할시 this가 함수 내부의 context가 아닌 상위 scope의 context를 참고함
vue js 는 this.변수명 으로 변수에 접근하는 경우가 많아 사용에 용이하다

```vue
 methods: {
  
    saveItem: function() {
      let vm = this;
      
      this.$http.post('item', this.item)
        .then(
          function (response) {
            vm.item.title = '';
          }, 
        );
    }
```

```vue
 methods: {
  
    saveItem: function() {
      //let vm = this;
      
      this.$http.post('item', this.item)
        .then(
          response => {
            vm.item.title = '';
          }, 
        );
    }
```

해당내용으로 수정 가능

추가 참고할만한 링크 : https://gist.github.com/JacobBennett/7b32b4914311c0ac0f28a1fdc411b9a7

## template literal

동적인 String 등을 다룰 때 String 을 쪼갤 필요 없이 ${변수명} 을 사용 가능하다고 한다.

```javascript

new Vue({
  data: {
    name: 'George'
  },
  computed: {
    greeting() {
      return 'Hello, ' + this.name + ', how are you?'
    }
  }
});

new Vue({
  data: {
    name: 'George'
  },
  computed: {
    greeting() {
      return `Hello, ${this.name}, how are you?`
    }
  }
});

```


## 모듈

es6 문법보다 webpack을 사용하는 경우가 많다고 한다.. 개발환경 설정 관련해서 조사