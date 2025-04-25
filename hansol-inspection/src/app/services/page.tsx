import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Services() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header activePage="services" />

      {/* 메인 컨텐츠 */}
      <main className="pt-20 flex-grow">
        {/* 서비스 배너 */}
        <section className="bg-primary/30 py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-primary-dark text-center mb-8">
              서비스 안내
            </h1>
            <p className="text-lg text-center max-w-3xl mx-auto">
              한솔 사전점검은 전문적인 건물 점검 서비스를 제공합니다. 신축
              아파트부터 기존 건물까지, 안전하고 쾌적한 주거 환경을 위한 최선의
              선택입니다.
            </p>
          </div>
        </section>

        {/* 서비스 상세 */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {/* 서비스 1 */}
            <div className="mb-16">
              <div className="bg-primary/10 p-8 rounded-lg">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <div className="relative h-64 rounded-lg overflow-hidden">
                      <Image
                        src="/images/inspection-technicians.jpg"
                        alt="아파트 사전점검"
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h2 className="text-3xl font-bold text-primary-dark mb-4">
                      아파트 사전점검
                    </h2>
                    <p className="mb-4">
                      신축 아파트 입주 전 전문가의 꼼꼼한 하자 점검으로 안전하고
                      편안한 주거 환경을 확보하세요. 한솔 사전점검은 건축, 설비,
                      전기 등 다양한 분야의 전문가들이 함께 참여하여 종합적인
                      점검을 제공합니다.
                    </p>
                    <h3 className="font-bold text-xl mb-2">주요 점검 항목</h3>
                    <ul className="list-disc pl-5 mb-4 space-y-1">
                      <li>구조체(벽체, 천장, 바닥) 균열 및 처짐 확인</li>
                      <li>마감재(도배, 타일, 마루 등) 시공 상태 점검</li>
                      <li>창호 개폐 및 기밀성 테스트</li>
                      <li>급/배수 설비 누수 및 정상 작동 여부</li>
                      <li>전기 설비 안전성 및 콘센트 작동 확인</li>
                      <li>통신/인터넷 설비 점검</li>
                      <li>난방 시스템 작동 점검</li>
                    </ul>
                    <Link
                      href="/contact"
                      className="inline-block bg-primary-dark text-white px-6 py-3 rounded-md hover:bg-primary-dark/90 transition"
                    >
                      서비스 문의하기
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* 서비스 2 */}
            <div className="mb-16">
              <div className="bg-primary/10 p-8 rounded-lg">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <div className="relative h-64 rounded-lg overflow-hidden">
                      <Image
                        src="/images/inspection-technicians.jpg"
                        alt="건축물 안전진단"
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h2 className="text-3xl font-bold text-primary-dark mb-4">
                      건축물 안전진단
                    </h2>
                    <p className="mb-4">
                      건축물의 구조적 안전성을 전문적으로 평가하고, 잠재적 위험
                      요소를 사전에 파악합니다. 정밀한 장비와 풍부한 경험을
                      바탕으로 건물의 안전을 확보하세요.
                    </p>
                    <h3 className="font-bold text-xl mb-2">주요 진단 서비스</h3>
                    <ul className="list-disc pl-5 mb-4 space-y-1">
                      <li>구조물 안전성 평가</li>
                      <li>균열 및 처짐 정밀 진단</li>
                      <li>내진 성능 평가</li>
                      <li>누수 및 방수 성능 평가</li>
                      <li>외벽 및 지붕 상태 점검</li>
                      <li>지하 구조물 안전성 평가</li>
                      <li>건물 노후화 정도 평가</li>
                    </ul>
                    <Link
                      href="/contact"
                      className="inline-block bg-primary-dark text-white px-6 py-3 rounded-md hover:bg-primary-dark/90 transition"
                    >
                      서비스 문의하기
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* 서비스 3 */}
            <div>
              <div className="bg-primary/10 p-8 rounded-lg">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <div className="relative h-64 rounded-lg overflow-hidden">
                      <Image
                        src="/images/inspection-technicians.jpg"
                        alt="세이프체크공동주택 점검"
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h2 className="text-3xl font-bold text-primary-dark mb-4">
                      세이프체크공동주택 점검
                    </h2>
                    <p className="mb-4">
                      공동주택의 안전을 위한 종합적인 점검 서비스로 거주자의
                      안전과 편의를 보장합니다. 정기적인 세이프체크로 건물의
                      수명을 연장하고 쾌적한 주거 환경을 유지하세요.
                    </p>
                    <h3 className="font-bold text-xl mb-2">점검 내용</h3>
                    <ul className="list-disc pl-5 mb-4 space-y-1">
                      <li>건물 외관 및 공용 시설 점검</li>
                      <li>엘리베이터 및 기계 설비 안전성 확인</li>
                      <li>전기 및 소방 시설 정상 작동 여부</li>
                      <li>급수 및 배수 시스템 점검</li>
                      <li>공용 공간 안전 사항 확인</li>
                      <li>지하 주차장 및 보안 시설 점검</li>
                      <li>에너지 효율성 진단</li>
                    </ul>
                    <Link
                      href="/contact"
                      className="inline-block bg-primary-dark text-white px-6 py-3 rounded-md hover:bg-primary-dark/90 transition"
                    >
                      서비스 문의하기
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ 섹션 */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-primary-dark mb-12">
              자주 묻는 질문
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-2">
                  사전점검은 언제 받는 것이 좋나요?
                </h3>
                <p>
                  아파트의 경우 입주 예정일 약 1-2주 전에 받는 것이 가장
                  효과적입니다. 이 시기는 시공사의 기본 점검이 완료되고 입주 전
                  문제점을 수정할 시간적 여유가 있는 시점입니다.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-2">
                  점검 후 하자가 발견되면 어떻게 해야 하나요?
                </h3>
                <p>
                  점검 후 전문 보고서를 제공해 드립니다. 이 보고서를 시공사 또는
                  건설사에 제출하여 하자보수를 요청할 수 있습니다. 필요시
                  하자보수 요청 과정을 도와드립니다.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-2">
                  점검 비용은 어떻게 되나요?
                </h3>
                <p>
                  점검 비용은 건물의 크기, 점검 항목, 서비스 범위에 따라
                  달라집니다. 정확한 견적은 현장 확인 후 제공해 드립니다.
                  문의하기를 통해 상담을 신청해 주세요.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-2">
                  점검에 소요되는 시간은 얼마나 되나요?
                </h3>
                <p>
                  일반적인 아파트 기준으로 약 2-3시간 정도 소요됩니다. 건물의
                  크기와 점검 항목에 따라 달라질 수 있습니다. 정확한 소요 시간은
                  예약 시 안내해 드립니다.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-2">
                  세이프체크 점검은 얼마나 자주 받아야 하나요?
                </h3>
                <p>
                  공동주택의 경우 최소 연 1회 이상의 정기 점검을 권장합니다.
                  건물의 노후도와 상태에 따라 더 자주 점검이 필요할 수 있습니다.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
