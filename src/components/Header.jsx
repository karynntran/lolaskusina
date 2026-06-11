export default function Header({ query, onSearch }) {
  return (
    <div className="header-band">
      <div className="header-pattern-a" />
      <div className="header-pattern-b" />
      <div className="header-inner">
        <div className="header-eyebrow">Mga lutong-bahay ni Lola · Family recipes</div>
        <h1 className="header-title">Lola's Kusina</h1>
        <p className="header-subtitle">
          Sixty-eight handwritten recipes, kept and cooked for generations.
          Come — there's always a seat at Lola's table.
        </p>
        <div className="search-wrap">
          <span className="search-icon">⌕</span>
          <input
            type="text"
            className="search-input"
            value={query}
            onChange={e => onSearch(e.target.value)}
            placeholder="Search recipes or ingredients…"
          />
        </div>
      </div>
    </div>
  )
}
