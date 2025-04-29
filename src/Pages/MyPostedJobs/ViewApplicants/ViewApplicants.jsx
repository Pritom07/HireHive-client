import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ViewApplicants = () => {
  const totApplicants = useLoaderData();

  const handleStatus = (e, id) => {
    const status = e.target.value;
    const applicantStatus = { status };

    fetch(`https://hirehive-server.vercel.app/jobApplications/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(applicantStatus),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.upsertedCount > 0 || data.modifiedCount > 0) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Status is saved",
            showConfirmButton: false,
            timer: 1200,
          });
        }
      });
  };

  return (
    <div className="max-w-7xl mx-auto font-inter min-h-screen">
      <h1 className="text-2xl md:text-3xl font-merriweather text-center font-semibold mt-1.5">
        Total Applicants : {totApplicants.length}
      </h1>
      <div className="overflow-x-auto mt-4">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>Index</th>
              <th>Job Title</th>
              <th>Name</th>
              <th>Email</th>
              <th>Update Status</th>
            </tr>
          </thead>
          <tbody>
            {totApplicants.map((applicant, idx) => (
              <tr key={applicant._id}>
                <th>{idx + 1}</th>
                <td className="text-[#05264e] font-semibold">
                  {applicant.title}
                </td>
                <td>{applicant.applicant_name}</td>
                <td className="text-[#05264e] font-semibold">
                  {applicant.applicant_email}
                </td>
                <td>
                  <select
                    onChange={(e) => handleStatus(e, applicant._id)}
                    defaultValue={applicant.status || "Select Status"}
                    className="select focus:outline-none focus:border-[#05264e]"
                  >
                    <option disabled={true}>Select Status</option>
                    <option>Hired</option>
                    <option>Selected for VIVA</option>
                    <option>Pending</option>
                    <option>Rejected</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewApplicants;
