import React, { useState } from 'react'
import { WORSHIP_OPTIONS, CELL_OPTIONS } from '../config.js'

const worshipClass = { 출석: 'ok', 온라인: 'on', 결석: 'no' }

export default function MemberRow({ member, rec, onChange }) {
  const [showNote, setShowNote] = useState(!!rec.note)

  return (
    <div className="row card">
      <div className="row-top">
        <div className="name">
          {member.name}
          {member.status === '신규자' && <span className="tag new">신규</span>}
        </div>
        <button className="notebtn" onClick={() => setShowNote((v) => !v)} title="비고">
          ✏️
        </button>
      </div>

      <div className="seggroup">
        <div className="segset">
          {WORSHIP_OPTIONS.map((opt) => (
            <button
              key={opt}
              className={'seg ' + (rec.worship === opt ? 'active ' + worshipClass[opt] : '')}
              onClick={() => onChange({ worship: rec.worship === opt ? '' : opt })}
            >
              {opt}
            </button>
          ))}
        </div>
        <div className="segset small">
          {CELL_OPTIONS.map((opt) => (
            <button
              key={opt}
              className={'seg ' + (rec.cell === opt ? 'active ' + (opt === '참석' ? 'ok' : 'no') : '')}
              onClick={() => onChange({ cell: rec.cell === opt ? '' : opt })}
            >
              순모임 {opt}
            </button>
          ))}
        </div>
      </div>

      {showNote && (
        <input
          className="input note"
          placeholder="비고 (사유 등)"
          value={rec.note || ''}
          onChange={(e) => onChange({ note: e.target.value })}
        />
      )}
    </div>
  )
}
