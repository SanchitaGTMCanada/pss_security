"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";
import { Menu, X, Search } from "lucide-react";
import Container from "@/components/ui/Container";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isJoinUsOpen, setIsJoinUsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [pageSearchResults, setPageSearchResults] = useState([]);

  const fileInputRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    message: "",
  });

  const [resume, setResume] = useState(null);

  /* ============================================================
     STATIC SEARCH ITEMS
  ============================================================ */

  const staticSearchItems = [
    {
      title: "Services",
      description:
        "Explore our security and customer service solutions.",
      href: "/services",
      keywords:
        "services security customer reception solutions",
      type: "link",
    },
    {
      title: "Our Team",
      description:
        "Meet the professionals behind Preventative Security Services.",
      href: "/#team",
      keywords:
        "team staff professionals employees people",
      type: "link",
    },
    {
      title: "Contact Us",
      description:
        "Get in touch with Preventative Security Services.",
      href: "/#contact",
      keywords:
        "contact phone email location consultation",
      type: "link",
    },
    {
      title: "Join Us",
      description:
        "Interested in joining our team? Submit your application.",
      action: "join",
      keywords:
        "career jobs hiring recruitment work application",
      type: "join",
    },
  ];

  /* ============================================================
     MENU
  ============================================================ */

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  /* ============================================================
     SEARCH
  ============================================================ */

  const closeSearch = () => {
    setIsSearchOpen(false);
    setSearchQuery("");
    setPageSearchResults([]);
  };

  /* ============================================================
     SEARCH HOMEPAGE CONTENT
     
     This searches the ACTUAL rendered page.

     Therefore names like:
     Tanveer
     Ranajit Batabyal
     Partha Chakraborty
     etc.
     
     can be found automatically.
  ============================================================ */

  useEffect(() => {
    const query = searchQuery.trim().toLowerCase();

    if (!query) {
      setPageSearchResults([]);
      return;
    }

    const elements = Array.from(
      document.querySelectorAll(
        "h1, h2, h3, h4, h5, h6, p, span, a, li"
      )
    );

    const results = [];

    elements.forEach((element) => {
      /* Ignore anything inside the header */
      if (element.closest("header")) {
        return;
      }

      /* Ignore anything inside the Join Us modal */
      if (element.closest('[role="dialog"]')) {
        return;
      }

      const text = element.textContent
        ?.replace(/\s+/g, " ")
        .trim();

      if (!text) {
        return;
      }

      if (!text.toLowerCase().includes(query)) {
        return;
      }

      /*
        Ignore very large text blocks.
        We want the actual matching element.
      */
      if (text.length > 180) {
        return;
      }

      /*
        Avoid duplicate results.
      */
      const alreadyExists = results.some(
        (result) =>
          result.title.toLowerCase() ===
          text.toLowerCase()
      );

      if (alreadyExists) {
        return;
      }

      results.push({
        title: text,
        description: "Found on this page",
        type: "page",
      });
    });

    setPageSearchResults(results.slice(0, 10));
  }, [searchQuery]);

  /* ============================================================
     FILTER STATIC RESULTS
  ============================================================ */

  const filteredStaticResults =
    staticSearchItems.filter((item) => {
      const query = searchQuery.trim().toLowerCase();

      if (!query) {
        return true;
      }

      return (
        item.title.toLowerCase().includes(query) ||
        item.description
          .toLowerCase()
          .includes(query) ||
        item.keywords
          .toLowerCase()
          .includes(query)
      );
    });

  /* ============================================================
     COMBINE SEARCH RESULTS
  ============================================================ */

  const combinedSearchResults = [
    ...filteredStaticResults,
    ...pageSearchResults,
  ];

  /* ============================================================
     JOIN US
  ============================================================ */

  const openJoinUs = () => {
    closeMenu();
    closeSearch();

    setIsJoinUsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeJoinUs = () => {
    if (isSubmitting) {
      return;
    }

    setIsJoinUsOpen(false);
    document.body.style.overflow = "";
  };

  /* ============================================================
     FIND PAGE SEARCH RESULT
  ============================================================ */

  const findPageSearchElement = (text) => {
    const elements = Array.from(
      document.querySelectorAll(
        "h1, h2, h3, h4, h5, h6, p, span, a, li"
      )
    );

    return elements.find((element) => {
      if (element.closest("header")) {
        return false;
      }

      if (element.closest('[role="dialog"]')) {
        return false;
      }

      const elementText = element.textContent
        ?.replace(/\s+/g, " ")
        .trim();

      return (
        elementText?.toLowerCase() ===
        text?.toLowerCase()
      );
    });
  };

  /* ============================================================
     SEARCH NAVIGATION
  ============================================================ */

  const handleSearchNavigation = (
    event,
    href,
    item
  ) => {
    closeSearch();
    closeMenu();

    /* ----------------------------------------------------------
       JOIN US
    ---------------------------------------------------------- */

    if (item?.action === "join") {
      event.preventDefault();

      openJoinUs();

      return;
    }

    /* ----------------------------------------------------------
       HOMEPAGE CONTENT RESULT
    ---------------------------------------------------------- */

    if (item?.type === "page") {
      event.preventDefault();

      /*
        Wait until search dropdown disappears,
        then find the actual element.
      */
      requestAnimationFrame(() => {
        const target = findPageSearchElement(
          item.title
        );

        if (!target) {
          return;
        }

        target.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });

        /*
          Temporarily highlight the result.
        */
        target.classList.add(
          "search-highlight-result"
        );

        setTimeout(() => {
          target.classList.remove(
            "search-highlight-result"
          );
        }, 2200);
      });

      return;
    }

    /* ----------------------------------------------------------
       HOMEPAGE HASH NAVIGATION
       
       Team / Contact
    ---------------------------------------------------------- */

    if (
      window.location.pathname === "/" &&
      href?.startsWith("/#")
    ) {
      const targetId = href.substring(2);

      const target =
        document.getElementById(targetId);

      if (target) {
        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        window.history.replaceState(
          null,
          "",
          href
        );
      }
    }
  };

  /* ============================================================
     BOOK NOW
  ============================================================ */

  const handleBookNow = (event) => {
    closeMenu();
    closeSearch();

    if (window.location.pathname === "/") {
      const target =
        document.getElementById("contact");

      if (target) {
        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        window.history.replaceState(
          null,
          "",
          "/#contact"
        );
      }
    }
  };

  /* ============================================================
     ESCAPE KEY
  ============================================================ */

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key !== "Escape") {
        return;
      }

      if (isSearchOpen) {
        closeSearch();
      }

      if (
        isJoinUsOpen &&
        !isSubmitting
      ) {
        setIsJoinUsOpen(false);
        document.body.style.overflow = "";
      }
    };

    window.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, [
    isSearchOpen,
    isJoinUsOpen,
    isSubmitting,
  ]);

  /* ============================================================
     CLEANUP
  ============================================================ */

  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  /* ============================================================
     FORM INPUT CHANGE
  ============================================================ */

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  /* ============================================================
     RESUME CHANGE
  ============================================================ */

  const handleResumeChange = (event) => {
    const file = event.target.files?.[0];

    if (!file) {
      setResume(null);
      return;
    }

    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!allowedTypes.includes(file.type)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Resume",
        text: "Only PDF, DOC and DOCX files are allowed.",
        confirmButtonColor: "#B91C1C",
      });

      event.target.value = "";
      setResume(null);

      return;
    }

    const maxFileSize =
      5 * 1024 * 1024;

    if (file.size > maxFileSize) {
      Swal.fire({
        icon: "error",
        title: "File Too Large",
        text: "Your resume must be smaller than 5 MB.",
        confirmButtonColor: "#B91C1C",
      });

      event.target.value = "";
      setResume(null);

      return;
    }

    setResume(file);
  };

  /* ============================================================
     RESET FORM
  ============================================================ */

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      position: "",
      message: "",
    });

    setResume(null);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  /* ============================================================
     SUBMIT CAREER FORM
  ============================================================ */

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim() ||
      !formData.position.trim() ||
      !formData.message.trim()
    ) {
      await Swal.fire({
        icon: "warning",
        title: "Incomplete Form",
        text: "Please complete all required fields.",
        confirmButtonColor: "#B91C1C",
      });

      return;
    }

    if (!resume) {
      await Swal.fire({
        icon: "warning",
        title: "Resume Required",
        text: "Please upload your resume before submitting.",
        confirmButtonColor: "#B91C1C",
      });

      return;
    }

    try {
      setIsSubmitting(true);

      const data = new FormData();

      data.append(
        "name",
        formData.name.trim()
      );

      data.append(
        "email",
        formData.email.trim()
      );

      data.append(
        "phone",
        formData.phone.trim()
      );

      data.append(
        "position",
        formData.position.trim()
      );

      data.append(
        "message",
        formData.message.trim()
      );

      data.append(
        "resume",
        resume
      );

      const response = await fetch(
        "/api/career",
        {
          method: "POST",
          body: data,
        }
      );

      let result;

      try {
        result = await response.json();
      } catch {
        throw new Error(
          "The server returned an invalid response."
        );
      }

      if (
        response.ok &&
        result?.success === true
      ) {
        setIsJoinUsOpen(false);
        document.body.style.overflow = "";

        resetForm();

        setIsSubmitting(false);

        await Swal.fire({
          icon: "success",
          title: "Application Submitted!",
          text:
            result.message ||
            "Your application has been submitted successfully.",
          confirmButtonColor: "#B91C1C",
          confirmButtonText: "Done",
        });

        return;
      }

      await Swal.fire({
        icon: "error",
        title: "Submission Failed",
        text:
          result?.message ||
          "Unable to submit your application. Please try again.",
        confirmButtonColor: "#B91C1C",
      });
    } catch (error) {
      console.error(
        "Career submission error:",
        error
      );

      await Swal.fire({
        icon: "error",
        title: "Something Went Wrong",
        text:
          error?.message ||
          "Unable to submit your application. Please try again.",
        confirmButtonColor: "#B91C1C",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* ============================================================
          HEADER
      ============================================================ */}

      <header className="sticky top-0 z-[1000] border-b border-slate-200 bg-white">
        <Container>
          <div className="flex h-20 items-center justify-between sm:h-24">

            {/* ======================================================
                LOGO
            ====================================================== */}

        <div className="flex items-center justify-start">
  <Link
    href="/"
    className="flex items-center"
    onClick={(event) => {
      closeMenu();
      closeSearch();

      // Already on homepage
      if (window.location.pathname === "/") {
        event.preventDefault();

        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });

        // Remove any existing hash such as #team or #contact
        window.history.replaceState(
          null,
          "",
          "/"
        );
      }
    }}
  >
    <Image
      src="/images/logo.png"
      alt="Preventative Security Services"
      width={310}
      height={120}
      priority
      className="h-25 w-auto object-contain"
    />
  </Link>
</div>

            {/* ======================================================
                DESKTOP NAVIGATION
            ====================================================== */}

            <nav className="hidden items-center justify-between gap-14 lg:flex">

              {/* SERVICES */}

              <Link
                href="/services"
                className="text-lg font-medium text-slate-700 transition-all hover:text-[#B91C1C] hover:underline hover:underline-offset-4 hover:decoration-2"
              >
                Services
              </Link>

              {/* TEAM */}

              <Link
                href="/#team"
                onClick={(event) =>
                  handleSearchNavigation(
                    event,
                    "/#team",
                    {
                      title: "Our Team",
                      type: "link",
                    }
                  )
                }
                className="text-lg font-medium text-slate-700 transition-all hover:text-[#B91C1C] hover:underline hover:underline-offset-4 hover:decoration-2"
              >
                Team
              </Link>

              {/* JOIN US */}

              <button
                type="button"
                onClick={openJoinUs}
                className="text-lg font-medium text-slate-700 transition-all hover:text-[#B91C1C] hover:underline hover:underline-offset-4 hover:decoration-2"
              >
                Join Us
              </button>

              {/* CONTACT */}

              <Link
                href="/#contact"
                onClick={(event) =>
                  handleSearchNavigation(
                    event,
                    "/#contact",
                    {
                      title: "Contact Us",
                      type: "link",
                    }
                  )
                }
                className="text-lg font-medium text-slate-700 transition-all hover:text-[#B91C1C] hover:underline hover:underline-offset-4 hover:decoration-2"
              >
                Contact Us
              </Link>

            </nav>

            {/* ======================================================
                RIGHT SIDE
            ====================================================== */}

            <div className="hidden items-center gap-4 lg:flex">

              {/* ====================================================
                  SEARCH
              ==================================================== */}

              <div className="relative">

                <button
                  type="button"
                  onClick={() => {
                    setIsSearchOpen(
                      (previous) => !previous
                    );

                    setSearchQuery("");
                  }}
                  aria-label="Search"
                  className={`flex h-11 w-11 items-center justify-center rounded-lg border transition-all ${
                    isSearchOpen
                      ? "border-[#B91C1C] bg-[#B91C1C]/5 text-[#B91C1C]"
                      : "border-slate-200 text-slate-700 hover:border-[#B91C1C] hover:text-[#B91C1C]"
                  }`}
                >
                  {isSearchOpen ? (
                    <X size={21} />
                  ) : (
                    <Search size={21} />
                  )}
                </button>

                {isSearchOpen && (
                  <div className="absolute right-0 top-14 z-[2000] w-[380px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.15)]">

                    {/* SEARCH INPUT */}

                    <div className="border-b border-slate-200 p-3">

                      <div className="flex items-center rounded-xl border border-slate-200 bg-slate-50 px-3">

                        <Search
                          size={18}
                          className="shrink-0 text-slate-400"
                        />

                        <input
                          type="text"
                          autoFocus
                          value={searchQuery}
                          onChange={(event) =>
                            setSearchQuery(
                              event.target.value
                            )
                          }
                          placeholder="Search website..."
                          className="w-full bg-transparent px-3 py-3 text-sm text-slate-800 outline-none placeholder:text-slate-400"
                        />

                        {searchQuery && (
                          <button
                            type="button"
                            onClick={() =>
                              setSearchQuery("")
                            }
                            className="text-slate-400 transition-colors hover:text-slate-700"
                          >
                            <X size={17} />
                          </button>
                        )}

                      </div>

                    </div>

                    {/* SEARCH RESULTS */}

                    <div className="max-h-[420px] overflow-y-auto p-2">

                      {combinedSearchResults.length >
                      0 ? (
                        combinedSearchResults.map(
                          (item, index) => (
                            <Link
                              key={`${item.title}-${index}`}
                              href={
                                item.type === "page" ||
                                item.action === "join"
                                  ? "#"
                                  : item.href
                              }
                              onClick={(event) =>
                                handleSearchNavigation(
                                  event,
                                  item.href || "#",
                                  item
                                )
                              }
                              className="block rounded-xl px-4 py-3 transition-colors hover:bg-[#B91C1C]/5"
                            >
                              <div className="flex items-start gap-3">

                                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#B91C1C]/10 text-[#B91C1C]">
                                  <Search
                                    size={17}
                                  />
                                </div>

                                <div className="min-w-0">

                                  <p className="break-words text-sm font-bold text-slate-800">
                                    {item.title}
                                  </p>

                                  <p className="mt-1 text-xs leading-5 text-slate-500">
                                    {item.description ||
                                      "Found on this page"}
                                  </p>

                                </div>

                              </div>
                            </Link>
                          )
                        )
                      ) : (
                        <div className="px-4 py-10 text-center">

                          <Search
                            size={30}
                            className="mx-auto text-slate-300"
                          />

                          <p className="mt-3 text-sm font-semibold text-slate-700">
                            No results found
                          </p>

                          <p className="mt-1 text-xs text-slate-400">
                            Try another name or keyword.
                          </p>

                        </div>
                      )}

                    </div>

                  </div>
                )}

              </div>

              {/* ====================================================
                  BOOK NOW
              ==================================================== */}

              <Link
                href="/#contact"
                onClick={handleBookNow}
                className="inline-flex items-center justify-center rounded-lg bg-[#B91C1C] px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[#8F1111]"
              >
                Book Now
              </Link>

            </div>

            {/* ======================================================
                MOBILE MENU BUTTON
            ====================================================== */}

            <button
              type="button"
              onClick={() => {
                setIsMenuOpen(
                  (previous) => !previous
                );

                closeSearch();
              }}
              aria-label={
                isMenuOpen
                  ? "Close menu"
                  : "Open menu"
              }
              aria-expanded={isMenuOpen}
              className="flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 text-slate-800 transition-colors hover:bg-slate-100 lg:hidden"
            >
              {isMenuOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>

          </div>

          {/* ============================================================
              MOBILE MENU
          ============================================================ */}

          {isMenuOpen && (
            <div className="border-t border-slate-200 py-5 lg:hidden">

              {/* MOBILE SEARCH */}

              <div className="mb-4">

                <div className="flex items-center rounded-xl border border-slate-200 bg-slate-50 px-3">

                  <Search
                    size={18}
                    className="shrink-0 text-slate-400"
                  />

                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(event) =>
                      setSearchQuery(
                        event.target.value
                      )
                    }
                    placeholder="Search website..."
                    className="w-full bg-transparent px-3 py-3 text-sm text-slate-800 outline-none placeholder:text-slate-400"
                  />

                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() =>
                        setSearchQuery("")
                      }
                      className="text-slate-400"
                    >
                      <X size={17} />
                    </button>
                  )}

                </div>

                {/* MOBILE SEARCH RESULTS */}

                {searchQuery.trim() && (
                  <div className="mt-2 max-h-[360px] overflow-y-auto rounded-xl border border-slate-200 bg-white shadow-lg">

                    {combinedSearchResults.length >
                    0 ? (
                      combinedSearchResults.map(
                        (item, index) => (
                          <Link
                            key={`${item.title}-${index}`}
                            href={
                              item.type === "page" ||
                              item.action === "join"
                                ? "#"
                                : item.href
                            }
                            onClick={(event) =>
                              handleSearchNavigation(
                                event,
                                item.href || "#",
                                item
                              )
                            }
                            className="block border-b border-slate-100 px-4 py-3 last:border-0 hover:bg-[#B91C1C]/5"
                          >
                            <p className="break-words text-sm font-bold text-slate-800">
                              {item.title}
                            </p>

                            <p className="mt-1 text-xs leading-5 text-slate-500">
                              {item.description ||
                                "Found on this page"}
                            </p>
                          </Link>
                        )
                      )
                    ) : (
                      <div className="px-4 py-6 text-center">

                        <p className="text-sm font-semibold text-slate-700">
                          No results found
                        </p>

                        <p className="mt-1 text-xs text-slate-400">
                          Try another name or keyword.
                        </p>

                      </div>
                    )}

                  </div>
                )}

              </div>

              <nav className="flex flex-col">

                {/* SERVICES */}

                <Link
                  href="/services"
                  onClick={closeMenu}
                  className="border-b border-slate-100 py-4 text-lg font-medium text-slate-700"
                >
                  Services
                </Link>

                {/* TEAM */}

                <Link
                  href="/#team"
                  onClick={(event) =>
                    handleSearchNavigation(
                      event,
                      "/#team",
                      {
                        title: "Our Team",
                        type: "link",
                      }
                    )
                  }
                  className="border-b border-slate-100 py-4 text-lg font-medium text-slate-700"
                >
                  Team
                </Link>

                {/* JOIN US */}

                <button
                  type="button"
                  onClick={openJoinUs}
                  className="border-b border-slate-100 py-4 text-left text-lg font-medium text-slate-700"
                >
                  Join Us
                </button>

                {/* CONTACT */}

                <Link
                  href="/#contact"
                  onClick={(event) =>
                    handleSearchNavigation(
                      event,
                      "/#contact",
                      {
                        title: "Contact Us",
                        type: "link",
                      }
                    )
                  }
                  className="border-b border-slate-100 py-4 text-lg font-medium text-slate-700"
                >
                  Contact Us
                </Link>

                {/* BOOK NOW */}

                <Link
                  href="/#contact"
                  onClick={handleBookNow}
                  className="mt-5 inline-flex items-center justify-center rounded-lg bg-[#B91C1C] px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[#8F1111]"
                >
                  Book Now
                </Link>

              </nav>

            </div>
          )}

        </Container>
      </header>

      {/* ============================================================
          JOIN US MODAL
      ============================================================ */}

      {isJoinUsOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 px-4 py-5 backdrop-blur-sm sm:py-8"
          onMouseDown={(event) => {
            if (
              event.target ===
                event.currentTarget &&
              !isSubmitting
            ) {
              closeJoinUs();
            }
          }}
        >

          <div className="relative flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-[28px] border border-white/10 bg-[#08081C] shadow-[0_30px_100px_rgba(0,0,0,0.6)]">

            {/* ======================================================
                MODAL HEADER
            ====================================================== */}

            <div className="relative shrink-0 border-b border-white/10 bg-[#0D0D25] px-6 py-6 sm:px-8">

              <div className="pr-12">

                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#FCA5A5]">
                  Careers
                </p>

                <h2 className="mt-2 text-3xl font-black tracking-tight text-white sm:text-4xl">
                  Join Our Team
                </h2>

                <p className="mt-2 max-w-2xl text-base leading-7 text-slate-400">
                  Interested in joining Preventative
                  Security Services? Send us your
                  details and resume.
                </p>

              </div>

              <button
                type="button"
                onClick={closeJoinUs}
                disabled={isSubmitting}
                aria-label="Close career form"
                className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-slate-300 transition-all hover:bg-white/10 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
              >
                <X size={22} />
              </button>

            </div>

            {/* ======================================================
                FORM
            ====================================================== */}

            <div
              className="overflow-y-auto px-6 py-7 sm:px-8"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >

              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >

                {/* NAME + EMAIL */}

                <div className="grid gap-5 sm:grid-cols-2">

                  <div>

                    <label
                      htmlFor="join-name"
                      className="mb-2 block text-sm font-bold text-white"
                    >
                      Full Name
                      <span className="ml-1 text-[#EF4444]">
                        *
                      </span>
                    </label>

                    <input
                      id="join-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      disabled={isSubmitting}
                      className="w-full rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3.5 text-base text-white outline-none transition-all placeholder:text-slate-500 focus:border-[#B91C1C] focus:bg-white/[0.08] disabled:cursor-not-allowed disabled:opacity-50"
                    />

                  </div>

                  <div>

                    <label
                      htmlFor="join-email"
                      className="mb-2 block text-sm font-bold text-white"
                    >
                      Email Address
                      <span className="ml-1 text-[#EF4444]">
                        *
                      </span>
                    </label>

                    <input
                      id="join-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      disabled={isSubmitting}
                      className="w-full rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3.5 text-base text-white outline-none transition-all placeholder:text-slate-500 focus:border-[#B91C1C] focus:bg-white/[0.08] disabled:cursor-not-allowed disabled:opacity-50"
                    />

                  </div>

                </div>

                {/* PHONE + POSITION */}

                <div className="grid gap-5 sm:grid-cols-2">

                  <div>

                    <label
                      htmlFor="join-phone"
                      className="mb-2 block text-sm font-bold text-white"
                    >
                      Phone Number
                      <span className="ml-1 text-[#EF4444]">
                        *
                      </span>
                    </label>

                    <input
                      id="join-phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      disabled={isSubmitting}
                      className="w-full rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3.5 text-base text-white outline-none transition-all placeholder:text-slate-500 focus:border-[#B91C1C] focus:bg-white/[0.08] disabled:cursor-not-allowed disabled:opacity-50"
                    />

                  </div>

                  <div>

                    <label
                      htmlFor="join-position"
                      className="mb-2 block text-sm font-bold text-white"
                    >
                      Applying For
                      <span className="ml-1 text-[#EF4444]">
                        *
                      </span>
                    </label>

                    <input
                      id="join-position"
                      type="text"
                      name="position"
                      value={formData.position}
                      onChange={handleChange}
                      placeholder="Enter position"
                      disabled={isSubmitting}
                      className="w-full rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3.5 text-base text-white outline-none transition-all placeholder:text-slate-500 focus:border-[#B91C1C] focus:bg-white/[0.08] disabled:cursor-not-allowed disabled:opacity-50"
                    />

                  </div>

                </div>

                {/* MESSAGE */}

                <div>

                  <label
                    htmlFor="join-message"
                    className="mb-2 block text-sm font-bold text-white"
                  >
                    Message
                    <span className="ml-1 text-[#EF4444]">
                      *
                    </span>
                  </label>

                  <textarea
                    id="join-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell us a little about yourself..."
                    disabled={isSubmitting}
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3.5 text-base leading-7 text-white outline-none transition-all placeholder:text-slate-500 focus:border-[#B91C1C] focus:bg-white/[0.08] disabled:cursor-not-allowed disabled:opacity-50"
                  />

                </div>

                {/* RESUME */}

                <div>

                  <label className="mb-2 block text-sm font-bold text-white">
                    Resume
                    <span className="ml-1 text-[#EF4444]">
                      *
                    </span>
                  </label>

                  <label
                    htmlFor="join-resume"
                    className={`flex cursor-pointer items-center gap-4 rounded-xl border border-dashed border-white/15 bg-white/[0.04] px-5 py-5 transition-all ${
                      isSubmitting
                        ? "pointer-events-none opacity-50"
                        : "hover:border-[#B91C1C]/60 hover:bg-[#B91C1C]/5"
                    }`}
                  >

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#B91C1C]/10 text-xl text-[#FCA5A5]">
                      ↑
                    </div>

                    <div className="min-w-0">

                      <p className="truncate text-sm font-bold text-white sm:text-base">
                        {resume
                          ? resume.name
                          : "Upload your resume"}
                      </p>

                      <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                        PDF, DOC or DOCX · Maximum 5 MB
                      </p>

                    </div>

                    <input
                      ref={fileInputRef}
                      id="join-resume"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleResumeChange}
                      disabled={isSubmitting}
                      className="hidden"
                    />

                  </label>

                </div>

                {/* SUBMIT */}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#B91C1C] px-6 py-4 text-base font-bold text-white shadow-lg shadow-red-950/20 transition-all duration-300 hover:bg-[#991B1B] disabled:cursor-not-allowed disabled:opacity-60"
                >

                  {isSubmitting ? (
                    <>
                      <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />

                      Submitting Application...
                    </>
                  ) : (
                    <>
                      Submit Application

                      <span className="text-xl">
                        →
                      </span>
                    </>
                  )}

                </button>

                <p className="text-center text-xs leading-5 text-slate-500">
                  Your information will be securely reviewed
                  by our recruitment team.
                </p>

              </form>

            </div>

          </div>

          <style jsx global>{`
            .overflow-y-auto::-webkit-scrollbar {
              display: none;
            }

            .search-highlight-result {
              animation: searchResultHighlight 2.2s
                ease-in-out;
            }

            @keyframes searchResultHighlight {
              0% {
                box-shadow:
                  0 0 0 0 rgba(185, 28, 28, 0);
              }

              25% {
                box-shadow:
                  0 0 0 8px rgba(185, 28, 28, 0.22);
              }

              55% {
                box-shadow:
                  0 0 0 8px rgba(185, 28, 28, 0.12);
              }

              100% {
                box-shadow:
                  0 0 0 0 rgba(185, 28, 28, 0);
              }
            }
          `}</style>

        </div>
      )}
    </>
  );
}