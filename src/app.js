require('dotenv').config();
const { routes } = require('./api/api');

const port = process.env.PORT || 3000;

routes.listen(port, () => {
    console.log(`server listening on port ${port} `);
});
