const express = require('express') // expres 모듈 가져온다
const app = express() // 펑션이용해서 새로운 express 앱 만든다
const port = 5000 // 아무거나 상관없음

// mongoose를 이용해서 몽고db 연결
// mongodb+srv://admin:<password>@boilerplate.1ed8j.mongodb.net/<dbname>?retryWrites=true&w=majority <-- mongoDB 클러스터에서 생성후 복사한 코드
// password 안에는 mongodb의 user password를 입력
// useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModofy: false 이 부분은 에러나지 않게 그냥 써주는 부분임
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://admin:admin1234@boilerplate.1ed8j.mongodb.net/boilerplate?retryWrites=true&w=majority', {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModofy: false
}).then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err))

// 루트 디렉토리로 오면 hello world를 출력한다.
app.get('/', (req, res) => {
  res.send('Hello World! 안녕하세요')
})

// port 5000번에서 앱을 실행함
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})