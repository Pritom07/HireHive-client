import Swal from "sweetalert2";

const AddJob = () => {
  const handleAddJob = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const initialEntries = Object.fromEntries(formData.entries());
    initialEntries.requirements = initialEntries.requirements.split(",");
    initialEntries.responsibilities =
      initialEntries.responsibilities.split(",");
    const { min, max, currency, ...formEntriesData } = initialEntries;
    formEntriesData.salaryRange = { min, max, currency };

    fetch("https://hirehive-server.vercel.app/jobs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formEntriesData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: `Job Post "${formEntriesData.title}" is posted successfully!`,
            icon: "success",
            confirmButtonColor: "blue",
            confirmButtonText: "Thanks For Posting",
            draggable: true,
          });
        }
        e.target.reset();
      });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <form onSubmit={handleAddJob} className="font-inter">
        <fieldset className="fieldset bg-base-200 border-blue-600 rounded-box w-full border p-5">
          <legend className="fieldset-legend text-4xl font-merriweather text-[#05264e]">
            Posting A Job
          </legend>

          <div className="flex justify-between gap-4">
            <div className="w-[50%]">
              <label className="label font-medium text-[16px]">
                Company name
              </label>
              <input
                type="text"
                className="input w-[100%] focus:outline-none focus:border-[#05264e]"
                placeholder="Company Name"
                name="company"
                required
              />
            </div>
            <div className="w-[50%]">
              <label className="label font-medium text-[16px]">
                Company Logo
              </label>
              <input
                type="url"
                className="input w-[100%] focus:outline-none focus:border-[#05264e]"
                placeholder="Company logo URL"
                name="company_logo"
                required
              />
            </div>
          </div>

          <div className="flex justify-between gap-4 mt-1">
            <div className="w-[50%]">
              <label className="label font-medium text-[16px]">Job Title</label>
              <input
                type="text"
                className="input w-[100%] focus:outline-none focus:border-[#05264e]"
                placeholder="Job Title"
                name="title"
                required
              />
            </div>
            <div className="w-[50%]">
              <label className="label font-medium text-[16px]">
                Job Location
              </label>
              <input
                type="text"
                className="input w-[100%] focus:outline-none focus:border-[#05264e]"
                placeholder="Job Location"
                name="location"
                required
              />
            </div>
          </div>

          <div className="flex justify-between gap-4 mt-1">
            <div className="w-[50%]">
              <legend className="fieldset-legend font-medium text-[16px] text-slate-500">
                Job Type
              </legend>
              <select
                name="jobType"
                defaultValue="Select Job Type"
                className="select w-[100%] focus:outline-none focus:border-[#05264e]"
                required
              >
                <option disabled={true}>Select Job Type</option>
                <option>Hybrid</option>
                <option>Remote</option>
                <option>PartTime</option>
                <option>Contractual</option>
                <option>Intern</option>
                <option>Full Time</option>
              </select>
            </div>
            <div className="w-[50%]">
              <legend className="fieldset-legend font-medium text-[16px] text-slate-500">
                Category
              </legend>
              <select
                name="category"
                defaultValue="Select Job category"
                className="select w-[100%] focus:outline-none focus:border-[#05264e]"
                required
              >
                <option disabled={true}>Select Job category</option>
                <option>Engineering</option>
                <option>Marketing</option>
                <option>Finance</option>
                <option>Teaching</option>
                <option>Management</option>
                <option>Data Science</option>
                <option>Development</option>
                <option>Design</option>
                <option>Networking</option>
              </select>
            </div>
          </div>

          <div className="flex justify-between items-center gap-4 mt-1">
            <div className="w-[50%]">
              <label className="label font-medium text-[16px]">
                Application Deadline
              </label>
              <input
                type="date"
                className="input w-[100%] focus:outline-none focus:border-[#05264e]"
                placeholder="Application Deadline"
                name="applicationDeadline"
                required
              />
            </div>
            <div className="w-[50%]">
              <label className="label font-medium text-[16px]">Status</label>
              <input
                type="text"
                className="input w-[100%] focus:outline-none focus:border-[#05264e]"
                name="status"
                defaultValue="Active"
              />
            </div>
          </div>
          <div className="mt-1">
            <label className="font-medium text-[16px] text-slate-500">
              Salary Range
            </label>
            <div className="flex gap-4">
              <input
                type="text"
                className="input focus:outline-none focus:border-[#05264e]"
                placeholder="Minimum Salary"
                name="min"
                required
              />
              <input
                type="text"
                className="input focus:outline-none focus:border-[#05264e]"
                placeholder="Maximum Salary"
                name="max"
                required
              />
              <select
                name="currency"
                defaultValue="Select Currency"
                className="select focus:outline-none focus:border-[#05264e]"
              >
                <option disabled={true}>Select Currency</option>
                <option>bdt</option>
                <option>dolor</option>
                <option>rupee</option>
              </select>
            </div>
          </div>
          <div className="mt-1">
            <label className="label font-medium text-[16px]">
              Requirements
            </label>
            <input
              type="text"
              className="input w-[100%] focus:outline-none focus:border-[#05264e]"
              name="requirements"
              placeholder="e.g-Javascript,Node.JS,ReactJS,MongoDB etc."
              required
            />
          </div>
          <div className="mt-1">
            <label className="label font-medium text-[16px]">
              Responsibilities
            </label>
            <input
              type="text"
              className="input w-[100%] focus:outline-none focus:border-[#05264e]"
              name="responsibilities"
              placeholder="e.g-Write blog posts,Create social media content,Support classroom management etc."
              required
            />
          </div>
          <div className="flex justify-between items-center gap-4 mt-1">
            <div className="w-[50%]">
              <label className="label font-medium text-[16px]">HR_Name</label>
              <input
                type="text"
                className="input w-[100%] focus:outline-none focus:border-[#05264e]"
                name="hr_name"
                placeholder="HR_Name"
                required
              />
            </div>
            <div className="w-[50%]">
              <label className="label font-medium text-[16px]">HR_Email</label>
              <input
                type="email"
                className="input w-[100%] focus:outline-none focus:border-[#05264e]"
                name="hr_email"
                placeholder="Use that Email that you used for Login or Register"
                required
              />
            </div>
          </div>
          <div className="mt-1">
            <label className="label font-medium text-[16px]">Description</label>
            <input
              type="text"
              className="input w-[100%] focus:outline-none focus:border-[#05264e]"
              name="description"
              placeholder="Write a simple Description"
              required
            />
          </div>
        </fieldset>
        <button className="w-full bg-blue-600 text-white hover:bg-[#05264e] p-2 mt-4 rounded-[5px] cursor-pointer font-semibold">
          Post Job
        </button>
      </form>
    </div>
  );
};

export default AddJob;
