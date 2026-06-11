export default function RecipeGrid({ recipes, onOpen }) {
  return (
    <div className="recipe-grid">
      {recipes.map(r => (
        <div key={r.id} className="recipe-card" onClick={() => onOpen(r.id)}>
          <div className="recipe-card-top" style={{ background: r.color }}>
            <div className="card-pattern-a" />
            <div className="card-pattern-b" />
            <div className="card-cat-label">{r.catLabel}</div>
            <h3 className="card-title">{r.name}</h3>
          </div>
          <div className="recipe-card-body">
            <p className="card-snippet">{r.snippet}</p>
            <div className="card-footer">
              <span>{r.ingredientCount} {r.ingredientCount === 1 ? 'ingredient' : 'ingredients'}</span>
              <span className="card-view" style={{ color: r.color }}>View ▸</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
