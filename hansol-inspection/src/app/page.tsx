import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header activePage="home" />

      {/* 히어로 섹션 */}
      <section className="pt-28 bg-white">
        <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="text-blue-600 font-semibold mb-2">
              아파트 사전점검 6년 연속 1위
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary-dark">
              건축 전문가가 함께하는
              <br />
              아파트 사전점검
            </h1>
            <p className="text-lg mb-6 text-gray-700">
              새 아파트 입주 전 꼼꼼한 사전점검으로 주거 공간의 안전을
              확보하세요. 한솔 사전점검은 전문가의 눈으로 건축물의 잠재적 문제를
              발견합니다.
            </p>
            <div className="flex gap-4">
              <Link
                href="/contact"
                className="bg-primary-dark text-white px-6 py-3 rounded-md hover:bg-primary-dark/90 transition"
              >
                무료 상담 요청
              </Link>
              <Link
                href="/services"
                className="border border-primary-dark text-primary-dark px-6 py-3 rounded-md hover:bg-primary/20 transition"
              >
                서비스 알아보기
              </Link>
            </div>
            {/* 인증 로고 섹션 */}
            <div className="flex flex-wrap gap-6 mt-8">
              {/* ISO 인증 */}
              <div className="w-16 h-16 relative grayscale hover:grayscale-0 transition-all">
                <div className="w-full h-full bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold">
                  ISO 9001
                </div>
              </div>
              {/* 이노비즈 인증 */}
              <div className="w-16 h-16 relative grayscale hover:grayscale-0 transition-all">
                <div className="w-full h-full bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold">
                  이노비즈
                </div>
              </div>
              {/* 메인비즈 인증 */}
              <div className="w-16 h-16 relative grayscale hover:grayscale-0 transition-all">
                <div className="w-full h-full bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold">
                  메인비즈
                </div>
              </div>
              {/* 기타 인증 */}
              <div className="w-16 h-16 relative grayscale hover:grayscale-0 transition-all">
                <div className="w-full h-full bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold">
                  KOITA
                </div>
              </div>
              {/* 국토교통부 인증 */}
              <div className="w-16 h-16 relative grayscale hover:grayscale-0 transition-all">
                <div className="w-full h-full bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold">
                  국토교통부
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/inspection-technicians.jpg"
                alt="아파트 사전점검 전문가들"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* 주요 서비스 섹션 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary-dark">
            주요 서비스
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 서비스 1 */}
            <div className="bg-primary/20 rounded-lg p-6 shadow-sm hover:shadow-md transition">
              <div className="text-primary-dark mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-12 h-12"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">아파트 사전점검</h3>
              <p className="mb-4">
                신축 아파트 입주 전 철저한 하자 점검으로 안전하고 쾌적한 주거
                환경을 보장합니다.
              </p>
              <Link
                href="/services/apartment"
                className="text-primary-dark font-medium hover:underline"
              >
                자세히 보기 &rarr;
              </Link>
            </div>

            {/* 서비스 2 */}
            <div className="bg-primary/20 rounded-lg p-6 shadow-sm hover:shadow-md transition">
              <div className="text-primary-dark mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-12 h-12"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">건축물 안전진단</h3>
              <p className="mb-4">
                전문 기술로 건축물의 구조적 안전성을 평가하고 잠재적 위험 요소를
                사전에 파악합니다.
              </p>
              <Link
                href="/services/safety"
                className="text-primary-dark font-medium hover:underline"
              >
                자세히 보기 &rarr;
              </Link>
            </div>

            {/* 서비스 3 */}
            <div className="bg-primary/20 rounded-lg p-6 shadow-sm hover:shadow-md transition">
              <div className="text-primary-dark mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-12 h-12"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">
                세이프체크공동주택 점검
              </h3>
              <p className="mb-4">
                공동주택의 안전을 위한 종합적인 점검 서비스로 거주자의 안전과
                편의를 보장합니다.
              </p>
              <Link
                href="/services/safecheck"
                className="text-primary-dark font-medium hover:underline"
              >
                자세히 보기 &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 고객 후기 섹션 */}
      <section className="py-16 bg-primary/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary-dark">
            고객 후기
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 후기 1 */}
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary-dark font-bold">김</span>
                </div>
                <div>
                  <h4 className="font-bold">김지현</h4>
                  <p className="text-sm text-gray-600">서울시 강남구</p>
                </div>
              </div>
              <p className="italic">
                &quot;한솔 사전점검 덕분에 입주 전 여러 문제점을 발견하고 수정할
                수 있었습니다. 전문적인 서비스와 상세한 설명에 매우
                만족합니다.&quot;
              </p>
            </div>

            {/* 후기 2 */}
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary-dark font-bold">이</span>
                </div>
                <div>
                  <h4 className="font-bold">이상민</h4>
                  <p className="text-sm text-gray-600">경기도 분당시</p>
                </div>
              </div>
              <p className="italic">
                &quot;빌라 구매 전 안전진단을 받았는데, 예상치 못한 곳에서 여러
                문제점을 발견해주셨어요. 덕분에 판매자와 협상할 수 있는 근거가
                생겼습니다.&quot;
              </p>
            </div>

            {/* 후기 3 */}
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary-dark font-bold">박</span>
                </div>
                <div>
                  <h4 className="font-bold">박미영</h4>
                  <p className="text-sm text-gray-600">인천시 송도동</p>
                </div>
              </div>
              <p className="italic">
                &quot;세이프체크 점검 서비스를 통해 우리 아파트의 여러 안전
                문제를 확인하고 관리사무소와 함께 해결할 수 있었습니다. 정말
                감사합니다.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="py-16 bg-primary-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">지금 바로 문의하세요</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            새로운 보금자리의 안전을 확보하는 첫 걸음, 한솔 사전점검이
            함께합니다. 전문가의 세심한 점검으로 더 안전하고 쾌적한 주거 환경을
            만들어보세요.
          </p>
          <Link
            href="/contact"
            className="bg-white text-primary-dark px-8 py-3 rounded-md font-bold hover:bg-primary/90 transition inline-block"
          >
            무료 상담 신청하기
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
