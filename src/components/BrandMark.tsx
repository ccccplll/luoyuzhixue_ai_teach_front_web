export function BrandMark({ className = 'h-12 w-12' }: { className?: string }) {
  return (
    <span className={`inline-grid place-items-center overflow-hidden rounded-full ${className}`} aria-hidden="true">
      <img src="/school-crest.png" alt="" className="h-full w-full object-contain" />
    </span>
  );
}
