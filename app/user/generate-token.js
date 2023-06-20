import jwt from 'jsonwebtoken'

export const generateToken = (userId, email, student_id) =>
  jwt.sign(
    {
      userId,
      email,
      student_id
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '7d'
    }
  )
