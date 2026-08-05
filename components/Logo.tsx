export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <span className="brandLockup">
      <svg className="logoMark" viewBox="0 0 64 64" aria-hidden="true">
        <path d="M9 11h22v8H17v26h14v8H9V11Z" fill="var(--cobalt)" />
        <path d="M33 11h22v42H33v-8h14V19H33v-8Z" fill="currentColor" />
        <path d="M25 25h14v14H25z" fill="var(--orange)" />
      </svg>
      {!compact && <strong>MEDIACRE</strong>}
    </span>
  );
}

