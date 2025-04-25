const fs = require("fs");
const https = require("https");
const path = require("path");

// 이미지 URL은 실제 URL로 변경해야 합니다
const imageUrl = "https://example.com/image.jpg"; // 실제 이미지 URL로 변경
const outputPath = path.join(
  __dirname,
  "public",
  "images",
  "inspection-technicians.jpg"
);

console.log("이미지 다운로드 중...");
https
  .get(imageUrl, (res) => {
    if (res.statusCode !== 200) {
      console.error(`이미지 다운로드 실패: ${res.statusCode}`);
      return;
    }

    const fileStream = fs.createWriteStream(outputPath);
    res.pipe(fileStream);

    fileStream.on("finish", () => {
      fileStream.close();
      console.log(`이미지 저장 완료: ${outputPath}`);
    });
  })
  .on("error", (err) => {
    console.error(`이미지 다운로드 에러: ${err.message}`);
  });
