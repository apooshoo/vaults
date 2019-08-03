const sha256 = require('js-sha256');
const SALT = "bonk";
const loggedInTrue = sha256('true' + SALT);

module.exports = (db) => {

    let showSettingsCC = (req, res) => {
        console.log("entering showSettingsCC");
        console.log("req.params: ", req.params);
        db.settings.show(req.params, (err, result) => {
            console.log("back in showSettingsCC");
            if(result){
                let x = result.rows[0];
                let data = {
                    user_id: x.user_id,
                    pay_day: x.pay_day.toISOString().substring(0, 10),
                    next_pay_day: x.next_pay_day.toISOString().substring(0, 10),
                    pay_amount: x.pay_amount,
                    save_amount: x.save_amount,
                    cookies: req.cookies
                };
                console.log("DATA: ", data);
                res.render('settings', data);
            } else {
                console.log('no settings yet!')
                let data = {
                    cookies: req.cookies
                };
                res.render('settings', data);
            }
        });
    };

    return {
        showSettings: showSettingsCC
    };

};