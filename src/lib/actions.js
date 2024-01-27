"use server";

export const addMessage = async (prevState, fromData) => {
  const { name, email, subject, message } = Object.fromEntries(fromData);

  if (!name) {
    return { error: "Please Enter Name" };
  }
  if (!email) {
    return { error: "Please Enter Email" };
  }
  if (!subject) {
    return { error: "Please Enter Subject" };
  }
  if (!message) {
    return { error: "Please Enter Message" };
  }

  try {
    const messages = {
      name,
      email,
      subject,
      message,
    };
    console.log(messages);
    return { success: true };
  } catch (error) {
    console.error(error);
    return { error: "Something Went Wrong" };
  }
};
