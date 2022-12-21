const Statistics = ({ title, stats }) => {
  return (
    <>
      <section class="statistics">
        <h2>{title}</h2>
        <ul class="stat-list">
          {stats.map((st, i) => {
            return (
              <li key={st[i].id}>
                <span>{st[i].label}</span>
                <span>{st[i].percentage}</span>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default Statistics;
