const Statistics = ({ title, stats }) => {
  return (
    <>
      <section class="statistics">
        <h2>{title}</h2>
        <ul class="stat-list">
          {stats.map((st) => {
            return (
              <li className="item" key={st.id}>
                <span className="label">{st.label}: </span>
                <span className="percentage">{st.percentage}</span>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default Statistics;
