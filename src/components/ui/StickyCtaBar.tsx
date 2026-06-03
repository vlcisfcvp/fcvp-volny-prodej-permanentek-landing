import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export function StickyCtaBar() {
  const { ref: entryRef, inView: entered } = useInView({ threshold: 0 });
  const { ref: exitRef, inView: exited } = useInView({ threshold: 0 });
  const [variant, setVariant] = useState<"STANDARD" | "EXTRA">("EXTRA");
  const [toggleOpen, setToggleOpen] = useState(false);

  useEffect(() => {
    // mount sentinel refs onto DOM
    const s09 = document.getElementById("s09");
    const after = document.getElementById("sticky-exit-marker");
    if (s09) entryRef(s09);
    if (after) exitRef(after);
  }, [entryRef, exitRef]);

  const visible = entered && !exited;
  const price = variant === "EXTRA" ? "3 250" : "[STANDARD_PRICE]";
  const href = variant === "EXTRA" ? "https://bit.ly/4jWo0ke" : "https://bit.ly/4j7TSS2";

  return (
    <div
      className="fixed bottom-0 left-0 z-50 w-full md:hidden"
      style={{
        transform: visible ? "translateY(0)" : "translateY(100%)",
        transition: "transform 300ms cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {toggleOpen && (
        <div className="flex gap-2 border-t border-border-default bg-bg-section/95 px-4 py-3 backdrop-blur-md">
          {(["STANDARD", "EXTRA"] as const).map((v) => (
            <button
              key={v}
              onClick={() => { setVariant(v); setToggleOpen(false); }}
              className={`t-label flex-1 rounded-md px-3 py-2 ${variant === v ? "bg-cta-primary text-white" : "border border-border-default text-text-secondary"}`}
            >
              {v}
            </button>
          ))}
        </div>
      )}
      <div
        className="sticky-cta-bar flex items-center gap-3 border-t border-border-default px-4 py-3"
        style={{ background: "rgba(28,33,67,0.92)", backdropFilter: "blur(16px)", boxShadow: "0 -8px 32px rgba(0,0,0,0.4)" }}
      >
        <button onClick={() => setToggleOpen((o) => !o)} className="flex-1 text-left">
          <div className="t-body-small font-semibold text-text-primary">{variant}</div>
          <div className="tabular text-text-accent-red" style={{ fontSize: 16, fontWeight: 700 }}>od {price} Kč</div>
        </button>
        <a
          href={href}
          className="cta-primary"
          style={{ padding: "10px 20px", minHeight: 40, fontSize: 14 }}
        >
          Koupit
        </a>
      </div>
    </div>
  );
}
