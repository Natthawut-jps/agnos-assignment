"use client"

import { useEffect, useState } from "react"
import { useSocket } from "../hooks/useSocket"
import { socket } from "@/lib/socket"

export default function StaffDashboard() {

  const [patient, setPatient] = useState<any>({})

  useSocket("patient:update", (data) => {
    setPatient((prev: any) => ({
      ...prev,
      [data.field]: data.value
    }))

  })

  useEffect(() => {

    socket.emit("patient:get")

    socket.on("patient:data", (data) => {
      setPatient(data)
    })

    return () => {
      socket.off("patient:data")
    }
  }, [])

  return (
    <div className="p-6">

      <h2 className="text-xl font-bold mb-4">
        Patient Live Data
      </h2>

      <div className="space-y-2">

        <p>First Name: {patient.firstName}</p>
        <p>Middle Name: {patient.middleName}</p>
        <p>Last Name: {patient.lastName}</p>
        <p>Date of Birth: {patient.dateOfBirth}</p>
        <p>Gender: {patient.gender}</p>
        <p>Phone: {patient.phone}</p>
        <p>Email: {patient.email}</p>
        <p>Address: {patient.address}</p>
        <p>Preferred Language: {patient.preferredLanguage}</p>
        <p>Nationality: {patient.nationality}</p>
        <p>Emergency Contact Name: {patient.emergencyContactName}</p>
        <p>Religion: {patient.religion}</p>

      </div>

    </div>
  )
}