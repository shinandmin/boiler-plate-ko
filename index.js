const express = require('express') // expres 모듈 가져온다
const app = express() // 펑션이용해서 새로운 express 앱 만든다
const port = 5000 // 아무거나 상관없음
const bodyParser = require('body-parser');

const config = require('./config/key')

const { User } = require('./models/User'); 

// application/x-www-urlencoded 데이터를 분석해서 가져올 수 있게 해줌
app.use(bodyParser.urlencoded({extended: true}));
// applcation/json 타입 데이터 가져올 수 있게 해줌
app.use(bodyParser.json());

// mongoose를 이용해서 몽고db 연결
// mongodb+srv://admin:<password>@boilerplate.1ed8j.mongodb.net/<dbname>?retryWrites=true&w=majority <-- mongoDB 클러스터에서 생성후 복사한 코드
// password 안에는 mongodb의 user password를 입력
// useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModofy: false 이 부분은 에러나지 않게 그냥 써주는 부분임
const mongoose = require('mongoose')
mongoose.connect(config.mongoURI, {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModofy: false
}).then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err))

// 루트 디렉토리로 오면 hello world를 출력한다.
app.get('/', (req, res) => {
  res.send('Hello World! 안녕하세요 haha')
})

app.post('/register', (req, res) => {

  // 회원가입할 때 필요한 정보들을 client에서 가져오면
  // 그것들을 데이터베이스에 넣어준다.
  const user = new User(req.body)
  user.save((err, userInfo) => {
    if(err) return res.json({ success: false, err})
    return res.status(200).json({
      success: true
    })
  })
})


// port 5000번에서 앱을 실행함
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})