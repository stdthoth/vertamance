import { Link } from "react-router";

export const businessNavItems = [
  { label: "Pro Explorer Peak", to: "/pro-explorer-peak" },
  { label: "Vertmance engineering", to: "/engineering-construction" },
  {
    label: "Owonikoko Ranch\nManagement Institute",
    to: "/business/owonikoko-ranch-management-institute",
  },
  { label: "Oke-Keke", to: "/portfolio/oke-keke" },
  { label: "Xsky Entertainment", to: "/xsky-cafe-lounge" },
  {
    label: "Owonikoko Ranch & Farms",
    to: "/portfolio/owonikoko-ranch-farm-initiatives",
  },
];

export function BusinessFlyout({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50" onClick={onClose}>
      <div className="absolute left-1/2 top-[88px] w-[min(500px,calc(100vw-2rem))] -translate-x-1/2 rounded-[22px] border border-white/40 bg-white/55 p-4 shadow-[0_18px_42px_rgba(0,0,0,0.10)] backdrop-blur-xl sm:p-5">
        <div
          className="grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2"
          onClick={(event) => event.stopPropagation()}
        >
          {businessNavItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              onClick={onClose}
              className="rounded-xl px-3 py-2 text-[0.9rem] font-semibold leading-5 text-[#121212] transition-colors hover:bg-white/70 hover:text-[#e55a00] sm:text-[0.95rem]"
            >
              <span className="whitespace-pre-line">{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
