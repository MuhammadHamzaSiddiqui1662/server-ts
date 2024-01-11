export const handleErrors = (err: any) => {
  console.log(err.message, err.code);
  let errors: any = {};

  // duplicate error
  if (err.code === 11000) {
    return {
      duplicate: "duplicate not allowed",
    };
  }

  // validation error
  if (err.message.includes("validation failed")) {
    (Object.values(err.errors) as any[]).forEach(
      ({ properties }: { properties: any }) => {
        errors[properties.path] = properties.message;
      }
    );
  }

  return errors;
};
