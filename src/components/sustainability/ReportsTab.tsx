import React, { useState } from 'react';
import { FileText } from 'lucide-react';
import { Language } from '../../types';
import { SUSTAINABILITY_REPORTS } from '../../data/content';
import { SectionTitle } from '../shared/SectionTitle';

interface ReportsTabProps {
  language: Language;
}

// Real cover scans are landscape (the client's supplied files are ~7015×4960,
// a 1.414:1 ratio) rather than a typical portrait book cover, so the frame
// matches that ratio exactly — object-cover then has nothing to crop. Years
// without a real cover yet (coverImage still pointing at /reports/cover-
// {year}.jpg) fall back to a branded placeholder at the same ratio so the
// grid stays visually consistent; dropping in a real cover later needs no
// code change.
const ReportCover: React.FC<{ src: string; year: number }> = ({ src, year }) => {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="w-full aspect-[7015/4960] rounded-[var(--radius-card)] bg-[var(--color-blue-100)] border border-[var(--color-blue-300)] flex flex-col items-center justify-center gap-2">
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
      className="w-full aspect-[7015/4960] object-cover rounded-[var(--radius-card)] border border-slate-200"
    />
  );
};

export const ReportsTab: React.FC<ReportsTabProps> = ({ language }) => {
  return (
    <div id="sustainability-reports" className="flex flex-col gap-8 sm:gap-10">
      <SectionTitle>{language === 'zh' ? '永續報告書' : 'Sustainability Reports'}</SectionTitle>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
        {SUSTAINABILITY_REPORTS.map((report) => (
          <div key={report.year} className="group flex flex-col gap-3">
            <div className="rounded-[var(--radius-card)]">
              <ReportCover src={report.coverImage} year={report.year} />
            </div>
            <div className="flex items-center gap-2 justify-center text-center">
              <FileText className="w-4 h-4 shrink-0 text-[var(--color-cta)]" />
              <span className="text-sm sm:text-base font-bold text-[var(--color-ink)] group-hover:text-[var(--color-cta)] transition-colors">
                {language === 'zh' ? report.titleZh : report.titleEn}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
