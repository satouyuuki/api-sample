const app = new Vue({
  el: '#app',
  data: {
    // 使用するデータ
    users: [],
  },
  methods: {
    // 使用するメソッド
  },
  created() {
    // インスタンス作成時に自動的に fetch() する
    fetch('http://localhost:3000/users')
      .then(res => res.json())
      .then(data => {
        console.log(data);
    })
  }
})