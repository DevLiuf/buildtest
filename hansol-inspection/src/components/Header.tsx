"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";

export default function Header({ activePage }: { activePage: string }) {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const menuTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const megaMenuRef = useRef<HTMLDivElement>(null);

  // 메뉴 타임아웃을 정리하는 함수
  const clearMenuTimeout = () => {
    if (menuTimeoutRef.current) {
      clearTimeout(menuTimeoutRef.current);
      menuTimeoutRef.current = null;
    }
  };

  // 메뉴 외부 클릭 감지
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        megaMenuRef.current &&
        !megaMenuRef.current.contains(event.target as Node)
      ) {
        setActiveMenu(null);
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  // 컴포넌트 언마운트 시 타임아웃 정리
  useEffect(() => {
    return () => {
      clearMenuTimeout();
    };
  }, []);

  const handleMouseEnter = (menu: string) => {
    clearMenuTimeout();
    setActiveMenu(menu);
    setIsMenuOpen(true);
  };

  const handleMouseLeave = () => {
    // 메뉴 위에서 벗어났을 때 바로 닫히지 않고 약간의 지연 시간을 둠
    menuTimeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
      setIsMenuOpen(false);
    }, 300); // 300ms 지연
  };

  const handleMegaMenuMouseEnter = () => {
    clearMenuTimeout();
  };

  const handleMegaMenuMouseLeave = () => {
    menuTimeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
      setIsMenuOpen(false);
    }, 300); // 300ms 지연
  };

  return (
    <>
      <header className="fixed w-full bg-white shadow-md z-20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-primary-dark text-2xl font-bold">
              <Link href="/">한솔 사전점검</Link>
            </div>
            <nav className="hidden md:flex">
              <div
                className="relative px-4 py-2 group"
                onMouseEnter={() => handleMouseEnter("menu")}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href="/"
                  className={`font-medium ${
                    activePage === "home"
                      ? "text-primary-dark font-bold"
                      : "text-gray-700 hover:text-primary-dark"
                  }`}
                >
                  회사소개
                </Link>
              </div>

              <div
                className="relative px-4 py-2 group"
                onMouseEnter={() => handleMouseEnter("menu")}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href="/services"
                  className={`font-medium ${
                    activePage === "services"
                      ? "text-primary-dark font-bold"
                      : "text-gray-700 hover:text-primary-dark"
                  }`}
                >
                  아파트 사전점검
                </Link>
              </div>

              <div
                className="relative px-4 py-2 group"
                onMouseEnter={() => handleMouseEnter("menu")}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href="/safety"
                  className={`font-medium ${
                    activePage === "safety"
                      ? "text-primary-dark font-bold"
                      : "text-gray-700 hover:text-primary-dark"
                  }`}
                >
                  안전진단
                </Link>
              </div>

              <div
                className="relative px-4 py-2 group"
                onMouseEnter={() => handleMouseEnter("menu")}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href="/apartment"
                  className={`font-medium ${
                    activePage === "apartment"
                      ? "text-primary-dark font-bold"
                      : "text-gray-700 hover:text-primary-dark"
                  }`}
                >
                  공동주택 점검
                </Link>
              </div>

              <div
                className="relative px-4 py-2 group"
                onMouseEnter={() => handleMouseEnter("menu")}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href="/business"
                  className={`font-medium ${
                    activePage === "business"
                      ? "text-primary-dark font-bold"
                      : "text-gray-700 hover:text-primary-dark"
                  }`}
                >
                  B2B 비즈니스
                </Link>
              </div>

              <div
                className="relative px-4 py-2 group"
                onMouseEnter={() => handleMouseEnter("menu")}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href="/support"
                  className={`font-medium ${
                    activePage === "support"
                      ? "text-primary-dark font-bold"
                      : "text-gray-700 hover:text-primary-dark"
                  }`}
                >
                  고객지원
                </Link>
              </div>
            </nav>
            <div className="hidden md:flex gap-2">
              <Link
                href="/inquire"
                className="border border-primary-dark text-primary-dark px-4 py-2 rounded hover:bg-primary/10 transition"
              >
                고객문의
              </Link>
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                상담신청
              </Link>
            </div>
            <button className="md:hidden text-primary-dark">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* 메가 메뉴 */}
        {activeMenu && (
          <div
            ref={megaMenuRef}
            className="absolute left-0 right-0 top-full w-full bg-white shadow-md border-t border-gray-100"
            onMouseEnter={handleMegaMenuMouseEnter}
            onMouseLeave={handleMegaMenuMouseLeave}
          >
            <div className="container mx-auto py-8">
              <div className="flex justify-between">
                {/* 회사소개 카테고리 */}
                <div className="border-r border-gray-100 pr-8 w-[180px]">
                  <h3 className="font-bold text-primary-dark mb-3 pb-2 border-b border-gray-100">
                    회사소개
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="/about"
                        className="text-gray-600 hover:text-primary-dark block py-1"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        한솔 사전점검 소개
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/service-intro"
                        className="text-gray-600 hover:text-primary-dark block py-1"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        주요 실적
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/equipment"
                        className="text-gray-600 hover:text-primary-dark block py-1"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        장비 현황
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/partners"
                        className="text-gray-600 hover:text-primary-dark block py-1"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        파트너사
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* 아파트 사전점검 카테고리 */}
                <div className="border-r border-gray-100 px-8 w-[180px]">
                  <h3 className="font-bold text-primary-dark mb-3 pb-2 border-b border-gray-100">
                    아파트 사전점검
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="/services/apartment"
                        className="text-gray-600 hover:text-primary-dark block py-1"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        아파트 사전점검
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/safety-check"
                        className="text-gray-600 hover:text-primary-dark block py-1"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        시설물 안전점검
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/seismic"
                        className="text-gray-600 hover:text-primary-dark block py-1"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        내진성능평가
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/diagnosis"
                        className="text-gray-600 hover:text-primary-dark block py-1"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        구조 안전진단
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* 안전진단 카테고리 */}
                <div className="border-r border-gray-100 px-8 w-[180px]">
                  <h3 className="font-bold text-primary-dark mb-3 pb-2 border-b border-gray-100">
                    내진성능평가
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="/safety/evaluation"
                        className="text-gray-600 hover:text-primary-dark block py-1"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        구조 안전진단
                      </Link>
                    </li>
                  </ul>

                  <h3 className="font-bold text-primary-dark mt-6 mb-3 pb-2 border-b border-gray-100">
                    건설공사 정기안전점검
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="/safety/regular"
                        className="text-gray-600 hover:text-primary-dark block py-1"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        인접건축물 현황조사
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* 공동주택 점검 카테고리 */}
                <div className="border-r border-gray-100 px-8 w-[180px]">
                  <h3 className="font-bold text-primary-dark mb-3 pb-2 border-b border-gray-100">
                    공동주택 점검
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="/apartment/safecheck"
                        className="text-gray-600 hover:text-primary-dark block py-1"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        세이프체크
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* B2B 비즈니스 카테고리 */}
                <div className="border-r border-gray-100 px-8 w-[180px]">
                  <h3 className="font-bold text-primary-dark mb-3 pb-2 border-b border-gray-100">
                    비즈니스 솔루션
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="/business/solutions"
                        className="text-gray-600 hover:text-primary-dark block py-1"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        비즈니스 솔루션
                      </Link>
                    </li>
                  </ul>

                  <h3 className="font-bold text-primary-dark mt-6 mb-3 pb-2 border-b border-gray-100">
                    세이프체크
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="/business/safecheck"
                        className="text-gray-600 hover:text-primary-dark block py-1"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        세이프체크
                      </Link>
                    </li>
                  </ul>

                  <h3 className="font-bold text-primary-dark mt-6 mb-3 pb-2 border-b border-gray-100">
                    지주 돋는 집콕
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="/business/homejob"
                        className="text-gray-600 hover:text-primary-dark block py-1"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        지주 돋는 집콕
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* 고객지원 카테고리 */}
                <div className="pl-8 w-[180px]">
                  <h3 className="font-bold text-primary-dark mb-3 pb-2 border-b border-gray-100">
                    고객지원
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="/support/contact"
                        className="text-gray-600 hover:text-primary-dark block py-1"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        상담 현황
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/support/faq"
                        className="text-gray-600 hover:text-primary-dark block py-1"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        자주 묻는 질문
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
      <div className="h-[57px]"></div> {/* 헤더 높이만큼 공간 확보 */}
    </>
  );
}
