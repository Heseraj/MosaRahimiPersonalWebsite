import { overlapBands, overlapTimeline } from "@/lib/profile";

const AXIS_START = 1999;
const AXIS_END = 2027;

function pct(year: number) {
  return ((year - AXIS_START) / (AXIS_END - AXIS_START)) * 100;
}

const ticks: number[] = [];
for (let year = AXIS_START; year <= AXIS_END; year += 3) {
  ticks.push(year);
}

export function CareerOverlapTimeline() {
  return (
    <div className="overlap-timeline">
      <div className="overlap-legend" aria-hidden="true">
        <span>
          <i className="overlap-dot is-work" /> Work / operational role
        </span>
        <span>
          <i className="overlap-dot is-education" /> Formal education
        </span>
        <span>
          <i className="overlap-dot is-throughline" /> Continuous learning
        </span>
      </div>

      <div className="overlap-chart-scroll">
        <div className="overlap-chart">
          <div className="overlap-axis-row">
            <div className="overlap-label-spacer" aria-hidden="true" />
            <div className="overlap-axis">
              {ticks.map((year) => (
                <span key={year} style={{ left: `${pct(year)}%` }}>
                  {year}
                </span>
              ))}
            </div>
          </div>

          {overlapTimeline.map((item, index) => {
            const left = pct(item.start);
            const width = Math.max(pct(item.end) - pct(item.start), 0.6);
            const labelOnLeft = left > 78;
            const isThroughline = item.type === "throughline";

            return (
              <div
                className={`overlap-row ${isThroughline ? "overlap-row-summary" : ""}`}
                key={`${item.org}-${item.role}`}
              >
                <div className="overlap-row-label">
                  <p>{item.org}</p>
                  <span>{item.role}</span>
                </div>
                <div className="overlap-track">
                  {ticks.map((year) => (
                    <i key={year} className="overlap-gridline" style={{ left: `${pct(year)}%` }} />
                  ))}
                  {!isThroughline &&
                    overlapBands.map((band) => (
                      <div
                        key={band.label}
                        className="overlap-band"
                        style={{
                          left: `${pct(band.start)}%`,
                          width: `${pct(band.end) - pct(band.start)}%`,
                        }}
                      >
                        {index === 0 && <span className="overlap-band-label">{band.label}</span>}
                      </div>
                    ))}
                  <div
                    className={`overlap-bar is-${item.type} ${labelOnLeft ? "label-left" : ""}`}
                    style={{ left: `${left}%`, width: `${width}%` }}
                    title={`${item.org} — ${item.role} (${item.dateLabel})`}
                  >
                    {isThroughline ? (
                      <span className="overlap-throughline-label">{item.dateLabel}</span>
                    ) : (
                      <span className="overlap-date">{item.dateLabel}</span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="overlap-catch">
        <p>
          Every entry above was preparation, not detour—each one built the same habit: walk into the
          room before the credential says you belong there, earn it anyway, then move toward the
          harder problem.
        </p>
        <blockquote>
          This timeline was never the whole story. It was the runway. The next step is the most
          meaningful one yet, and I&apos;m ready for it.
        </blockquote>
      </div>
    </div>
  );
}
