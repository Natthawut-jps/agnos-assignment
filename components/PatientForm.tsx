"use client"

import { useForm } from "react-hook-form"
import { socket } from "../lib/socket"
import { useEffect } from "react"

export default function PatientForm() {

  const { register, getValues } = useForm()

  const handleChange = (field: string, value: string) => {
    socket.emit("patient:update", { field, value })
  }
  useEffect(() => {

    socket.on("patient:get", () => {
      socket.emit("patient:data", {
        firstName: getValues("firstName"), lastName: getValues("lastName"),
        phone: getValues("phone"), middleName: getValues("middleName"), dateOfBirth: getValues("dateOfBirth"),
        gender: getValues("gender"), email: getValues("email"), address: getValues("address"),
        preferredLanguage: getValues("preferredLanguage"), nationality: getValues("nationality"),
        emergencyContactName: getValues("emergencyContactName"), religion: getValues("religion")
      })
    })

    return () => {
      socket.off("patient:get")
    }
  }, [])
  return (
    <form className="space-y-4">

      <input
        {...register("firstName")}
        placeholder="First Name"
        className="border p-2 w-full"
        onChange={(e) => handleChange("firstName", e.target.value)}
        required
      />
      <input
        {...register("middleName")}
        placeholder="Middle Name"
        className="border p-2 w-full"
        onChange={(e) => handleChange("middleName", e.target.value)}
      />
      <input
        {...register("lastName")}
        placeholder="Last Name"
        className="border p-2 w-full"
        onChange={(e) => handleChange("lastName", e.target.value)}
        required
      />
      <input
        {...register("dateOfBirth")}
        placeholder="Date of Birth"
        className="border p-2 w-full"
        onChange={(e) => handleChange("dateOfBirth", e.target.value)}
        required
      />
      <input
        {...register("gender")}
        placeholder="Gender"
        className="border p-2 w-full"
        onChange={(e) => handleChange("gender", e.target.value)}
        required
      />
      <input
        {...register("phone", { pattern: /^\d{10}$/ })}
        placeholder="Phone"
        className="border p-2 w-full"
        onChange={(e) => handleChange("phone", e.target.value)}
        required
      />
      <input
        {...register("email", { pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })}
        placeholder="Email"
        className="border p-2 w-full"
        onChange={(e) => handleChange("email", e.target.value)}
        required
      />
      <input
        {...register("address")}
        placeholder="Address"
        className="border p-2 w-full"
        onChange={(e) => handleChange("address", e.target.value)}
        required
      />
      <input
        {...register("preferredLanguage")}
        placeholder="Preferred Language"
        className="border p-2 w-full"
        onChange={(e) => handleChange("preferredLanguage", e.target.value)}
        required
      />
      <input
        {...register("nationality")}
        placeholder="Nationality"
        className="border p-2 w-full"
        onChange={(e) => handleChange("nationality", e.target.value)}
        required
      />
      <input
        {...register("emergencyContactName")}
        placeholder="Emergency Contact Name"
        className="border p-2 w-full"
        onChange={(e) => handleChange("emergencyContactName", e.target.value)}
      />
      <input
        {...register("religion")}
        placeholder="Religion"
        className="border p-2 w-full"
        onChange={(e) => handleChange("religion", e.target.value)}
      />
    </form>
  )
}