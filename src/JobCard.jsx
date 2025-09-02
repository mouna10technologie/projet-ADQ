function JobCard({ job }) {
  return (
    <div className="job-card">
      <h3>{job.title}</h3>
      <h4>{job.company}</h4>
      <p>{job.description}</p>
      <button>Postuler</button>
    </div>
  );
}

export default JobCard;
