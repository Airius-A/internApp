import React from "react";

export default function CompanyFilters({ filters, setFilters, data }) {
  const unique = (field) => [...new Set(data.map((item) => item[field]))];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
      <select
        value={filters.level}
        onChange={(e) => setFilters({ ...filters, level: e.target.value })}
      >
        <option value="">所有等级</option>
        {unique("level").map((l) => (
          <option key={l}>{l}</option>
        ))}
      </select>

      <select
        value={filters.country}
        onChange={(e) => setFilters({ ...filters, country: e.target.value })}
      >
        <option value="">所有国家</option>
        {unique("country").map((c) => (
          <option key={c}>{c}</option>
        ))}
      </select>

      <select
        value={filters.city}
        onChange={(e) => setFilters({ ...filters, city: e.target.value })}
      >
        <option value="">所有城市</option>
        {unique("city").map((c) => (
          <option key={c}>{c}</option>
        ))}
      </select>

      {/* 可再加滑动条控件处理 revenue / employees / foundedYear */}
    </div>
  );
}
