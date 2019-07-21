# Todo List (MySQL version)

## 前置要求
+ [Node.js](https://nodejs.org/en/)
+ [MySQL](https://dev.mysql.com/downloads/windows/installer/)


## 如何使用 ?
請按照以下步驟進行安裝

1. 下載專案
```
$ git clone https://github.com/wowsushi/todo-sequelize.git
$ cd expense-tracker
```

2. 安裝相依套件
```
$ npm install
```

3. 設定.env檔，請前往[facebooks for developers](https://developers.facebook.com/)獲取必要數據
在跟目錄建立檔案`.env`，設定以下參數:
```
FACEBOOK_ID= {你的Facebook ID}
FACEBOOK_SECRET= {你的Facebook secret}
FACEBOOK_CALLBACK=http://localhost:3000/auth/facebook/callback
```

5. 執行程式
```
$ npm run dev
```
若是看到以下訊息，就代表成功啟動，請點擊下方網址前往瀏覽
```
Express is listening on http://localhost:3000
db connected!
```

## 功能
+ 使用者可以瀏覽所有Todo
+ 使用者可以刪除特定的Todo
+ 使用者可以編輯特定的Todo
+ 使用者可以登陸後瀏覽專屬的Todo list界面
+ 支援Facebook登錄

## Demo
![sample1](https://github.com/wowsushi/expense-tracker/blob/master/public/imgs/sample1.png?raw=true)


## 作者
Betty Chen

