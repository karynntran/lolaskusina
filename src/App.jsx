import { useState, useEffect, useCallback } from 'react'
import { RECIPES, CATEGORIES } from './data/recipes'
import Header from './components/Header'
import FilterBar from './components/FilterBar'
import RecipeGrid from './components/RecipeGrid'
import RecipeModal from './components/RecipeModal'
import PrintArea from './components/PrintArea'

export default function App() {
  const [cat, setCat] = useState('all')
  const [query, setQuery] = useState('')
  const [openId, setOpenId] = useState(null)
  const [printItems, setPrintItems] = useState([])

  const filtered = RECIPES.filter(r =>
    (cat === 'all' || r.category === cat) &&
    (!query.trim() || r.name.toLowerCase().includes(query.trim().toLowerCase()) ||
      r.ingredients.join(' ').toLowerCase().includes(query.trim().toLowerCase()))
  )

  const openRecipe = RECIPES.find(r => r.id === openId) ?? null

  const doPrint = useCallback((arr) => {
    setPrintItems(arr)
    setTimeout(() => window.print(), 40)
  }, [])

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') setOpenId(null) }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  useEffect(() => {
    document.body.style.overflow = openId != null ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [openId])

  const resultLabel = filtered.length +
    (filtered.length === 1 ? ' recipe' : ' recipes') +
    (cat !== 'all' ? ' in ' + (CATEGORIES.find(c => c.key === cat)?.label ?? cat) : '') +
    (query.trim() ? ` matching "${query.trim()}"` : '')

  return (
    <>
      <div className="app">
        <Header query={query} onSearch={setQuery} />
        <FilterBar
          categories={CATEGORIES}
          activeCat={cat}
          onCat={setCat}
          total={RECIPES.length}
          onPrintAll={() => doPrint(filtered)}
        />
        <div className="results-section">
          <div className="container">
            <div className="result-label">{resultLabel}</div>
            {filtered.length > 0
              ? <RecipeGrid recipes={filtered} onOpen={setOpenId} />
              : <div className="empty-state">
                  <div className="empty-tagalog">Wala pa rito…</div>
                  <p>No recipes match that. Try another word or category.</p>
                </div>
            }
          </div>
        </div>
      </div>

      {openRecipe && (
        <RecipeModal
          recipe={openRecipe}
          onClose={() => setOpenId(null)}
          onPrint={() => doPrint([openRecipe])}
        />
      )}

      <PrintArea items={printItems} />
    </>
  )
}
