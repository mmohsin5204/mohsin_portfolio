export const StatCounter = ({ value, label }: { value: string, label: string }) => (
  <div className="flex flex-col">
    <span className="text-4xl md:text-5xl font-black tracking-tighter text-brand-black">{value}</span>
    <span className="text-[10px] uppercase tracking-widest text-brand-gray mt-1 max-w-[120px] leading-tight">
      {label}
    </span>
  </div>
);
