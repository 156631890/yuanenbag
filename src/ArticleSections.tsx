import type { Lang } from './data'
import type { EditorialSection } from './editorial'
import ArticleFigure from './ArticleFigure'

export default function ArticleSections({ sections, lang }: { sections: EditorialSection[]; lang: Lang }) {
  return <>{sections.map((section, index) => <section key={index} className="editorial-body-section">
    <h2>{section.heading[lang]}</h2>
    {section.paragraphs.map((paragraph, i) => <p key={i}>{paragraph[lang]}</p>)}
    {section.bullets && <ul>{section.bullets.map((bullet, i) => <li key={i}>{bullet[lang]}</li>)}</ul>}
    {section.table && <div className="editorial-table-scroll" role="region" aria-label={section.table.caption[lang]} tabIndex={0}>
      <table><caption>{section.table.caption[lang]}</caption><thead><tr>{section.table.columns.map((column, i) => <th scope="col" key={i}>{column[lang]}</th>)}</tr></thead>
        <tbody>{section.table.rows.map((row, i) => <tr key={i}>{row.map((cell, j) => j === 0 ? <th scope="row" key={j}>{cell[lang]}</th> : <td key={j}>{cell[lang]}</td>)}</tr>)}</tbody>
      </table>
    </div>}
    {section.image && <ArticleFigure image={section.image} lang={lang} />}
  </section>)}</>
}
