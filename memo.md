### apiサーバーとして利用する

db作成はローワーキャメルケース
例: rails g migration createUsers

controllerは複数形(ファイル名：スネークケース・クラス名: アッパーキャメルケース)
users_controllers.rb
UsersController

modelは単数形(ファイル名：単数形・クラス名: 単数形)
user.rb
User

User.create(
  [
    {first_name: '秀喜', last_name: '松井', email: 'hideki@sample.com', age: 44},
    {first_name: '佳浩', last_name: '丸', email: 'maru@sample.com', age: 29},
    {first_name: '雅之', last_name: '掛布', email: 'masayuki@sample.com', age: 63}
  ]
)