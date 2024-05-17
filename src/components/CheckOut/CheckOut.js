import React from "react";
import { useForm } from "react-hook-form";
import "./CheckOut.css";

const CheckOut = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="text-center">
      <h1>Submit your information</h1>
      <br />
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Your name"
          {...register("firstName", { required: true, maxLength: 20 })}
        />
        <br />
        <input
          className="my-2"
          placeholder="Your location"
          {...register("lastName", { pattern: /^[A-Za-z]+$/i })}
        />
        <br />
        <input
          placeholder="Your phone number"
          type="number"
          {...register("age", { min: 18, max: 99 })}
        />
        <br />
        <input className="mt-2 mb-4" type="submit" />
      </form>
    </div>
  );
};

export default CheckOut;
