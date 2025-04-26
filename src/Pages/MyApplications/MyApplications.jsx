import { useEffect, useState } from "react";
import useAuth from "../../Context/useAuth";
import Swal from "sweetalert2";

const MyApplications = () => {
  const [myApplies, setMyApplies] = useState([]);
  console.log(myApplies);
  const { User } = useAuth();

  useEffect(() => {
    fetch(`http://localhost:5000/jobApplications?email=${User?.email}`)
      .then((res) => res.json())
      .then((data) => setMyApplies(data));
  }, [User?.email]);

  const handleRemoveApply = (id, company) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "red",
      cancelButtonColor: "blue",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/jobApplications/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: `Your application in '${company}' is deleted`,
                icon: "success",
              });
            }
            const remaining = myApplies.filter((myApply) => myApply._id !== id);
            setMyApplies(remaining);
          });
      }
    });
  };

  return (
    <div className="max-w-7xl mx-auto font-inter min-h-screen">
      <h1 className="text-center text-2xl md:text-3xl font-merriweather font-bold mt-1.5">
        My Total Applications : {myApplies.length}
      </h1>
      <div className="overflow-x-auto mt-4">
        <table className="table">
          <thead>
            <tr>
              <th>Company</th>
              <th>Applicant_Name</th>
              <th>Applicant_Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {myApplies.map((myApply) => (
              <tr key={myApply._id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={myApply?.company_logo} alt="Company Logo" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{myApply?.company}</div>
                      <div className="text-sm opacity-50">
                        {myApply?.location}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="text-[#05264e] font-semibold">
                  {myApply?.applicant_name}
                </td>
                <td className="text-[#05264e] font-semibold">
                  {myApply?.applicant_email}
                </td>
                <th>
                  <button
                    onClick={() =>
                      handleRemoveApply(myApply?._id, myApply?.company)
                    }
                    className="btn bg-red-500 text-white hover:bg-red-600 text-nowrap"
                  >
                    Remove Apply
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyApplications;
