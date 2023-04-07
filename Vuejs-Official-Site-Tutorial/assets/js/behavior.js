
// 宣言的レンダリング
// Vueの中核となる機能は宣言的レンダリングです。
// HTMLを拡張したテンプレート構文を用いて、
// JavaScriptの状態に基づいてHTMLがどのように見えるかを記述することができます。
// 状態が変更されると、HTMLは自動的に更新されます。

// 変更されたときに更新のトリガーとなるような状態はリアクティブとみなされます。
// Vueでは、リアクティブステートはコンポーネントに保持されます。
// 例のコードでは、createApp()に渡されるオブジェクトがコンポーネントになっています。
// dataコンポーネントオプションを使ってリアクティブステートを宣言することができますが、これはオブジェクトを返す関数であるべきです。


Vue.createApp({
  // dataコンポーネント・オプションを使ってリアクティブ文を宣言している。
  data: function () {
    return {
      message: "Hello World!",
      counter: { count: 0 }
    }
  }
}).mount("#app")