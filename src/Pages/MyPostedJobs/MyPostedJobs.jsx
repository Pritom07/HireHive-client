import { useEffect } from "react";
import { useState } from "react";
import useAuth from "../../Context/useAuth";
import { useNavigate } from "react-router-dom";

const MyPostedJobs = () => {
  const { User } = useAuth();
  const [myposts, setMyPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://hirehive-server.vercel.app/jobs?email=${User?.email}`)
      .then((res) => res.json())
      .then((data) => setMyPosts(data));
  }, [User?.email]);

  const viewApplicants = (jobID) => {
    navigate(`/my-jobs/applicants/${jobID}`);
  };

  return (
    <div className="max-w-7xl mx-auto font-inter min-h-screen">
      <h1 className="text-center text-2xl md:text-3xl font-bold font-merriweather mt-1.5">
        Myposted jobs : {myposts.length}
      </h1>
      <div className="overflow-x-auto mt-4">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th></th>
              <th>Job ID</th>
              <th>Job Title</th>
              <th>Deadline</th>
              <th>Application Count</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {myposts.map((post, idx) => (
              <tr key={post._id}>
                <th>{idx + 1}</th>
                <td>{post._id}</td>
                <td>{post.title}</td>
                <td>{post.applicationDeadline}</td>
                <td>{post?.applicantCount}</td>
                <td></td>
                <td
                  onClick={() => viewApplicants(post._id)}
                  className="text-blue-600 underline hover:text-[#05264e] cursor-pointer"
                >
                  View Applicants
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPostedJobs;
