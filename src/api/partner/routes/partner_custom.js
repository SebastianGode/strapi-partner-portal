module.exports = {
    routes: [
        {
            method: 'GET',
            path: '/partners/:partner_id',
            handler: 'partner.findOne',
            config: {
                auth: false,
            }
        }
    ]
}