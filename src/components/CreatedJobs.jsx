import { getMyJobs } from "@/api/apijob";
import useFetch from "@/hooks/useFetch";
import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import { BarLoader } from "react-spinners";
import JobCard from "./JobCard";

function CreatedJobs() {
  const { user } = useUser();

  const {
    loading: loadingCreatedJobs,
    data: createdJobs,
    fn: fnCreatedJobs,
  } = useFetch(getMyJobs, { recruiter_id: user.id });

  useEffect(() => {
    fnCreatedJobs();
  }, []);

  {
    loadingCreatedJobs && (
      <BarLoader className="mt-4" width={"100%"} color="#36d7b7" />
    );
  }

  return (
    <div>
      <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {createdJobs?.length ? (
          createdJobs.map((job) => {
            return (
              <JobCard
                key={job.id}
                job={job}
                onJobSaved={fnCreatedJobs}
                isMyJob="true"
              />
            );
          })
        ) : (
          <div> No Jobs Found 😢</div>
        )}
      </div>
    </div>
  );
}

export default CreatedJobs;
