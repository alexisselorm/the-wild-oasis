import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useSignup } from "../../hooks/useSignup";

// Email regex: /\S+@\S+\.\S+/

function SignupForm() {
  const {signup, isLoading} = useSignup();
  const onSubmit = (data) => {
    signup(data);
  }

  const {register, handleSubmit, formState: { errors }, getValues} = useForm();
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>

      <FormRow label="Full name" error={errors.fullName?.message}>
        <Input {...register("fullName",{required: "This field is required"})}  type="text" id="fullName" />
      </FormRow>

      <FormRow label="Email address" error={errors.email?.message}>
        <Input {...register("email",{required: "This field is required", pattern: /\S+@\S+\.\S+/})} type="email" id="email" />
      </FormRow>

      <FormRow label="Password (min 8 characters)" error={errors.password?.message}>
        <Input {...register("password",{required: "This field is required", minLength: { value: 8, message: "Password must be at least 8 characters" }})} type="password" id="password" />
      </FormRow>

      <FormRow label="Repeat password" error={errors.passwordConfirm?.message}>
        <Input {...register("passwordConfirm",{required: "This field is required", validate: (value) => getValues("password") === value || "Passwords do not match"})} type="password" id="passwordConfirm" />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button disabled={isLoading} variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isLoading}>Create new user</Button>
      </FormRow>
    </Form>
  );
}

export default SignupForm;
