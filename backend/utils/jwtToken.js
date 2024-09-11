export const generateToken = (user, message, statusCode, res) => {
  const token = user.generateJsonWebToken();
  
  // Determine the cookie name based on the user's role
  const cookieName = user.role === 'Admin' ? 'adminToken' : 'patientToken';

  // Set cookie options
  const cookieOptions = {
    httpOnly: true,  // Prevents client-side JavaScript from accessing the cookie
    secure: process.env.NODE_ENV === 'production',  // Only set 'secure' in production (HTTPS)
    sameSite: 'None',  // Required for cross-origin cookies
    maxAge: 24 * 60 * 60 * 1000  // Cookie expires in 1 day
  };

  res
    .cookie(cookieName, token, cookieOptions)
    .status(statusCode)
    .json({
      success: true,
      message,
      user,
      token,
    });
};
