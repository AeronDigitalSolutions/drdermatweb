import React, { FormEvent } from "react";
import styles from "@/styles/components/forms/ModularForm.module.css";

type InputDefinition = {
  name: string;
  type: string;
  required?: boolean;
  placeholder?: string;
  label?: string;
  maxLength?: number;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  options?: { id: number; name: string; description: string }[];
  multipleselect?: boolean;
};

type FormDefinition = {
  formHead: string;
  inputs?: InputDefinition[]; // Ensuring it's an array
  submitButtonText: string;

  submitHandler: (event: FormEvent<HTMLFormElement>) => void;
};

function ModularForm(props: FormDefinition) {
  return (
    <div className={styles.container}>
      <form onSubmit={props.submitHandler} className={styles.form}>
        <img src="/logo.png" className={styles.logo}></img>
        <div className={styles.imageContainer}>
          <img
            src="/form.png"
            alt="Form Illustration"
            className={styles.image}
          />
        </div>
        <h1 className={styles.head}>{props.formHead}</h1>
        {props.inputs?.map(
          (
            input,
            index // <-- Properly map the array
          ) => (
            <div className={styles.inputDiv} key={index}>
              <label htmlFor={input.name} className={styles.label}>
                {input.label}
              </label>
              {input.type !== "select" && (
                <input
                  type={input.type}
                  name={input.name}
                  required={input.required}
                  placeholder={input.placeholder}
                  className={styles.input}
                  maxLength={input.maxLength || 300}
                  onChange={input.onChange || (() => {})} // Default empty function
                />
              )}
              {input.type === "select" && (
                <select
                  name={input.name}
                  required={input.required}
                  className={styles.input}
                  onChange={input.onChange || (() => {})}
                  multiple={input.multipleselect}
                >
                  {input.options?.map((option) => (
                    <option
                      className={styles.option}
                      key={option.id}
                      value={option.id}
                    >
                      {option.name}
                    </option>
                  ))}
                </select>
              )}
            </div>
          )
        )}
        <div className={styles.buttonContainer}>
          <button type="submit" className={styles.button}>
            {props.submitButtonText}
          </button>
        </div>

        <p className={styles.terms}>
          By proceeding, you consent to share your information with Dr. Dermat
          and agree to Dr. Dermat's <u>Privacy Policy</u> and{" "}
          <u>Terms of Service</u>.
        </p>
      </form>
    </div>
  );
}

export default ModularForm;
