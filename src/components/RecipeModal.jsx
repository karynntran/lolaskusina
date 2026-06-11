import { CATEGORIES } from '../data/recipes'

export default function RecipeModal({ recipe, onClose, onPrint }) {
  const catInfo = CATEGORIES.find(c => c.key === recipe.category)
  const paras = recipe.procedure.split('\n').map(s => s.trim()).filter(Boolean)

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        {/* Header */}
        <div className="modal-header" style={{ background: recipe.color }}>
          <div className="modal-pattern-a" />
          <div className="modal-pattern-b" />
          <button className="modal-close" onClick={onClose}>×</button>
          <div className="modal-header-content">
            <div className="modal-cat-pill">
              {recipe.catLabel} · {recipe.catFil}
            </div>
            <h2 className="modal-title">{recipe.name}</h2>
          </div>
        </div>

        {/* Body */}
        <div className="modal-body">
          <div className="modal-ingredients">
            <div className="modal-section-label">Sangkap · Ingredients</div>
            <div className="modal-ingredient-list">
              {recipe.ingredients.map((ing, i) => (
                <div key={i} className="modal-ingredient">
                  <span className="modal-ingredient-dot" style={{ background: recipe.color }} />
                  <span>{ing}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="modal-procedure">
            <div className="modal-section-label">Paraan · Procedure</div>
            <div className="modal-paras">
              {paras.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="modal-footer">
          <span className="modal-footer-tagalog">Mula sa kusina ni Lola</span>
          <button
            className="print-btn"
            style={{ background: recipe.color }}
            onClick={onPrint}
          >
            ⎙ Print recipe card
          </button>
        </div>
      </div>
    </div>
  )
}
