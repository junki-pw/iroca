// ヒーロー：EYELASH SALON 罫線見出し・ロゴ・キャッチコピー・バッジ
export function Hero() {
  return (
    <header className="hero">
      <div className="hero__title">
        <p className="eyebrow">
          <span className="eyebrow__rule eyebrow__rule--left" aria-hidden="true" />
          <span className="eyebrow__diamond" aria-hidden="true" />
          <span className="eyebrow__text">EYELASH SALON</span>
          <span className="eyebrow__diamond" aria-hidden="true" />
          <span className="eyebrow__rule eyebrow__rule--right" aria-hidden="true" />
        </p>

        <h1 className="logo">iroca</h1>

        <p className="tagline">忙しい毎日に、さりげない華やかさを。</p>
      </div>

      <ul className="badges">
        <li className="badge">美容室併設</li>
        <li className="badge">同日施術OK</li>
      </ul>
    </header>
  );
}
