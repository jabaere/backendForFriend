module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '09400c22da42c1df6913dceaeb125ccd'),
  },
});
