import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header activePage="contact" />

      {/* 메인 컨텐츠 */}
      <main className="pt-20 flex-grow">
        {/* 배너 */}
        <section className="bg-primary/30 py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-primary-dark text-center mb-4">
              문의하기
            </h1>
            <p className="text-lg text-center max-w-3xl mx-auto">
              궁금한 점이 있으시거나 견적을 원하시면 아래 양식을 통해
              문의해주세요. 빠른 시간 내에 답변 드리겠습니다.
            </p>
          </div>
        </section>

        {/* 문의 폼 */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12">
              {/* 문의 양식 */}
              <div className="md:w-2/3">
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h2 className="text-2xl font-bold mb-6 text-primary-dark">
                    문의 양식
                  </h2>
                  <form>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block mb-2 font-medium"
                        >
                          이름 <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-dark/50"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block mb-2 font-medium"
                        >
                          연락처 <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-dark/50"
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-6">
                      <label htmlFor="email" className="block mb-2 font-medium">
                        이메일 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-dark/50"
                        required
                      />
                    </div>
                    <div className="mb-6">
                      <label
                        htmlFor="service"
                        className="block mb-2 font-medium"
                      >
                        관심 서비스
                      </label>
                      <select
                        id="service"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-dark/50"
                      >
                        <option value="">서비스 선택</option>
                        <option value="apartment">아파트 사전점검</option>
                        <option value="safety">건축물 안전진단</option>
                        <option value="safecheck">
                          세이프체크공동주택 점검
                        </option>
                        <option value="other">기타</option>
                      </select>
                    </div>
                    <div className="mb-6">
                      <label
                        htmlFor="address"
                        className="block mb-2 font-medium"
                      >
                        점검 주소
                      </label>
                      <input
                        type="text"
                        id="address"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-dark/50"
                      />
                    </div>
                    <div className="mb-6">
                      <label
                        htmlFor="message"
                        className="block mb-2 font-medium"
                      >
                        문의 내용 <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-dark/50 resize-none"
                        required
                      ></textarea>
                    </div>
                    <div className="mb-6">
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          className="mr-2 w-4 h-4 text-primary-dark"
                          required
                        />
                        <span>
                          개인정보 수집 및 이용에 동의합니다.{" "}
                          <Link
                            href="/privacy"
                            className="text-primary-dark underline"
                          >
                            개인정보처리방침
                          </Link>
                        </span>
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="bg-primary-dark text-white px-6 py-3 rounded-md hover:bg-primary-dark/90 transition w-full"
                    >
                      문의하기
                    </button>
                  </form>
                </div>
              </div>

              {/* 연락처 정보 */}
              <div className="md:w-1/3">
                <div className="bg-primary/10 p-8 rounded-lg h-full">
                  <h2 className="text-2xl font-bold mb-6 text-primary-dark">
                    연락처 정보
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-bold mb-2">주소</h3>
                      <p>서울특별시 강남구 테헤란로 123</p>
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">이메일</h3>
                      <p>info@hansol-inspection.com</p>
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">전화</h3>
                      <p>02-123-4567</p>
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">업무 시간</h3>
                      <p>평일: 오전 9시 - 오후 6시</p>
                      <p>토요일: 오전 9시 - 오후 1시</p>
                      <p>일요일 및 공휴일: 휴무</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 지도 섹션 */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-primary-dark mb-12">
              오시는 길
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-300 h-[400px] rounded-lg flex items-center justify-center">
                <p className="text-lg">지도가 이곳에 표시됩니다.</p>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">찾아오시는 방법</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-bold">지하철</h4>
                    <p>2호선 강남역 4번 출구에서 도보 5분</p>
                  </div>
                  <div>
                    <h4 className="font-bold">버스</h4>
                    <p>
                      간선버스: 140, 144, 145, 146
                      <br />
                      지선버스: 4312, 4419
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold">주차</h4>
                    <p>건물 내 지하주차장 이용 가능 (1시간 무료 주차)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
