export default function ProgressBar({ current, total }: { current: number; total: number }) {
  const progressPercent = Math.round(((current + 1) / total) * 100)

  return (
    <div
      className="progress-container"
      role="progressbar"
      aria-valuenow={current + 1}
      aria-valuemin={1}
      aria-valuemax={total}
      aria-label={`Question ${current + 1} of ${total}`}
    >
      <div className="progress-info">
        <span className="progress-label">Progress</span>
        <span className="progress-count">
          {current + 1} of {total} ({progressPercent}%)
        </span>
      </div>
      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${progressPercent}%` }} />
      </div>
    </div>
  )
}
