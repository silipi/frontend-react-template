import Form from "@/components/common/Form";
import PasswordField from "@/components/common/PasswordField";
import TextField from "@/components/common/TextField";
import { Link as RouterLink } from "react-router-dom";
import { Button, Link } from "@chakra-ui/react";
import { registerSchema } from "./register.schema";
import { useMutation } from "react-query";
import API from "@/services/API";
import useNotify from "@/hooks/useNotify";

const Register = () => {
  const { notifyError, notifySucess } = useNotify();
  const { isLoading, mutate } = useMutation(
    (values) => API.post("/auth/register", values),
    {
      onSuccess: () => notifySucess("Registered successfully!"),
      onError: (error: any) => {
        notifyError(`Error registering! ${error.response.data.message}.`);
      },
    }
  );

  return (
    <section className="public-form">
      <h1>Welcome 🥗</h1>
      <h2>🚀 Revolutionize and join the movement!</h2>

      <Form
        onSubmit={(values) => mutate(values)}
        schema={registerSchema}
        width={{
          base: "100%",
          md: "80%",
          lg: "60%",
        }}
      >
        <TextField name="name" label="Full name" />
        <TextField name="email" label="Email" type="email" />
        <TextField name="username" label="Username" />
        <PasswordField name="password" label="Password" />
        <Button type="submit" isLoading={isLoading} width="100%" mt="6">
          Register
        </Button>
      </Form>

      <Link
        as={RouterLink}
        to="/login"
        mt="4"
        sx={{ display: "block", textAlign: "center" }}
      >
        Already have an account? Login
      </Link>
    </section>
  );
};

export default Register;
