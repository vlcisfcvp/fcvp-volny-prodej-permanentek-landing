function Banner({ inView }: { inView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.5, delay: 0.7, ease: EASE }}
      className="relative mt-8 overflow-hidden s10-banner-wrap"
    >
      <img
        src="/s10-banner-desktop.jpg"
        alt="Viktoria Key"
        loading="lazy"
        decoding="async"
        className="s10-img-desktop"
      />
      <img
        src="/s10-banner-mobile.jpg"
        alt="Viktoria Key"
        loading="eager"
        decoding="async"
        className="s10-img-mobile"
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 1,
          background: "linear-gradient(180deg, rgba(14,17,41,0) 0%, rgba(14,17,41,0.4) 50%, rgba(14,17,41,0.95) 100%)",
        }}
      />
      <div
        className="hidden md:block absolute inset-0 rounded-[16px] pointer-events-none"
        style={{ border: "1px solid rgba(255,255,255,0.08)", zIndex: 2 }}
      />
      <style>{`
        .s10-img-desktop {
          display: none;
          width: 100%;
          height: auto;
          object-fit: cover;
          object-position: center top;
        }
        .s10-img-mobile {
          display: block;
          width: 100%;
          height: auto;
          object-fit: cover;
          object-position: center top;
        }
        .s10-banner-wrap {
          width: 100vw;
          margin-left: calc(-1 * var(--container-padding, 24px));
          border-radius: 0;
        }
        @media (min-width: 768px) {
          .s10-img-desktop { display: block; }
          .s10-img-mobile  { display: none; }
          .s10-banner-wrap {
            width: 100%;
            max-width: 880px;
            margin-left: auto;
            margin-right: auto;
            aspect-ratio: 16/9;
            border-radius: 16px;
          }
        }
      `}</style>
    </motion.div>
  );
}
