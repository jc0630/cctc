import React, { useState } from 'react';
import { FileText } from 'lucide-react';
import { Language } from '../../types';
import { SUSTAINABILITY_REPORTS } from '../../data/content';

interface ReportsTabProps {
  language: Language;
}

// Real cover scans haven't been supplied yet (see SUSTAINABILITY_REPORTS —
// coverImage points at /reports/cover-{year}.jpg). Until a file exists at
// that path, each card falls back to a branded placeholder so the grid still
// reads cleanly; dropping a real cover in later needs no code change.
const ReportCover: React.FC<{ src: string; year: number }> = ({ src, year }) => {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="w-full aspect-[1/1.414] rounded-[var(--radius-card)] bg-[var(--color-blue-100)] border border-[var(--color-blue-300)] flex flex-col items-center justify-center gap-2">
        <FileText className="w-10 h-10 sm:w-12 sm:h-12 text-[var(--color-cta)]" />
        <span className="text-sm sm:text-base font-bold text-[var(--color-cta)]">{year}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      onError={() => setFailed(true)}
      alt={`${year}`}
      className="w-full aspect-[1/1.414] object-cover rounded-[var(--radius-card)] border border-slate-200"
    />
  );
};

export const ReportsTab: React.FC<ReportsTabProps> = ({ language }) => {
  return (
    <div className="flex flex-col gap-8 sm:gap-10">
      <h2 className="section-title self-start text-2xl sm:text-3xl font-bold tracking-tight">
        {language === 'zh' ? '永續報告書' : 'Sustainability Reports'}
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
        {SUSTAINABILITY_REPORTS.map((report) => (
          <a
            key={report.year}
            href={report.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-3 transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="transition-shadow duration-300 group-hover:shadow-lg rounded-[var(--radius-card)]">
              <ReportCover src={report.coverImage} year={report.year} />
            </div>
            <div className="flex items-center gap-2 justify-center text-center">
              <FileText className="w-4 h-4 shrink-0 text-[var(--color-cta)]" />
              <span className="text-sm sm:text-base font-bold text-[var(--color-ink)] group-hover:text-[var(--color-cta)] transition-colors">
                {language === 'zh' ? report.titleZh : report.titleEn}
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
