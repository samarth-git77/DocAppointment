res
  .status(statusCode)
  .cookie(cookieName, token, {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',  // Only send secure cookies in production
    sameSite: 'strict', // Adjust this based on your cross-site needs (e.g., 'lax', 'strict', or 'none')
  })
  .json({
    success: true,
    message,
    user,
    token,
  });
