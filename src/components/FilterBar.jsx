export default function FilterBar({ categories, activeCat, onCat, total, onPrintAll }) {
  const chips = [
    { key: 'all', label: 'Lahat', color: '#7A4B8A', count: total },
    ...categories.map(c => ({ key: c.key, label: c.fil, color: c.color, count: c.count }))
  ]

  return (
    <div className="filter-bar">
      <div className="filter-bar-inner">
        {chips.map(chip => {
          const active = activeCat === chip.key
          return (
            <button
              key={chip.key}
              className={'chip' + (active ? ' chip--active' : '')}
              style={active ? { background: chip.color, borderColor: chip.color } : {}}
              onClick={() => onCat(chip.key)}
            >
              <span
                className="chip-dot"
                style={{ background: active ? 'rgba(255,255,255,.85)' : chip.color }}
              />
              {chip.label}
              <span className={'chip-count' + (active ? ' chip-count--active' : '')}>
                {chip.count}
              </span>
            </button>
          )
        })}
        <button className="print-all-btn" onClick={onPrintAll}>
          ⎙ Print all recipes
        </button>
      </div>
    </div>
  )
}
