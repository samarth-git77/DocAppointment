export const generateToken = (user, message, statusCode, res) => {
  const token = user.generateJsonWebToken();
  // Determine the cookie name based on the user's role
  const cookieName = user.role === 'Admin' ? 'adminToken' : 'patientToken';

  res
    .cookie(cookieName, token, {httpOnly: true})
    .status(statusCode)
    .json({
      success: true,
      message,
      user,
      token,
    });
};

