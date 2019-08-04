"use strict";
const functions = require('firebase-functions');
const http = require('requestify');
const cors = require('cors')({ origin: true });
exports.darkSkyProxy = functions.https.onRequest((req, res) => {
    cors(req, res, () => {
        const lat = req.query.lat;
        const lng = req.query.lng;
        const url = formatUrl(lat, lng);
        return http.get(url).then(response => {
            return res.status(200).send(response.getBody());
        })
            .catch(err => {
            return res.status(400).send(err);
        });
    });
});
function formatUrl(lat, lng) {
    const apiKey = functions.config().darksky.key;
    return `https://api.darksky.net/forecast/${apiKey}/${lat},${lng}`;
}
//# sourceMappingURL=index.js.map