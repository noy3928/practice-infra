# Node.js의 공식 이미지를 기반으로 설정
FROM node:14

# 앱 디렉토리 생성
WORKDIR /usr/src/app

# 앱 의존성 설치
# package.json 과 package-lock.json을 모두 복사
COPY package*.json ./

RUN npm install
# 프로덕션을 위한 패키지 설치 시
# RUN npm ci --only=production

# 앱 소스 추가
COPY . .

# 앱이 사용하는 포트를 노출
EXPOSE 3000

# 앱 실행
CMD [ "node", "app.js" ]
