export default function PrintArea({ items }) {
  if (!items || items.length === 0) return null

  return (
    <div id="lola-print-area">
      {items.map((r, i) => {
        const paras = r.procedure.split('\n').map(s => s.trim()).filter(Boolean)
        const isLast = i === items.length - 1
        return (
          <article key={r.id} className={'print-card' + (isLast ? '' : ' print-card--break')}>
            <h1 className="print-card-title">{r.name}</h1>
            <div className="print-card-meta">{r.catLabel}</div>
            <div className="print-card-body">
              <div className="print-ingredients">
                <h2>Ingredients</h2>
                {r.ingredients.map((ing, j) => (
                  <div key={j} className="print-ingredient">
                    <span>•</span><span>{ing}</span>
                  </div>
                ))}
              </div>
              <div className="print-procedure">
                <h2>Procedure</h2>
                {paras.map((p, j) => <p key={j}>{p}</p>)}
              </div>
            </div>
          </article>
        )
      })}
    </div>
  )
}
