"use client";

import { type FormEvent, useState } from "react";
import { COURSE_TABS } from "@/data";
import { Button } from "../ui/Button";
import { CourseCard } from "../ui/CourseCard";
import { CourseBanner } from "./CourseBanner";
import { CATALOG, COURSE_CATEGORIES } from "./catalog";

const PAGE_SIZE = 18;
const CATEGORIES = [...COURSE_TABS, "Cooking"];
const CONTROL_CLASS =
  "min-h-11 rounded-full border border-brand-border-subtle bg-white px-4 text-sm text-brand-text-secondary outline-none focus-visible:ring-2 focus-visible:ring-brand-primary";

export function CourseCatalog({
  initialQuery = "",
}: {
  initialQuery?: string;
}) {
  const [query, setQuery] = useState(initialQuery);
  const [draft, setDraft] = useState(initialQuery);
  const [category, setCategory] = useState("Featured");
  const [level, setLevel] = useState("All levels");
  const [sort, setSort] = useState("Most relevant");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [maxPrice, setMaxPrice] = useState("any");
  const [minimumRating, setMinimumRating] = useState("0");
  const filtered = CATALOG.filter(
    ({ course }) =>
      (category === "Featured" || COURSE_CATEGORIES[course.id] === category) &&
      (level === "All levels" || course.level === level) &&
      (maxPrice === "any" || course.price <= Number(maxPrice)) &&
      course.rating >= Number(minimumRating) &&
      `${course.title} ${course.author} ${COURSE_CATEGORIES[course.id]}`
        .toLowerCase()
        .includes(query.trim().toLowerCase())
  );
  if (sort === "Title A–Z") {
    filtered.sort((a, b) => a.course.title.localeCompare(b.course.title));
  }
  if (sort === "Highest rated") {
    filtered.sort((a, b) => b.course.rating - a.course.rating);
  }
  if (sort === "Price: low to high") {
    filtered.sort((a, b) => a.course.price - b.course.price);
  }
  const pages = Math.ceil(filtered.length / PAGE_SIZE);
  const visible = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  function search(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setQuery(draft);
    setPage(1);
    const url = new URL(window.location.href);
    url.searchParams.set("q", draft);
    window.history.replaceState(null, "", url);
  }
  function changePage(next: number) {
    setPage(next);
    document
      .getElementById("course-results")
      ?.scrollIntoView({ behavior: "instant", block: "start" });
  }
  return (
    <main>
      <CourseBanner className="pb-16 text-center lg:pb-[76px]">
        <h1 className="font-brand-heading font-semibold text-3xl sm:text-4xl">
          Find Your Next Course
        </h1>
        <search>
          <form
            className="mx-auto mt-8 flex max-w-[640px] gap-3"
            onSubmit={search}
          >
            <label className="flex min-w-0 flex-1 items-center gap-3 rounded-full bg-white px-5 text-brand-text-muted">
              <svg
                aria-hidden="true"
                className="size-5 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  cx="10.5"
                  cy="10.5"
                  r="6.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path d="m16 16 4 4" stroke="currentColor" strokeWidth="1.5" />
              </svg>
              <span className="sr-only">Search courses</span>
              <input
                className="h-12 w-full min-w-0 bg-transparent text-base text-brand-text outline-none"
                name="q"
                onChange={(e) => setDraft(e.target.value)}
                placeholder="Search"
                type="search"
                value={draft}
              />
            </label>
            <Button className="gap-2 rounded-full px-5" type="submit">
              Search <span aria-hidden="true">⌕</span>
            </Button>
          </form>
        </search>
      </CourseBanner>
      <section
        aria-label="Course catalog"
        className="mx-auto max-w-[1248px] px-4 py-12 sm:px-6 lg:py-16"
        id="course-results"
      >
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-2">
            <button
              aria-controls="catalog-filters"
              aria-expanded={filtersOpen}
              className={CONTROL_CLASS}
              onClick={() => setFiltersOpen(!filtersOpen)}
              type="button"
            >
              <span aria-hidden="true" className="mr-2">
                ☷
              </span>
              Filter
            </button>
            <label className="sr-only" htmlFor="level">
              Course level
            </label>
            <select
              className={CONTROL_CLASS}
              id="level"
              onChange={(e) => {
                setLevel(e.target.value);
                setPage(1);
              }}
              value={level}
            >
              <option>All levels</option>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
            <label className="sr-only" htmlFor="category">
              Category
            </label>
            <select
              className={`${CONTROL_CLASS} max-w-[180px]`}
              id="category"
              onChange={(e) => {
                setCategory(e.target.value);
                setPage(1);
              }}
              value={category}
            >
              {CATEGORIES.map((c) => (
                <option key={c} value={c}>
                  {c === "Featured" ? "All categories" : c}
                </option>
              ))}
            </select>
          </div>
          <label className="sr-only" htmlFor="sort">
            Sort courses
          </label>
          <select
            className={CONTROL_CLASS}
            id="sort"
            onChange={(e) => {
              setSort(e.target.value);
              setPage(1);
            }}
            value={sort}
          >
            <option>Most relevant</option>
            <option>Highest rated</option>
            <option>Price: low to high</option>
            <option>Title A–Z</option>
          </select>
        </div>
        {filtersOpen && (
          <div
            className="mt-4 flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-brand-bg-muted p-5"
            id="catalog-filters"
          >
            <label className="flex flex-wrap items-center gap-3 text-sm">
              Price
              <select
                aria-label="Price"
                className={CONTROL_CLASS}
                onChange={(event) => {
                  setMaxPrice(event.target.value);
                  setPage(1);
                }}
                value={maxPrice}
              >
                <option value="any">Any price</option>
                <option value="20">Up to $20</option>
                <option value="30">Up to $30</option>
                <option value="50">Up to $50</option>
              </select>
            </label>
            <label className="flex flex-wrap items-center gap-3 text-sm">
              Minimum rating
              <select
                aria-label="Minimum rating"
                className={CONTROL_CLASS}
                onChange={(event) => {
                  setMinimumRating(event.target.value);
                  setPage(1);
                }}
                value={minimumRating}
              >
                <option value="0">Any rating</option>
                <option value="4">4 and above</option>
                <option value="4.5">4.5 and above</option>
                <option value="5">5 stars</option>
              </select>
            </label>
            <button
              className="min-h-11 text-brand-primary text-sm underline"
              onClick={() => {
                setMaxPrice("any");
                setMinimumRating("0");
                setCategory("Featured");
                setLevel("All levels");
                setQuery("");
                setDraft("");
                setPage(1);
              }}
              type="button"
            >
              Clear all filters
            </button>
          </div>
        )}
        <fieldset
          aria-label="Course categories"
          className="mt-7 flex flex-wrap gap-2 lg:justify-between"
        >
          {CATEGORIES.map((c) => (
            <button
              aria-pressed={category === c}
              className={`min-h-11 rounded-full px-4 text-sm transition-colors ${category === c ? "bg-brand-secondary" : "bg-brand-bg-muted text-brand-text-secondary hover:bg-brand-gray-100"}`}
              key={c}
              onClick={() => {
                setCategory(c);
                setPage(1);
              }}
              type="button"
            >
              {c}
            </button>
          ))}
        </fieldset>
        <p aria-live="polite" className="sr-only">
          {filtered.length} courses found. Page {page} of {pages || 1}.
        </p>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-8">
          {visible.map(({ course, key }) => (
            <CourseCard course={course} key={key} variant="catalog" />
          ))}
        </div>
        {visible.length === 0 && (
          <div className="rounded-2xl bg-brand-bg-muted px-6 py-16 text-center">
            <h2 className="font-brand-heading text-xl">No courses found</h2>
            <p className="mt-3 text-brand-text-secondary">
              Try another search or choose a different category or level.
            </p>
          </div>
        )}
        {pages > 1 && (
          <nav
            aria-label="Course results pages"
            className="mt-16 flex items-center justify-center gap-1 sm:gap-3"
          >
            <button
              aria-label="Previous page"
              className="size-11 rounded-full border border-brand-border disabled:opacity-30"
              disabled={page === 1}
              onClick={() => changePage(page - 1)}
              type="button"
            >
              ‹
            </button>
            {Array.from({ length: pages }, (_, i) => i + 1).map((n) => (
              <button
                aria-current={n === page ? "page" : undefined}
                aria-label={`Page ${n}`}
                className={`size-11 rounded-full text-sm ${n === page ? "bg-brand-bg-muted font-bold" : "hover:bg-brand-bg-muted"}`}
                key={n}
                onClick={() => changePage(n)}
                type="button"
              >
                {n}
              </button>
            ))}
            <button
              aria-label="Next page"
              className="size-11 rounded-full border border-brand-border disabled:opacity-30"
              disabled={page === pages}
              onClick={() => changePage(page + 1)}
              type="button"
            >
              ›
            </button>
          </nav>
        )}
      </section>
    </main>
  );
}
