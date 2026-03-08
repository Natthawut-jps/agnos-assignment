import PatientForm from "../../components/PatientForm"

export default function Page(){
  return(
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">
        Patient Form
      </h1>

      <PatientForm/>
    </div>
  )
}