"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-primary-dark text-xl font-bold mb-4">
                한솔 사전점검
              </div>
              <p className="text-gray-600">
                전문적인 건물 사전점검 서비스로 안전한 주거 환경을 만들어갑니다.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">서비스</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/services/apartment"
                    className="text-gray-600 hover:text-primary-dark"
                  >
                    아파트 사전점검
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/safety"
                    className="text-gray-600 hover:text-primary-dark"
                  >
                    건축물 안전진단
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/safecheck"
                    className="text-gray-600 hover:text-primary-dark"
                  >
                    세이프체크공동주택 점검
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">회사 정보</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/about"
                    className="text-gray-600 hover:text-primary-dark"
                  >
                    회사 소개
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about/team"
                    className="text-gray-600 hover:text-primary-dark"
                  >
                    전문가 팀
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-600 hover:text-primary-dark"
                  >
                    연락처
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">연락처</h4>
              <address className="not-italic text-gray-600">
                <p>서울특별시 강남구 테헤란로 123</p>
                <p>이메일: info@hansol-inspection.com</p>
                <p>전화: 02-123-4567</p>
              </address>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
            <p>
              &copy; {new Date().getFullYear()} 한솔 사전점검. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* 채팅 버튼 */}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
        <button className="bg-yellow-400 hover:bg-yellow-500 rounded-full p-4 shadow-lg transition-all">
          <div className="flex items-center gap-2 px-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
              />
            </svg>
            <span className="font-bold text-sm">카카오채널</span>
          </div>
        </button>
        <button className="bg-blue-500 hover:bg-blue-600 rounded-full p-4 text-white shadow-lg transition-all">
          <div className="flex items-center gap-2 px-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
              />
            </svg>
            <span className="font-bold text-sm">문의하기</span>
          </div>
        </button>
      </div>
    </>
  );
}
