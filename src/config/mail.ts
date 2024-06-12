interface IMailConfig {
  driver: 'ses';
  defaults: {
    from: {
      email: string,
      name: string,
    },
  },
}

export default {
  driver: process.env.MAIL_DRIVER || 'ses',
  defaults: {
    from: {
      email: process.env.DEFAULT_EMAIL_ADDRESS || 'admin@gmail.com',
      name: process.env.DEFAULT_MAILER_NAME || 'Administrador',
    },
  },
} as IMailConfig;
